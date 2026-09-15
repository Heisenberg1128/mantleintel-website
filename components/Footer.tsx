import { BrandMark } from "./BrandMark";
import { contentByLocale, interfaceCopy, localizedPath, type Locale } from "../content/i18n";

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const content = contentByLocale[locale];
  const ui = interfaceCopy[locale];
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <a className="wordmark footer-wordmark" href={localizedPath(locale)}><BrandMark /><b>Mantle</b> <span>Intelligence</span></a>
          <p>{content.footer.line}</p>
        </div>
        <nav aria-label="Footer navigation">
          <div>
            <span>{ui.explore}</span>
            <a href={localizedPath(locale, "product")}>{content.navigation[0].label}</a>
            <a href={localizedPath(locale, "vision")}>{content.navigation[3].label}</a>
            <a href={localizedPath(locale, "company")}>{content.navigation[4].label}</a>
          </div>
          <div>
            <span>{ui.company}</span>
            <a href={localizedPath(locale, "contact")}>{ui.contact}</a>
            <a href={localizedPath(locale, "privacy")}>{ui.privacy}</a>
            <a href={localizedPath(locale, "terms")}>{ui.terms}</a>
          </div>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <p>{ui.copyright}</p>
        <p>{content.footer.origin}</p>
      </div>
    </footer>
  );
}
