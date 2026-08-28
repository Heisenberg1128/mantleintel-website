import type { Metadata } from "next";
import { PublicPrivacy } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "私隱政策｜Mantle Intelligence", alternates: { canonical: "/zh-hk/privacy/" } };
export default function Page() { return <PublicPrivacy locale="zh-hk" />; }
