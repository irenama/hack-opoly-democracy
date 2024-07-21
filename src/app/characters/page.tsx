import CharacterCard from "@/components/CharacterCard";
import NavLink from "@/components/NavLink";
import Section from "@/components/Section";

export default function Home () {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between p-5 md:p-24">
      <NavLink href="/" text="Home" />
      <div className="w-full">
        <div className="mb-10">
          <h1>Hackopoly</h1>
          <h2>Demokratie Edition - Die Charaktere</h2>
        </div>
      </div>
      <Section>
        <div className="flex gap-5 flex-wrap justify-center">
          {characters.map( ( { id, ...data } ) => (
            <CharacterCard key={id} data={data} />
          ) )}
        </div>
      </Section>
    </main >
  );
}

const characters = [
  {
    id: "abc",
    color: "red",
    name: "Thomas Vogel",
    description: "Vorstand eines privatisierten öffentlichen Unternehmens",
    characteristics: [
      "Bahncard 3000",
      "Gehören alle Bahnhöfe | 10%",
      "1 Rote Immobilie",
      "Zweitwohnung | -100€",
      "Korrupt | vor Zug 1x Würfeln: 1-5 +500€; bei 6 ins Gefängnis bis wieder 6 gewürfelt"
    ],
  },
  {
    id: "cde",
    color: "red",
    name: "Sabine Hoffmann",
    characteristics: [
      "Alleinerziehend | -100€ über los",
      "Pflegekraft | Schlafmangel -3 Augen auf Würfel",
      "Miete | -10€ pro Runde",
      "Kreditwürdigkeit | Würfeln vor Kauf: 5 oder 6: Kredit abgelehnt",
    ],
  },
  {
    id: "efg",
    color: "red",
    name: "Anne Schmidt",
    description: "Oberschicht",
    characteristics: [
      "Haus auf gelber Straße",
      "Fitness +1 Würfel",
      "Führungskraft | +200€ pro Los",
      "Aktien | +50€ pro Zug",
      "Burn out | bei Pasch aussetzen",
    ],
  },
  {
    id: "ghi",
    name: "Paul Würdig",
    color: "red",
    description: "Rapper",
    characteristics: [
      "Rap Talent | pro Zug 3x Würfel um bei 3x 6 Durchbruch → pro Zug +500€",
      "Raucher | pro Zug -10€",
      "Miete | -20€ pro Zug",
      "Fit | + 1 Würfel",
      "Schlechter Job | +50€ bei Los"
    ],
  },
  {
    id: "jkl",
    name: "Nepomuk von Graf",
    color: "red",
    description: "Nachhaltig aber NIMBI",
    characteristics: [
      "Eigentumswohnung",
      "Aktiver Start up Guy | +2 Ereigniskarten",
      "ETF | +10€ pro Zug",
      "Lastenrad | +2 Augen pro Zug",
    ],
  },
  {
    id: "mno",
    name: "Dariusz Nowak",
    color: "",
    description: "Arbieter",
    characteristics: [
      "Prekär beschäftigt | 1x Würfeln pro Zug ⚡️ 6: Arbeitslos",
      "Miete | -10€ pro Zug",
      "Schlechter Job | -20€ bei Los",
      "Kein Führerschein | -2 Augen pro Zug",
    ],
  },
  {
    id: "pqr",
    name: "Klaus Müller",
    color: "",
    description: "I bins da Hans",
    characteristics: [
      "Hausbesitzer (orange) | Grund + kleines Haus",
      "Handwerker | -20% Kosten Haus",
      "Alt | -3 Augen pro Zug",
      "Arztkosten | -50€ pro Zug",
    ],
  },
  {
    id: "stu",
    name: "Justus",
    color: "red",
    description: "",
    characteristics: [
      "Privat Jet | pro Zug: beliebiges Feld",
      "Immobilienmogul | besitz alle blauen & grünen Immobilien",
      "Erbe | Startkapital +500€",
      "Dividende | +100€ pro Zug",
      "guter Anwalt | 1 Runde weniger im Gefängnis",
    ],
  },
  {
    id: "vwx",
    name: "Achmed",
    color: "red",
    description: "",
    characteristics: [
      "Trauma | Pasch 3 (beliebiger Spieler) nächste Runde aussetzen",
      "Verletzung | -2 Augen pro Zug",
      "Familie | -100€ pro Zug",
      "Rassismus | eine Runde länger ins Gefängnis",
      "Kein Staatsbürger | darf nicht wählen"
    ],
  }
];
export type Character = typeof characters[number];