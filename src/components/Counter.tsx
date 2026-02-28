"use client";
import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

export default function Counter({ end, duration = 2000, decimals = 0, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countRef.current) {
          countRef.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(progress * end);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={elementRef}>{count.toFixed(decimals)}{suffix}</span>;
}