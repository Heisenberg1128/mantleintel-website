import type { Metadata } from "next";
import { PublicCompany } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "关于我们｜Mantle Intelligence", description: "了解 Mantle 立足香港的创始团队。", alternates: { canonical: "/zh-cn/company/" } };
export default function Page() { return <PublicCompany locale="zh-cn" />; }
