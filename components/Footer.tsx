import Link from "next/link";
import { siteContent } from "../content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Link className="wordmark footer-wordmark" href="/">Mantle <span>Intelligence</span></Link>
          <p>{siteContent.footer.line}</p>
        </div>
        <nav aria-label="Footer navigation">
          <div>
            <span>Explore</span>
            <Link href="/#product">Product</Link>
            <Link href="/#vision">Vision</Link>
            <Link href="/#company">Company</Link>
          </div>
          <div>
            <span>Company</span>
            <Link href="/#pilot">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </nav>
      </div>
      <div className="shell footer-bottom">
        <p>© 2026 Mantle Intelligence. All rights reserved.</p>
        <p>{siteContent.footer.origin}</p>
      </div>
    </footer>
  );
}

