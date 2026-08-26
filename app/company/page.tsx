import type { Metadata } from "next";
import { CompanyStory } from "../../components/CompanyStory";
import { MarketingPage } from "../../components/MarketingPage";
import { PilotCta } from "../../components/PilotCta";
import { siteContent } from "../../content/site";

export const metadata: Metadata = {
  title: "Company | Mantle Intelligence",
  description: "Meet Mantle’s Hong Kong founding team: two HKU MBA alumni with global finance, operating and emerging-technology experience.",
  alternates: { canonical: "/company/" },
  openGraph: { url: "/company/", title: "Company | Mantle Intelligence", description: "Institutional experience. Operator execution. Built in Hong Kong." },
};

export default function CompanyPage() {
  const team = siteContent.foundingTeam;
  return (
    <MarketingPage eyebrow="Company" title={team.headline} intro={team.body}>
      <section className="route-section route-paper"><div className="shell company-route-grid"><div><p className="eyebrow">Founding perspective</p><h2>Built for serious organisations.</h2><p>Mantle’s founding partnership combines institutional finance with hands-on operating experience across regulated financial services, digital assets, Web3, blockchain and emerging technology.</p></div><CompanyStory /></div></section>
      <section className="route-section hong-kong-section"><div className="shell split-heading"><p className="eyebrow">Hong Kong</p><div><h2>Built in Hong Kong. Designed across jurisdictions.</h2><p>Hong Kong combines global finance, regulated institutions, cross-border data considerations, universities, public bodies and enterprise technology adoption in one compact market—a strong place to build and validate governed AI workflows before expanding across Asia.</p></div></div></section>
      <PilotCta />
    </MarketingPage>
  );
}
