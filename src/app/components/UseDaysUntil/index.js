import { useState, useEffect } from "react";

export default function useTimeUntil(targetDate) {
  const calculateTimeDifference = (date) => {
    const now = new Date();
    const target = new Date(date);

    // Ajusta para o mesmo fuso horário (exemplo: UTC-3 para horário de Brasília)
    const offset = now.getTimezoneOffset() * 60 * 1000; // Diferença em milissegundos
    const nowLocal = new Date(now.getTime() - offset);
    const targetLocal = new Date(target.getTime() - offset);

    const difference = targetLocal - nowLocal; // Diferença em milissegundos

    const isPast = difference <= 0; // Verifica se a data já passou
    const absoluteDifference = Math.abs(difference); // Usamos o valor absoluto para cálculos

    const days = Math.floor(absoluteDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((absoluteDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((absoluteDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((absoluteDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isPast };
  };

  const [timeDifference, setTimeDifference] = useState(calculateTimeDifference(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeDifference(calculateTimeDifference(targetDate));
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar
  }, [targetDate]);

  return timeDifference;
}