import Link from "next/link";
import { ReactNode } from "react";

const NavLink: React.FC<{ href: string; text: string }> = ( { href, text } ) => {
  return (
    <nav><Link href={href} className="absolute right-5 top-5">{text}</Link></nav>
  );
}

export default NavLink;