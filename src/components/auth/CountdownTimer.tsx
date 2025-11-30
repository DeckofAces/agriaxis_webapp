import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialTime?: number;
  onTimeout?: () => void;
  className?: string;
}

/**
 * @description A reusable component that displays a countdown timer and executes a callback on timeout.
 */
const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialTime = 300,
  onTimeout,
  className = "text-[#0A814A] font-medium text-sm"
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeout) {
        onTimeout();
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeout]);

  const formatTime = (totalSeconds: number): string => {
    if (totalSeconds === 0) return 'Resend';

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <span className={className}>
      {formatTime(timeLeft)}
    </span>
  );
};

export default CountdownTimer;
