'use client';

import { useEffect, useState } from 'react';

type Language = 'de' | 'en';

const content = {
  de: {
    label: 'Portfolio Case · KI als Sparringspartnerin',
    title: 'Die eigene Geschichte neu sehen – und besser erzählen.',
    intro: 'Ein Experiment darüber, wie KI, strukturierte Interviews und persönliches Feedback dabei helfen können, Stärken sichtbar zu machen, einen roten Faden zu finden und die eigene Außendarstellung weiterzuentwickeln.',
    back: 'Zurück zum Portfolio',
    facts: [['Ausgangspunkt', 'CV · LinkedIn · bestehende Website'], ['Methode', 'KI-Interviews · Feedback · Iteration'], ['Ergebnis', 'Ein persönliches Leadership-Portfolio'], ['Rolle der KI', 'Sparring · Struktur · Umsetzung']],
    sections: [
      ['Der Anlass', 'Ich wollte prüfen, ob meine Außendarstellung auf LinkedIn und meiner Website wirklich das zeigt, was mich beruflich ausmacht. CV, LinkedIn-Profil und bisherige Texte enthielten viele Fakten – aber noch keine klare Geschichte über meine Stärken, meine Entwicklung und meine Art zu führen.'],
      ['Fragen statt Selbstdarstellung', 'Die KI analysierte die vorhandenen Inhalte und führte mit mir strukturierte Interviews. Statt nur Formulierungen zu optimieren, fragte sie nach konkreten Situationen, Entscheidungen, Ergebnissen und meiner persönlichen Haltung. So wurden Muster sichtbar, die in einem tabellarischen Lebenslauf kaum auftauchen.'],
      ['Den roten Faden finden', 'Aus Kundenmanagement, Delivery, Transformation und People Leadership entstand keine Zusammenfassung aller Rollen, sondern eine nachvollziehbare Entwicklung. Die zentrale Frage war nicht: Was habe ich alles gemacht? Sondern: Welche Perspektive hat jede Station ergänzt – und wie prägt sie heute meine Führung?'],
      ['Mit anderen Augen iterieren', 'Rückmeldungen von anderen Personen und Reviews direkt auf der Website veränderten Struktur, Gewichtung und Sprache mehrfach. Aussagen wurden präzisiert, Übertreibungen zurückgenommen und wichtige Aspekte stärker hervorgehoben. Das Portfolio entstand nicht in einem Durchgang, sondern in bewussten Schleifen.'],
      ['Mehr als ein Lebenslauf', 'LinkedIn bleibt der Ort für Stationen, Rollen und berufliche Fakten. Dieses Portfolio ergänzt es gezielt: Es erzählt die Geschichten hinter den Stationen, zeigt meine Führungsprinzipien und macht anhand konkreter Cases sichtbar, wie ich denke, entscheide und Veränderung gestalte.'],
      ['Experimentieren bis es passt', 'Ich nutze dieses Projekt, um die Möglichkeiten generativer KI praktisch und kritisch auszuloten. Ich probiere aus, verwerfe, formuliere neu und gestalte weiter, bis Inhalt und Darstellung wirklich zu mir passen. Die Website ist deshalb nicht nur ein Ergebnis, sondern selbst ein fortlaufendes Experiment.'],
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
    facts: [['Starting point', 'CV · LinkedIn · existing website'], ['Method', 'AI interviews · feedback · iteration'], ['Outcome', 'A personal leadership portfolio'], ['Role of AI', 'Sparring · structure · implementation']],
    sections: [
      ['The reason', 'I wanted to test whether my LinkedIn profile and website truly reflected what defines me professionally. My CV and existing copy contained plenty of facts, but not yet a clear story about my strengths, development and way of leading.'],
      ['Questions, not polish', 'AI analysed the existing material and guided me through structured interviews. Instead of merely improving wording, it asked about situations, decisions, outcomes and personal convictions. This revealed patterns that rarely appear in a chronological CV.'],
      ['Finding the thread', 'Customer management, delivery, transformation and people leadership became a coherent development rather than a list of roles. The central question changed from “What have I done?” to “What perspective did each stage add — and how does it shape my leadership today?”'],
      ['Iterating through other eyes', 'Feedback from other people and reviews directly on the website repeatedly changed its structure, emphasis and language. Claims became more precise, overstatement was removed and important themes became more visible. The portfolio emerged through deliberate iterations, not one perfect draft.'],
      ['More than a CV', 'LinkedIn remains the place for roles, dates and professional facts. This portfolio deliberately complements it: it tells the stories behind those stages, explains my leadership principles and uses specific cases to show how I think, decide and shape change.'],
      ['Experimenting until it fits', 'I use this project to explore the possibilities of generative AI in a practical and critical way. I test, discard, rewrite and redesign until the content and presentation genuinely feel like me. The website is therefore not only an outcome, but an ongoing experiment.'],
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
