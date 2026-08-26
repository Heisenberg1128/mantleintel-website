import type { Metadata } from "next";
import { GovernancePlanes } from "../../components/GovernancePlanes";
import { MarketingPage } from "../../components/MarketingPage";
import { PilotCta } from "../../components/PilotCta";
import { siteContent } from "../../content/site";

export const metadata: Metadata = {
  title: "How Mantle Works | Enterprise AI Governance",
  description: "See how Mantle inspects data, applies policy, minimises payloads, routes approved models and retains safe evidence.",
  alternates: { canonical: "/how-it-works/" },
  openGraph: { url: "/how-it-works/", title: "How Mantle Works", description: "Eight governed steps from task to evidence." },
};

export default function HowItWorksPage() {
  return (
    <MarketingPage eyebrow="How it works" title="AI understands. Policy authorises." intro="Mantle lets the task proceed while keeping deterministic organisational policy in control of data, model access, approvals and evidence.">
      <section className="route-section route-paper"><div className="shell"><ol className="route-workflow">{siteContent.workflow.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{item.title}</h2><p>{item.body}</p></div></li>)}</ol></div></section>
      <section className="route-section"><div className="shell"><div className="section-heading narrow"><p className="eyebrow">Three governed planes</p><h2>Control what AI can see, receive and do.</h2></div><GovernancePlanes /></div></section>
      <PilotCta />
    </MarketingPage>
  );
}
