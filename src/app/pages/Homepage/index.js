import React, { useState } from "react";
import useDaysUntil from "../../components/UseDaysUntil";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, List, ListItem, Card, CardContent, Typography } from "@mui/material";

import "./styles.scss";

export default function HomePage() {
  const targetDate = "2025-09-13T00:00:00-03:00";
  const { days, hours, minutes, seconds } = useDaysUntil(targetDate);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]); // Armazenar as mensagens enviadas

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessagesList([...messagesList, message]); // Adiciona a mensagem à lista
      setMessage(""); // Limpa o campo de input
      handleClose(); // Fecha o modal
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
              "Os outros eu conheci por ocioso acaso. A ti vim encontrar porque era preciso."
            </h2>
            <h6 className="autor">
              - João Guimarães Rosa em carta a Aracy M. de Carvalho (1946).
            </h6>
          </div>

          <hr className="decorative-line" />

          <div className="invite-container">
            <h1 className="invite-title">Celebre Conosco!</h1>
            <p className="invite-text">
              O amor é a celebração mais bela da vida, e queremos compartilhar esse momento único com você! Venha celebrar conosco a união de nossas vidas em um dia repleto de alegria, amor e felicidade. Sua presença será o presente que tornará esse dia ainda mais especial.
              <span className="invite-emoji">💍✨</span>
            </p>
            <p className="invite-signature">Com carinho, Maria & José.</p>
          </div>

          <hr className="decorative-line" />

          <div className="row invite-container countdown text-center mt-4">
            <p>Contagem regressiva para o grande dia!</p>
            <div className="d-flex">
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
              "Escrever é procurar entender, é procurar reproduzir o irreproduzível."
            </p>
            <p className="message-author">- Clarice Lispector</p>
            <p className="message-invite">
              Sua mensagem é um pedaço do seu carinho que guardaremos para sempre! Obrigado por compartilhar esse momento especial conosco.
            </p>
            <Button variant="outlined" onClick={handleOpen}>Deixar Mensagem</Button>
          </div>

          <Dialog 
            open={open} 
            onClose={handleClose} 
            maxWidth="sm" 
            fullWidth
          >
            <DialogTitle>Deixe sua mensagem</DialogTitle>
            <DialogContent>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={handleMessageChange}
                placeholder="Escreva sua mensagem aqui..."
                variant="outlined"
                autoFocus
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

          <div className="message-list">
            <List>
              {messagesList.map((msg, index) => (
                <ListItem key={index}>
                  <Card sx={{ width: '100%', mb: 2, borderRadius: 2, boxShadow: 2 }}>
                    <CardContent>
                      <Typography variant="body1" color="text.secondary">
                        {msg}
                      </Typography>
                    </CardContent>
                  </Card>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
