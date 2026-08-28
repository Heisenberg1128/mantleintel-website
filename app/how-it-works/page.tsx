import type { Metadata } from "next";
import { PublicHow } from "../../components/PublicPages";
export const metadata: Metadata = { title: "How Mantle Works | Enterprise AI Governance", description: "See how Mantle inspects data, applies policy, routes approved models and retains safe evidence.", alternates: { canonical: "/how-it-works/" } };
export default function Page() { return <PublicHow locale="en" />; }
