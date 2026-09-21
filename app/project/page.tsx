'use client';

import { useEffect, useState } from 'react';

type Language = 'de' | 'en';

const content = {
  de: {
    label: 'Portfolio Case · KI als Sparringspartnerin',
    title: 'Die eigene Geschichte neu sehen – und besser erzählen.',
    intro: 'Ein Experiment darüber, wie KI, strukturierte Interviews und persönliches Feedback dabei helfen können, Stärken sichtbar zu machen, einen roten Faden zu finden und die eigene Außendarstellung weiterzuentwickeln.',
    back: 'Zurück zum Portfolio',
    facts: [['Ausgangspunkt', 'CV · LinkedIn-Profil'], ['Methode', 'KI-Interviews · Recherche · Feedback'], ['Ergebnis', 'Portfolio-Website und geschärftes LinkedIn-Profil'], ['Rolle der KI', 'Sparring · Sprache · Umsetzung']],
    sections: [
      ['Der Anlass', 'LinkedIn hatte ich lange gemieden: zu viel Noise und zu viele Beiträge, die vor allem Selbstdarstellung und Reichweite bedienen, ohne für mich wirklich originär interessant zu sein. Für die Jobsuche lag es dennoch nahe, mein Profil dort zu stärken. Statt selbst Artikel zu produzieren, entschied ich mich für einen anderen Weg: ein aussagekräftiges LinkedIn-Profil und ergänzend eine neue Portfolio-Website, die erst in diesem Prozess mit KI entstand.'],
      ['Fragen statt Selbstdarstellung', 'Die KI analysierte CV und LinkedIn-Inhalte und führte mit mir strukturierte Interviews. Viele Muster hatte ich selbst zunächst nicht wahrgenommen. Erst als auch ältere Stationen wie meine Zeit bei SPRYLAB wieder hervorgeholt und mit späteren Erfahrungen verbunden wurden, zeigte sich der rote Faden zwischen Kundenperspektive, Delivery, Veränderung und Führung.'],
      ['Den roten Faden finden', 'Aus Kundenmanagement, Delivery, Transformation und People Leadership entstand keine Zusammenfassung aller Rollen, sondern eine nachvollziehbare Entwicklung. Die zentrale Frage war nicht: Was habe ich alles gemacht? Sondern: Welche Perspektive hat jede Station ergänzt – und wie prägt sie heute meine Führung?'],
      ['Belege suchen und iterieren', 'Gerade die Fragen nach Zahlen und konkreten Belegen brachten mich dazu, noch einmal in alten Unterlagen zu suchen, mit Kolleg:innen zu sprechen und im Internet nach Spuren früherer Projekte zu recherchieren. Zusammen mit Rückmeldungen anderer Personen veränderten diese Funde Struktur, Gewichtung und Sprache der Website mehrfach.'],
      ['Mehr als ein Lebenslauf', 'LinkedIn bleibt für mich der Ort für Stationen, Rollen und berufliche Fakten – nicht für regelmäßige Beiträge zur Reichweitensteigerung. Das Portfolio ergänzt mein gestärktes Profil gezielt: Es erzählt die Geschichten hinter den Stationen und macht anhand konkreter Cases sichtbar, wie ich denke, entscheide und Veränderung gestalte.'],
      ['Sprache gezielt nutzen', 'Large Language Models sind besonders für den Umgang mit Sprache gemacht. Genau diese Stärke möchte ich für Analyse, Interviews und Formulierung nutzen – aber immer mit einem konkreten Ziel. KI soll hier ein vorhandenes Problem lösen und nicht als technische Lösung nach einem beliebigen Anwendungsfall suchen. Ich probiere aus, verwerfe und überarbeite, bis Inhalt und Darstellung wirklich zu mir passen.'],
    ],
    guardrail: 'Verantwortung bleibt beim Menschen',
    guardrailText: 'KI schlägt vor, strukturiert und setzt um. Berufliche Fakten, Bewertung, Korrekturen und Freigabe verantwortet Olivia Ratajzak.',
    reflectionLabel: 'Was ich dabei gelernt habe',
    reflectionTitle: 'Gute Fragen machen sichtbar, was im Lebenslauf zwischen den Zeilen steht.',
    reflectionQuote: 'Das Portfolio zeigt nicht nur, was ich gemacht habe – sondern wie ich denke und führe.',
    reflection: [
      'Die Interviews fühlten sich teilweise wie ein anspruchsvolles Bewerbungsgespräch an. Besonders hilfreich war der Wechsel von Projektdetails zu persönlichen Fragen: Was tue ich zuerst, wenn Orientierung fehlt? Wie treffe ich Entscheidungen? Was sollen Menschen nach der Zusammenarbeit mit mir erlebt haben? Aus spontanen Antworten wurden konkrete Führungsprinzipien.',
      'Die KI half, wiederkehrende Muster zu erkennen und Sprache vorzuschlagen. Fertig waren diese Vorschläge nie. Typische KI-Formulierungen, zu glatte Aussagen und Übertreibungen musste ich erkennen, reduzieren oder verwerfen. Der eigentliche Wert entstand im Dialog: Entwurf, Reaktion, Korrektur und erneuter Versuch.',
      'Durch die Rückschau auf konkrete Cases nahm ich Leistungen bewusster wahr, die im Arbeitsalltag selbstverständlich gewirkt hatten. Gleichzeitig half das Feedback anderer dabei, blinde Flecken zu erkennen und die Gewichtung zu verändern. So wurde aus einer ersten Selbstdarstellung schrittweise ein klareres Bild.',
      'Das Ergebnis ersetzt weder CV noch LinkedIn. Es ergänzt beides um das, wofür dort wenig Raum bleibt: Kontext, Haltung, Entwicklung und Wirkung. Genau darin liegt für mich die Stärke eines Portfolios – und der Grund, warum ich es weiter iterieren werde.',
    ],
  },
  en: {
    label: 'Portfolio Case · AI as a sparring partner',
    title: 'Seeing my own story differently — and telling it better.',
    intro: 'An experiment in how AI, structured interviews and personal feedback can reveal strengths, uncover a coherent thread and improve professional positioning.',
    back: 'Back to the portfolio',
    facts: [['Starting point', 'CV · LinkedIn profile'], ['Method', 'AI interviews · research · feedback'], ['Outcome', 'Portfolio website and a stronger LinkedIn profile'], ['Role of AI', 'Sparring · language · implementation']],
    sections: [
      ['The reason', 'I had avoided LinkedIn for a long time: too much noise and too many posts designed mainly to promote personal visibility rather than share something genuinely interesting to me. Still, using LinkedIn for my job search made sense. Rather than publishing articles to build reach, I chose a different path: strengthening my profile and creating a new portfolio website alongside it — a website that only came into being through this AI-supported process.'],
      ['Questions, not polish', 'AI analysed my CV and LinkedIn content and guided me through structured interviews. I had not initially recognised many of the patterns myself. Only when older stages, including my time at SPRYLAB, were brought back into view and connected with later experience did the thread between customer perspective, delivery, change and leadership become visible.'],
      ['Finding the thread', 'Customer management, delivery, transformation and people leadership became a coherent development rather than a list of roles. The central question changed from “What have I done?” to “What perspective did each stage add — and how does it shape my leadership today?”'],
      ['Finding evidence and iterating', 'Questions about numbers and concrete evidence led me back into old documents, into conversations with former colleagues and onto the internet in search of traces of earlier projects. Together with feedback from other people, these findings repeatedly changed the website’s structure, emphasis and language.'],
      ['More than a CV', 'For me, LinkedIn remains the place for roles, dates and professional facts — not for producing a regular stream of posts to build reach. The portfolio deliberately complements my strengthened profile: it tells the stories behind those stages and uses specific cases to show how I think, decide and shape change.'],
      ['Using language with purpose', 'Large Language Models are built particularly for working with language. That is the strength I want to use for analysis, interviews and writing — always in pursuit of a concrete goal. Here, AI should solve an existing problem rather than act as a technical solution looking for any possible use case. I test, discard and revise until the content and presentation genuinely feel like me.'],
    ],
    guardrail: 'Accountability remains human',
    guardrailText: 'AI proposes, structures and implements. Olivia Ratajzak remains responsible for professional facts, judgement, corrections and approval.',
    reflectionLabel: 'What I learned',
    reflectionTitle: 'Good questions reveal what sits between the lines of a CV.',
    reflectionQuote: 'The portfolio shows not only what I have done, but how I think and lead.',
    reflection: [
      'Parts of the interviews felt like a demanding job interview. The most useful shift was from project detail to personal questions: What do I do first when clarity is missing? How do I make decisions? What should people experience when working with me? Spontaneous answers became tangible leadership principles.',
      'AI helped identify recurring patterns and suggest language. Those suggestions were never automatically final. Typical AI phrasing, overly smooth claims and exaggeration had to be recognised, reduced or rejected. The real value came from the dialogue: draft, reaction, correction and another attempt.',
      'Looking back at specific cases made me recognise achievements that had felt ordinary in day-to-day work. Feedback from others also exposed blind spots and changed the emphasis. What began as self-presentation gradually became a clearer and more grounded picture.',
      'The result replaces neither a CV nor LinkedIn. It adds what those formats leave little room for: context, conviction, development and impact. That is the value of a portfolio for me — and why I will keep iterating it.',
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
