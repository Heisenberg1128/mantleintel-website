import type { Metadata } from "next";
import { PublicHome } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Mantle Intelligence｜企業 AI 與資料保護", description: "用 Mantle 審閱文件、分析資料及草擬內容，同時保護敏感資料，記錄每次 AI 操作及審批。", alternates: { canonical: "/zh-hk/" } };
export default function Page() { return <PublicHome locale="zh-hk" />; }
