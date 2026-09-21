'use client';

import { useEffect, useState } from 'react';

type Language = 'de' | 'en';

const content = {
  de: {
    label: 'Projektdokumentation · Review-Entwurf',
    title: 'Mit KI von zwei CVs zu einem belegbaren Leadership-Portfolio.',
    intro: 'Wie aus zwei unterschiedlich positionierten Lebensläufen, strukturierten Case-Interviews und wiederholten Reviews eine zweisprachige Bewerbungswebsite entstand.',
    back: 'Zurück zum Portfolio',
    facts: [['Zeitraum', 'September 2026'], ['Rolle', 'Product Ownerin der eigenen Positionierung'], ['Ergebnis', 'Zweisprachige, öffentlich verfügbare Website'], ['Arbeitsweise', 'Menschlich gesteuert · KI-unterstützt']],
    sections: [
      ['01 · Ausgangslage', 'Zwei Lebensläufe setzten unterschiedliche Schwerpunkte: Team Leadership sowie Consulting und Projektmanagement. Für die Website sollte daraus keine beliebige Sammlung von Stationen entstehen, sondern eine gemeinsame Positionierung mit nachvollziehbaren Belegen.'],
      ['02 · Mein Beitrag', 'Ich lieferte die fachlichen Quellen, führte die Case-Interviews mit konkreten Projektinformationen weiter, korrigierte Aussagen und Zahlen und entschied über Positionierung, Gestaltung, Datenschutz und Veröffentlichung. Dazu gehörten auch viele kleine Review-Schleifen direkt auf der Website.'],
      ['03 · Beitrag der KI', 'Generative KI unterstützte bei der Analyse der CVs, formulierte gezielte Interviewfragen, strukturierte die Cases, entwickelte Textentwürfe und setzte die Website technisch um. Sie diente als Sparringspartnerin und Produktionswerkzeug – nicht als Quelle für berufliche Fakten.'],
      ['04 · Qualitätssicherung', 'Aussagen wurden nur übernommen, wenn sie aus den CVs oder den Interviews ableitbar waren. Unklare Größen, Verantwortungsbereiche und Wirkungen wurden nachgefragt. Formulierungen wurden bewusst abgeschwächt, wenn keine belastbare Messung vorlag. Jede öffentliche Angabe und jede gestalterische Änderung blieb unter meiner Kontrolle.'],
      ['05 · Entscheidungen', 'Die Website verbindet People Leadership und komplexe Delivery in einer Kernpositionierung. Fünf Cases zeigen unterschiedliche Kontexte: Teamentwicklung, AWS-Migration, Project Governance, digitales Publishing und Data Science. Der vollständige CV bleibt geschützt und wird nur persönlich geteilt.'],
      ['06 · Ergebnis und nächster Review', 'Entstanden ist eine responsive, zweisprachige Portfolio-Website mit belegbaren Cases, Führungsprinzipien und direktem Kontaktweg. Diese Dokumentation ist ein Review-Entwurf. Nach fachlicher Freigabe wird sie Teil des öffentlichen Portfolios; anschließend können Rückmeldungen und Nutzungserkenntnisse als nächste Iteration ergänzt werden.'],
    ],
    guardrail: 'Verantwortung bleibt beim Menschen',
    guardrailText: 'KI schlägt vor, strukturiert und setzt um. Berufliche Fakten, Bewertung, Korrekturen und Freigabe verantwortet Olivia Ratajzak.',
    reflectionLabel: '07 · Persönlicher Rückblick',
    reflectionTitle: 'Die Interviews haben nicht nur die Website verändert, sondern auch meinen Blick auf die eigene Laufbahn.',
    reflectionQuote: 'Ich schaffe nach Veränderungen zuerst Orientierung und Vertrauen.',
    reflection: [
      'Viele Fragen ähnelten denen eines persönlichen Bewerbungsgesprächs. Damit war die Arbeit an der Website zugleich eine intensive Vorbereitung auf kommende Interviews. Obwohl ich selbst bereits Bewerbungsgespräche geführt habe, überraschte mich besonders ein Formatwechsel: „Nun sollten wir aus den Cases deine persönliche Haltung ableiten. Bitte vervollständige spontan diese fünf Sätze …“ Statt nach weiteren Projektdetails zu fragen, ging es plötzlich um meine Haltung als Führungskraft.',
      'Gerade dieses spontane Format funktionierte für mich sehr gut. Aus den Antworten ließen sich meine Führungsprinzipien ableiten und zu einem klaren Satz verdichten: „Ich schaffe nach Veränderungen zuerst Orientierung und Vertrauen.“ Das Ergebnis zeigt, was mir bei Führung tatsächlich wichtig ist. Die KI-Entwürfe waren dabei nicht automatisch fertig. Typische Muster wie Dreierstrukturen oder überzeichnete Adjektive mussten geprüft und reduziert werden. Trotzdem erkenne ich viele meiner ursprünglichen Formulierungen im Ergebnis wieder – nur präziser und klarer, als ich sie allein vermutlich formuliert hätte.',
      'Der Algorithmus versuchte, aus den einzelnen Stationen eine kohärente Geschichte zu entwickeln. Dadurch sah ich meine Laufbahn noch einmal durch andere Augen. Beim ersten Case, ein neues Cloud-Consulting-Team nach Reorganisation und Merger arbeitsfähig zu machen, erkannte ich durch die Zusammenfassung erst, was wir tatsächlich erreicht hatten. Während der ersten Wochen hatten wir vor allem versucht, als Team zusammenzufinden; die Leistung dahinter hatte ich selbst kaum benannt.',
      'Für die Case Studies habe ich tiefer gegraben und Kennzahlen, Budgets, Teamgrößen und Ergebnisse erneut zusammengetragen. Vieles hatte ich während der Projekte nicht mit Blick auf eine spätere Selbstdarstellung festgehalten. Diese Reise in die Vergangenheit erinnerte mich daran, erreichte Ziele bewusster wahrzunehmen und Erfolge auch zu feiern.',
      'Im Verlauf tauchten weitere prägende Themen auf, darunter das Data-Science-Programm für einen Chemiekonzern und die Initiative für Lean In Circles. Ohne die Nachfragen wären sie vermutlich untergegangen, weil sie lange zurücklagen oder nicht unmittelbar zu meiner aktuellen Stellenbezeichnung gehörten. Gerade sie zeigen jedoch zusätzliche Erfahrungen, die mich fachlich und als Führungskraft geprägt haben.',
      'Auf dieser Website kann ich deshalb mehr von meiner beruflichen Geschichte erzählen als in einem kurzen Lebenslauf, der heute zugleich für Menschen und automatisierte Auswahlprozesse funktionieren muss.',
    ],
  },
  en: {
    label: 'Project documentation · Review draft',
    title: 'From two CVs to an evidence-led leadership portfolio with AI.',
    intro: 'How two differently positioned CVs, structured case interviews and repeated reviews became a bilingual application website.',
    back: 'Back to the portfolio',
    facts: [['Period', 'September 2026'], ['Role', 'Product owner of my own positioning'], ['Outcome', 'Bilingual, publicly accessible website'], ['Approach', 'Human-led · AI-assisted']],
    sections: [
      ['01 · Starting point', 'Two CVs emphasised different strengths: team leadership, and consulting and project management. The website needed a shared positioning supported by evidence rather than a generic collection of career stages.'],
      ['02 · My contribution', 'I supplied the professional sources, developed the case interviews with concrete project information, corrected claims and figures, and made the decisions on positioning, design, privacy and publication. This included many small review loops directly on the website.'],
      ['03 · Contribution of AI', 'Generative AI supported the CV analysis, produced focused interview questions, structured the cases, drafted copy and implemented the website. It acted as a sparring partner and production tool – not as a source of professional facts.'],
      ['04 · Quality assurance', 'Claims were included only when supported by the CVs or interviews. Unclear figures, areas of responsibility and outcomes were challenged. Wording was deliberately qualified when no robust measurement existed. Every public statement and design change remained under my control.'],
      ['05 · Decisions', 'The website connects people leadership and complex delivery in one core positioning. Five cases cover team development, AWS migration, project governance, digital publishing and data science. The full CV remains protected and is shared personally only.'],
      ['06 · Outcome and next review', 'The result is a responsive bilingual portfolio with evidence-led cases, leadership principles and a direct contact route. This documentation is a review draft. Following factual approval, it can become part of the public portfolio; feedback and usage insights can then inform the next iteration.'],
    ],
    guardrail: 'Accountability remains human',
    guardrailText: 'AI proposes, structures and implements. Olivia Ratajzak remains responsible for professional facts, judgement, corrections and approval.',
    reflectionLabel: '07 · Personal reflection',
    reflectionTitle: 'The interviews changed not only the website, but also the way I see my own career.',
    reflectionQuote: 'After change, I first create orientation and trust.',
    reflection: [
      'Many questions resembled those asked in a personal job interview. Building the website therefore became intensive preparation for future interviews. Although I have conducted candidate interviews myself, one change of format particularly surprised me: “Now we should derive your personal stance from the cases. Please complete these five sentences spontaneously …” Instead of asking for more project detail, the interview suddenly focused on my attitude as a leader.',
      'That spontaneous format worked particularly well for me. My answers revealed my leadership principles and distilled them into one clear sentence: “After change, I first create orientation and trust.” The result captures what truly matters to me in leadership. The AI drafts were not automatically finished. Recognisable habits such as rules of three or exaggerated adjectives had to be challenged and reduced. Even so, I can see many of my original interview formulations in the final result – expressed more precisely and clearly than I would probably have achieved alone.',
      'The algorithm tried to form a coherent story from the individual stages of my career. This allowed me to see my experience through another set of eyes. In the first case – making a new cloud consulting team effective after a reorganisation and merger – the summary helped me recognise what we had actually achieved. During those first weeks, we had mainly focused on coming together as a team; I had barely named the achievement behind that work.',
      'For the case studies, I went back into the detail and reconstructed figures, budgets, team sizes and results. During the projects, I had not recorded everything with later self-presentation in mind. This journey into the past reminded me to acknowledge achieved goals more consciously and to celebrate successes.',
      'Further formative topics emerged along the way, including the data science programme for a chemicals group and the Lean In Circles initiative. Without the follow-up questions, they might have disappeared because they were either further in the past or not directly connected to my current job title. Yet both show additional experience that shaped me professionally and as a leader.',
      'This website therefore lets me tell more of my professional story than a short CV that must now work for both people and automated selection processes.',
    ],
  },
};

