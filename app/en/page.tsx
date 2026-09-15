import type { Metadata } from "next";
import { PublicHome } from "../../components/PublicPages";
import { siteContent } from "../../content/site";
export const metadata: Metadata = { title: siteContent.meta.title, description: siteContent.meta.description, alternates: { canonical: "/en/" }, openGraph: { title: siteContent.meta.title, description: siteContent.meta.description, url: "/en/", locale: "en_GB" }, twitter: { title: siteContent.meta.title, description: siteContent.meta.description } };
export default function Page() { return <PublicHome locale="en" />; }
