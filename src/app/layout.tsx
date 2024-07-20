import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";


const urbanist = Urbanist( { subsets: ["latin"] } );

export const metadata: Metadata = {
  title: "Hack-opoly – Die Demokratie",
  description: "Hack a famos board game classic and learn the power of democracy.",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
