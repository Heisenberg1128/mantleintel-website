import { ExperienceLogos } from "./ExperienceLogos";
import { Footer } from "./Footer";
import { GovernancePlanes } from "./GovernancePlanes";
import { Header } from "./Header";
import { LegalPage } from "./LegalPage";
import { MarketingPage } from "./MarketingPage";
import { PilotCta } from "./PilotCta";
import { ProductDemo } from "./ProductDemo";
import { StrategicEcosystem } from "./StrategicEcosystem";
import { contentByLocale, interfaceCopy, localizedPath, type Locale } from "../content/i18n";
import { pageCopy } from "../content/pages";

function languageTag(locale: Locale) {
  return locale === "zh-hk" ? "zh-Hant" : locale === "zh-cn" ? "zh-Hans" : "en";
}

function BrandPlate({ locale }: { locale: Locale }) {
  const p = pageCopy[locale].home;
  return (
    <figure className="brand-plate brand-plate-localized" aria-label={`Mantle Intelligence。${p.plateTagline}`}>
      <div className="localized-plate-copy"><strong>Mantle<br />Intelligence</strong><span>{p.plateTagline}</span></div>
      <div className="localized-plate-diagram" aria-hidden="true">
        <div className="plate-lines plate-lines-top" /><div className="plate-gate" /><div className="plate-lines plate-lines-bottom" />
        <span className="plate-context">{p.plateContext}</span><span className="plate-ai">{p.plateAi}</span>
        <strong className="plate-trust">{p.plateTrust}</strong>
      </div>
      <ExperienceLogos className="homepage-experience" locale={locale} />
    </figure>
  );
}

