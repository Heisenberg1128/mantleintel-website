import type { Metadata } from "next";
import { PublicPrivacy } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Privacy | Mantle Intelligence", description: "Privacy information for the Mantle Intelligence public website.", alternates: { canonical: "/privacy/" } };
export default function Page() { return <PublicPrivacy locale="en" />; }
