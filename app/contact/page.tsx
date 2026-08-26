import type { Metadata } from "next";
import { MarketingPage } from "../../components/MarketingPage";
import { siteContent } from "../../content/site";

export const metadata: Metadata = {
  title: "Request a Pilot | Mantle Intelligence",
  description: "Bring one real AI workflow and explore a focused Mantle pilot with your organisation.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/", title: "Request a Mantle Pilot", description: "Start with one team, one workflow and one real policy boundary." },
};

export default function ContactPage() {
  const pilot = siteContent.pilot;
  return (
    <MarketingPage eyebrow="Request a pilot" title="Bring one real AI workflow." intro="Start with one team and one real policy boundary. Tell us where useful AI work meets data, model or approval constraints.">
      <section className="route-section route-paper"><div className="shell contact-grid"><form className="pilot-form" action={`mailto:${pilot.email}`} method="post" encType="text/plain"><label>Name<input name="name" autoComplete="name" required /></label><label>Organisation<input name="organisation" autoComplete="organization" required /></label><label>Work email<input name="email" type="email" autoComplete="email" required /></label><label>Role<input name="role" autoComplete="organization-title" /></label><label className="form-wide">What AI workflow are you exploring?<textarea name="workflow" rows={6} required /></label><button className="button button-dark form-wide" type="submit">Send pilot request <span aria-hidden="true">↗</span></button></form><aside><p className="eyebrow">Direct contact</p><h2>Prefer email?</h2><a className="contact-address" href={`mailto:${pilot.email}`}>{pilot.email}</a><p>We’ll use your note only to discuss a Mantle pilot or design-partner conversation.</p></aside></div></section>
    </MarketingPage>
  );
}
