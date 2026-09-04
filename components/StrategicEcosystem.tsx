import { contentByLocale, type Locale } from "../content/i18n";

export function StrategicEcosystem({ locale = "en" }: { locale?: Locale }) {
  const ecosystem = contentByLocale[locale].strategicEcosystem;

  return (
    <section className="strategic-ecosystem" aria-labelledby={`strategic-ecosystem-${locale}`}>
      <div className="strategic-ecosystem-heading">
        <div>
          <p className="eyebrow">{ecosystem.eyebrow}</p>
          <h2 id={`strategic-ecosystem-${locale}`}>{ecosystem.title}</h2>
        </div>
        <p>{ecosystem.intro}</p>
      </div>
      <div className="strategic-logo-grid">
        {ecosystem.organisations.map((organisation) => (
          <div className={`strategic-logo strategic-logo-${organisation.key}`} key={organisation.name}>
            {/* Brand marks identify the named technology ecosystems and are not endorsement badges. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={organisation.src} alt="" loading="lazy" aria-hidden="true" />
            <div>
              <strong>{organisation.name}</strong>
              {organisation.note ? <small>{organisation.note}</small> : null}
            </div>
          </div>
        ))}
      </div>
      <p className="strategic-ecosystem-note">{ecosystem.disclaimer}</p>
    </section>
  );
}
