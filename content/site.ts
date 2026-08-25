export type DemoProvider = "placeholder" | "mp4" | "youtube" | "vimeo";

export const siteContent = {
  meta: {
    title: "Mantle Intelligence | Control for Enterprise AI",
    description:
      "Mantle Intelligence gives organisations control over the context, permissions, policies and evidence surrounding how people and AI agents use artificial intelligence.",
    canonicalUrl: "https://mantleintel.com",
  },
  navigation: [
    { label: "Product", href: "/#product" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Use cases", href: "/#use-cases" },
    { label: "Vision", href: "/#vision" },
    { label: "Company", href: "/#company" },
  ],
  hero: {
    eyebrow: "The control layer for enterprise AI",
    headline: "Let people and AI agents work. Keep authority under control.",
    body:
      "Mantle sits between your organisation, its people and AI. It governs what AI can see, use and do—and what evidence it must leave behind.",
    note: "Built for organisations where AI adoption cannot come at the cost of control.",
    primaryCta: "Request a pilot",
    secondaryCta: "Watch the demo",
  },
  problem: {
    eyebrow: "The operating gap",
    headline: "AI is already inside the organisation. Control usually isn’t.",
    body:
      "Teams use AI to review documents, analyse information, draft, research and support decisions. Most organisations are still forced into a false choice: block useful work, or lose visibility over sensitive context, permissions, approvals and evidence.",
    statement: "Security should not require making AI useless.",
  },
  demo: {
    eyebrow: "Product demonstration",
    headline: "See what leaves Mantle.",
    body:
      "Before information reaches an external model, Mantle shows exactly what will be kept, masked or removed—and why.",
    note: "Only the approved context leaves Mantle.",
    video: {
      provider: "placeholder" as DemoProvider,
      source: "",
      title: "Mantle Product Demo",
      poster: "",
    },
  },
  workflow: [
    {
      title: "Understand the task",
      body: "Determine what the user is trying to accomplish and which information is relevant.",
    },
    {
      title: "Inspect the context",
      body: "Evaluate prompts and documents for task relevance, sensitivity and declared restrictions.",
    },
    {
      title: "Apply policy",
      body: "Use organisation-specific rules to keep, mask, remove or escalate information.",
    },
    {
      title: "Show the outbound payload",
      body: "Let the user see the exact information that will cross the trusted boundary.",
    },
    {
      title: "Use the right model",
      body: "Route only approved context to a model permitted for the task and classification.",
    },
    {
      title: "Retain evidence",
      body: "Create a record of decisions, approvals, routing and permitted actions.",
    },
  ],
  controls: ["Keep", "Mask", "Remove", "Human review"],
  capabilities: [
    {
      title: "Task-aware context",
      status: "Available in prototype",
      body: "Evaluate information in the context of the work rather than treating every field identically.",
    },
    {
      title: "Policy enforcement",
      status: "Available in prototype",
      body: "Keep deterministic organisation rules as the final authority over what AI may receive.",
    },
    {
      title: "Exact outbound visibility",
      status: "Available in prototype",
      body: "Show users and reviewers the precise payload before an external model call is made.",
    },
    {
      title: "Human approval",
      status: "Available in prototype",
      body: "Escalate ambiguous or higher-risk situations instead of silently allowing them.",
    },
    {
      title: "Multi-model routing",
      status: "Architecture in development",
      body: "Support approved routes chosen by task, information classification and organisation policy.",
    },
    {
      title: "Audit and evidence",
      status: "Available in prototype",
      body: "Record the governed decisions around AI work without retaining raw removed values.",
    },
    {
      title: "Permissions",
      status: "Architecture in development",
      body: "Align access and actions with organisational authority—not simply model capability.",
    },
  ],
  useCases: [
    {
      title: "Document review",
      body: "Review a confidential funding application while removing personal and banking details that are unnecessary to the task.",
    },
    {
      title: "Internal analysis",
      body: "Summarise internal material without unnecessarily exposing employee, customer or transaction-level information.",
    },
    {
      title: "Professional services",
      body: "Use approved AI models while applying firm-specific rules to client information and external sharing.",
    },
    {
      title: "Research and education",
      body: "Work across sensitive research, administrative and institutional documents with clearer controls and accountability.",
    },
    {
      title: "Regulated work",
      body: "Explore productive AI workflows while retaining permissions, approvals and evidence around their use.",
    },
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
      "Enterprise AI is moving from analysis and drafting toward retrieving information, updating systems and coordinating work. Mantle is being designed to govern what an agent can see, propose and execute; when approval is required; when authority expires; and what evidence remains.",
    statement: "Governance for the non-human workforce.",
    disclaimer:
      "Agent Workrooms are a product direction under development, not a claim of production-ready autonomous capability.",
  },
  mission: "Make powerful AI usable inside organisations without forcing them to give up control.",
  vision:
    "A world where people and AI agents can work across organisational systems while authority, context and accountability remain governed.",
  foundingTeam: {
    eyebrow: "Founding team",
    headline: "Enterprise experience, grounded in Hong Kong.",
    body:
      "Mantle Intelligence is being built in Hong Kong by a founding team of HKU MBA students. The team brings experience across investment banking, regulated financial services, emerging technology and operations.",
    background: [
      {
        label: "Investment banking",
        value: "20+ years",
        detail: "Senior experience across more than two decades of investment banking work.",
      },
      {
        label: "Academic community",
        value: "HKU MBA",
        detail: "A founding team connected through the University of Hong Kong MBA community.",
      },
      {
        label: "Operating context",
        value: "Hong Kong",
        detail: "Built from a global financial centre for organisations operating across jurisdictions.",
      },
    ],
  },
  pilot: {
    eyebrow: "Pilot and design partner conversations",
    headline: "Bring one real AI workflow.",
    body:
      "We’re working with organisations to identify where AI can create meaningful productivity without sacrificing control. Start with one workflow, one team and one real policy boundary.",
    email: "hello@mantleintel.com",
    emailVerified: false,
  },
  footer: {
    line: "Control for the AI-enabled organisation.",
    origin: "Built in Hong Kong for organisations operating in a world of increasingly powerful AI.",
  },
} as const;
