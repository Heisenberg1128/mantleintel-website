import type { Metadata } from "next";
import { PublicProduct } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "产品｜Mantle Intelligence", description: "了解 Mantle 的企业 AI 工作空间与数据治理控制。", alternates: { canonical: "/zh-cn/product/" } };
export default function Page() { return <PublicProduct locale="zh-cn" />; }
