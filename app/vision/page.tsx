import type { Metadata } from "next";
import { GovernancePlanes } from "../../components/GovernancePlanes";
import { MarketingPage } from "../../components/MarketingPage";
import { PilotCta } from "../../components/PilotCta";
import { siteContent } from "../../content/site";

export const metadata: Metadata = {
  title: "Vision | Mantle Intelligence",
  description: "Mantle’s path from employee AI governance today to governed AI agents and actions tomorrow.",
  alternates: { canonical: "/vision/" },
  openGraph: { url: "/vision/", title: "Vision | Mantle Intelligence", description: "When intelligence becomes abundant, authority remains scarce." },
};

export default function VisionPage() {
  const c = siteContent;
  return (
    <MarketingPage eyebrow="Vision" title="Intelligence will become abundant. Trust and authority will not." intro="The scarce enterprise layer is becoming context, permissions, authority and evidence—not access to another model.">
      <section className="route-section vision-now"><div className="shell two-era"><article><span>Today · Current prototype</span><h2>Govern what AI can see and use.</h2><p>The Employee AI Workspace governs prompts, documents, data treatments, approved model routes and safe evidence.</p></article><article><span>Tomorrow · Future direction</span><h2>Govern what AI agents can do.</h2><p>Agent Workrooms are a direction under development for proposed actions, approvals, expiring authority and evidence.</p></article></div></section>
      <section className="route-section route-paper"><div className="shell"><div className="section-heading narrow"><p className="eyebrow">Data → AI → action</p><h2>A control layer for increasingly capable systems.</h2><p>{c.future.disclaimer}</p></div><GovernancePlanes /></div></section>
      <PilotCta />
    </MarketingPage>
  );
}
