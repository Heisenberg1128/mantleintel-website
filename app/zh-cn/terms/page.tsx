import type { Metadata } from "next";
import { PublicTerms } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "使用条款｜Mantle Intelligence", alternates: { canonical: "/zh-cn/terms/" } };
export default function Page() { return <PublicTerms locale="zh-cn" />; }