export default function ProjectDocumentation() {
  const [lang, setLang] = useState<Language>('en');
  useEffect(() => {
    setLang(navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en');
  }, []);
  const t = content[lang];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return <main className="documentation-page">
    <header className="documentation-header">
      <a className="footer-name" href={`${basePath}/`}>Olivia Ratajzak<span>.</span></a>
      <a className="documentation-header-back" href={`${basePath}/`}>← {t.back}</a>
      <div className="language"><button className={lang === 'de' ? 'active' : ''} onClick={() => setLang('de')} aria-pressed={lang === 'de'}>DE</button><span>/</span><button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button></div>
    </header>
    <article>
      <section className="documentation-hero">
        <p className="eyebrow">{t.label}</p>
        <h1>{t.title}</h1>
        <p className="documentation-intro">{t.intro}</p>
      </section>
      <dl className="documentation-facts">{t.facts.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
      <div className="documentation-grid">{t.sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}</div>
      <section className="documentation-reflection">
        <p className="eyebrow">{t.reflectionLabel}</p>
        <h2>{t.reflectionTitle}</h2>
        <blockquote>{t.reflectionQuote}</blockquote>
        <div>{t.reflection.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <aside className="documentation-guardrail"><p className="eyebrow">Responsible AI</p><h2>{t.guardrail}</h2><p>{t.guardrailText}</p></aside>
    </article>
  </main>;
}
