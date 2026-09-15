import type { Metadata } from "next";
import { PublicProduct } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Product | Mantle Intelligence", description: "Explore Mantle’s governed AI workspace, exact outbound payload, model routing and evidence.", alternates: { canonical: "/product/" } };
export default function Page() { return <PublicProduct locale="en" />; }
