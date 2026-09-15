import type { Metadata } from "next";
import { PublicVision } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "未來發展｜Mantle Intelligence", description: "管理 AI 可以使用哪些資料，以及下一步可以執行哪些工作。", alternates: { canonical: "/zh-hk/vision/" } };
export default function Page() { return <PublicVision locale="zh-hk" />; }
