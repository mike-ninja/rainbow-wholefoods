import Image from "next/image";
import Link from "next/link";

export default function HomeMedia() {
  return (
    <section className="bg-[url('@/public/landing-background.png')] bg-cover">
      <div className="container relative container_padding">
        <Image
          src="/media-play.svg"
          alt="Rainbow Wholefoods Media"
          width={180}
          height={180}
          className="absolute -right-20 top-1/2 -translate-y-1/2 "
        />
        <div className="bg-white bg-opacity-90 h-[400px] flex flex-col items-center justify-center">
          <h2 className="section_title text-primary_one">Podcast</h2>
          <p className="text-gray">Listen to our podcast in Spotify</p>
          <Link href="/" className="button_primary mt-6">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
