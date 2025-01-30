import React from "react";
import "./styles.scss";
import { FormControl, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function ConfirmaPresenca() {
  emailjs.init(process.env.REACT_APP_API_PUBLIC_KEY_EMAILJS);
  const handleConfirmarPresenca = async () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const acompanhante = document.getElementById("acompanhante").value;

    // Envia e-mail para você (organizador)
    emailjs
      .send(
        "service_ewng87q", // ID do serviço no EmailJS
        "template_bmz2vk7", // ID do template para você
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
          to_name: nome, // Nome do participante
          from_name: "Organizador", // Seu nome ou nome do evento
          from_email: email, // E-mail do participante
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
    if (telefone) {
      const mensagem = `Olá, ${nome}! Sua presença foi confirmada com sucesso.`;
      const url = `https://wa.me/${telefone}?text=${encodeURIComponent(
        mensagem
      )}`;
      window.open(url, "_blank");
    }

    // Envia os dados para o Google Sheets
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwOZW_zkiC2BAEpsxwFIqOBoJOJmiOTA2BpgXBNaG4T-pJgGDF3oPuZG8MvjKcZB5Ve/exec", {
      method: "POST",
      body: JSON.stringify({
        nome,
        email,
        telefone,
        acompanhante,
        token: "A1b2C3d4E5!@#", // Adicione o token aqui
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Confirmação enviada com sucesso!");
    } else {
      alert("Erro ao enviar confirmação. Tente novamente.");
    }
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
              />
            </div>
            <div className="col-12">
              <TextField
                id="email"
                label="E-mail"
                type="text"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
            <div className="col-12">
              <TextField
                id="telefone"
                label="Telefone (WhatsApp)"
                type="text"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
            <div className="col-12">
              <TextField
                id="acompanhante"
                label="Nome do Acompanhante"
                type="text"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </div>
          </div>

          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-12">
              <Button variant="outlined" onClick={handleConfirmarPresenca}>Confirmar Presença</Button>
            </div>
          </div>
        </FormControl>
      </div>
    </div>
  );
}
