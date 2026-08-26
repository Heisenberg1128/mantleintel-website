import { siteContent } from "../content/site";

export function GovernancePlanes() {
  return (
    <div className="governance-planes" aria-label="Data, AI and action governance model">
      {siteContent.planes.map((plane, index) => (
        <article key={plane.label}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{plane.label}</p>
          <h3>{plane.question}</h3>
          <small>{plane.detail}</small>
        </article>
      ))}
    </div>
  );
}
