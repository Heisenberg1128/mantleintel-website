import type { Metadata } from "next";
import { PublicHow } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "工作原理｜Mantle Intelligence", description: "了解 Mantle 如何检查数据、执行政策、选择模型并保留安全证据。", alternates: { canonical: "/zh-cn/how-it-works/" } };
export default function Page() { return <PublicHow locale="zh-cn" />; }
