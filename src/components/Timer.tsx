import { useEffect, useRef, useState } from "react";
import { formatTime } from "../lib/exam";
export default function Timer({
  deadline,
  onExpire,
}: {
  deadline: number | null;
  onExpire: () => void;
}) {
  const [now, setNow] = useState(() => Date.now());
  const callback = useRef(onExpire);
  useEffect(() => {
    callback.current = onExpire;
  }, [onExpire]);
  useEffect(() => {
    if (deadline === null) return;
    const tick = () => {
      const time = Date.now();
      setNow(time);
      if (time >= deadline) callback.current();
    };
    tick();
    const interval = setInterval(tick, 1000);
    document.addEventListener("visibilitychange", tick);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [deadline]);
  const remaining =
    deadline === null ? null : Math.max(0, Math.ceil((deadline - now) / 1000));
  return (
    <span
      className={`timer ${remaining !== null && remaining < 300 ? "warning" : ""}`}
      aria-label={`Waktu tersisa ${formatTime(remaining)}`}
    >
      {formatTime(remaining)}
    </span>
  );
}
