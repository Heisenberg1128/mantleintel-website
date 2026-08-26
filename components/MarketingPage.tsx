import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type MarketingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function MarketingPage({ eyebrow, title, intro, children }: MarketingPageProps) {
  return (
    <>
      <Header />
      <main className="route-main">
        <header className="route-hero">
          <div className="shell route-hero-grid">
            <p className="eyebrow">{eyebrow}</p>
            <div><h1>{title}</h1><p>{intro}</p></div>
          </div>
        </header>
        {children}
      </main>
      <Footer />
    </>
  );
}
