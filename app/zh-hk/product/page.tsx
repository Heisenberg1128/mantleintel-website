import type { Metadata } from "next";
import { PublicProduct } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "產品｜Mantle Intelligence", description: "看看 Mantle 如何幫團隊用 AI 審閱文件、分析資料及草擬內容。", alternates: { canonical: "/zh-hk/product/" } };
export default function Page() { return <PublicProduct locale="zh-hk" />; }
