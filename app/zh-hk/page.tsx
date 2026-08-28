import type { Metadata } from "next";
import { PublicHome } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Mantle Intelligence｜企業 AI 與資料治理", description: "管控企業資料、人員與 AI 智能體的互動。", alternates: { canonical: "/zh-hk/" } };
export default function Page() { return <PublicHome locale="zh-hk" />; }
