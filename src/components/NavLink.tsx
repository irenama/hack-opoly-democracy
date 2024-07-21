import Link from "next/link";
import { ReactNode } from "react";

const NavLink: React.FC<{ href: string; text: string }> = ( { href, text } ) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-green-200 shadow-sm p-5 flex justify-end border-2 border-black"><Link href={href} >{text}</Link></nav>
  );
}

export default NavLink;