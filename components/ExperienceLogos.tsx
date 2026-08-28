import { siteContent } from "../content/site";

export function ExperienceLogos({ className = "" }: { className?: string }) {
  const team = siteContent.foundingTeam;

  return (
    <section className={`experience-band ${className}`.trim()} aria-label={team.experienceLabel}>
      <div className="shell">
        <p className="experience-label">{team.experienceLabel}</p>
        <div className="experience-logo-grid">
          {team.experienceLogos.map((item) => (
            <div className={`experience-logo experience-logo-${item.key}`} key={item.name}>
              {item.key === "deutsche" ? (
                <div className="deutsche-lockup" role="img" aria-label={item.name}>
                  <span className="deutsche-mark" aria-hidden="true">
                    {/* The supplied asset contains an intact mark but a cropped wordmark. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.src} alt="" loading="lazy" />
                  </span>
                  <span className="deutsche-wordmark" aria-hidden="true">Deutsche Bank</span>
                </div>
              ) : (
                <>
                  {/* These monochrome marks are supplied in the founders' reference deck. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.name} loading="lazy" />
                </>
              )}
            </div>
          ))}
        </div>
        <p className="experience-note">{team.disclaimer}</p>
      </div>
    </section>
  );
}
