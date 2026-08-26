import { siteContent } from "../content/site";

export function CompanyStory() {
  const team = siteContent.foundingTeam;
  return (
    <div className="company-story">
      <div className="experience-rail" role="region" aria-label={team.experienceLabel}>
        <span>{team.experienceLabel}</span>
        <div>{team.experience.map((item) => <strong key={item}>{item}</strong>)}</div>
      </div>
      <p className="experience-note">{team.disclaimer}</p>
      <div className="founder-list" aria-label="Founding team background">
        {team.background.map((item, index) => (
          <article key={item.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><small>{item.label}</small><h3>{item.value}</h3><p>{item.detail}</p></div>
          </article>
        ))}
      </div>
    </div>
  );
}
