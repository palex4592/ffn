"use client";
import { useEffect, useRef, useState, MutableRefObject } from "react";

export function useFitText(): [
  MutableRefObject<HTMLDivElement | null>,
  string,
  string
] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState("1rem");
  const [lineHeight, setLineHeight] = useState("3rem");
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setFontSize(`${Math.max(Math.min(width / 1, 18.91), 18.91)}px`);
        setLineHeight(`${Math.max(Math.min(width / 1, 17.8), 16.4)}px`);
      }
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, fontSize, lineHeight];
}

export default function HeaderThree({ text }: { text: string }) {
  const [containerRef, fontSize, lineHeight] = useFitText();

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex justify-center items-center"
    >
      <h1
        className="text-white font-montserrat font-bold tracking-[-2%] text-center"
        style={{ fontSize, lineHeight }}
      >
        {text}
      </h1>
    </div>
  );
}
