export type DemoProvider = "placeholder" | "mp4" | "youtube" | "vimeo";

export const siteContent = {
  meta: {
    title: "Mantle Intelligence | Enterprise AI & Data Governance",
    description:
      "Mantle gives organisations control over how data, people and AI agents interact—governing context, permissions, model access, approvals and evidence.",
    canonicalUrl: "https://mantleintel.com",
  },
  navigation: [
    { label: "Product", href: "/product/" },
    { label: "How it works", href: "/how-it-works/" },
    { label: "Use cases", href: "/use-cases/" },
    { label: "Vision", href: "/vision/" },
    { label: "Company", href: "/company/" },
  ],
  hero: {
    eyebrow: "Enterprise AI & data governance",
    headline: "Let people and AI agents work. Keep authority under control.",
    body:
      "Mantle is the governance layer between your organisation’s data, people and AI. Control what data can be used, which models can receive it, what actions are allowed, and what evidence remains.",
    note: "Built for organisations where AI adoption cannot come at the cost of data control, accountability or productivity.",
    primaryCta: "Request a pilot",
    secondaryCta: "Explore the product",
  },
  problem: {
    eyebrow: "The operating gap",
    headline: "AI is already inside the organisation. Control usually isn’t.",
    body:
      "Teams are already using AI to review documents, analyse information, draft, research and support decisions. The real problem is not adoption—it is governing the data, permissions, models and actions around that work.",
    statement: "Security should not require making AI useless.",
  },
  demo: {
    eyebrow: "Product demonstration",
    headline: "See what leaves Mantle.",
    body:
      "Before information reaches an external model, Mantle shows exactly what will be kept, masked or removed—and why.",
    note: "Only the approved context leaves Mantle.",
    video: {
      provider: "mp4" as DemoProvider,
      source: "/demo/mantle-product-demo.mp4",
      title: "Mantle Product Demo",
      poster: "",
    },
  },
  workflow: [
    { title: "Understand the task", body: "Determine the user’s intended outcome and the information genuinely needed to complete it." },
    { title: "Inspect data and context", body: "Evaluate prompts and documents for relevance, sensitivity and declared restrictions." },
    { title: "Apply organisational policy", body: "Use deterministic organisation rules as the final authority over data and model access." },
    { title: "Transform and minimise", body: "Keep, mask, remove or escalate information before it crosses the trusted boundary." },
    { title: "Show the exact payload", body: "Let the user approve the precise outbound content—not a summary of it." },
    { title: "Route to an approved model", body: "Send only approved context to a model eligible for the task and classification." },
    { title: "Restore approved context", body: "Reintroduce approved masked values only where policy and the workflow permit." },
    { title: "Retain evidence", body: "Record decisions, approvals, routing and permitted actions without keeping raw removed values." },
  ],
  controls: ["Keep", "Mask", "Remove", "Human review"],
  planes: [
    { label: "Data", question: "What information may be used?", detail: "Classification · relevance · minimisation · permissions · retention" },
    { label: "AI", question: "Which intelligence may receive it?", detail: "Model eligibility · routing · private or local options · policy" },
    { label: "Action", question: "What may happen next?", detail: "Propose · approve · execute · expire · audit" },
  ],
  capabilities: [
    { title: "Task-aware context", status: "Available in prototype", body: "Evaluate information in the context of the work rather than treating every field identically." },
    { title: "Data governance for AI", status: "Architecture in development", body: "Govern how organisational data is classified, minimised, approved, exposed, routed, retained and evidenced in AI workflows." },
    { title: "Policy enforcement", status: "Available in prototype", body: "Keep deterministic organisation rules as the final authority over what AI may receive." },
    { title: "Exact outbound visibility", status: "Available in prototype", body: "Show users and reviewers the precise payload before an external model call is made." },
    { title: "Human approval", status: "Available in prototype", body: "Escalate ambiguous or higher-risk situations instead of silently allowing them." },
    { title: "Multi-model routing", status: "Architecture in development", body: "Support approved routes chosen by task, data classification and organisation policy." },
    { title: "Audit and evidence", status: "Available in prototype", body: "Record governed decisions around AI work without retaining raw removed values." },
    { title: "Permissions", status: "Architecture in development", body: "Align access and actions with organisational authority—not simply model capability." },
  ],
  useCases: [
    { title: "Document review", body: "Review a funding application while removing personal and banking details that are unnecessary to the task." },
    { title: "Internal analysis", body: "Summarise internal material without unnecessarily exposing employee, customer or transaction-level information." },
    { title: "Professional services", body: "Use approved AI models while applying firm-specific rules to client information and external sharing." },
    { title: "Research and education", body: "Work across sensitive research, administrative and institutional documents with clearer controls and accountability." },
    { title: "Regulated work", body: "Explore productive AI workflows while retaining permissions, approvals and evidence around their use." },
  ],
  philosophy: {
    eyebrow: "Architectural principle",
    headline: "Governance should understand the work.",
    body:
      "The same information can be necessary in one workflow and inappropriate in another. Mantle combines task understanding and semantic classification with deterministic policy, permissions, human review, model routing and audit evidence.",
    principle: "AI understands. Policy authorises.",
  },
  future: {
    eyebrow: "Future direction · Agent Workrooms",
    headline: "From AI answers to AI actions.",
    body:
      "Enterprise AI is moving from analysis and drafting toward retrieving information, updating systems and coordinating work. The scarce layer becomes context, authority, permissions and evidence.",
    statement: "Today: govern what AI can see and use. Tomorrow: govern what AI agents can do.",
    disclaimer:
      "Agent Workrooms are a future product direction—not a claim of production-ready autonomous capability.",
  },
  mission: "Make powerful AI usable inside organisations without forcing them to give up control.",
  vision:
    "A world where people and AI agents can work across organisational systems while authority, context and accountability remain governed.",
  foundingTeam: {
    eyebrow: "Company",
    headline: "Institutional judgement. Operator execution. Built in Hong Kong.",
    body:
      "Mantle Intelligence is being built in Hong Kong by a founding team of HKU MBA alumni, bringing experience across global investment banking, regulated finance, corporate operations, blockchain, Web3 and emerging technology.",
    experienceLabel: "The founding team brings experience from",
    experienceLogos: [
      { key: "jpmorgan", name: "J.P. Morgan", src: "/experience/jpmorgan.png" },
      { key: "sinopec", name: "Sinopec", src: "/experience/sinopec.png" },
      { key: "deutsche", name: "Deutsche Bank", src: "/experience/deutsche-bank.png" },
      { key: "animoca", name: "Animoca Brands", src: "/experience/animoca-brands.png" },
      { key: "hku", name: "HKU Business School", src: "/experience/hku-business-school.png" },
      { key: "hashkey", name: "HashKey Group", src: "/experience/hashkey-group.png" },
      { key: "olivex", name: "OliveX", src: "/experience/olivex.png" },
      { key: "standard-chartered", name: "Standard Chartered", src: "/experience/standard-chartered.png" },
    ],
    disclaimer: "Organisations represented in the founding team’s professional and academic backgrounds. No affiliation or endorsement implied.",
    pillars: [
      { label: "Institutional finance", detail: "Global investment banking, regulated financial services and institutional decision-making." },
      { label: "Operating experience", detail: "Hands-on work inside corporate, technology and digital-asset businesses." },
      { label: "Emerging technology", detail: "Blockchain, Web3 and product execution across fast-moving technology ecosystems." },
    ],
  },
  strategicEcosystem: {
    eyebrow: "Technology ecosystem",
    title: "Our Strategic Partners & Ecosystem",
    intro: "Technology relationships and programmes connected to the founders’ broader work.",
    organisations: [
      { key: "apple", name: "Apple", src: "/ecosystem/apple.svg", note: "" },
      { key: "nvidia", name: "NVIDIA Inception", src: "/ecosystem/nvidia.svg", note: "Founders participate through AQTIF" },
      { key: "aws", name: "AWS", src: "/ecosystem/aws.png", note: "" },
      { key: "alibaba", name: "Alibaba Cloud", src: "/ecosystem/alibaba-cloud.svg", note: "" },
      { key: "microsoft", name: "Microsoft", src: "/ecosystem/microsoft.png", note: "" },
    ],
    disclaimer: "NVIDIA Inception membership is held by AQTIF, a founder-affiliated company, rather than Mantle Intelligence. Other marks identify relevant technology or ecosystem relationships; no endorsement of Mantle Intelligence is implied.",
  },
  pilot: {
    eyebrow: "Pilot and design partner conversations",
    headline: "Bring one real AI workflow.",
    body:
      "Start with one workflow, one team and one real policy boundary. We’ll explore where AI can create useful productivity without sacrificing control.",
  },
  footer: {
    line: "Control for the AI-enabled organisation.",
    origin: "Built in Hong Kong. Designed for organisations operating across jurisdictions.",
  },
} as const;
