/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function CallToAction () {
  return (
    <div className="flex justify-center items-center flex-col pt-10 pb-5 gap-2 max-w-prose text-center">
      <p>Lade dir die Erweiterung einfach runter – ganz einfach als pdf und zum selbst ausschneiden:</p>
      <div className="flex flex-col gap-2 m-10">
        <Link className="bg-black text-white border-2 py-5 px-10" href="/HACKOPOLY-CC-BY-SA_Alle_DruckBoegen_v07_compressed.pdf" target="_blank" download="Hackopoly Erweiterung">DOWNLOAD "HACKOPOLY"</Link>
        <Link href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" className="text-sm"><em>CC BY-SA 4.0</em></Link>
      </div>
      <p>Wenn dir die Erweiterung gefällt und du uns unterstützen möchtest, kannst du entweder Ideen einbringen (per <Link href="mailto:kontakt@hackopoly.xyz">Mail</Link> oder <Link target="_blank" href="https://github.com/Fizzcarraldo/Hackopoly/">GitHub</Link>), oder wenn es ein kleines Danke für die ansprechende Gestaltung sein soll, kaufe doch <Link href="https://buymeacoffee.com/orestoast/" target="_blank">☕︎ <strong>Kaffee fürs Grafikteam!</strong></Link></p>

    </div >
  );
}
