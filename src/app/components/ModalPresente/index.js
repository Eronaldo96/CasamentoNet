import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  CircularProgress
} from "@mui/material";
import { getDatabase, ref, update } from "firebase/database";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

emailjs.init(process.env.REACT_APP_PUBLIC_KEY_EMAILJS_SECONDARY);

export default function ModalPresente({ open, onClose, presente }) {
  const [step, setStep] = useState(1);
  const [nomeComprador, setNomeComprador] = useState("");
  const [metodoPagamento, setMetodoPagamento] = useState("");
  const [emailComprador, setEmailComprador] = useState("");
  const [nomeTocado, setNomeTocado] = useState(false);
  const [emailTocado, setEmailTocado] = useState(false);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [mercadoPagoLoaded, setMercadoPagoLoaded] = useState(false);

  const emailValido = /\S+@\S+\.\S+/.test(emailComprador);
  const ehPixPago = presente?.pix === true;

  useEffect(() => {
    if (open && !window.MercadoPago) {
      const script = document.createElement("script");
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.onload = () => {
        console.log("Mercado Pago SDK carregado");
        setMercadoPagoLoaded(true);
      };
      script.onerror = () => {
        console.error("Falha ao carregar Mercado Pago SDK");
        toast.error("Falha ao carregar sistema de pagamentos");
      };
      document.body.appendChild(script);
    } else if (window.MercadoPago) {
      setMercadoPagoLoaded(true);
    }
  }, [open]);

  useEffect(() => {
    if (ehPixPago) {
      setMetodoPagamento("pix");
    }
  }, [ehPixPago]);

  const handleClose = () => {
    onClose(false);
    resetarCampos();
  };

  const resetarCampos = () => {
    setStep(1);
    setNomeComprador("");
    setMetodoPagamento("");
    setEmailComprador("");
    setNomeTocado(false);
    setEmailTocado(false);
    setLoading(false);
  };

  const finalizarPresente = async () => {
    const db = getDatabase();
    const idPresente = presente?.id || presente?.key;

    if (!idPresente) {
      toast.error("ID do presente não encontrado.");
      return;
    }

    if (!emailComprador.trim() || !emailValido) {
      toast.warning("Por favor, preencha um e-mail válido.");
      return;
    }

    if (ehPixPago) {
      window.open(presente.url, "_blank");
      toast.success("Este presente já foi pago via PIX. Obrigado!");
      sendEmail(); // Envia e-mail após a confirmação do PIX
      resetarCampos();
      onClose(true);
      return;
    }

    try {
      await update(ref(db, `presentes/${idPresente}`), {
        pago: true,
        nomeComprador: nomeComprador.trim(),
        emailComprador: emailComprador.trim(),
        dataPagamento: new Date().toISOString()
      });

      toast.success("Presente confirmado com sucesso!");
      sendEmail(); // Envia e-mail após a confirmação do cartão de crédito
      onClose(true);
    } catch (error) {
      toast.error("Erro ao confirmar presente.");
      console.error("Erro ao atualizar presente:", error);
    } finally {
      resetarCampos();
    }
  };

  const criarPreferenciaPagamento = async () => {
    setLoading(true);
    try {
      const valor = parseFloat(presente.valor);
      if (isNaN(valor)) {
        throw new Error("Valor do presente inválido");
      }

      const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_MP_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
          items: [
            {
              title: presente.descricao,
              unit_price: valor,
              currency_id: "BRL",
              quantity: 1,
            }
          ],
          payer: {
            name: nomeComprador,
            email: emailComprador
          },
          payment_methods: {
            installments: 12,
            excluded_payment_types: ehPixPago ? [{ id: "credit_card" }] : []
          },
          back_urls: {
            success: `https://casamentonet.netlify.app/pagamento-sucesso?presenteId=${presente.id}&nome=${encodeURIComponent(nomeComprador)}&email=${encodeURIComponent(emailComprador)}`,
            failure: "https://casamentonet.netlify.app/ListaPresentes",
            pending: "https://casamentonet.netlify.app/ListaPresentes"
          },
          auto_return: "approved",
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error("Detalhes do erro:", data);
        throw new Error(data.message || "Erro ao criar preferência");
      }

      return data.id;
    } catch (error) {
      console.error("Erro detalhado:", error);
      toast.error(`Erro ao processar pagamento: ${error.message}`);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const iniciarPagamentoCartao = async () => {
    try {
      const preferenceId = await criarPreferenciaPagamento();
      
      if (window.MercadoPago) {
        const mp = new window.MercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY, {
          locale: "pt-BR"
        });

        // Abre diretamente o checkout sem precisar de botão
        mp.checkout({
          preference: {
            id: preferenceId
          },
          autoOpen: true // Esta opção faz abrir automaticamente
        });
      }
    } catch (error) {
      console.error("Erro no pagamento:", error);
      toast.error(`Falha ao iniciar pagamento: ${error.message}`);
    }
  };

  const avancarParaPagamento = async () => {
    setNomeTocado(true);
    setEmailTocado(true);

    if (!nomeComprador.trim() || !emailComprador.trim() || !emailValido) {
      toast.warning("Preencha todos os campos corretamente.");
      return;
    }

    if (!metodoPagamento) {
      toast.warning("Escolha um método de pagamento.");
      return;
    }

    if (metodoPagamento === "pix") {
      window.open(presente.url, "_blank");
      await finalizarPresente();
    }
     else if (metodoPagamento === "cartao") {
      await iniciarPagamentoCartao();
    }
  };

  const sendEmail = () => {
    if (!emailComprador.trim() || !emailValido) {
      console.warn("E-mail inválido. E-mail não enviado.");
      return;
    }

    const templateParams = {
      nomeComprador: nomeComprador,
      presenteDescricao: presente.descricao,
      presenteValor: presente.valor,
      to_email: emailComprador,
    };

    emailjs
      .send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams)
      .then(
        (response) => {
          console.log("E-mail enviado com sucesso:", response);
        },
        (error) => {
          console.error("Erro ao enviar e-mail:", error);
        }
      );
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Confirmar Presente</DialogTitle>
      <DialogContent>
        {presente && step === 1 && (
          <>
            <Box textAlign="center" mb={2}>
              <img
                src={presente.imagem}
                alt={presente.descricao}
                style={{ maxWidth: "200px", borderRadius: 8 }}
              />
              <Typography variant="h6" mt={2}>
                {presente.descricao}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Valor: {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(presente.valor)}
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Seu nome"
              variant="outlined"
              value={nomeComprador}
              onChange={(e) => setNomeComprador(e.target.value)}
              onBlur={() => setNomeTocado(true)}
              error={nomeTocado && !nomeComprador.trim()}
              helperText={
                nomeTocado && !nomeComprador.trim() ? "Campo obrigatório." : ""
              }
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="E-mail"
              variant="outlined"
              value={emailComprador}
              onChange={(e) => setEmailComprador(e.target.value)}
              onBlur={() => setEmailTocado(true)}
              error={
                emailTocado &&
                (!emailComprador.trim() || !emailValido)
              }
              helperText={
                emailTocado && !emailComprador.trim()
                  ? "Campo obrigatório."
                  : emailTocado && !emailValido
                  ? "E-mail inválido."
                  : ""
              }
              type="email"
              required
            />
          </>
        )}

        {step === 2 && (
          <>
            <Typography variant="subtitle1" mb={2}>
              Escolha o método de pagamento:
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={metodoPagamento}
              exclusive
              onChange={(e, newValue) => setMetodoPagamento(newValue)}
              fullWidth
              sx={{ mb: 2 }}
            >
              <ToggleButton value="pix">Pix</ToggleButton>
              {!ehPixPago && <ToggleButton value="cartao">Cartão de Crédito</ToggleButton>}
            </ToggleButtonGroup>
            
            {metodoPagamento === "cartao" && (
              <Typography variant="body2" color="text.secondary">
                Você será redirecionado para a página segura do Mercado Pago para finalizar o pagamento.
              </Typography>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        {step === 1 && (
          <Button
            onClick={() => {
              setNomeTocado(true);
              setEmailTocado(true);
              if (!nomeComprador.trim() || !emailComprador.trim() || !emailValido) {
                toast.warning("Preencha todos os campos corretamente.");
                return;
              }
              ehPixPago ? finalizarPresente() : setStep(2);
            }}
            variant="contained"
            disabled={loading}
          >
            {ehPixPago ? "Finalizar" : "Continuar"}
          </Button>
        )}
        {step === 2 && (
          <Button
            onClick={avancarParaPagamento}
            variant="contained"
            disabled={!metodoPagamento || loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? "Processando..." : "Finalizar"}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

