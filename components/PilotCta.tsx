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
          {pilot.emailVerified ? (
            <div className="pilot-actions">
              <a className="button button-light" href="/contact/">Request a pilot <span aria-hidden="true">↗</span></a>
              <a className="pilot-email" href={`mailto:${pilot.email}`}>{pilot.email}</a>
            </div>
          ) : (
            <div className="contact-pending" role="note">
              <span>Contact channel</span>
              <strong>Business mailbox being configured</strong>
              <small>The pilot enquiry address will be activated here.</small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
