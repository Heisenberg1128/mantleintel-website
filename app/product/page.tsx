import type { Metadata } from "next";
import { MarketingPage } from "../../components/MarketingPage";
import { PilotCta } from "../../components/PilotCta";
import { ProductDemo } from "../../components/ProductDemo";
import { GovernancePlanes } from "../../components/GovernancePlanes";
import { siteContent } from "../../content/site";

export const metadata: Metadata = {
  title: "Product | Mantle Intelligence",
  description: "Explore Mantle’s Employee AI Workspace, governed data controls, exact outbound payload, model routing and evidence.",
  alternates: { canonical: "/product/" },
  openGraph: { url: "/product/", title: "Product | Mantle Intelligence", description: "A governed workspace for useful enterprise AI work." },
};

export default function ProductPage() {
  const c = siteContent;
  return (
    <MarketingPage eyebrow="Employee AI Workspace · Current prototype" title="Useful AI work, through a governed boundary." intro="Ask, attach and analyse in one workspace. Mantle applies task-aware data controls before an approved model receives the exact payload.">
      <section className="route-section demo-route">
        <div className="shell">
          <div className="section-heading narrow"><p className="eyebrow">Product demonstration</p><h2>See what leaves Mantle.</h2><p>{c.demo.body}</p></div>
          <div className="demo-frame"><ProductDemo video={c.demo.video} /></div>
        </div>
      </section>
      <section className="route-section route-paper">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Control language</p><h2>Clear treatments. Exact consequences.</h2></div>
          <div className="control-language" aria-label="Mantle treatment language">{c.controls.map((control, index) => <span key={control}><i>{String(index + 1).padStart(2, "0")}</i>{control}</span>)}</div>
        </div>
      </section>
      <section className="route-section route-silver">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Product capabilities</p><h2>Control around intelligence.</h2></div>
          <p className="swipe-cue" aria-hidden="true">Swipe →</p>
          <div className="capability-list mobile-rail" role="region" aria-label="Product capabilities. Swipe horizontally on smaller screens.">
            {c.capabilities.map((item, index) => <article key={item.title}><span className="capability-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><small>{item.status}</small></article>)}
          </div>
        </div>
      </section>
      <section className="route-section"><div className="shell"><div className="section-heading narrow"><p className="eyebrow">Architecture in development</p><h2>Data → AI → action governance.</h2></div><GovernancePlanes /></div></section>
      <PilotCta />
    </MarketingPage>
  );
}
