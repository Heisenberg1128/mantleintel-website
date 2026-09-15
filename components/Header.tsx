import { BrandMark } from "./BrandMark";
import { contentByLocale, interfaceCopy, localeInfo, locales, localizedPath, type Locale, type PublicRoute } from "../content/i18n";

export function Header({ locale = "en", route = "" }: { locale?: Locale; route?: PublicRoute }) {
  const content = contentByLocale[locale];
  const ui = interfaceCopy[locale];
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href={localizedPath(locale)} aria-label={ui.home}>
          <BrandMark />
          <b>Mantle</b> <span>Intelligence</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {content.navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="header-tools">
          <details className="language-switcher">
            <summary aria-label={localeInfo[locale].label}>
              <span className="globe-icon" aria-hidden="true"><i /><b /></span>
              <span>{localeInfo[locale].short}</span>
              <i className="language-chevron" aria-hidden="true">⌄</i>
            </summary>
            <div className="language-menu">
              {locales.map((item) => (
                <a key={item} href={localizedPath(item, route)} hrefLang={localeInfo[item].htmlLang} lang={localeInfo[item].htmlLang} aria-current={item === locale ? "page" : undefined}>
                  <span>{localeInfo[item].label}</span><small>{localeInfo[item].short}</small>
                </a>
              ))}
            </div>
          </details>
          <a className="button button-dark header-cta" href={localizedPath(locale, "contact")}>
            {ui.requestPilot} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <details className="mobile-nav">
          <summary aria-label={ui.menu}>{ui.menu}</summary>
          <nav aria-label="Mobile navigation">
            {content.navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <div className="mobile-language-links">
              {locales.map((item) => <a key={item} href={localizedPath(item, route)} lang={localeInfo[item].htmlLang}>{localeInfo[item].label}</a>)}
            </div>
            <a className="mobile-pilot-link" href={localizedPath(locale, "contact")}>{ui.requestPilot}</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
