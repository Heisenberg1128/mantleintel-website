import type { Metadata } from "next";
import { PublicUseCases } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "應用例子｜Mantle Intelligence", description: "看看 Mantle 如何用於文件審閱、內部分析、客戶工作、教育及合規工作。", alternates: { canonical: "/zh-hk/use-cases/" } };
export default function Page() { return <PublicUseCases locale="zh-hk" />; }
