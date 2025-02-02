import React, { useState } from "react";
import { FormControl, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import { database } from "../../../firebase";
import { ref, get, set } from "firebase/database";

export default function ConfirmaPresenca() {
  emailjs.init(process.env.REACT_APP_API_PUBLIC_KEY_EMAILJS);

  const [formData, setFormData] = useState({
    nome: "",
    senha: "",
    email: "",
    telefone: "",
    acompanhante: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleConfirmarPresenca = async () => {
    const { nome, senha, email, telefone, acompanhante } = formData;

    // Verifica se a senha é válida
    const senhaRef = ref(database, "senhas/" + senha); // Ajusta a referência para o nó "senhas"
    const snapshot = await get(senhaRef);
    if (!snapshot.exists()) {
      setMessage("Senha inválida! Tente novamente.");
      return;
    }
  
    // Caso a senha seja válida, armazena os dados de presença
    const presencaRef = ref(database, "presencas/" + nome); // Ajusta a referência para o nó "presencas"
    await set(presencaRef, {
      nome: nome,
      email: email,
      telefone: telefone,
      acompanhante: acompanhante,
      dataConfirmacao: new Date().toISOString(), // Adiciona a data de confirmação
    });

    // Envia e-mail para o organizador
    emailjs
      .send(
        "service_ewng87q", // ID do serviço no EmailJS
        "template_bmz2vk7", // ID do template para o organizador
        {
          to_name: "Organizador",
          from_name: nome,
          from_email: email,
          telefone: telefone,
          acompanhante: acompanhante,
        }
      )
      .then(
        (response) => {
          console.log("E-mail para o organizador enviado!", response);
        },
        (error) => {
          console.error("Erro ao enviar e-mail para o organizador:", error);
        }
      );

    // Envia e-mail para o participante
    emailjs
      .send(
        "service_ewng87q", // ID do serviço no EmailJS
        "template_v8qj7rn", // ID do template para o participante
        {
          to_name: nome,
          from_name: "Organizador",
          from_email: email,
          message: "Sua presença foi confirmada com sucesso!",
        }
      )
      .then(
        (response) => {
          console.log("E-mail para o participante enviado!", response);
        },
        (error) => {
          console.error("Erro ao enviar e-mail para o participante:", error);
        }
      );

    // Envia mensagem por WhatsApp (se o telefone foi fornecido)
    // if (telefone) {
    //   const mensagem = `Olá, ${nome}! Sua presença foi confirmada com sucesso.`;
    //   const url = `https://wa.me/${telefone.replace(/\D/g, "")}?text=${encodeURIComponent(mensagem)}`; // Remove caracteres não numéricos
    //   window.open(url, "_blank");
    // }

    // Exibe mensagem de sucesso e limpa o formulário
    setMessage("Presença confirmada com sucesso!");
    setFormData({
      nome: "",
      senha: "",
      email: "",
      telefone: "",
      acompanhante: "",
    });
  };

  return (
    <div className="ConfirmaPresencaCustom">
      <div>
        <div className="TituloPagina">
          <h1>Confirme sua presença</h1>
        </div>
        <FormControl className="formConfirmaPresenca">
          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-12">
              <TextField
                id="nome"
                label="Nome Completo"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
                value={formData.nome}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <TextField
                id="senha"
                label="Senha"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
                value={formData.senha}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <TextField
                id="telefone"
                label="Telefone (WhatsApp)"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
                value={formData.telefone}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12">
              <TextField
                id="acompanhante"
                label="Nome do Acompanhante"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
                value={formData.acompanhante}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-12">
              <Button variant="outlined" onClick={handleConfirmarPresenca}>
                Confirmar Presença
              </Button>
            </div>
          </div>

          {message && <div className="message">{message}</div>}
        </FormControl>
      </div>
    </div>
  );
}
