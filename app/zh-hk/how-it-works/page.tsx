import type { Metadata } from "next";
import { PublicHow } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "運作方式｜Mantle Intelligence", description: "了解 Mantle 如何檢查資料、執行政策、選用模型及保留安全證據。", alternates: { canonical: "/zh-hk/how-it-works/" } };
export default function Page() { return <PublicHow locale="zh-hk" />; }
