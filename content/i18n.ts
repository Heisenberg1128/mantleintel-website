import { siteContent } from "./site";

export type Locale = "en" | "zh-hk" | "zh-cn";
export type PublicRoute = "" | "product" | "how-it-works" | "use-cases" | "vision" | "company" | "contact" | "privacy" | "terms";

export const locales: Locale[] = ["en", "zh-hk", "zh-cn"];

export const localeInfo = {
  en: { short: "EN", label: "English", htmlLang: "en" },
  "zh-hk": { short: "繁中", label: "繁體中文", htmlLang: "zh-Hant" },
  "zh-cn": { short: "简中", label: "简体中文", htmlLang: "zh-Hans" },
} as const;

export function localizedPath(locale: Locale, route: PublicRoute = "") {
  const suffix = route ? `${route}/` : "";
  return locale === "en" ? `/${suffix}` : `/${locale}/${suffix}`;
}

const experienceLogos = siteContent.foundingTeam.experienceLogos;

const zhHk = {
  ...siteContent,
  meta: {
    ...siteContent.meta,
    title: "Mantle Intelligence｜企業 AI 與資料治理",
    description: "Mantle 協助企業管控資料、人員與 AI 智能體的互動，涵蓋情境、權限、模型存取、審批與稽核證據。",
  },
  navigation: [
    { label: "產品", href: "/zh-hk/product/" },
    { label: "運作方式", href: "/zh-hk/how-it-works/" },
    { label: "應用場景", href: "/zh-hk/use-cases/" },
    { label: "願景", href: "/zh-hk/vision/" },
    { label: "關於我們", href: "/zh-hk/company/" },
  ],
  hero: {
    ...siteContent.hero,
    eyebrow: "企業 AI 與資料治理",
    headline: "讓人與 AI 智能體高效協作，讓權限始終受控。",
    body: "Mantle 是連接企業資料、人員與 AI 的治理層。企業可清楚決定哪些資料可以使用、哪些模型可以接收、下一步可以執行甚麼，以及需要保留哪些稽核證據。",
    note: "為重視資料管控、問責與生產力的企業而設。",
    primaryCta: "申請試點",
    secondaryCta: "了解產品",
  },
  demo: {
    ...siteContent.demo,
    eyebrow: "產品示範",
    headline: "清楚看見哪些內容會離開 Mantle。",
    body: "資料送往外部模型之前，Mantle 會列出哪些內容保留、遮罩或移除，並說明原因。",
    note: "只有經批准的內容才會離開 Mantle。",
    video: { ...siteContent.demo.video, title: "Mantle 產品示範" },
  },
  workflow: [
    { title: "理解工作目標", body: "先確認使用者想完成甚麼，以及完成工作真正需要哪些資料。" },
    { title: "檢查資料與情境", body: "根據用途、敏感程度及已聲明限制，檢查提示與文件內容。" },
    { title: "套用企業政策", body: "由可驗證的企業規則，最終決定資料與模型的存取權限。" },
    { title: "轉換並精簡資料", body: "資料跨越可信邊界前，按政策保留、遮罩、移除或交由人工覆核。" },
    { title: "展示實際傳送內容", body: "讓使用者批准將要送出的完整內容，而非含糊的摘要。" },
    { title: "選用合規模型", body: "只把已批准內容送往符合工作需要與資料級別的模型。" },
    { title: "還原已批准內容", body: "僅在政策及流程容許時，才把已批准的遮罩值還原至結果。" },
    { title: "保留安全證據", body: "記錄決策、審批、模型路由與獲准操作，但不保存已移除的原始資料。" },
  ],
  controls: ["保留", "遮罩", "移除", "人工覆核"],
  planes: [
    { label: "資料", question: "哪些資料可以使用？", detail: "分類 · 相關性 · 最少化 · 權限 · 保存" },
    { label: "AI", question: "哪些模型可以接收？", detail: "模型資格 · 路由 · 私有或本地選項 · 政策" },
    { label: "行動", question: "下一步可以做甚麼？", detail: "建議 · 批准 · 執行 · 到期 · 稽核" },
  ],
  capabilities: [
    { title: "理解工作情境", status: "原型已提供", body: "根據實際工作判斷資料是否必要，而不是把所有欄位一律處理。" },
    { title: "AI 資料治理", status: "架構開發中", body: "管控企業資料在 AI 流程中的分類、精簡、審批、傳送、路由、保存與證據。" },
    { title: "政策執行", status: "原型已提供", body: "由確定的企業規則最終決定 AI 可以接收哪些內容。" },
    { title: "完整傳送預覽", status: "原型已提供", body: "呼叫外部模型前，讓使用者及覆核者看見實際傳送的完整內容。" },
    { title: "人工審批", status: "原型已提供", body: "遇到含糊或較高風險情況時交由人工判斷，而不是在背景自動放行。" },
    { title: "多模型路由", status: "架構開發中", body: "根據工作、資料分類及企業政策，選用獲批准的模型路線。" },
    { title: "稽核與證據", status: "原型已提供", body: "記錄 AI 工作的治理決策，同時避免保存已移除的原始資料。" },
    { title: "權限管理", status: "架構開發中", body: "按企業授權範圍控制存取與行動，而不是單看模型能力。" },
  ],
  useCases: [
    { title: "文件審閱", body: "審閱資助申請，同時移除與工作無關的個人及銀行資料。" },
    { title: "內部分析", body: "整理內部資料，而不必要地披露員工、客戶或交易層面的資訊。" },
    { title: "專業服務", body: "在使用獲批准 AI 模型時，同步執行公司對客戶資料及對外分享的規則。" },
    { title: "研究與教育", body: "處理敏感研究、行政及機構文件時，保留清晰控制與問責紀錄。" },
    { title: "受監管工作", body: "在權限、審批及證據完整的前提下，探索具生產力的 AI 流程。" },
  ],
  future: {
    ...siteContent.future,
    eyebrow: "未來方向 · Agent Workrooms",
    headline: "由 AI 回答，走向受控的 AI 行動。",
    body: "企業 AI 正由分析和草擬，走向擷取資料、更新系統及協調工作。真正稀缺的將是情境、權限、授權與證據。",
    statement: "今天：管控 AI 可以看見和使用甚麼。未來：管控 AI 智能體可以執行甚麼。",
    disclaimer: "Agent Workrooms 是未來產品方向，並不代表現時已具備可投入生產的自主執行能力。",
  },
  foundingTeam: {
    ...siteContent.foundingTeam,
    eyebrow: "關於我們",
    headline: "結合機構判斷與營運執行，立足香港。",
    body: "Mantle Intelligence 由香港大學 MBA 校友團隊在香港創立。團隊經驗橫跨環球投資銀行、受監管金融、企業營運、區塊鏈、Web3 與新興科技。",
    experienceLabel: "創辦團隊曾任職及就讀於",
    experienceLogos,
    disclaimer: "以上機構只代表創辦團隊的工作及學術背景，並不表示任何合作、投資或認可。",
    pillars: [
      { label: "機構金融", detail: "環球投資銀行、受監管金融服務及機構決策經驗。" },
      { label: "營運經驗", detail: "曾在企業、科技及數碼資產業務中負責實際營運與執行。" },
      { label: "新興科技", detail: "具備區塊鏈、Web3 及高速發展科技生態的產品實踐經驗。" },
    ],
  },
  strategicEcosystem: {
    ...siteContent.strategicEcosystem,
    eyebrow: "策略科技生態",
    title: "策略合作夥伴與科技生態",
    intro: "與創辦團隊更廣泛科技工作相關的合作關係及產業計劃。",
    organisations: siteContent.strategicEcosystem.organisations.map((organisation) =>
      organisation.key === "nvidia" ? { ...organisation, note: "創辦團隊透過 AQTIF 參與" } : organisation,
    ),
    disclaimer: "NVIDIA Inception 會員資格由創辦團隊的關聯公司 AQTIF 持有，並非以 Mantle Intelligence 名義加入。其他標誌代表相關科技合作或生態關係，並不表示各機構對 Mantle Intelligence 的認可。",
  },
  pilot: {
    eyebrow: "試點與設計夥伴",
    headline: "由一個真實 AI 流程開始。",
    body: "選擇一個流程、一個團隊及一條真實政策界線，測試如何在不犧牲控制的前提下提升工作效率。",
  },
  footer: {
    line: "為 AI 賦能企業提供清晰控制。",
    origin: "建基香港，服務跨地域營運的企業。",
  },
};

