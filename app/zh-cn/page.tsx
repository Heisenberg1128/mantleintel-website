import type { Metadata } from "next";
import { PublicHome } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Mantle Intelligence｜企业 AI 与数据治理", description: "管控企业数据、人员与 AI 智能体的互动。", alternates: { canonical: "/zh-cn/" } };
export default function Page() { return <PublicHome locale="zh-cn" />; }
