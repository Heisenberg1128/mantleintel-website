/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation is intentionally framework-independent. */
export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404 · Outside the governed path</p>
      <h1>This page isn’t here.</h1>
      <p>The address may have changed, or the page may not exist.</p>
      <a className="button button-dark" href="/">Return to Mantle Intelligence</a>
    </main>
  );
}
