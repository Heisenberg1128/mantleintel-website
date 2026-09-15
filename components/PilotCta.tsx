import { contentByLocale, interfaceCopy, localizedPath, type Locale } from "../content/i18n";

export function PilotCta({ locale = "en" }: { locale?: Locale }) {
  const { pilot } = contentByLocale[locale];
  const ui = interfaceCopy[locale];
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
            <a className="button button-light" href={localizedPath(locale, "contact")}>{ui.requestPilot} <span aria-hidden="true">↗</span></a>
            <small className="pilot-privacy">{ui.secureEnquiry}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
