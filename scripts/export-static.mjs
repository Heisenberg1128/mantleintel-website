import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "static-export");
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, "dist/client"), output, { recursive: true });

function staticHtml(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*(?:rel="modulepreload"|as="script")[^>]*>/gi, "")
    .replace(/<!--\$-->|<!--\/\$-->/g, "");
}

async function render(pathname, destination, htmlLang = "en") {
  const response = await worker.fetch(
    new Request(`https://mantleintel.com${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const target = resolve(output, destination);
  await mkdir(dirname(target), { recursive: true });
  const body = await response.text();
  const rendered = response.headers.get("content-type")?.includes("text/html") ? staticHtml(body).replace('<html lang="en">', `<html lang="${htmlLang}">`) : body;
  await writeFile(target, rendered);
}

await render("/", "index.html");
const publicRoutes = ["product", "how-it-works", "use-cases", "vision", "company", "contact", "privacy", "terms"];
for (const route of publicRoutes) {
  await render(`/${route}/`, `${route}/index.html`);
}
for (const locale of ["zh-hk", "zh-cn"]) {
  const htmlLang = locale === "zh-hk" ? "zh-Hant" : "zh-Hans";
  await render(`/${locale}/`, `${locale}/index.html`, htmlLang);
  for (const route of publicRoutes) {
    await render(`/${locale}/${route}/`, `${locale}/${route}/index.html`, htmlLang);
  }
}
await render("/robots.txt", "robots.txt");
await render("/sitemap.xml", "sitemap.xml");
await render("/page-not-found", "404.html");

const htaccess = `Options -Indexes
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\\.mantleintel\\.com$ [NC]
RewriteRule ^(.*)$ https://mantleintel.com/$1 [R=301,L]

ErrorDocument 404 /404.html
`;
await writeFile(resolve(output, ".htaccess"), htaccess);

const home = await readFile(resolve(output, "index.html"), "utf8");
const traditionalHome = await readFile(resolve(output, "zh-hk/index.html"), "utf8");
const simplifiedHome = await readFile(resolve(output, "zh-cn/index.html"), "utf8");
if (!home.includes("Mantle Intelligence") || !home.includes("/company/") || !home.includes("Data governance for AI") || home.includes("<script") ||
    !traditionalHome.includes("先管好資料") || !traditionalHome.includes("/zh-hk/product/") ||
    !simplifiedHome.includes("先管好数据") || !simplifiedHome.includes("/zh-cn/product/")) {
  throw new Error("Static export verification failed");
}

console.log(output);
