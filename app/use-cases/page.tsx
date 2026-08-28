import type { Metadata } from "next";
import { PublicUseCases } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Enterprise AI Use Cases | Mantle Intelligence", description: "Govern document review, internal analysis, professional services, research and regulated AI workflows.", alternates: { canonical: "/use-cases/" } };
export default function Page() { return <PublicUseCases locale="en" />; }
