import { useState, useEffect } from "react";

export default function useTimeUntil(targetDate) {
  const calculateTimeUntil = (date) => {
    const now = new Date();
    const target = new Date(date);
    const difference = target - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeUntil, setTimeUntil] = useState(calculateTimeUntil(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeUntil(calculateTimeUntil(targetDate));
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeUntil;
}
