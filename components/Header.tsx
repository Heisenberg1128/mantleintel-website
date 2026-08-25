import Link from "next/link";
import { siteContent } from "../content/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Mantle Intelligence home">
          Mantle <span>Intelligence</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteContent.navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <Link className="button button-dark header-cta" href="#pilot">
          Request a pilot <span aria-hidden="true">↗</span>
        </Link>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {siteContent.navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href="#pilot">Request a pilot</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

