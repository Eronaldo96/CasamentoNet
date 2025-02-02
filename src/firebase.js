import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFIxmtZddcqTAvd1FczfeB18R3yGPflsQ",
  authDomain: "casamento-209b7.firebaseapp.com",
  databaseURL: "https://casamento-209b7-default-rtdb.firebaseio.com",
  projectId: "casamento-209b7",
  storageBucket: "casamento-209b7.firebasestorage.app",
  messagingSenderId: "983046512515",
  appId: "1:983046512515:web:449f506d8844fd82c0e0b6",
  measurementId: "G-SCZRGBFMTV",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, get };
