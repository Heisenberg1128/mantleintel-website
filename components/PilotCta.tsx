import { siteContent } from "../content/site";

export function PilotCta() {
  const { pilot } = siteContent;
  return (
    <section className="pilot-section">
      <div className="shell pilot-grid">
        <div>
          <p className="eyebrow light">{pilot.eyebrow}</p>
          <h2>{pilot.headline}</h2>
        </div>
        <div>
          <p>{pilot.body}</p>
          <div className="pilot-actions">
            <a className="button button-light" href="/contact/">Request a pilot <span aria-hidden="true">↗</span></a>
            <small className="pilot-privacy">Send your enquiry securely through the site.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
