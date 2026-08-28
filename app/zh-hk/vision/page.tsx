import type { Metadata } from "next";
import { PublicVision } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "願景｜Mantle Intelligence", description: "由治理 AI 所見內容，走向治理 AI 智能體的行動。", alternates: { canonical: "/zh-hk/vision/" } };
export default function Page() { return <PublicVision locale="zh-hk" />; }
