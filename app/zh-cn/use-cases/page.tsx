import type { Metadata } from "next";
import { PublicUseCases } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "应用场景｜Mantle Intelligence", description: "探索文件审阅、内部分析及受监管 AI 工作流。", alternates: { canonical: "/zh-cn/use-cases/" } };
export default function Page() { return <PublicUseCases locale="zh-cn" />; }
