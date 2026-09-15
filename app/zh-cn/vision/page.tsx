import type { Metadata } from "next";
import { PublicVision } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "愿景｜Mantle Intelligence", description: "从治理 AI 所见内容，走向治理 AI 智能体的行动。", alternates: { canonical: "/zh-cn/vision/" } };
export default function Page() { return <PublicVision locale="zh-cn" />; }
