import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderOne from "./ui/headerone";
import ParagraphOne from "./ui/paragraphone";
import HeaderTwo from "./ui/headertwo";
import HeaderThree from "./ui/headerthree";
export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="relative w-full max-w-[1440px] max-h-[2664px] min-w-[375] min-h-[1773px] flex flex-col items-center">
        <div className="relative w-full h-auto flex items-center justify-center">
          <Image
            src="/image 4(3).jpg"
            alt="no working"
            width={1440}
            height={551}
            className="w-full h-auto min-w-[834px] min-h-[500px] object-cover aspect-[1440/551]"
          />
          <HeaderOne />
        </div>
        <div className="w-[82%] max-w-[1227px] h-auto mt-24 flex flex-col items-center">
          <div className="mb-24 w-full h-auto flex items-center justify-center">
            <ParagraphOne />
          </div>
          <div className="flex flex-col items-center w-[97%] h-auto">
            <div className="flex flex-col items-center justify-center w-full h-auto min-w-[310px]">
              <div className="flex items-center justify-center w-full h-auto">
                <HeaderTwo />
              </div>
              <Image
                src="/bars.png"
                alt="barre bleu et orange"
                width={165}
                height={8}
                className="ml-2 mt-7"
              />
            </div>
            <div className="mt-24 flex flex-wrap items-center justify-center w-full h-auto min-w-[310px]">
              <div className="relative w-[27.6%] h-auto min-w-[290.42px] mx-auto">
                <Link href="/nager-et-pratiquer" className="group">
                  <Image
                    src="/Ellipse 62.png"
                    alt="nager-et-pratiquer"
                    width={360.51}
                    height={353.21}
                    className="w-full h-auto mt-2 group-hover:rotate-90 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden">
                      <Image
                        src="/Nager et pratiquer.png"
                        alt="faire-partie-du-reseau-enf"
                        width={360.51}
                        height={353.21}
                        className="w-full h-full object-cover"
                      />
                      <HeaderThree text={"Nager et pratiquer"} />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative w-[27.6%] h-auto min-w-[290.42px] mx-auto">
                <Link href="/enseigner-et-accompagner" className="group">
                  <Image
                    src="/Ellipse 63.png"
                    alt="enseigner-et-accompagner"
                    width={360.51}
                    height={353.21}
                    className="w-full h-auto mt-2 group-hover:rotate-90 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden">
                      <Image
                        src="/Enseigner et encadrer.png"
                        alt="faire-partie-du-reseau-enf"
                        width={360.51}
                        height={353.21}
                        className="w-full h-full object-cover"
                      />
                      <HeaderThree text={"Enseigner et encadrer"} />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative w-[27.6%] h-auto min-w-[290.42px] mx-auto">
                <Link href="/faire-partie-du-reseau-enf" className="group">
                  <Image
                    src="/Ellipse 64.png"
                    alt="faire-partie-du-reseau-enf"
                    width={360.51}
                    height={353.21}
                    className="w-full h-auto mt-2 group-hover:rotate-90 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden">
                      <Image
                        src="/Faire partie du réseau ENF.png"
                        alt="faire-partie-du-reseau-enf"
                        width={360.51}
                        height={353.21}
                        className="w-full h-full object-cover"
                      />
                      <HeaderThree text={"Faire partie du réseau ENF"} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
