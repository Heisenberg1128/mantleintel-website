import type { Metadata } from "next";
import { PublicTerms } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Terms | Mantle Intelligence", description: "Preliminary terms for the Mantle Intelligence public website.", alternates: { canonical: "/terms/" } };
export default function Page() { return <PublicTerms locale="en" />; }
