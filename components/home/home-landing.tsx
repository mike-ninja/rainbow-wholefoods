import Link from "next/link";

export default function HomeLanding() {
  return (
    <header className="bg-[url('@/public/landing-background.png')] bg-cover h-dvh text-white">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="noto_serif text-6xl">Health & Well-Being</h1>
        <h2 className="w-[90ch] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          dignissim egestas magna, vitae aliquet lorem laoreet sit amet.
        </h2>
        <Link href="/" className="button rounded-md uppercase mt-36">
          Our Products
        </Link>
      </div>
    </header>
  );
}