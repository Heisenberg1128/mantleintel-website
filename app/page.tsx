import { Footer } from "../components/Footer";
import { CompanyStory } from "../components/CompanyStory";
import { GovernancePlanes } from "../components/GovernancePlanes";
import { Header } from "../components/Header";
import { PilotCta } from "../components/PilotCta";
import { ProductDemo } from "../components/ProductDemo";
import { siteContent } from "../content/site";

export default function Home() {
  const c = siteContent;
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="product">
          <div className="shell hero-copy">
            <h1 className="sr-only">Mantle Intelligence — {c.hero.headline}</h1>
            <figure className="brand-plate">
              {/* Static brand art avoids a client-side image runtime in the edge-hosted build. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mantle-brand-plate.png"
                alt="Mantle Intelligence. Let people and AI agents work. Keep authority under control. A diagram shows organisational context passing through Mantle to approved AI."
                width={1536}
                height={1024}
                loading="eager"
                fetchPriority="high"
              />
            </figure>
            <div className="hero-support">
              <div>
                <p className="eyebrow">{c.hero.eyebrow}</p>
                <p>{c.hero.body}</p>
              </div>
              <div className="hero-actions">
                <a className="button button-dark" href="/contact/">{c.hero.primaryCta} <span aria-hidden="true">↗</span></a>
                <a className="button button-ghost" href="/product/">{c.hero.secondaryCta} <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <p className="hero-note">{c.hero.note}</p>
          </div>
        </section>

        <section className="planes-section section-pad">
          <div className="shell">
            <div className="section-heading narrow">
              <p className="eyebrow">Data governance for AI workflows</p>
              <h2>Govern data before intelligence is invoked.</h2>
              <p>Mantle governs how organisational data is selected, classified, transformed, approved, exposed to AI systems, routed, retained and evidenced in the context of AI work.</p>
            </div>
            <GovernancePlanes />
          </div>
        </section>

        <section className="problem section-pad">
          <div className="shell split-heading">
            <p className="eyebrow">{c.problem.eyebrow}</p>
            <div>
              <h2>{c.problem.headline}</h2>
              <p>{c.problem.body}</p>
              <strong className="editorial-statement">{c.problem.statement}</strong>
            </div>
          </div>
        </section>

        <section className="demo-section section-pad" id="demo">
          <div className="shell">
            <div className="section-heading narrow">
              <p className="eyebrow">{c.demo.eyebrow}</p>
              <h2>{c.demo.headline}</h2>
              <p>{c.demo.body}</p>
            </div>
            <div className="demo-frame"><ProductDemo video={c.demo.video} /></div>
            <p className="demo-note"><span aria-hidden="true">→</span> {c.demo.note}</p>
          </div>
        </section>

        <section className="workflow-section section-pad" id="how-it-works">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Employee AI Workspace · Current product</p>
              <h2>Useful work, through a governed boundary.</h2>
            </div>
            <ol className="workflow-list">
              {c.workflow.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
            <div className="control-language" aria-label="Mantle treatment language">
              {c.controls.map((control, index) => <span key={control}><i>{String(index + 1).padStart(2, "0")}</i>{control}</span>)}
            </div>
          </div>
        </section>

        <section className="capabilities-section section-pad">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Product capabilities</p>
              <h2>Control around intelligence.</h2>
            </div>
            <p className="swipe-cue" aria-hidden="true">Swipe →</p>
            <div className="capability-list mobile-rail" role="region" aria-label="Product capabilities. Swipe horizontally on smaller screens.">
              {c.capabilities.map((item, index) => (
                <article key={item.title}>
                  <span className="capability-number">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{item.title}</h3><p>{item.body}</p></div>
                  <small>{item.status}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="use-cases section-pad" id="use-cases">
          <div className="shell">
            <div className="section-heading narrow">
              <p className="eyebrow">Real work</p>
              <h2>Start with a workflow, not a transformation programme.</h2>
            </div>
            <p className="swipe-cue" aria-hidden="true">Swipe →</p>
            <div className="use-case-grid mobile-rail" role="region" aria-label="Use cases. Swipe horizontally on smaller screens.">
              {c.useCases.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="philosophy section-pad">
          <div className="shell philosophy-grid">
            <div>
              <p className="eyebrow light">{c.philosophy.eyebrow}</p>
              <h2>{c.philosophy.headline}</h2>
            </div>
            <div>
              <p>{c.philosophy.body}</p>
              <blockquote>{c.philosophy.principle}</blockquote>
            </div>
          </div>
        </section>

        <section className="future-section section-pad" id="vision">
          <div className="shell future-grid">
            <div className="section-heading">
              <p className="eyebrow">{c.future.eyebrow}</p>
              <h2>{c.future.headline}</h2>
            </div>
            <div className="future-copy">
              <p>{c.future.body}</p>
              <strong>{c.future.statement}</strong>
              <small>{c.future.disclaimer}</small>
            </div>
          </div>
          <div className="shell authority-sequence" aria-label="Future governed agent authority model">
            <span>See</span><i>→</i><span>Propose</span><i>→</i><span>Approve</span><i>→</i><span>Act</span><i>→</i><span>Evidence</span>
          </div>
        </section>

        <section className="mission-section section-pad">
          <div className="shell mission-grid">
            <article><p className="eyebrow">Mission</p><h2>{c.mission}</h2></article>
            <article><p className="eyebrow">Vision</p><h2>{c.vision}</h2></article>
          </div>
          <div className="shell abundance-line">Intelligence will become abundant. <span>Trust and authority will not.</span></div>
        </section>

        <section className="founders-section section-pad" id="company">
          <div className="shell founders-grid">
            <div className="section-heading">
              <p className="eyebrow">{c.foundingTeam.eyebrow}</p>
              <h2>{c.foundingTeam.headline}</h2>
              <p>{c.foundingTeam.body}</p>
            </div>
            <CompanyStory />
          </div>
        </section>

        <PilotCta />
      </main>
      <Footer />
    </>
  );
}
