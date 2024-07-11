"use client";
import { useEffect, useRef, useState, MutableRefObject } from "react";

export function useFitText(): [
  MutableRefObject<HTMLDivElement | null>,
  string
] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState("3rem");

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setFontSize(`${Math.max(Math.min(width / 20, 42), 26)}px`);
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

  return [ref, fontSize];
}

export default function HeaderTwo() {
  const [containerRef, fontSize] = useFitText();

  return (
    <div
      ref={containerRef}
      className="font-bold leading-10 flex flex-wrap md:flex-nowrap items-center justify-center  w-full h-auto"
      style={{ fontSize: fontSize }}
    >
      <div className="text-[#000091] ml-2">CHOISISSEZ</div>
      <div>
        <div className="ml-2 px-3 py-2 bg-[#7AB1E8] rounded-2xl text-white">
          UN&nbsp;PROFIL
        </div>
      </div>
    </div>
  );
}
