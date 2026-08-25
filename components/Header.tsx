/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation avoids a hosted-router hash interception bug. */
import { siteContent } from "../content/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="/" aria-label="Mantle Intelligence home">
          Mantle <span>Intelligence</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="button button-dark header-cta" href="/#pilot">
          Request a pilot <span aria-hidden="true">↗</span>
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {siteContent.navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <a href="/#pilot">Request a pilot</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
