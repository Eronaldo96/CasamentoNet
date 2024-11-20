import { useState, useEffect } from "react";

export default function useDaysUntil(targetDate) {
    const calculateDaysUntil = (date) => {
      const now = new Date();
      const target = new Date(date);
      return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
    };
  
    const [daysUntil, setDaysUntil] = useState(calculateDaysUntil(targetDate));
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDaysUntil(calculateDaysUntil(targetDate));
      }, 1000 * 60 * 60 * 24);
  
      return () => clearTimeout(timer);
    }, [targetDate, daysUntil]);
  
    return daysUntil;
  }