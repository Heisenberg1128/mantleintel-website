import type { Metadata } from "next";
import { PublicContact } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "申請試點｜Mantle Intelligence", description: "以一個真實 AI 工作流程開始 Mantle 試點。", alternates: { canonical: "/zh-hk/contact/" } };
export default function Page() { return <PublicContact locale="zh-hk" />; }
