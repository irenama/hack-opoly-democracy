import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={urbanist.className}>{children}
        <footer className="flex items-center p-5 flex-col">
          <p>
            <strong>Made for the Widerstand</strong> by Flo, Orest, Adrian, Irena, Esra & der
            <Link href="https://www.hcknzs.com/">
              <strong> HCK NZS </strong>
            </Link>
            Crew
          </p>
          <Link href="mailto:kontakt@hackopoly.xyz">kontakt@hackopoly.xyz</Link>
        </footer>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
