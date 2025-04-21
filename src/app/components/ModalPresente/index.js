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
} from "@mui/material";
import { getDatabase, ref, update } from "firebase/database";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

emailjs.init(process.env.REACT_APP_API_PUBLIC_KEY_EMAILJS_SECONDARY);

export default function ModalPresente({ open, onClose, presente }) {
  const [step, setStep] = useState(1);
  const [nomeComprador, setNomeComprador] = useState("");
  const [metodoPagamento, setMetodoPagamento] = useState("");
  const [emailComprador, setEmailComprador] = useState("");

  const [nomeTocado, setNomeTocado] = useState(false);
  const [emailTocado, setEmailTocado] = useState(false);

  const emailValido = /\S+@\S+\.\S+/.test(emailComprador);

  const ehPixPago = presente?.pix === true;

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

    sendEmail();

    if (ehPixPago) {
      toast.success("Este presente já foi pago via PIX. Obrigado!");
      resetarCampos();
      onClose(true);
      return;
    }

    try {
      await update(ref(db, `presentes/${idPresente}`), {
        pago: true,
        nomeComprador: nomeComprador.trim(),
      });

      toast.success("Presente confirmado com sucesso!");
      onClose(true);
    } catch (error) {
      toast.error("Erro ao confirmar presente.");
      console.error("Erro ao atualizar presente:", error);
    } finally {
      resetarCampos();
    }
  };

  const avancarParaPagamento = () => {
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
    }

    finalizarPresente();
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
      .send("service_w26ipg2", "template_zm9cuur", templateParams)
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
                Valor: R$ {presente.valor}
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
            >
              <ToggleButton value="pix">Pix</ToggleButton>
              {!ehPixPago && <ToggleButton value="outro">Outro</ToggleButton>}
            </ToggleButtonGroup>
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
          >
            {ehPixPago ? "Finalizar" : "Continuar"}
          </Button>
        )}
        {step === 2 && (
          <Button
            onClick={avancarParaPagamento}
            variant="contained"
            disabled={!metodoPagamento}
          >
            Finalizar
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
