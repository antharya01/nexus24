import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './Timer.css'; // Import the CSS file
import Tracker from './Tracker';

const Timer = ({ date }) => {
  const [time, setTime] = useState({});
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const initialCountdown = moment(date, 'YYYY-MM-DDTHH:mm:ss');
    setCountdown(initialCountdown);
    console.log(`Initial Countdown: ${initialCountdown}`); // Log the countdown
  }, [date]);

  useEffect(() => {
    const update = () => {
      if (countdown) {
        const now = moment();
        const t = countdown.diff(now);
        console.log(`Time difference: ${t}`); // Log the time difference

        // Ensure t is non-negative
        if (t < 0) {
          setTime({ Days: 0, Hours: 0, Minutes: 0, Seconds: 0 });
        } else {
          setTime({
            Days: Math.floor(t / (1000 * 60 * 60 * 24)),
            Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
            Minutes: Math.floor((t / 1000 / 60) % 60),
            Seconds: Math.floor((t / 1000) % 60),
          });
        }
      }
    };

    const interval = setInterval(() => {
      update();
    }, 1000);

    update(); // Initial call to avoid delay

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className="flip-clock" onClick={() => setCountdown(moment(date))}>
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((tracker) => (
        <Tracker key={tracker} property={tracker} time={time} />
      ))}
    </div>
  );
};

export default Timer;
