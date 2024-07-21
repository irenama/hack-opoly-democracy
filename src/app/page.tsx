/* eslint-disable react/no-unescaped-entities */
import NavLink from "@/components/NavLink";
import Section from "@/components/Section";
import Street from "@/components/Street";

export default function Home () {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between p-5 py-12 md:p-24">
      <NavLink href="/characters" text="Charaktere" />
      <div className="w-full">
        <div className="my-10">
          <h1>Hackopoly</h1>
          <h2>Demokratie Edition</h2>
        </div>
      </div>
      <Section>
        <p>
          Hackopoly fordert die Spielenden heraus, neue Rollen zu übernehmen und verschiedene Perspektiven einzunehmen. Dabei lernen sie, wie man durch demokratische Mittel Mehrheiten organisiert und gemeinsam eine gerechtere Gesellschaft aufbaut. Das Spiel fördert Empathie und Verständnis für die Herausforderungen und Privilegien anderer. Im Gegensatz zu klassischem Monopoly zielt Hackopoly darauf ab, das Spiel ohne Feindseligkeit zu beenden.
        </p>
        <p>
          Hackopoly wurde entwickelt, um auf die Bedrohung der Demokratie durch faschistische Bewegungen aufmerksam zu machen, deren Ziel die Abschaffung demokratischer Strukturen und die Durchsetzung autoritärer Kontrolle ist. Gleichzeitig schwindet das Vertrauen in die Demokratie, oft aufgrund negativer Erfahrungen und dem Gefühl geringer demokratischer Mitbestimmung im Alltag. Viele Menschen haben nur wenige Erlebnisse, bei denen sie die Kraft demokratischer Prozesse und deren positive Wirkung erfahren können.
        </p>
        <p>
          Hackopoly bietet eine leicht zugängliche Möglichkeit, Demokratie spielerisch zu erleben und zu erfahren, wie man durch demokratische Mittel eine gerechtere Gesellschaft aufbaut. Da fast jeder Haushalt ein Monopoly-Spiel besitzt, haben wir die Hackopoly-Erweiterung so gestaltet, dass sie einfach zu Hause ausgedruckt und mit einem herkömmlichen Monopoly-Spiel genutzt werden kann.
        </p>
      </Section>
      <Section>
        <h3>☞ Wie gespielt wird</h3>

        <p>In Hackopoly schlüpfen die Spielenden in zufällig zugewiesene Rollen, die an reale Menschen in unserer Gesellschaft angelehnt sind. Jede Rolle kommt mit Privilegien und Herausforderungen, die die normale Monopoly-Spielmechanik beeinflussen. Diese Startbedingungen können das Leben eines Spielenden entweder leichter oder schwerer machen und spiegeln somit die unterschiedlichen Ausgangslagen im echten Leben wider.</p>
        <p>Zusätzlich haben die Spielenden die Möglichkeit, Gesetze zu entwerfen und zu verabschieden, um zu zeigen, wie durch demokratische Mehrheitsbildung ungleiche Rahmenbedingungen ausgeglichen werden können.</p>
      </Section>
      {/* <CharacterCard data={{}} /> */}
      <Section>
        <h3>？Idee</h3>
        <p>
          Hackopoly fordert die Spielenden heraus, neue Rollen zu übernehmen und verschiedene Perspektiven einzunehmen. Dabei lernen sie, wie man durch demokratische Mittel Mehrheiten organisiert und gemeinsam eine gerechtere Gesellschaft aufbaut. Das Spiel fördert Empathie und Verständnis für die Herausforderungen und Privilegien anderer. Im Gegensatz zu klassischem Monopoly zielt Hackopoly darauf ab, das Spiel ohne Feindseligkeit zu beenden.
        </p>
        <p>
          Hackopoly wurde entwickelt, um auf die Bedrohung der Demokratie durch faschistische Bewegungen aufmerksam zu machen, deren Ziel die Abschaffung demokratischer Strukturen und die Durchsetzung autoritärer Kontrolle ist. Gleichzeitig schwindet das Vertrauen in die Demokratie, oft aufgrund negativer Erfahrungen und dem Gefühl geringer demokratischer Mitbestimmung im Alltag. Viele Menschen haben nur wenige Erlebnisse, bei denen sie die Kraft demokratischer Prozesse und deren positive Wirkung erfahren können.
        </p>
        <p>
          Hackopoly bietet eine leicht zugängliche Möglichkeit, Demokratie spielerisch zu erleben, wie man durch demokratische Mittel eine gerechtere Gesellschaft aufbaut. Da fast jeder Haushalt ein Monopoly-Spiel besitzt, haben wir die Hackopoly-Erweiterung so gestaltet, dass sie einfach zu Hause ausgedruckt und mit einem herkömmlichen Monopoly-Spiel genutzt werden kann. Das Spiel und die Regeln sind Open Source und können von der Community weiterentwickelt und angepasst werden.
        </p>
      </Section>
      <Section>
        <h3>⚂ Vorbereitung</h3>
        <p>
          Die Hackopoly-Erweiterung kann einfach als PDF heruntergeladen und ausgeschnitten werden (coming soon). Diese enthält Charakterbögen, die Auskunft über verschiedene Sonderregeln geben, die die Spielenden betreffen. Gesetzesvorlagen und Ereigniskarten sind ebenfalls enthalten. Die Ereigniskarten werden einfach zu den Ereigniskarten aus dem Monopoly-Spiel hinzugemischt.
        </p>
        <h3>▶︎ Die Regeln</h3>
        <div className="flex gap-5 flex-wrap justify-center md:justify-start">
          <Street text="Zu Beginn zieht jede*r Spielende einen zufälligen Charakterbogen, der das gesamte Spiel über gleich bleibt." />
          <Street text="Immer wenn ein*e Spielende*r an 'Frei Parken' vorbeizieht, hat diese*r die Möglichkeit, einen Gesetzesentwurf zu formulieren. Hierfür muss definiert werden, wen das Gesetz betrifft, wann es ausgeführt wird und was passiert." />
          <Street text="Wenn Spielende eine Ereigniskarte ziehen, kann dies entweder ein Privileg oder eine Herausforderung sein, die bis zum Ende des Spiels gelten, z.B. ein Unfall. Oder es kann ein globales Ereignis sein, das alle Spielenden in gewisser Weise betrifft, z.B. eine Flut." />
        </div>
        <p className="pt-5">Beispielgesetz: Gesetz Kindergeld – alle Spielenden mit Kindern bekommen beim Überqueren des 'Los' 100 Euro extra.</p>
        <h3>◼︎ Das Spielende</h3>
        <p>
          Das Spiel endet, wenn alle Spielenden sich darauf einigen können, eine gerechte Gesellschaft geschaffen zu haben.
        </p>
      </Section>
    </main >
  );
}
