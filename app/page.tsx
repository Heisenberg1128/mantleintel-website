import { Footer } from "../components/Footer";
import { CompanyStory } from "../components/CompanyStory";
import { GovernancePlanes } from "../components/GovernancePlanes";
import { Header } from "../components/Header";
import { PilotCta } from "../components/PilotCta";
import { ProductDemo } from "../components/ProductDemo";
import { siteContent } from "../content/site";

export default function Home() {
  const c = siteContent;
  const homepageCapabilities = [
    c.capabilities[0],
    c.capabilities[2],
    c.capabilities[3],
    c.capabilities[6],
  ];
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
            <aside className="why-now" aria-labelledby="why-now-title">
              <p className="eyebrow">Why now?</p>
              <div>
                <h2 id="why-now-title">AI adoption is moving faster than enterprise control.</h2>
                <p>Employees already use multiple AI models. Agents are beginning to access systems and act on behalf of users. Governance has to move from model-level security to control over data, authority and action.</p>
              </div>
            </aside>
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
            <p className="demo-note"><span aria-hidden="true">→</span> Product film placeholder · the finished demonstration will sit here.</p>
          </div>
        </section>

        <section className="boundary-statement" aria-label="Mantle data boundary">
          <div className="shell">
            <span>01 · Governed boundary</span>
            <strong>{c.demo.note}</strong>
            <a href="/how-it-works/">See how it works <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="capabilities-section section-pad">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Product capabilities</p>
              <h2>Four controls that make AI usable.</h2>
            </div>
            <p className="swipe-cue" aria-hidden="true">Swipe →</p>
            <div className="capability-list mobile-rail" role="region" aria-label="Product capabilities. Swipe horizontally on smaller screens.">
              {homepageCapabilities.map((item, index) => (
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
