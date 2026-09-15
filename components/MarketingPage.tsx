import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import type { Locale, PublicRoute } from "../content/i18n";

type MarketingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  locale?: Locale;
  route?: PublicRoute;
};

export function MarketingPage({ eyebrow, title, intro, children, locale = "en", route = "" }: MarketingPageProps) {
  return (
    <>
      <Header locale={locale} route={route} />
      <main className="route-main" lang={locale === "zh-hk" ? "zh-Hant" : locale === "zh-cn" ? "zh-Hans" : "en"}>
        <header className="route-hero">
          <div className="shell route-hero-grid">
            <p className="eyebrow">{eyebrow}</p>
            <div><h1>{title}</h1><p>{intro}</p></div>
          </div>
        </header>
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