export function PublicHome({ locale = "en" }: { locale?: Locale }) {
  const c = contentByLocale[locale];
  const p = pageCopy[locale].home;
  const ui = interfaceCopy[locale];
  const homepageCapabilities = [c.capabilities[0], c.capabilities[2], c.capabilities[3], c.capabilities[6]];
  return (
    <>
      <Header locale={locale} route="" />
      <main lang={languageTag(locale)}>
        <section className="hero" id="product">
          <div className="shell hero-copy">
            <h1 className="sr-only">Mantle Intelligence — {c.hero.headline}</h1>
            <BrandPlate locale={locale} />
            <StrategicEcosystem locale={locale} />
            <div className="hero-support">
              <p className="eyebrow hero-support-label">{c.hero.eyebrow}</p>
              <p className="hero-support-body">{c.hero.body}</p>
              <div className="hero-actions">
                <a className="button button-dark" href={localizedPath(locale, "contact")}>{c.hero.primaryCta} <span aria-hidden="true">↗</span></a>
                <a className="button button-ghost" href={localizedPath(locale, "product")}>{c.hero.secondaryCta} <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <p className="hero-note">{c.hero.note}</p>
          </div>
        </section>

        <section className="planes-section section-pad">
          <div className="shell">
            <div className="section-heading narrow"><p className="eyebrow">{p.planesEyebrow}</p><h2>{p.planesTitle}</h2><p>{p.planesBody}</p></div>
            <GovernancePlanes locale={locale} />
            <aside className="why-now" aria-labelledby="why-now-title"><p className="eyebrow">{p.whyEyebrow}</p><div><h2 id="why-now-title">{p.whyTitle}</h2><p>{p.whyBody}</p></div></aside>
          </div>
        </section>

        <section className="demo-section section-pad" id="demo">
          <div className="shell">
            <div className="section-heading narrow"><p className="eyebrow">{c.demo.eyebrow}</p><h2>{c.demo.headline}</h2><p>{c.demo.body}</p></div>
            <div className="demo-frame"><ProductDemo video={c.demo.video} locale={locale} /></div>
            <p className="demo-note"><span aria-hidden="true">→</span> {ui.placeholderNote}</p>
          </div>
        </section>

        <section className="boundary-statement" aria-label={c.demo.note}>
          <div className="shell"><span>{p.boundaryLabel}</span><strong>{c.demo.note}</strong><a href={localizedPath(locale, "how-it-works")}>{p.boundaryLink} <span aria-hidden="true">→</span></a></div>
        </section>

        <section className="capabilities-section section-pad">
          <div className="shell">
            <div className="section-heading"><p className="eyebrow">{p.capabilitiesEyebrow}</p><h2>{p.capabilitiesTitle}</h2></div>
            <p className="swipe-cue" aria-hidden="true">{ui.swipe}</p>
            <div className="capability-list mobile-rail" role="region" aria-label={p.capabilitiesEyebrow}>
              {homepageCapabilities.map((item, index) => <article key={item.title}><span className="capability-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><small>{item.status}</small></article>)}
            </div>
          </div>
        </section>

        <section className="use-cases section-pad" id="use-cases">
          <div className="shell">
            <div className="section-heading narrow"><p className="eyebrow">{p.realWork}</p><h2>{p.realWorkTitle}</h2></div>
            <p className="swipe-cue" aria-hidden="true">{ui.swipe}</p>
            <div className="use-case-grid mobile-rail" role="region" aria-label={pageCopy[locale].cases.eyebrow}>
              {c.useCases.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="future-section section-pad" id="vision">
          <div className="shell future-grid"><div className="section-heading"><p className="eyebrow">{c.future.eyebrow}</p><h2>{c.future.headline}</h2></div><div className="future-copy"><p>{c.future.body}</p><strong>{c.future.statement}</strong><small>{c.future.disclaimer}</small></div></div>
          <div className="shell authority-sequence" aria-label={c.future.statement}>{p.sequence.map((item, index) => <span key={item}>{item}{index < p.sequence.length - 1 && <i aria-hidden="true">→</i>}</span>)}</div>
        </section>

        <section className="founders-section section-pad" id="company">
          <div className="shell founders-editorial">
            <div className="section-heading"><p className="eyebrow">{c.foundingTeam.eyebrow}</p><h2>{c.foundingTeam.headline}</h2><p>{c.foundingTeam.body}</p></div>
            <div className="founding-pillars" aria-label={c.foundingTeam.experienceLabel}>{c.foundingTeam.pillars.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.label}</h3><p>{item.detail}</p></div></article>)}</div>
          </div>
        </section>
        <PilotCta locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}

export function PublicProduct({ locale = "en" }: { locale?: Locale }) {
  const c = contentByLocale[locale]; const p = pageCopy[locale].product; const ui = interfaceCopy[locale];
  return <MarketingPage locale={locale} route="product" eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
    <section className="route-section demo-route"><div className="shell"><div className="section-heading narrow"><p className="eyebrow">{p.demoEyebrow}</p><h2>{p.demoTitle}</h2><p>{c.demo.body}</p></div><div className="demo-frame"><ProductDemo video={c.demo.video} locale={locale} /></div></div></section>
    <section className="route-section route-paper"><div className="shell"><div className="section-heading"><p className="eyebrow">{p.controlsEyebrow}</p><h2>{p.controlsTitle}</h2></div><div className="control-language" aria-label={p.controlsEyebrow}>{c.controls.map((control, index) => <span key={control}><i>{String(index + 1).padStart(2, "0")}</i>{control}</span>)}</div></div></section>
    <section className="route-section route-silver"><div className="shell"><div className="section-heading"><p className="eyebrow">{p.capabilitiesEyebrow}</p><h2>{p.capabilitiesTitle}</h2></div><p className="swipe-cue" aria-hidden="true">{ui.swipe}</p><div className="capability-list mobile-rail" role="region" aria-label={p.capabilitiesEyebrow}>{c.capabilities.map((item, index) => <article key={item.title}><span className="capability-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><small>{item.status}</small></article>)}</div></div></section>
    <section className="route-section"><div className="shell"><div className="section-heading narrow"><p className="eyebrow">{p.architectureEyebrow}</p><h2>{p.architectureTitle}</h2></div><GovernancePlanes locale={locale} /></div></section>
    <PilotCta locale={locale} />
  </MarketingPage>;
}

export function PublicHow({ locale = "en" }: { locale?: Locale }) {
  const c = contentByLocale[locale]; const p = pageCopy[locale].how;
  return <MarketingPage locale={locale} route="how-it-works" eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
    <section className="route-section route-paper"><div className="shell"><ol className="route-workflow">{c.workflow.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{item.title}</h2><p>{item.body}</p></div></li>)}</ol></div></section>
    <section className="route-section"><div className="shell"><div className="section-heading narrow"><p className="eyebrow">{p.planesEyebrow}</p><h2>{p.planesTitle}</h2></div><GovernancePlanes locale={locale} /></div></section>
    <PilotCta locale={locale} />
  </MarketingPage>;
}

export function PublicUseCases({ locale = "en" }: { locale?: Locale }) {
  const c = contentByLocale[locale]; const p = pageCopy[locale].cases; const ui = interfaceCopy[locale];
  return <MarketingPage locale={locale} route="use-cases" eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
    <section className="route-section route-paper"><div className="shell"><p className="swipe-cue" aria-hidden="true">{ui.swipe}</p><div className="use-case-grid mobile-rail" role="region" aria-label={p.eyebrow}>{c.useCases.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{item.title}</h2><p>{item.body}</p></article>)}</div></div></section>
    <section className="route-section sector-section"><div className="shell">
      <div className="sector-heading"><p className="eyebrow">{c.sectors.eyebrow}</p><div><h2>{c.sectors.title}</h2><p>{c.sectors.body}</p></div></div>
      <div className="sector-table-wrap" role="region" aria-label={c.sectors.title}>
        <table className="sector-table"><thead><tr><th scope="col">{c.sectors.columns.sector}</th><th scope="col">{c.sectors.columns.help}</th></tr></thead><tbody>{c.sectors.rows.map((row) => <tr key={row.sector}><th scope="row">{row.sector}</th><td>{row.help}</td></tr>)}</tbody></table>
      </div>
    </div></section>
    <PilotCta locale={locale} />
  </MarketingPage>;
}

export function PublicVision({ locale = "en" }: { locale?: Locale }) {
  const c = contentByLocale[locale]; const p = pageCopy[locale].vision;
  return <MarketingPage locale={locale} route="vision" eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
    <section className="route-section vision-now"><div className="shell two-era"><article><span>{p.today}</span><h2>{p.todayTitle}</h2><p>{p.todayBody}</p></article><article><span>{p.tomorrow}</span><h2>{p.tomorrowTitle}</h2><p>{p.tomorrowBody}</p></article></div></section>
    <section className="route-section route-paper"><div className="shell"><div className="section-heading narrow"><p className="eyebrow">{p.planesEyebrow}</p><h2>{p.planesTitle}</h2><p>{c.future.disclaimer}</p></div><GovernancePlanes locale={locale} /></div></section>
    <PilotCta locale={locale} />
  </MarketingPage>;
}

export function PublicCompany({ locale = "en" }: { locale?: Locale }) {
  const team = contentByLocale[locale].foundingTeam; const p = pageCopy[locale].company;
  return <MarketingPage locale={locale} route="company" eyebrow={p.eyebrow} title={team.headline} intro={team.body}>
    <ExperienceLogos className="company-experience" locale={locale} />
    <section className="route-section route-paper"><div className="shell company-editorial"><div><p className="eyebrow">{p.perspective}</p><h2>{p.perspectiveTitle}</h2></div><div className="company-editorial-copy">{p.perspectiveBody.map(item => <p key={item}>{item}</p>)}</div></div></section>
    <section className="route-section hong-kong-section"><div className="shell split-heading"><p className="eyebrow">{p.hongKong}</p><div><h2>{p.hongKongTitle}</h2><p>{p.hongKongBody}</p></div></div></section>
    <PilotCta locale={locale} />
  </MarketingPage>;
}

export function PublicContact({ locale = "en" }: { locale?: Locale }) {
  const p = pageCopy[locale].contact;
  return <MarketingPage locale={locale} route="contact" eyebrow={p.eyebrow} title={p.title} intro={p.intro}><section className="route-section route-paper"><div className="shell contact-grid">
    <form className="pilot-form" action="/contact-submit.php" method="post"><input type="hidden" name="language" value={locale} /><label>{p.fields.name}<input name="name" autoComplete="name" required maxLength={120} /></label><label>{p.fields.organisation}<input name="organisation" autoComplete="organization" required maxLength={160} /></label><label>{p.fields.email}<input name="email" type="email" autoComplete="email" required maxLength={200} /></label><label>{p.fields.role}<input name="role" autoComplete="organization-title" maxLength={160} /></label><label className="form-wide">{p.fields.workflow}<textarea name="workflow" rows={6} required maxLength={5000} /></label><label className="form-trap" aria-hidden="true">{p.fields.trap}<input name="website" tabIndex={-1} autoComplete="off" /></label><button className="button button-dark form-wide" type="submit">{p.fields.submit} <span aria-hidden="true">↗</span></button></form>
    <aside className="contact-promise"><p className="eyebrow">{p.promiseEyebrow}</p><h2>{p.promiseTitle}</h2><p>{p.promiseBody}</p><ul>{p.promiseList.map(item => <li key={item}>{item}</li>)}</ul></aside>
  </div></section></MarketingPage>;
}

export function PublicPrivacy({ locale = "en" }: { locale?: Locale }) { const p = pageCopy[locale].privacy; return <LegalPage locale={locale} route="privacy" title={p.title} intro={p.intro} sections={[...p.sections]} />; }
export function PublicTerms({ locale = "en" }: { locale?: Locale }) { const p = pageCopy[locale].terms; return <LegalPage locale={locale} route="terms" title={p.title} intro={p.intro} sections={[...p.sections]} />; }
