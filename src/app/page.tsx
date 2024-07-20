import CharacterCard from "@/components/CharacterCard";

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <div className="mb-10">
          <h1>Hackopoly</h1>
          <h2>Die Demokatie</h2>
        </div>
      </div>
      <p></p>
      {/* Character Cards */}
      <section className="flex gap-5 flex-wrap">
        {characters.map( ( { id, ...data } ) => (
          <CharacterCard key={id} data={data} />
        ) )}
      </section>
    </main>
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
    ],
  },
  {
    id: "efg",
    color: "red",
    name: "Anne Schmidt",
    description: "oberschicht",
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
      "Rap Talent | pro zug 3x Würfel um bei 3x 6 Durchburch! pro Zug +500€",
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
    name: "",
    color: "",
    description: "",
    characteristics: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    id: "pqr",
    name: "",
    color: "",
    description: "",
    characteristics: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    id: "stu",
    name: "",
    color: "",
    description: "",
    characteristics: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    id: "vwx",
    name: "",
    color: "",
    description: "",
    characteristics: [
      "",
      "",
      "",
      "",
    ],
  }
];
export type Character = typeof characters[number];