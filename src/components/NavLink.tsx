import Link from "next/link";

const NavLink: React.FC<{ links: Array<{ href: string; text: string }> }> = ( props ) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-green-200 shadow-sm p-5 flex justify-end gap-5 border-2 border-black">
      {props.links.map( ( { href, text } ) => (
        <Link key={href} href={href} >{text}</Link>
      ) )}
    </nav>
  );
}

export default NavLink;