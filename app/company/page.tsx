import type { Metadata } from "next";
import { ExperienceLogos } from "../../components/ExperienceLogos";
import { MarketingPage } from "../../components/MarketingPage";
import { PilotCta } from "../../components/PilotCta";
import { siteContent } from "../../content/site";

export const metadata: Metadata = {
  title: "Company | Mantle Intelligence",
  description: "Meet Mantle’s Hong Kong founding team of HKU MBA alumni with global finance, operating and emerging-technology experience.",
  alternates: { canonical: "/company/" },
  openGraph: { url: "/company/", title: "Company | Mantle Intelligence", description: "Institutional judgement. Operator execution. Built in Hong Kong." },
};

export default function CompanyPage() {
  const team = siteContent.foundingTeam;
  return (
    <MarketingPage eyebrow="Company" title={team.headline} intro={team.body}>
      <ExperienceLogos className="company-experience" />
      <section className="route-section route-paper">
        <div className="shell company-editorial">
          <div><p className="eyebrow">Founding perspective</p><h2>Built for serious organisations.</h2></div>
          <div className="company-editorial-copy">
            <p>Mantle’s founding team combines institutional finance with hands-on operating experience across regulated financial services, corporate operations, digital assets, Web3, blockchain and emerging technology.</p>
            <p>That combination shapes a product designed to make AI useful inside real organisations—where data boundaries, delegated authority and accountable decisions matter.</p>
          </div>
        </div>
      </section>
      <section className="route-section hong-kong-section"><div className="shell split-heading"><p className="eyebrow">Hong Kong</p><div><h2>Built in Hong Kong. Designed across jurisdictions.</h2><p>Hong Kong combines global finance, regulated institutions, cross-border data considerations, universities, public bodies and enterprise technology adoption in one compact market—a strong place to build and validate governed AI workflows before expanding across Asia.</p></div></div></section>
      <PilotCta />
    </MarketingPage>
  );
}
