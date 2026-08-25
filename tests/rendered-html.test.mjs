import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/", hostname = "localhost") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`https://${hostname}${path}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("homepage renders the complete Mantle narrative", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Mantle Intelligence \| Control for Enterprise AI/);
  assert.match(html, /Let people and AI agents work/);
  assert.match(html, /Keep authority under control/);
  assert.match(html, /See what leaves Mantle/);
  assert.match(html, /AI understands\. Policy authorises\./);
  assert.match(html, /Agent Workrooms are a product direction under development/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|trusted by leading|lorem ipsum/i);
});

test("legal routes are transparent placeholders", async () => {
  for (const path of ["/privacy", "/terms"]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /Counsel review required/);
    assert.doesNotMatch(html, /SOC 2 compliant|ISO 27001 compliant|Fully GDPR compliant/i);
  }
});

test("SEO routes render", async () => {
  for (const path of ["/robots.txt", "/sitemap.xml"]) {
    const response = await render(path);
    assert.equal(response.status, 200);
  }
});

test("www requests redirect to the canonical apex hostname", async () => {
  const response = await render("/privacy?source=www", "www.mantleintel.com");
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), "https://mantleintel.com/privacy?source=www");
});
