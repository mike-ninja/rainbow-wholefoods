import { navBarOptions } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center">
      <div className="py-4 ml-4">
        <Image
          src="/logo.svg"
          alt="Rainbow Wholefoods Logo"
          width={95}
          height={75}
        />
      </div>
      <div className="flex gap-1">
        {navBarOptions.map((option, index) => (
          <Link
            key={index}
            href={option.link}
            className="button_padding button_font"
          >
            {option.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
