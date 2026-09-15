import type { Metadata } from "next";
import { PublicHome } from "../../components/PublicPages";
export const metadata: Metadata = { title: "Mantle Intelligence｜企業 AI 與資料治理", description: "協助團隊使用 AI 處理文件、分析資料及草擬內容，同時管理資料分享與審批。", alternates: { canonical: "/zh-hk/" } };
export default function Page() { return <PublicHome locale="zh-hk" />; }
