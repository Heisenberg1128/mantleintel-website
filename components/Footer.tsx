/* eslint-disable @next/next/no-html-link-for-pages -- Native links keep the static export portable. */
import { BrandMark } from "./BrandMark";
import { siteContent } from "../content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <a className="wordmark footer-wordmark" href="/"><BrandMark /><b>Mantle</b> <span>Intelligence</span></a>
          <p>{siteContent.footer.line}</p>
        </div>
        <nav aria-label="Footer navigation">
          <div>
            <span>Explore</span>
            <a href="/product/">Product</a>
            <a href="/vision/">Vision</a>
            <a href="/company/">Company</a>
          </div>
          <div>
            <span>Company</span>
            <a href="/contact/">Contact</a>
            <a href="/privacy/">Privacy</a>
            <a href="/terms/">Terms</a>
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
