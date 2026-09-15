import type { Metadata } from "next";
import { PublicContact } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Request a Pilot | Mantle Intelligence", description: "Bring one real AI workflow and explore a focused Mantle pilot.", alternates: { canonical: "/contact/" } };
export default function Page() { return <PublicContact locale="en" />; }
