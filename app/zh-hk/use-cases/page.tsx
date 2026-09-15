import type { Metadata } from "next";
import { PublicUseCases } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "應用場景｜Mantle Intelligence", description: "探索文件審閱、內部分析及受監管 AI 工作流程。", alternates: { canonical: "/zh-hk/use-cases/" } };
export default function Page() { return <PublicUseCases locale="zh-hk" />; }
