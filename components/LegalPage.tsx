import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Section = { title: string; body: string[] };

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: Section[] }) {
  return (
    <>
      <Header />
      <main className="legal-main">
        <div className="shell legal-shell">
          <Link href="/" className="back-link">← Back to home</Link>
          <p className="eyebrow">Website notice · Counsel review required</p>
          <h1>{title}</h1>
          <p className="legal-intro">{intro}</p>
          <div className="legal-notice">
            This is an early-stage website placeholder and is not final legal advice. It should be reviewed by qualified counsel before substantive product launch.
          </div>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