const zhCn = {
  ...zhHk,
  meta: {
    ...zhHk.meta,
    title: "Mantle Intelligence｜企业 AI 与数据治理",
    description: "Mantle 帮助企业管控数据、人员与 AI 智能体的互动，覆盖上下文、权限、模型访问、审批与审计证据。",
  },
  navigation: [
    { label: "产品", href: "/zh-cn/product/" },
    { label: "工作原理", href: "/zh-cn/how-it-works/" },
    { label: "应用场景", href: "/zh-cn/use-cases/" },
    { label: "愿景", href: "/zh-cn/vision/" },
    { label: "关于我们", href: "/zh-cn/company/" },
  ],
  hero: {
    ...zhHk.hero,
    eyebrow: "企业 AI 与数据治理",
    headline: "让人与 AI 智能体高效协作，让权限始终受控。",
    body: "Mantle 是连接企业数据、人员与 AI 的治理层。企业可以清楚决定哪些数据可以使用、哪些模型可以接收、下一步可以执行什么，以及需要保留哪些审计证据。",
    note: "为重视数据管控、问责与生产力的企业而设计。",
    primaryCta: "申请试点",
    secondaryCta: "了解产品",
  },
  demo: {
    ...zhHk.demo,
    eyebrow: "产品演示",
    headline: "清楚看到哪些内容会离开 Mantle。",
    body: "数据发送至外部模型之前，Mantle 会列出哪些内容保留、掩码或移除，并说明原因。",
    note: "只有经批准的内容才会离开 Mantle。",
    video: { ...zhHk.demo.video, title: "Mantle 产品演示" },
  },
  workflow: [
    { title: "理解工作目标", body: "先确认用户希望完成什么，以及完成工作真正需要哪些数据。" },
    { title: "检查数据与上下文", body: "根据用途、敏感程度及已声明限制，检查提示和文件内容。" },
    { title: "执行企业政策", body: "由可验证的企业规则，最终决定数据与模型的访问权限。" },
    { title: "转换并精简数据", body: "数据跨越可信边界前，按政策保留、掩码、移除或交由人工复核。" },
    { title: "展示实际发送内容", body: "让用户批准即将发送的完整内容，而不是含糊的摘要。" },
    { title: "选择合规模型", body: "只将已批准内容发送给符合工作需要和数据级别的模型。" },
    { title: "还原已批准内容", body: "只有在政策与流程允许时，才将已批准的掩码值还原到结果中。" },
    { title: "保留安全证据", body: "记录决策、审批、模型路由和获准操作，但不保存已移除的原始数据。" },
  ],
  controls: ["保留", "掩码", "移除", "人工复核"],
  planes: [
    { label: "数据", question: "哪些数据可以使用？", detail: "分类 · 相关性 · 最小化 · 权限 · 保存" },
    { label: "AI", question: "哪些模型可以接收？", detail: "模型资格 · 路由 · 私有或本地选项 · 政策" },
    { label: "行动", question: "下一步可以做什么？", detail: "建议 · 批准 · 执行 · 到期 · 审计" },
  ],
  capabilities: [
    { title: "理解工作上下文", status: "原型已提供", body: "根据实际工作判断数据是否必要，而不是将所有字段一律处理。" },
    { title: "AI 数据治理", status: "架构开发中", body: "管控企业数据在 AI 流程中的分类、精简、审批、发送、路由、保存与证据。" },
    { title: "政策执行", status: "原型已提供", body: "由确定的企业规则最终决定 AI 可以接收哪些内容。" },
    { title: "完整发送预览", status: "原型已提供", body: "调用外部模型前，让用户及复核人员看到实际发送的完整内容。" },
    { title: "人工审批", status: "原型已提供", body: "遇到不明确或较高风险情况时交由人工判断，而不是在后台自动放行。" },
    { title: "多模型路由", status: "架构开发中", body: "根据工作、数据分类与企业政策，选择获批准的模型路线。" },
    { title: "审计与证据", status: "原型已提供", body: "记录 AI 工作的治理决策，同时避免保存已移除的原始数据。" },
    { title: "权限管理", status: "架构开发中", body: "按照企业授权范围控制访问与行动，而不是只看模型能力。" },
  ],
  useCases: [
    { title: "文件审阅", body: "审阅资助申请，同时移除与工作无关的个人及银行数据。" },
    { title: "内部分析", body: "整理内部材料，而不必要地披露员工、客户或交易层面的信息。" },
    { title: "专业服务", body: "使用获批准 AI 模型时，同步执行公司对客户数据与外部分享的规则。" },
    { title: "研究与教育", body: "处理敏感研究、行政及机构文件时，保留清晰控制与问责记录。" },
    { title: "受监管工作", body: "在权限、审批及证据完整的前提下，探索高效率的 AI 流程。" },
  ],
  future: {
    ...zhHk.future,
    eyebrow: "未来方向 · Agent Workrooms",
    headline: "从 AI 回答，走向受控的 AI 行动。",
    body: "企业 AI 正从分析和起草，走向获取数据、更新系统和协调工作。真正稀缺的将是上下文、权限、授权与证据。",
    statement: "今天：管控 AI 可以看到和使用什么。未来：管控 AI 智能体可以执行什么。",
    disclaimer: "Agent Workrooms 是未来产品方向，并不代表目前已具备可投入生产的自主执行能力。",
  },
  foundingTeam: {
    ...zhHk.foundingTeam,
    eyebrow: "关于我们",
    headline: "结合机构判断与运营执行，立足香港。",
    body: "Mantle Intelligence 由香港大学 MBA 校友团队在香港创立。团队经验横跨全球投资银行、受监管金融、企业运营、区块链、Web3 与新兴科技。",
    experienceLabel: "创始团队曾任职及就读于",
    experienceLogos,
    disclaimer: "以上机构仅代表创始团队的工作与学术背景，并不表示任何合作、投资或认可。",
    pillars: [
      { label: "机构金融", detail: "全球投资银行、受监管金融服务及机构决策经验。" },
      { label: "运营经验", detail: "曾在企业、科技及数字资产业务中负责实际运营与执行。" },
      { label: "新兴科技", detail: "拥有区块链、Web3 及高速发展科技生态的产品实践经验。" },
    ],
  },
  strategicEcosystem: {
    ...zhHk.strategicEcosystem,
    eyebrow: "战略科技生态",
    title: "战略合作伙伴与科技生态",
    intro: "与创始团队更广泛科技工作相关的合作关系及产业计划。",
    organisations: siteContent.strategicEcosystem.organisations.map((organisation) =>
      organisation.key === "nvidia" ? { ...organisation, note: "创始团队通过 AQTIF 参与" } : organisation,
    ),
    disclaimer: "NVIDIA Inception 会员资格由创始团队的关联公司 AQTIF 持有，并非以 Mantle Intelligence 名义加入。其他标志代表相关科技合作或生态关系，并不表示各机构对 Mantle Intelligence 的认可。",
  },
  pilot: {
    eyebrow: "试点与设计伙伴",
    headline: "从一个真实 AI 流程开始。",
    body: "选择一个流程、一个团队及一条真实政策边界，测试如何在不牺牲控制的前提下提升工作效率。",
  },
  footer: {
    line: "为 AI 驱动型企业提供清晰控制。",
    origin: "立足香港，服务跨地域运营的企业。",
  },
};

