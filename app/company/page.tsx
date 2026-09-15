import type { Metadata } from "next";
import { PublicCompany } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Company | Mantle Intelligence", description: "Meet Mantle’s Hong Kong founding team with global finance, operating and emerging-technology experience.", alternates: { canonical: "/company/" } };
export default function Page() { return <PublicCompany locale="en" />; }
