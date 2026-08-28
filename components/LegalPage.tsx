import { Footer } from "./Footer";
import { Header } from "./Header";
import { interfaceCopy, localizedPath, type Locale, type PublicRoute } from "../content/i18n";

type Section = { title: string; body: readonly string[] };

export function LegalPage({ title, intro, sections, locale = "en", route }: { title: string; intro: string; sections: readonly Section[]; locale?: Locale; route: Extract<PublicRoute, "privacy" | "terms"> }) {
  const ui = interfaceCopy[locale];
  return (
    <>
      <Header locale={locale} route={route} />
      <main className="legal-main" lang={locale === "zh-hk" ? "zh-Hant" : locale === "zh-cn" ? "zh-Hans" : "en"}>
        <div className="shell legal-shell">
          <a href={localizedPath(locale)} className="back-link">{ui.backHome}</a>
          <p className="eyebrow">{ui.legalEyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-intro">{intro}</p>
          <div className="legal-notice">
            {ui.legalNotice}
          </div>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
