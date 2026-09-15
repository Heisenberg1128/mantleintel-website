import type { Metadata } from "next";
import { PublicContact } from "../../../components/PublicPages";
export const metadata: Metadata = { title: "預約｜Mantle Intelligence", description: "預約 Mantle 產品示範，看看我們可以怎樣幫到你的團隊。", alternates: { canonical: "/zh-hk/contact/" } };
export default function Page() { return <PublicContact locale="zh-hk" />; }
