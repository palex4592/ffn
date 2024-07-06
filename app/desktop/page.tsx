import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-auto">
        <Image
          src="/Desktop - 120.png"
          alt="Bienvenue a l'ecole de natation francaise"
          width={1440}
          height={551}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
