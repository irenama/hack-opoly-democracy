import NavLink from "@/components/NavLink";
import Section from "@/components/Section";
import CommunityCard from "@/components/CommunityCard";

export default function CommunityCards () {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between p-5 py-12 md:p-24">
      <NavLink links={[
        { href: "/characters", text: "Charaktere" },
        { href: "/", text: "Home" },
        // {href:"/chance-cards", text:"Chance Karten"},
      ]} />
      <div className="w-full">
        <div className="my-10">
          <h1>Hackopoly</h1>
          <h2>Demokratie Edition - Ereigniskarten</h2>
        </div>
      </div>
      <Section>
        <div className="flex gap-5 flex-wrap justify-center">
          {communityCards.map( ( { id, text } ) => (
            <CommunityCard key={id} text={text} />
          ) )}
        </div>
      </Section>
    </main >
  );
}

const communityCards = [
  { id: "def", text: "Erste, die schon entstanden sind, werden hier bald eingefügt." },
  { id: "abc", text: "..." },
  { id: "ghi", text: "..." },
];