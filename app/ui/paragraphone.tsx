"use client";
import { useEffect, useRef, useState, MutableRefObject } from "react";
import Image from "next/image";

export function useFitText(): [
  MutableRefObject<HTMLDivElement | null>,
  string
] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fontSize, setFontSize] = useState("1rem");

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setFontSize(`${Math.max(Math.min(width / 20, 24), 16)}px`);
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

export default function ParagraphOne() {
  const [containerRef, fontSize] = useFitText();

  return (
    <div
      ref={containerRef}
      className="text-[#000091] relative leading-9 font-montserrat font-thin tracking-10p flex flex-col justify-center items-center"
    >
      <p
        className="text-center font-thin"
        style={{ fontSize: fontSize, fontWeight: 400 }}
      >
        L&apos;École de Natation Française (ENF) s&apos;adresse à{" "}
        <span className="font-bold">toutes et à tous</span>. C&apos;est le lieu
        privilégié pour <span className="font-bold">découvrir</span> les
        activités aquatiques, <span className="font-bold">apprendre</span> à
        nager et <span className="font-bold">se perfectionner</span> ; chacun à
        son rythme et en toute <span className="font-bold">sécurité</span>.
        L&apos;enseignement est dispensé par un éducateur diplômé.
      </p>
      <Image
        src="/Vector.png"
        alt="texte"
        width={94}
        height={7.52}
        className="my-10"
      />
      <p
        className="text-center"
        style={{ fontSize: fontSize, fontWeight: 400 }}
      >
        L&apos;ENF est un concept d&apos;apprentissage décliné en plusieurs
        étapes ayant pour objectifs la lutte contre les noyades et la
        construction du nageur dès le plus jeune âge. Il s&apos;agit d&apos;un
        dispositif qui s&apos;adresse aussi bien aux enfants, à partir de 4 ans,
        qu&apos;aux adultes qui souhaiteraient consommer les activités
        aquatiques différemment.
      </p>
    </div>
  );
}
