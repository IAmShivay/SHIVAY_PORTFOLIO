import { useEffect, useState } from 'react';

const fmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
});

/** Live Bangalore time, ticking each second. Isolated so only this text re-renders. */
const LocalTime = ({ className = '' }: { className?: string }) => {
  const [now, setNow] = useState(() => fmt.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => { if (!document.hidden) setNow(fmt.format(new Date())); }, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className={`tabular-nums ${className}`}>BLR {now} IST</span>;
};

export default LocalTime;
