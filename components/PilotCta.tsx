import { siteContent } from "../content/site";

export function PilotCta() {
  const { pilot } = siteContent;
  return (
    <section className="pilot-section" id="pilot">
      <div className="shell pilot-grid">
        <div>
          <p className="eyebrow light">{pilot.eyebrow}</p>
          <h2>{pilot.headline}</h2>
        </div>
        <div>
          <p>{pilot.body}</p>
          {pilot.emailVerified ? (
            <a className="button button-light" href={`mailto:${pilot.email}`}>Request a pilot <span aria-hidden="true">↗</span></a>
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

