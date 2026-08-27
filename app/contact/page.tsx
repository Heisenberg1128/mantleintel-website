import type { Metadata } from "next";
import { MarketingPage } from "../../components/MarketingPage";

export const metadata: Metadata = {
  title: "Request a Pilot | Mantle Intelligence",
  description: "Bring one real AI workflow and explore a focused Mantle pilot with your organisation.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/", title: "Request a Mantle Pilot", description: "Start with one team, one workflow and one real policy boundary." },
};

export default function ContactPage() {
  return (
    <MarketingPage eyebrow="Request a pilot" title="Bring one real AI workflow." intro="Start with one team and one real policy boundary. Tell us where useful AI work meets data, model or approval constraints.">
      <section className="route-section route-paper">
        <div className="shell contact-grid">
          <form className="pilot-form" action="/contact-submit.php" method="post">
            <label>Name<input name="name" autoComplete="name" required maxLength={120} /></label>
            <label>Organisation<input name="organisation" autoComplete="organization" required maxLength={160} /></label>
            <label>Work email<input name="email" type="email" autoComplete="email" required maxLength={200} /></label>
            <label>Role<input name="role" autoComplete="organization-title" maxLength={160} /></label>
            <label className="form-wide">What AI workflow are you exploring?<textarea name="workflow" rows={6} required maxLength={5000} /></label>
            <label className="form-trap" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
            <button className="button button-dark form-wide" type="submit">Send pilot request <span aria-hidden="true">↗</span></button>
          </form>
          <aside className="contact-promise">
            <p className="eyebrow">Private enquiry</p>
            <h2>Send it from here.</h2>
            <p>Your note is delivered directly to the Mantle founding team. No external email application is required, and no personal mailbox is displayed on this site.</p>
            <ul>
              <li>One workflow is enough to start.</li>
              <li>We will only use your details to discuss a pilot or design-partner conversation.</li>
              <li>Submitting this form does not create a customer relationship.</li>
            </ul>
          </aside>
        </div>
      </section>
    </MarketingPage>
  );
}