export const contentByLocale = { en: siteContent, "zh-hk": zhHk, "zh-cn": zhCn } as const;

export const interfaceCopy = {
  en: {
    home: "Mantle Intelligence home", menu: "Menu", requestPilot: "Request a pilot", explore: "Explore", company: "Company", contact: "Contact", privacy: "Privacy", terms: "Terms",
    secureEnquiry: "Send your enquiry securely through the site.", copyright: "© 2026 Mantle Intelligence. All rights reserved.", swipe: "Swipe →", backHome: "← Back to home",
    legalEyebrow: "Website notice · Counsel review required", legalNotice: "This is an early-stage website placeholder and is not final legal advice. It should be reviewed by qualified counsel before substantive product launch.",
    demoAlt: "Mantle product demonstration video", openPrototype: "Open live prototype", placeholderNote: "Click Play to watch with sound · captions included.", originalContext: "Original context", approvedPayload: "Approved payload", keep: "KEEP", mask: "MASK", remove: "REMOVE",
  },
  "zh-hk": {
    home: "Mantle Intelligence 首頁", menu: "選單", requestPilot: "申請試點", explore: "探索", company: "公司", contact: "聯絡我們", privacy: "私隱政策", terms: "使用條款",
    secureEnquiry: "透過網站安全提交查詢。", copyright: "© 2026 Mantle Intelligence。保留所有權利。", swipe: "向右滑動 →", backHome: "← 返回首頁",
    legalEyebrow: "網站聲明 · 須由法律顧問審閱", legalNotice: "本頁內容是早期網站的暫擬版本，不構成最終法律意見。產品正式推出前，應交由合資格法律顧問審閱。",
    demoAlt: "Mantle 產品示範影片", openPrototype: "開啟線上原型", placeholderNote: "按下播放即可連同聲音觀看 · 影片已附字幕。", originalContext: "原始內容", approvedPayload: "已批准內容", keep: "保留", mask: "遮罩", remove: "移除",
  },
  "zh-cn": {
    home: "Mantle Intelligence 首页", menu: "菜单", requestPilot: "申请试点", explore: "探索", company: "公司", contact: "联系我们", privacy: "隐私政策", terms: "使用条款",
    secureEnquiry: "通过网站安全提交咨询。", copyright: "© 2026 Mantle Intelligence。保留所有权利。", swipe: "向右滑动 →", backHome: "← 返回首页",
    legalEyebrow: "网站声明 · 须由法律顾问审阅", legalNotice: "本页内容是早期网站的暂定版本，不构成最终法律意见。产品正式推出前，应交由合资格法律顾问审阅。",
    demoAlt: "Mantle 产品演示视频", openPrototype: "打开在线原型", placeholderNote: "点击播放即可连同声音观看 · 视频已配字幕。", originalContext: "原始内容", approvedPayload: "已批准内容", keep: "保留", mask: "掩码", remove: "移除",
  },
} as const;
