import type { Metadata } from "next";
import { PublicProduct } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "產品｜Mantle Intelligence", description: "了解 Mantle 的企業 AI 工作空間與資料治理控制。", alternates: { canonical: "/zh-hk/product/" } };
export default function Page() { return <PublicProduct locale="zh-hk" />; }
