import React, { useState, useEffect } from "react";
import useDaysUntil from "../../components/UseDaysUntil";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  List,
  ListItem,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { ref, get, set, push } from "firebase/database";
import { database } from "../../../firebase";
import { toast } from "react-toastify";

import "./styles.scss";

export default function HomePage() {
  const targetDate = "2025-09-13T00:00:00-03:00";
  const { days, hours, minutes, seconds } = useDaysUntil(targetDate);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const messagesRef = ref(database, "messages");
    const snapshot = await get(messagesRef);
    if (snapshot.exists()) {
      setMessagesList(Object.values(snapshot.val()));
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSendMessage = async () => {
    if (name.trim() && message.trim()) {
      const newMessage = { name, message };
      const messagesRef = ref(database, "messages");
      const newMessageRef = push(messagesRef);
      await set(newMessageRef, newMessage);
      setMessagesList([...messagesList, newMessage]);
      setName("");
      setMessage("");
      handleClose();
    } else {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  };

  return (
    <div className="homeStyle">
      <div>
        <div className="image-text text-center">
          <div>Maria & José</div>
        </div>
        <div className="col-12">
          <div className="row invite-container textoBiblico">
            <h2 className="citacao">
              "Os outros eu conheci por ocioso acaso. A ti vim encontrar porque
              era preciso."
            </h2>
            <h6 className="autor">
              - João Guimarães Rosa em carta a Aracy M. de Carvalho (1946).
            </h6>
          </div>

          <hr className="decorative-line" />

          <div className="invite-container">
            <h1 className="invite-title">Celebre Conosco!</h1>
            <p className="invite-text">
              O amor é a celebração mais bela da vida, e queremos compartilhar
              esse momento único com você! Venha celebrar conosco a união de
              nossas vidas em um dia repleto de alegria, amor e felicidade. Sua
              presença será o presente que tornará esse dia ainda mais especial.
              <span className="invite-emoji">💍✨</span>
            </p>
            <p className="invite-signature">Com carinho, Maria & José.</p>
          </div>

          <hr className="decorative-line" />

          <div className="row invite-container countdown text-center mt-4">
            <p>Contagem regressiva para o grande dia!</p>
            <div className="tempo d-flex">
              <div className="box col-3">
                <h1>{days}</h1>
                <h3>Dias</h3>
              </div>
              <div className="box col-3">
                <h1>{hours}</h1>
                <h3>Horas</h3>
              </div>
              <div className="box col-3">
                <h1>{minutes}</h1>
                <h3>Minutos</h3>
              </div>
              <div className="box col-3">
                <h1>{seconds}</h1>
                <h3>Segundos</h3>
              </div>
            </div>
          </div>

          <hr className="decorative-line" />

          <div className="invite-container message-section text-center">
            <h1 className="message-title">Deixe sua mensagem!</h1>
            <p className="message-text">
              "Escrever é procurar entender, é procurar reproduzir o
              irreproduzível."
            </p>
            <p className="message-author">- Clarice Lispector</p>
            <p className="message-invite">
              Sua mensagem é um pedaço do seu carinho que guardaremos para
              sempre! Obrigado por compartilhar esse momento especial conosco.
            </p>
            <Button variant="outlined" onClick={handleOpen}>
              Deixar Mensagem
            </Button>
          </div>

          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle className="ModalTitle">Deixe sua mensagem</DialogTitle>
            <DialogContent>
              <TextField
                className="inputCustom"
                fullWidth
                label="Nome *"
                value={name}
                onChange={handleNameChange}
                placeholder="Seu nome"
                variant="outlined"
                margin="dense"
              />
              <TextField
                className="inputCustom"
                fullWidth
                multiline
                rows={4}
                label="Mensagem *"
                value={message}
                onChange={handleMessageChange}
                placeholder="Escreva sua mensagem aqui..."
                variant="outlined"
                margin="dense"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancelar
              </Button>
              <Button onClick={handleSendMessage} color="primary">
                Enviar
              </Button>
            </DialogActions>
          </Dialog>

          <div
            className={
              messagesList.length > 0 ? "invite-container message-list" : ""
            }
          >
            {messagesList.length > 0 && ( // Renderiza apenas se houver itens
              <List>
                {messagesList.map((msg, index) => (
                  <ListItem key={index}>
                    <Card
                      sx={{
                        width: "100%",
                        mb: 2,
                        borderRadius: 2,
                        boxShadow: 2,
                      }}
                    >
                      <CardContent>
                        <Typography
                          className="inviteUser"
                          variant="subtitle1"
                          fontWeight="bold"
                        >
                          {msg.name}
                        </Typography>
                        <Typography
                          className="inviteUserMessage"
                          variant="body1"
                        >
                          {msg.message}
                        </Typography>
                      </CardContent>
                    </Card>
                  </ListItem>
                ))}
              </List>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
