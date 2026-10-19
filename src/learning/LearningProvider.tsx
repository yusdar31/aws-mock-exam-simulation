import { useEffect, useRef, useState, type ReactNode } from "react";
import { LearningContext, readLearning, type LearningData } from "./context";
export function LearningProvider({
  userId,
  children,
}: {
  userId: string;
  children: ReactNode;
}) {
  const [data, setData] = useState(() => readLearning(userId));
  const [error, setError] = useState("");
  const current = useRef(data);
  function update(updater: (data: LearningData) => LearningData) {
    const next = updater(current.current);
    try {
      localStorage.setItem(`exam-learning-${userId}`, JSON.stringify(next));
      current.current = next;
      setData(next);
      setError("");
      return true;
    } catch {
      setError("Catatan belum tersimpan. Periksa ruang penyimpanan browser.");
      return false;
    }
  }
  useEffect(() => {
    const listener = (event: StorageEvent) => {
      if (event.key === `exam-learning-${userId}`) {
        const next = readLearning(userId);
        current.current = next;
        setData(next);
      }
    };
    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  }, [userId]);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--reading-size",
      `${data.reading.size}px`,
    );
    document.documentElement.dataset.theme = data.reading.dark
      ? "dark"
      : "light";
    document.documentElement.dataset.reading = data.reading.wide
      ? "wide"
      : "normal";
  }, [data.reading]);
  return (
    <LearningContext.Provider value={{ data, update, error }}>
      {children}
    </LearningContext.Provider>
  );
}
