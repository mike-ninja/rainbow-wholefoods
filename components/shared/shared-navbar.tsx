import { navBarOptions } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="z-50 fixed top-0 left-0 w-full flex justify-between items-center">
      <div className="py-4 ml-4">
        <Image
          src="/logo.svg"
          alt="Rainbow Wholefoods Logo"
          width={95}
          height={75}
        />
      </div>
      <div className="flex gap-5 px-3 text-gray sm:text-lg">
        {navBarOptions.map((option, index) => (
          <Link
            key={index}
            href={option.link}
            className="group button_padding button_font"
          >
            {option.title}
            <hr className="w-0 group-hover:w-full transition" />
          </Link>
        ))}
      </div>
    </div>
  );
}
