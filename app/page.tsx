"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
type L = "de" | "en";
const c = {
  de: {
    nav: ["Werdegang", "Führung", "Impact", "Antrieb", "Kontakt"],
    ey: "Teamlead · People · Delivery · Transformation",
    title: (
      <>
        Klarheit für Menschen.
        <br />
        <em>Struktur für Veränderung.</em>
      </>
    ),
    intro:
      "Ich führe crossfunktionale Tech-Teams und schaffe Strukturen, die Orientierung geben, Eigenverantwortung ermöglichen und Veränderung umsetzbar machen.",
    context:
      "Mein Fokus liegt dort, wo Menschen, Zusammenarbeit und organisatorische Veränderung zusammenkommen.",
    cta: "So führe ich",
    stats: [
      ["18 Jahre", "Berufserfahrung"],
      ["8", "Mitarbeitende im Team"],
      ["bis 4 Mio. €", "Projektverantwortung"],
    ],
    jk: "Mein Weg in Führung",
    jt: "Unterschiedliche Rollen. Eine konsequente Entwicklung.",
    ji: "Jede Station meiner beruflichen Entwicklung hat eine Perspektive hinzugefügt, die heute meine Art zu führen prägt.",
    journey: [
      [
        "2008",
        "Kunde & Business",
        "Bedürfnisse und Perspektiven verstehen",
        "Sales und Account Management haben mich gelehrt, genau zuzuhören, unterschiedliche Interessen zu verstehen und Kundenbedürfnisse mit wirtschaftlichen Anforderungen zusammenzubringen.",
      ],
      [
        "2019",
        "Delivery & Komplexität",
        "Aus Unklarheit handlungsfähige Strukturen machen",
        "Im IT-Projektmanagement lernte ich, komplexe Zusammenhänge schnell zu erfassen, technische Teams und Stakeholder zusammenzubringen und Verantwortung für Delivery zu übernehmen.",
      ],
      [
        "Heute",
        "Menschen & Organisation",
        "Rahmen schaffen, in denen Teams erfolgreich sein können",
        "Heute richte ich meinen Blick über das eigene Team hinaus: Ich gestalte Schnittstellen, Arbeitsweisen und Strukturen so, dass Zusammenarbeit auch über Team- und Bereichsgrenzen hinweg funktioniert.",
      ],
    ],
    claim:
      "Heute führe ich aus drei Perspektiven: Menschen, Delivery und Business.",
    lk: "Wie ich führe",
    lt: "Klarheit schaffen, damit andere Verantwortung übernehmen können.",
    li: "Für mich bedeutet Führung, die richtigen Perspektiven zusammenzubringen, Komplexität verständlich zu machen und Strukturen zu schaffen, in denen Menschen selbstständig handeln können.",
    principles: [
      [
        "Erst verstehen, dann verändern",
        "Ich höre zu, frage nach und beziehe bewusst die Menschen ein, die das relevante Wissen aus ihrer täglichen Arbeit mitbringen.",
      ],
      [
        "Komplexität in Struktur übersetzen",
        "Ich mache aus unterschiedlichen Fachlichkeiten, Interessen und Abhängigkeiten klare Rollen, Schnittstellen und Entscheidungswege.",
      ],
      [
        "Klarheit ermöglicht Eigenverantwortung",
        "Gute Strukturen schaffen Orientierung darüber, wer wofür Verantwortung trägt und selbst entscheiden kann.",
      ],
      [
        "Systeme verbessern, nicht nur Probleme lösen",
        "Wenn Reibung wiederholt entsteht, suche ich nach der Ursache und schaffe Arbeitsweisen, die auch das nächste Mal funktionieren.",
      ],
    ],
    fk: "Featured Impact · Transformation & Leadership",
    ft: "Ein neues Team aufbauen und gleichzeitig zwei Organisationen zusammenbringen",
    fi: "Bei der Integration von kreuzwerker in die Public Cloud Group mussten rund 60 Mitarbeitende in neue Business Areas integriert und gleichzeitig laufende Kundenprojekte, Tools und Delivery-Prozesse überführt werden.",
    fr: "Ich brachte auf kreuzwerker-Seite mein Wissen über Kunden, Projekte und Teams in die Integration des AWS-Bereichs ein und gestaltete gemeinsam mit dem Head of Delivery und weiteren Teamleads neue Delivery- und Teamstrukturen.",
    fp: [
      [
        "Strukturen übersetzen statt einfach übertragen",
        "Gemeinsam mit Domain-Experten überführte ich laufende AWS-Projekte in die neue Tool-Landschaft. Unterschiedliche Abrechnungsmodelle, Projektzuschnitte und AWS Funding erforderten individuelle Lösungen mit Service Management und Finance. Parallel gestaltete ich neue Delivery-Strukturen mit – von Dokumentation und Reporting bis zu Schnittstellen mit Sales und Technology.",
      ],
      [
        "Ein neues Team bewusst formen",
        "Als ein weiteres Consulting-Team entstand, gestaltete ich dessen Zusammensetzung als Teamlead von Beginn an mit. Regelmäßige persönliche Treffen halfen dem deutschlandweit verteilten Team, die Stärken der anderen besser kennenzulernen und bei neuen Projekten schneller zusammenzufinden.",
      ],
    ],
    fs: [
      ["Umfang der Integration", "~60 Mitarbeitende"],
      ["Mein Team", "6 → 8 Teammitglieder"],
      ["Delivery", "Neue gemeinsame Strukturen"],
      ["Übergang", "Laufende Projekte migriert"],
    ],
    learn:
      "Gute Transformation entsteht nicht am Reißbrett. Die entscheidenden Details kennen oft die Menschen, die täglich mit ihnen arbeiten.",
    bk: "Leadership beyond my role · Lean In Circles",
    bt: "Einen Raum schaffen, den es vorher nicht gab.",
    bx: "Wenn ich einen Bedarf sehe und Gestaltungsspielraum habe, gehe ich auch über meine unmittelbare Rolle hinaus. Bei einem Leadership-Meeting waren neben mir nur zwei weitere Frauen im Raum. Ich wollte verstehen, was wir konkret verändern können – und stieß auf Lean In Circles. Obwohl die Notwendigkeit nicht überall sofort gesehen wurde, gewann ich HR, Kolleg:innen und den CEO für die Idee. Daraus entstanden drei bereichsübergreifende Peer-Mentoring-Gruppen für rund 18 Frauen.",
    bo: "Heute organisieren sich die Circles weitgehend selbst. Mein Ziel: Frauen sichtbar machen, vernetzen und in ihrer Entwicklung stärken.",
    mk: "More Impact",
    mt: "Drei weitere Beispiele, wie ich Verantwortung wirksam mache.",
    more: [
      [
        "Recover",
        "Project Recovery",
        "Ein gefährdetes AWS-Migrationsprojekt mit mehr als 30 Servern neu strukturiert, Entscheidungen auf C-Level ermöglicht und bis zum vollständigen Data-Center-Exit geführt.",
      ],
      [
        "Improve",
        "Sales → Delivery",
        "Eine verbindliche Übergabe mit klaren Kerninformationen, Kick-offs und Governance etabliert; nach sechs Monaten waren 14 von 20 neuen Projekten dokumentiert übergeben.",
      ],
      [
        "Lead",
        "Data Science",
        "Zwei Workstreams und zehn Projektmitglieder in einem fast 4 Mio. € großen R&D-Projekt gesteuert und Recommender sowie Chatbot vom Proof of Concept bis zum MVP gebracht.",
      ],
    ],
    dk: "Was mich antreibt",
    dt: "Neugier bringt mich ins Handeln. Wirkung treibt mich weiter.",
    dx: "Mich reizen Situationen, in denen etwas noch nicht fertig gedacht ist: ein Team, das Orientierung braucht, eine Organisation in Veränderung oder eine neue Technologie, die andere Möglichkeiten eröffnet. Ich möchte verstehen, was besser funktionieren könnte – und es ausprobieren. Genau deshalb reizt mich Führung: Gemeinsam mit anderen kann ich die Bedingungen verbessern, unter denen gute Arbeit entsteht.",
    dw: "Verstehen. Ausprobieren. Verbessern. Weitergeben.",
    ai: "Wie ich KI für dieses Portfolio eingesetzt habe",
    ek: "Erfahrung",
    et: "Stationen, die meine Perspektive geprägt haben.",
    timeline: [
      ["seit 2023", "Public Cloud Group", "Team Lead · Cloud Consulting"],
      [
        "2019–2023",
        "The unbelievable Machine Company",
        "IT Project & Service Management",
      ],
      ["2015–2019", "SPRYLAB", "Account Management · Digitale Transformation"],
      ["2008–2015", "Marketing & Sales", "Kunden- und Business-Perspektive"],
    ],
    el: "Alle Stationen und Details auf LinkedIn",
    ck: "Kontakt",
    ct: "Lassen Sie uns über gute Führung sprechen.",
    cx: "Ich suche eine Teamlead- oder vergleichbare Führungsrolle für crossfunktionale Tech-Teams – in Berlin oder remote first, mit Raum für regelmäßige persönliche Zusammenarbeit.",
    linkedin: "Auf LinkedIn verbinden",
    email: "E-Mail schreiben",
    legal: "Impressum",
    close: "Impressum schließen",
    skip: "Zum Inhalt springen",
  },
  en: {
    nav: ["Journey", "Leadership", "Impact", "Motivation", "Contact"],
    ey: "Team Lead · People · Delivery · Transformation",
    title: (
      <>
        Clarity for people.
        <br />
        <em>Structure for change.</em>
      </>
    ),
    intro:
      "I lead cross-functional tech teams and create structures that provide clarity, enable ownership and make change workable.",
    context:
      "My focus is where people, collaboration and organisational change come together.",
    cta: "How I lead",
    stats: [
      ["18 years", "of experience"],
      ["8", "people in my team"],
      ["up to €4m", "project responsibility"],
    ],
    jk: "My journey into leadership",
    jt: "Different roles. One continuous development.",
    ji: "Each stage of my career added a perspective that shapes how I lead today.",
    journey: [
      [
        "2008",
        "Customer & business",
        "Understanding needs and perspectives",
        "Sales and account management taught me to listen closely, understand different interests and connect customer needs with commercial realities.",
      ],
      [
        "2019",
        "Delivery & complexity",
        "Turning ambiguity into workable structures",
        "In IT project management, I learned to understand complexity quickly, align technical teams and stakeholders and take responsibility for delivery.",
      ],
      [
        "Today",
        "People & organisation",
        "Creating the conditions for teams to succeed",
        "Today, I look beyond my own team: I shape interfaces, ways of working and structures so collaboration works across team and business-area boundaries.",
      ],
    ],
    claim:
      "Today, I lead from three perspectives: people, delivery and business.",
    lk: "How I lead",
    lt: "Creating clarity so others can take ownership.",
    li: "Leadership means bringing the right perspectives together, making complexity understandable and creating structures in which people can act independently.",
    principles: [
      [
        "Understand before changing",
        "I listen, ask questions and deliberately involve the people who hold the relevant knowledge from their day-to-day work.",
      ],
      [
        "Translate complexity into structure",
        "I turn different disciplines, interests and dependencies into clear roles, interfaces and decision paths.",
      ],
      [
        "Clarity enables ownership",
        "Good structures provide orientation around responsibility and where people can make decisions themselves.",
      ],
      [
        "Improve systems, not just problems",
        "When friction keeps recurring, I look for the underlying cause and create ways of working that also work the next time.",
      ],
    ],
    fk: "Featured Impact · Transformation & Leadership",
    ft: "Building a new team while bringing two organisations together",
    fi: "Integrating kreuzwerker into Public Cloud Group meant moving around 60 people into new business areas while ongoing customer projects, tools and delivery processes also had to be transferred.",
    fr: "On the kreuzwerker side, I brought my knowledge of customers, projects and teams into the AWS integration and worked with the Head of Delivery and fellow Team Leads to shape new delivery and team structures.",
    fp: [
      [
        "Translate structures rather than simply transfer them",
        "Together with domain experts, I moved ongoing AWS projects into the new tool landscape. Different billing models, project setups and AWS Funding required tailored solutions with Service Management and Finance. In parallel, I helped shape new delivery structures — from documentation and reporting to interfaces with Sales and Technology.",
      ],
      [
        "Shape a new team deliberately",
        "When another consulting team was formed, I helped shape its composition from day one as its Team Lead. Regular in-person sessions helped the Germany-wide team understand each other’s strengths and work together faster on new projects.",
      ],
    ],
    fs: [
      ["Integration scope", "~60 people"],
      ["My team", "6 → 8 team members"],
      ["Delivery", "New shared structures"],
      ["Transition", "Ongoing projects migrated"],
    ],
    learn:
      "Good transformation is not designed in isolation. The crucial details often sit with the people doing the work every day.",
    bk: "Leadership beyond my role · Lean In Circles",
    bt: "Creating a space that did not exist before.",
    bx: "When I see a need and have room to shape it, I step beyond my immediate role. At a leadership meeting, only two other women were in the room. I wanted to understand what we could change in practice — and discovered Lean In Circles. Although the need was not immediately recognised everywhere, I gained support from HR, colleagues and the CEO. This led to three cross-business peer mentoring groups for around 18 women.",
    bo: "Today, the circles are largely self-organised. My aim is to increase women’s visibility, build connections and support their development.",
    mk: "More Impact",
    mt: "Three more examples of turning responsibility into results.",
    more: [
      [
        "Recover",
        "Project Recovery",
        "Restructured an at-risk AWS migration with more than 30 servers, enabled C-level decisions and guided it through to a complete data-centre exit.",
      ],
      [
        "Improve",
        "Sales → Delivery",
        "Established a reliable handover with essential information, kick-offs and governance; after six months, 14 of 20 new projects had been documented and transferred.",
      ],
      [
        "Lead",
        "Data Science",
        "Led two workstreams and ten contributors in an almost €4m R&D project, taking a recommender and chatbot from proof of concept to MVP.",
      ],
    ],
    dk: "What drives me",
    dt: "Curiosity gets me started. Impact keeps me going.",
    dx: "I am drawn to situations where something has not been fully figured out yet: a team that needs clarity, an organisation going through change or a new technology opening up different possibilities. I want to understand what could work better — and put it into practice. That is why leadership appeals to me: together with others, I can improve the conditions in which good work happens.",
    dw: "Understand. Experiment. Improve. Enable others.",
    ai: "How I used AI to build this portfolio",
    ek: "Experience",
    et: "The roles that shaped my perspective.",
    timeline: [
      ["since 2023", "Public Cloud Group", "Team Lead · Cloud Consulting"],
      [
        "2019–2023",
        "The unbelievable Machine Company",
        "IT Project & Service Management",
      ],
      ["2015–2019", "SPRYLAB", "Account Management · Digital Transformation"],
      ["2008–2015", "Marketing & Sales", "Customer and business perspective"],
    ],
    el: "See all roles and details on LinkedIn",
    ck: "Contact",
    ct: "Let’s talk about good leadership.",
    cx: "I am looking for a Team Lead or comparable leadership role for cross-functional tech teams — in Berlin or remote first, with room for regular in-person collaboration.",
    linkedin: "Connect on LinkedIn",
    email: "Send an email",
    legal: "Legal notice",
    close: "Close legal notice",
    skip: "Skip to content",
  },
};
const navTargets = ["#journey", "#leadership", "#impact", "#drive", "mailto:ratajzak@gmail.com"];
function H({ k, t, light = false }: { k: string; t: string; light?: boolean }) {
  return (
    <div className={"heading" + (light ? " light" : "")}>
      <p className="eyebrow">{k}</p>
      <h2>{t}</h2>
    </div>
  );
}
export default function Home() {
  const [lang, setLang] = useState<L>("en"),
    [legal, setLegal] = useState(false);
  useEffect(
    () =>
      setLang(navigator.language.toLowerCase().startsWith("de") ? "de" : "en"),
    [],
  );
  const t = c[lang];
  return (
    <main id="top">
      <a className="skip" href="#content">
        {t.skip}
      </a>
      <header>
        <a className="brand" href="#top">
          OR<i>.</i>
          <span>Olivia Ratajzak</span>
        </a>
        <nav>
          {t.nav.map((x, i) => (
            <a key={x} href={navTargets[i]}>
              {x}
            </a>
          ))}
        </nav>
        <div className="lang">
          <button
            className={lang === "de" ? "on" : ""}
            onClick={() => setLang("de")}
          >
            DE
          </button>
          /
          <button
            className={lang === "en" ? "on" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </header>
      <div id="content">
        <section className="hero">
          <div>
            <p className="eyebrow">{t.ey}</p>
            <h1>{t.title}</h1>
            <p className="intro">{t.intro}</p>
            <p className="context">{t.context}</p>
            <div className="actions">
              <a className="btn primary" href="#leadership">
                {t.cta}
                <b>↘</b>
              </a>
              <a
                className="btn"
                href="https://www.linkedin.com/in/olivia-ratajzak/"
                target="_blank"
              >
                LinkedIn<b>↗</b>
              </a>
            </div>
          </div>
          <div className="portrait">
            <i />
            <b />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/olivia-ratajzak.png`}
              alt="Olivia Ratajzak"
              width={360}
              height={470}
              priority
            />
          </div>
        </section>
        <section className="stats">
          {t.stats.map((x) => (
            <div key={x[1]}>
              <strong>{x[0]}</strong>
              <span>{x[1]}</span>
            </div>
          ))}
        </section>
        <section className="section journey" id="journey">
          <H k={t.jk} t={t.jt} />
          <p className="sectionIntro">{t.ji}</p>
          <div className="journeyGrid">
            {t.journey.map((x) => (
              <article key={x[0]}>
                <time>{x[0]}</time>
                <small>{x[1]}</small>
                <h3>{x[2]}</h3>
                <p>{x[3]}</p>
              </article>
            ))}
          </div>
          <blockquote className="claim">{t.claim}</blockquote>
        </section>
        <section className="section leadership" id="leadership">
          <H k={t.lk} t={t.lt} light />
          <p className="sectionIntro">{t.li}</p>
          <div className="principles">
            {t.principles.map((x, i) => (
              <article key={x[0]}>
                <span>0{i + 1}</span>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section featured" id="impact">
          <H k={t.fk} t={t.ft} />
          <div className="impactStory">
            <article>
              <span>{lang === "de" ? "Ausgangslage" : "Starting point"}</span>
              <p>{t.fi}</p>
            </article>
            <article>
              <span>{lang === "de" ? "Gemeinsamer Beitrag" : "Shared effort"}</span>
              <p>{t.fr}</p>
            </article>
            <article className="impactWork">
              <span>{lang === "de" ? "In der Umsetzung" : "In practice"}</span>
              <div>
                {t.fp.map((x) => (
                  <section key={x[0]}>
                    <h3>{x[0]}</h3>
                    <p>{x[1]}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>
          <dl className="metrics">
            {t.fs.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <blockquote className="learn">{t.learn}</blockquote>
        </section>
        <section className="section beyond">
          <H k={t.bk} t={t.bt} />
          <div className="beyondCopy">
            <p>{t.bx}</p>
            <strong>{t.bo}</strong>
          </div>
        </section>
        <section className="section more">
          <H k={t.mk} t={t.mt} />
          <div className="moreGrid">
            {t.more.map((x) => (
              <article key={x[1]}>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section drive" id="drive">
          <H k={t.dk} t={t.dt} light />
          <div className="driveCopy">
            <p>{t.dx}</p>
            <strong>{t.dw}</strong>
            <a href="/project">{t.ai} →</a>
          </div>
        </section>
        <section className="section contact" id="contact">
          <p className="eyebrow">{t.ck}</p>
          <h2>{t.ct}</h2>
          <p>{t.cx}</p>
          <div className="actions">
            <a
              className="btn primary"
              href="https://www.linkedin.com/in/olivia-ratajzak/"
              target="_blank"
            >
              {t.linkedin}
              <b>↗</b>
            </a>
            <a className="btn" href="mailto:ratajzak@gmail.com">
              {t.email}
              <b>→</b>
            </a>
          </div>
        </section>
      </div>
      <footer>
        <span>Olivia Ratajzak</span>
        <span>Leadership · Delivery · Transformation</span>
        <button onClick={() => setLegal(true)}>{t.legal}</button>
      </footer>
      {legal && (
        <div className="modalBg" onMouseDown={() => setLegal(false)}>
          <section
            className="modal"
            role="dialog"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button onClick={() => setLegal(false)} aria-label={t.close}>
              ×
            </button>
            <p className="eyebrow">{t.legal}</p>
            <h2>Olivia Ratajzak</h2>
            <p>
              Bahnhofstraße 126
              <br />
              13127 Berlin
              <br />
              Deutschland
            </p>
            <p>
              <a href="mailto:ratajzak@gmail.com">ratajzak@gmail.com</a>
            </p>
          </section>
        </div>
      )}
    </main>
  );
}
