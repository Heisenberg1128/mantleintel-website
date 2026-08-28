import type { Metadata } from "next";
import { PublicVision } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Vision | Mantle Intelligence", description: "Mantle’s path from employee AI governance to governed AI agents and actions.", alternates: { canonical: "/vision/" } };
export default function Page() { return <PublicVision locale="en" />; }
