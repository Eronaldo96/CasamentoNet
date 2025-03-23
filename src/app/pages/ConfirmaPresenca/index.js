import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { database } from "../../../firebase";
import { ref, get, set } from "firebase/database";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConfirmaPresenca() {
  emailjs.init(process.env.REACT_APP_API_PUBLIC_KEY_EMAILJS);

  const [formData, setFormData] = useState({
    nome: "",
    senha: "",
    email: "",
    telefone: "",
    acompanhanteSimNao: "",
    acompanhante: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      acompanhanteSimNao: e.target.value,
    }));
  };

  const handleConfirmarPresenca = async () => {
    const { nome, senha, email, telefone, acompanhanteSimNao, acompanhante } =
      formData;

    // Validação dos campos obrigatórios
    if (
      !nome ||
      !senha ||
      !email ||
      !telefone ||
      !acompanhanteSimNao ||
      (acompanhanteSimNao === "Sim" && !acompanhante)
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Verifica se a senha é válida
    const senhaRef = ref(database, "senhas/" + senha);
    const snapshot = await get(senhaRef);
    if (!snapshot.exists()) {
      toast.error("Senha inválida! Tente novamente.");
      return;
    }

    // Valida se o acompanhante é obrigatório
    if (acompanhanteSimNao === "Sim" && !acompanhante) {
      toast.error("Por favor, informe o nome do acompanhante.");
      return;
    }

    // Caso a senha seja válida, armazena os dados de presença
    const presencaRef = ref(database, "presencas/" + nome);
    await set(presencaRef, {
      nome: nome,
      email: email,
      telefone: telefone,
      acompanhante: acompanhanteSimNao === "Sim" ? acompanhante : "",
      dataConfirmacao: new Date().toISOString(),
    });

    // Envia e-mail para o organizador
    emailjs
      .send("service_ewng87q", "template_bmz2vk7", {
        to_name: "Organizador",
        from_name: nome,
        from_email: email,
        telefone: telefone,
        acompanhante: acompanhanteSimNao === "Sim" ? acompanhante : "",
      })
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
      .send("service_ewng87q", "template_v8qj7rn", {
        to_name: nome,
        from_name: "Organizador",
        from_email: email,
        message: "Sua presença foi confirmada com sucesso!",
      })
      .then(
        (response) => {
          console.log("E-mail para o participante enviado!", response);
        },
        (error) => {
          console.error("Erro ao enviar e-mail para o participante:", error);
        }
      );

    // Exibe mensagem de sucesso e limpa o formulário
    toast.success("Presença confirmada com sucesso!");
    setFormData({
      nome: "",
      senha: "",
      email: "",
      telefone: "",
      acompanhanteSimNao: "",
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
                className="inputCustom"
                id="nome"
                label="Nome Completo"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
                value={formData.nome}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-12">
              <TextField
                className="inputCustom"
                id="senha"
                label="Senha"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
                value={formData.senha}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-12">
              <TextField
                className="inputCustom"
                id="email"
                label="E-mail"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
                value={formData.email}
                onChange={handleInputChange}
                required
                type="email"
              />
            </div>
            <div className="col-12">
              <TextField
                className="inputCustom"
                id="telefone"
                label="Telefone (WhatsApp)"
                variant="outlined"
                style={{ width: "100%", marginTop: "1rem" }}
                value={formData.telefone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-12">
              <FormControl component="fieldset" style={{ marginTop: "1rem" }}>
                <FormLabel className="customFormLabel" component="legend">
                  Vai ter acompanhante?
                </FormLabel>
                <RadioGroup
                  id="acompanhanteSimNao"
                  value={formData.acompanhanteSimNao}
                  onChange={handleRadioChange}
                  row
                >
                  <FormControlLabel
                    className="customFormControlLabel"
                    value="Sim"
                    control={<Radio />}
                    label="Sim"
                  />
                  <FormControlLabel
                    className="customFormControlLabel"
                    value="Não"
                    control={<Radio />}
                    label="Não"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {formData.acompanhanteSimNao === "Sim" && (
              <div className="col-12">
                <TextField
                  className="inputCustom"
                  id="acompanhante"
                  label="Nome do Acompanhante"
                  variant="outlined"
                  style={{ width: "100%", marginTop: "1rem" }}
                  value={formData.acompanhante}
                  onChange={handleInputChange}
                  required={formData.acompanhanteSimNao === "Sim"}
                />
              </div>
            )}
          </div>

          <div className="row" style={{ display: "flex", margin: "5px" }}>
            <div className="col-12">
              <Button variant="outlined" onClick={handleConfirmarPresenca}>
                Confirmar Presença
              </Button>
            </div>
          </div>
        </FormControl>
      </div>
    </div>
  );
}
