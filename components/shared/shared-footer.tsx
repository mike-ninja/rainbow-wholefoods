import { links, socials } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary_one">
      <div className="container container_padding flex justify-between px-5">
        <div>
          <h2 className="section_title">Rainbow Wholefoods</h2>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                {link.key}: <Link href={link.href}>{link.value}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-1">
          {socials.map((social, index) => (
            <Link href={social.href} key={index} className="text-3xl">
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
