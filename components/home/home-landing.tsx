import Link from "next/link";

export default function HomeLanding() {
  return (
    <header className="relative bg-[url('/landing-bg.jpg')] bg-cover bg-center h-dvh text-white">
      <div className="absolute inset-0 bg-black/10" />
      <div className="z-10 container flex flex-col justify-center items-center">
        <h1 className="noto_serif text-center font-bold text-6xl">
          Health & Well-Being
        </h1>
        <h2 className="w-[min(90%,90ch)] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          dignissim egestas magna, vitae aliquet lorem laoreet sit amet.
        </h2>
        <Link href="/" className="button_primary mt-36">
          Our Products
        </Link>
      </div>
    </header>
  );
}
