import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";

export const metadata: Metadata = { title: "Privacy | Mantle Intelligence", description: "Privacy information for the Mantle Intelligence public website and pilot enquiries.", alternates: { canonical: "/privacy/" } };

export default function PrivacyPage() {
  return <LegalPage title="Privacy notice" intro="This notice describes the limited information this public website may handle at its current stage." sections={[
    { title: "Website information", body: ["The website may receive ordinary technical request information needed to deliver pages, such as IP address, browser type and request time, through its hosting provider.", "No invasive analytics or advertising trackers are enabled by default in this initial release."] },
    { title: "Pilot enquiries", body: ["If you contact Mantle about a pilot, the information you choose to provide may be used to understand and respond to your enquiry. Do not submit confidential, regulated or sensitive operational data through an initial website enquiry."] },
    { title: "Third-party services", body: ["The website is delivered through third-party hosting and domain services. A future embedded product video or enquiry service may introduce additional providers; this notice should be updated before those services are enabled."] },
    { title: "Questions", body: ["Privacy and website questions can be submitted through the contact form. This notice remains subject to qualified legal review as Mantle develops."] },
  ]} />;
}
