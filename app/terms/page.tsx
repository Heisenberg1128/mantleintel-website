import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";

export const metadata: Metadata = { title: "Terms | Mantle Intelligence", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <LegalPage title="Website terms" intro="These preliminary terms cover use of the public Mantle Intelligence website." sections={[
    { title: "Informational purpose", body: ["This website presents an early-stage company, its current prototype direction and its longer-term product vision. Content is provided for general information and design-partner conversations."] },
    { title: "Product status", body: ["References to prototypes, architecture in development and future Agent Workrooms are not promises that every capability is production-ready or generally available."] },
    { title: "No reliance", body: ["Nothing on this website is legal, regulatory, security, investment or other professional advice. Organisations should conduct their own assessment before relying on any product or workflow."] },
    { title: "Intellectual property", body: ["Unless otherwise stated, the website copy and design are presented as Mantle Intelligence materials. Third-party names remain the property of their respective owners."] },
    { title: "Changes", body: ["These terms may change as the company, website and product develop. A final version should be reviewed by qualified counsel before substantive commercial use."] },
  ]} />;
}

