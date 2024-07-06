import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full h-auto min-w-[1440px] min-h-[551px]">
        <Image
          src="/image 4.jpg"
          alt="Bienvenue a l'ecole de natation francaise"
          width={1440}
          height={551}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="border-4 border-black mt-24 flex flex-col items-center w-[90%] min-w-[1227px] h-auto min-h-[1038.21px] aspect-[1227/1038.21]">
        <div className="border-4 border-black mb-24 w-full min-w-[1227px] h-auto min-h-[392px] aspect-[1227/392]">
          <div className="flex items-center justify-center relative border-4 border-black mb-24 w-full min-w-[1227px] h-auto min-h-[392px] aspect-[1227/392]">
            <Image
              src="/text1.png"
              alt="texte"
              width={536}
              height={48}
              className="w-full h-auto"
            />
            <Image
              src="/Vector.png"
              alt="texte"
              width={536}
              height={48}
              className="absolute w-[8%] h-auto z-10"
            />
          </div>
        </div>
        <div className="border-4 border-black flex flex-col items-center w-[97%] min-w-[1204.59px] h-auto min-h-[560.21px] aspect-[1204.59/560.21]">
          <div className="border-4 border-black flex flex-col items-center w-[47%] min-w-[561px] h-auto min-h-[120px] aspect-[561/120]">
            <div className="relative border-4 border-black flex flex-row items-center justify-center w-full min-w-[561px] h-auto min-h-[76px] aspect-[561/76]">
              <div className="relative my-4 mr-8 border-4 border-black flex flex-row items-center justify-center w-full min-w-[536px] h-auto min-h-[48px] aspect-[536/48]">
                <Image
                  src="/Choisissez un profil.png"
                  alt="Choisissez un profil"
                  width={536}
                  height={48}
                  className="w-full h-auto z-10"
                />
              </div>
              <Image
                src="/Rectangle 42.png"
                alt="Choisissez un profil"
                width={536}
                height={48}
                className="absolute top-0 right-0 w-[50%] h-[100%] z-0 aspect-[280/76]"
              />
            </div>
            <Image
              src="/bars.png"
              alt="barre bleu et orange"
              width={165}
              height={8}
              className="w-[31%] h-auto mt-8"
            />
          </div>
          <div className="mt-24 border-4 border-black flex flex-row w-full min-w-[1204.59px] h-auto min-h-[560.21px] aspect-[1204.59/560.21]">
            <div className="mx-8 w-[30%] min-w-[360.51px] h-auto min-h-[353.21px] aspect-[360.51/353.21]">
              <Link href="/nager-et-pratiquer">
                <Image
                  src="/Group 1707478736.png"
                  alt="nager-et-pratiquer"
                  width={360.51}
                  height={353.21}
                  className="w-full h-auto mt-8"
                />
              </Link>
            </div>
            <div className="mx-8 w-[30%] min-w-[360.51px] h-auto min-h-[353.21px] aspect-[360.51/353.21]">
              <Link href="/enseigner-et-accompagner">
                <Image
                  src="/Group 1707478737.png"
                  alt="enseigner-et-accompagner"
                  width={360.51}
                  height={353.21}
                  className="w-full h-auto mt-8"
                />
              </Link>
            </div>
            <div className="mx-8 w-[30%] min-w-[360.51px] h-auto min-h-[353.21px] aspect-[360.51/353.21]">
              <Link href="/faire-partie-du-reseau-enf">
                <Image
                  src="/Group 1707478738.png"
                  alt="faire-partie-du-reseau-enf"
                  width={360.51}
                  height={353.21}
                  className="w-full h-auto mt-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
