import type { Metadata } from "next";
import { MarketingPage } from "../../components/MarketingPage";
import { PilotCta } from "../../components/PilotCta";
import { siteContent } from "../../content/site";

export const metadata: Metadata = {
  title: "Enterprise AI Use Cases | Mantle Intelligence",
  description: "Govern document review, internal analysis, professional services, research, education and regulated AI workflows.",
  alternates: { canonical: "/use-cases/" },
  openGraph: { url: "/use-cases/", title: "Enterprise AI Use Cases", description: "Start with one real governed workflow." },
};

export default function UseCasesPage() {
  return (
    <MarketingPage eyebrow="Use cases" title="Start with a workflow, not a transformation programme." intro="Mantle is designed around practical work where AI creates value and data, permissions or accountability still matter.">
      <section className="route-section route-paper"><div className="shell"><p className="swipe-cue" aria-hidden="true">Swipe →</p><div className="use-case-grid mobile-rail" role="region" aria-label="Use cases. Swipe horizontally on smaller screens.">{siteContent.useCases.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{item.title}</h2><p>{item.body}</p></article>)}</div></div></section>
      <PilotCta />
    </MarketingPage>
  );
}
