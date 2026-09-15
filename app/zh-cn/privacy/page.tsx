import type { Metadata } from "next";
import { PublicPrivacy } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "隐私政策｜Mantle Intelligence", alternates: { canonical: "/zh-cn/privacy/" } };
export default function Page() { return <PublicPrivacy locale="zh-cn" />; }
