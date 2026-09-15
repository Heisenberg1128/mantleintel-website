import type { Metadata } from "next";
import { PublicContact } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "申请试点｜Mantle Intelligence", description: "以一个真实 AI 工作流开始 Mantle 试点。", alternates: { canonical: "/zh-cn/contact/" } };
export default function Page() { return <PublicContact locale="zh-cn" />; }
