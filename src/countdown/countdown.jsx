import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const CountdownTimer = ({ createdAt }) => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  useEffect(() => {
    const createdDate = new Date(createdAt);
    const expiredDate = new Date(createdDate);
    expiredDate.setDate(expiredDate.getDate() + 1);

    const updateCountdown = () => {
      const now = new Date();
      const diff = expiredDate - now;

      if (diff <= 0) {
        setTimeLeft("00:00:00");
        return;
      }
      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(
        2,
        "0"
      );
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
        2,
        "0"
      );
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [createdAt]);

  return <div>{timeLeft}</div>;
};
