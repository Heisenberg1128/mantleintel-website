import type { Metadata } from "next";
import { PublicTerms } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "使用條款｜Mantle Intelligence", alternates: { canonical: "/zh-hk/terms/" } };
export default function Page() { return <PublicTerms locale="zh-hk" />; }
