"use client";
import { useEffect, useRef, useState, MutableRefObject } from "react";

export function useFitText(): [
  MutableRefObject<HTMLDivElement | null>,
  string,
  string
] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState("3rem");
  const [lineHeight, setLineHeight] = useState("3rem");
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setFontSize(`${Math.max(Math.min(width / 15, 80), 40)}px`);
        setLineHeight(`${Math.max(Math.min(width / 10, 93), 58)}px`);
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

export default function HeaderOne() {
  const [containerRef, fontSize, lineHeight] = useFitText();

  return (
    <div
      ref={containerRef}
      className="w-[80%] absolute max-w-[1304px] max-h-[252.37px] min-w-[339.58px] min-h-[252.37px] flex justify-center items-center"
    >
      <h1
        className="text-white font-montserrat font-bold tracking-[-2%] text-center"
        style={{ fontSize, lineHeight }}
      >
        BIENVENUE À L&apos;ÉCOLE DE NATATION FRANÇAISE
      </h1>
    </div>
  );
}
