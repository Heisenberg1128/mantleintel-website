import type { Metadata } from "next";
import { PublicHow } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "如何運作｜Mantle Intelligence", description: "看看 Mantle 如何檢查敏感資料、套用公司規則、選擇 AI 及記錄每次操作。", alternates: { canonical: "/zh-hk/how-it-works/" } };
export default function Page() { return <PublicHow locale="zh-hk" />; }
