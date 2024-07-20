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
      <p>Hackopoly fordert die Spielenden heraus, neue Rollen zu übernehmen und verschiedene Perspektiven einzunehmen. Dabei lernen sie, wie man durch demokratische Mittel Mehrheiten organisiert und gemeinsam eine gerechtere Gesellschaft aufbaut. Das Spiel fördert Empathie und Verständnis für die Herausforderungen und Privilegien anderer. Im Gegensatz zu klassischem Monopoly zielt Hackopoly darauf ab, das Spiel ohne Feindseligkeit zu beenden.</p>

      <p>Hackopoly wurde entwickelt, um auf die Bedrohung der Demokratie durch faschistische Bewegungen aufmerksam zu machen, deren Ziel die Abschaffung demokratischer Strukturen und die Durchsetzung autoritärer Kontrolle ist. Gleichzeitig schwindet das Vertrauen in die Demokratie, oft aufgrund negativer Erfahrungen und dem Gefühl geringer demokratischer Mitbestimmung im Alltag. Viele Menschen haben nur wenige Erlebnisse, bei denen sie die Kraft demokratischer Prozesse und deren positive Wirkung erfahren können.</p>

      <p>Hackopoly bietet eine leicht zugängliche Möglichkeit, Demokratie spielerisch zu erleben und zu erfahren, wie man durch demokratische Mittel eine gerechtere Gesellschaft aufbaut. Da fast jeder Haushalt ein Monopoly-Spiel besitzt, haben wir die Hackopoly-Erweiterung so gestaltet, dass sie einfach zu Hause ausgedruckt und mit einem herkömmlichen Monopoly-Spiel genutzt werden kann.</p>

      <h3>Wie gespielt wird</h3>

      <p>In Hackopoly schlüpfen die Spielenden in zufällig zugewiesene Rollen, die an reale Menschen in unserer Gesellschaft angelehnt sind. Jede Rolle kommt mit Privilegien und Herausforderungen, die die normale Monopoly-Spielmechanik beeinflussen. Diese Startbedingungen können das Leben eines Spielenden entweder leichter oder schwerer machen und spiegeln somit die unterschiedlichen Ausgangslagen im echten Leben wider.</p>
      <p>Zusätzlich haben die Spielenden die Möglichkeit, Gesetze zu entwerfen und zu verabschieden, um zu zeigen, wie durch demokratische Mehrheitsbildung ungleiche Rahmenbedingungen ausgeglichen werden können.</p>
      {/* Character Cards */}

      <h3>Charaktere</h3>
      <section className="flex gap-5 flex-wrap">
        {characters.map( ( { id, ...data } ) => (
          <CharacterCard key={id} data={data} />
        ) )}
      </section>
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
    name: "Dariusz Nowak",
    color: "",
    description: "Arbieter",
    characteristics: [
      "Präker beschäftigt | 1x Würfeln pro Zug ⚡️ 6: Arbeitslos",
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
      "Immobilienmogul | bestitz alle blauen & grünen Immobilien",
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