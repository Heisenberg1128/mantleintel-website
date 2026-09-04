import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/", hostname = "localhost") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`https://${hostname}${path}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("homepage renders the revised Mantle narrative and clean navigation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Mantle Intelligence \| Enterprise AI &amp; Data Governance/);
  assert.match(html, /Let people and AI agents work/);
  assert.match(html, /Data governance for AI/);
  assert.match(html, /Institutional judgement\. Operator execution\. Built in Hong Kong\./);
  assert.match(html, /The founding team brings experience from/);
  assert.match(html, /alt="J\.P\. Morgan"/);
  assert.match(html, /alt="HKU Business School"/);
  assert.doesNotMatch(html, /Two HKU MBA alumni|Selected professional backgrounds/);
  assert.match(html, /AI adoption is moving faster than enterprise control/);
  assert.match(html, /Only the approved context leaves Mantle/);
  assert.match(html, /class="brand-plate brand-plate-localized"/);
  assert.match(html, /<span>Let people and AI agents work\. Keep authority under control\.<\/span>/);
  assert.doesNotMatch(html, /mantle-brand-plate\.png/);
  assert.match(html, /<video[^>]*controls[^>]*aria-label="Mantle Product Demo"/);
  assert.match(html, /src="\/demo\/mantle-product-demo\.mp4"/);
  assert.match(html, /Click Play to watch with sound/);
  assert.doesNotMatch(html, /@aqtif\.com/);
  for (const target of ["product", "how-it-works", "use-cases", "vision", "company", "contact"]) {
    assert.match(html, new RegExp(`href="/${target}/"`));
  }
  assert.doesNotMatch(html, /href="\/#/);
  assert.doesNotMatch(html, /Product film placeholder|Mantle product demonstration video coming soon/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|trusted by leading|lorem ipsum/i);
});

test("the embedded product film is available across all three languages", async () => {
  for (const path of ["/", "/zh-hk/", "/zh-cn/"]) {
    const html = await (await render(path)).text();
    assert.match(html, /<video[^>]*controls/);
    assert.match(html, /src="\/demo\/mantle-product-demo\.mp4"/);
    assert.doesNotMatch(html, /youtube(?:-nocookie)?\.com/);
    assert.doesNotMatch(html, /Product film placeholder|產品影片預留位置|产品视频预留位置/);
  }
});

test("pilot enquiries submit privately to both configured recipients", async () => {
  const contactHtml = await (await render("/contact/")).text();
  assert.match(contactHtml, /action="\/contact-submit\.php"/);
  assert.doesNotMatch(contactHtml, /mailto:|@aqtif\.com/);

  const handler = await readFile(new URL("../public/contact-submit.php", import.meta.url), "utf8");
  assert.match(handler, /contact@aqtif\.com/);
  assert.match(handler, /alfredlee2015@gmail\.com/);
  assert.doesNotMatch(handler, /alfred@aqtif\.com/);
});

test("all corporate routes render directly", async () => {
  const routes = ["/product/", "/how-it-works/", "/use-cases/", "/vision/", "/company/", "/contact/", "/privacy/", "/terms/"];
  for (const path of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /Mantle Intelligence/);
  }
});

test("all public routes are available in Traditional and Simplified Chinese", async () => {
  const routes = ["", "product/", "how-it-works/", "use-cases/", "vision/", "company/", "contact/", "privacy/", "terms/"];
  for (const locale of ["zh-hk", "zh-cn"]) {
    for (const route of routes) {
      const path = `/${locale}/${route}`;
      const response = await render(path);
      assert.equal(response.status, 200, path);
      const html = await response.text();
      assert.match(html, new RegExp(`href="/${locale}/"`));
      assert.match(html, new RegExp(`href="/${locale}/product/"`));
      assert.match(html, /Mantle Intelligence/);
    }
  }
});

test("language selector preserves the current public route", async () => {
  const html = await (await render("/zh-hk/company/")).text();
  assert.match(html, /href="\/company\/"[^>]*hrefLang="en"/);
  assert.match(html, /href="\/zh-hk\/company\/"[^>]*hrefLang="zh-Hant"/);
  assert.match(html, /href="\/zh-cn\/company\/"[^>]*hrefLang="zh-Hans"/);
  assert.match(html, /創辦團隊曾任職及就讀於/);
  assert.doesNotMatch(html, /Founding perspective|Built for serious organisations/);
});

test("claim discipline remains explicit", async () => {
  for (const path of ["/", "/product/", "/vision/"]) {
    const html = await (await render(path)).text();
    assert.doesNotMatch(html, /SOC 2 compliant|ISO 27001 compliant|Fully GDPR compliant|trusted by|clients include/i);
  }
});

test("SEO routes render", async () => {
  for (const path of ["/robots.txt", "/sitemap.xml"]) {
    const response = await render(path);
    assert.equal(response.status, 200);
  }
});

test("www requests redirect to the canonical apex hostname", async () => {
  const response = await render("/product/?source=www", "www.mantleintel.com");
  assert.equal(response.status, 308);
  assert.equal(response.headers.get("location"), "https://mantleintel.com/product/?source=www");
});

test("public navigation uses native links rather than the hosted client router", async () => {
  for (const path of ["../components/Header.tsx", "../components/Footer.tsx", "../components/LegalPage.tsx", "../app/page.tsx", "../app/not-found.tsx"]) {
    const source = await readFile(new URL(path, import.meta.url), "utf8");
    assert.doesNotMatch(source, /next\/link|<Link\b/);
  }
});
