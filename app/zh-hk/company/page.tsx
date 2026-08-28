import type { Metadata } from "next";
import { PublicCompany } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "關於我們｜Mantle Intelligence", description: "了解 Mantle 立足香港的創辦團隊。", alternates: { canonical: "/zh-hk/company/" } };
export default function Page() { return <PublicCompany locale="zh-hk" />; }
