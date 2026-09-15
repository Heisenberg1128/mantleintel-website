import { siteContent } from "./site";

export type Locale = "en" | "zh-hk" | "zh-cn";
export type PublicRoute = "" | "product" | "how-it-works" | "use-cases" | "vision" | "company" | "contact" | "privacy" | "terms";

export const locales: Locale[] = ["zh-hk", "en", "zh-cn"];

export const localeInfo = {
  en: { short: "EN", label: "English", htmlLang: "en" },
  "zh-hk": { short: "繁中", label: "繁體中文", htmlLang: "zh-Hant" },
  "zh-cn": { short: "简中", label: "简体中文", htmlLang: "zh-Hans" },
} as const;

export function localizedPath(locale: Locale, route: PublicRoute = "") {
  const suffix = route ? `${route}/` : "";
  return locale === "en" ? (route ? `/${suffix}` : "/en/") : `/${locale}/${suffix}`;
}

const experienceLogos = siteContent.foundingTeam.experienceLogos;

const zhHk = {
  ...siteContent,
  meta: {
    ...siteContent.meta,
    title: "Mantle Intelligence｜企業 AI 與資料保護",
    description: "令團隊善用 AI 處理文件、分析資料及草擬內容，同時掌握資料分享、模型使用與審批紀錄。",
  },
  navigation: [
    { label: "產品", href: "/zh-hk/product/" },
    { label: "運作方式", href: "/zh-hk/how-it-works/" },
    { label: "行業應用", href: "/zh-hk/use-cases/" },
    { label: "願景", href: "/zh-hk/vision/" },
    { label: "關於我們", href: "/zh-hk/company/" },
  ],
  hero: {
    ...siteContent.hero,
    eyebrow: "企業 AI 平台｜資料保護與審批管理",
    headline: "令團隊善用 AI，令企業掌握每一步。",
    body: "文件審閱、資料分析、內容草擬，一個平台完成。Mantle 協助團隊在使用 AI 前處理敏感資料、選用獲准模型，並保留審批及使用紀錄。",
    note: "為重視資料保密與責任分工的企業而設。",
    primaryCta: "洽談試用",
    secondaryCta: "了解產品",
  },
  demo: {
    ...siteContent.demo,
    eyebrow: "產品示範",
    headline: "傳送給 AI 的內容，先看清楚，再確認。",
    body: "文件內哪些資料需要保密、哪些可以分享？Mantle 會列出建議處理方式，令您先核對，再傳送給 AI。",
    note: "先審閱、後傳送，只向 AI 提供獲准使用的內容。",
    video: { ...siteContent.demo.video, title: "Mantle 產品示範" },
  },
  workflow: [
    { title: "說明工作需要", body: "說明您想完成的工作，並加入相關文件，令 AI 根據所需資料提供協助。" },
    { title: "識別敏感資料", body: "檢查您的提問及附件，找出個人資料、商業機密及其他需要特別處理的內容。" },
    { title: "按公司規則處理", body: "根據公司的資料保密及使用規則，決定哪些內容可以分享、哪些需要審批。" },
    { title: "保護需要保密的內容", body: "保留工作所需資料；敏感內容可用代號取代、移除，或交由指定人員覆核。" },
    { title: "確認傳送內容", body: "並排比較原文與處理後內容，確認實際傳送給 AI 的每一部分。" },
    { title: "選用獲准模型", body: "根據公司政策及資料保密要求，使用獲准的 AI 模型完成工作。" },
    { title: "按權限還原資料", body: "如政策允許，可在 Mantle 內將代號還原為原有資料；已移除的內容不會還原。" },
    { title: "保留審批與使用紀錄", body: "記錄處理方式、使用模型及審批過程，方便日後查閱；紀錄不包含已移除的敏感內容。" },
  ],
  controls: ["保留", "隱藏敏感資料", "移除", "人工覆核"],
  planes: [
    { label: "資料", question: "哪些資料可以使用？", detail: "識別敏感資料 · 按需要分享 · 設定保存期限" },
    { label: "AI", question: "可以使用哪些 AI 模型？", detail: "獲准模型 · 企業專用部署 · 使用政策" },
    { label: "行動", question: "下一步可以做甚麼？", detail: "審閱建議 · 指定人員審批 · 記錄操作" },
  ],
  capabilities: [
    { title: "按工作需要處理資料", status: "可於示範中體驗", body: "按文件用途及工作需要，建議保留或處理哪些資料。" },
    { title: "AI 資料治理", status: "開發中", body: "由識別敏感內容到審批、分享及保存，逐步建立完整的資料管理流程。" },
    { title: "按政策保護資料", status: "可於示範中體驗", body: "按公司設定的規則檢查內容，避免未獲批准的資料傳送給 AI。" },
    { title: "傳送前核對內容", status: "可於示範中體驗", body: "傳送前展示完整內容，令員工及覆核人員確認哪些資料會交給 AI。" },
    { title: "人工審批", status: "可於示範中體驗", body: "遇到需要判斷或較高風險的內容，先交由指定人員覆核。" },
    { title: "靈活選用 AI 模型", status: "開發中", body: "按工作需要及保密要求，選用公司批准的模型。" },
    { title: "使用與審批紀錄", status: "可於示範中體驗", body: "保留處理方式、模型使用及審批紀錄，方便日後追溯。" },
    { title: "權限管理", status: "開發中", body: "按職責設定誰可以查看資料、使用模型及批准下一步操作。" },
  ],
  useCases: [
    { title: "文件審閱", body: "審閱資助申請，同時移除與工作無關的個人及銀行資料。" },
    { title: "內部分析", body: "整理業務資料、草擬報告，同時減少披露與工作無關的員工、客戶及交易資料。" },
    { title: "專業服務", body: "協助整理客戶文件及草擬意見，並按公司的保密要求處理資料。" },
    { title: "研究與教育", body: "協助整理研究及行政文件，同時記錄資料的使用方式及審批過程。" },
    { title: "受監管工作", body: "在清楚的權限及審批安排下，評估 AI 如何協助日常工作。" },
  ],
  sectors: {
    eyebrow: "適用機構",
    title: "為重視資料保密與責任分工的企業而設。",
    body: "不同機構，面對同樣的問題：如何用好 AI，同時保護敏感資料？Mantle 從實際工作出發，協助團隊安排資料處理、模型使用及審批流程。",
    columns: { sector: "行業", help: "Mantle 如何協助" },
    rows: [
      { sector: "企業及私營機構", help: "提升日常工作效率，同時避免客戶資料及商業機密在未受控情況下外洩。" },
      { sector: "政府及公共機構", help: "加快文件與個案審閱，同時保護市民資料、財務資料、審批與決策紀錄。" },
      { sector: "銀行及金融服務", help: "協助整理認識你的客戶（KYC）、風險管理及合規文件，並按政策處理敏感金融資料。" },
      { sector: "學校、大學及研究機構", help: "協助教職員處理行政及研究工作，並按保密要求管理學生及研究資料。" },
      { sector: "專業服務", help: "協助整理客戶文件及草擬報告，同時遵守保密要求與公司的 AI 使用規則。" },
      { sector: "受監管行業及關鍵服務", help: "在指定權限及人工審批下評估 AI 應用，並保留可追溯的操作紀錄。" },
    ],
  },
  future: {
    ...siteContent.future,
    eyebrow: "未來方向 · Agent Workrooms",
    headline: "令 AI 協助更多工作，每一步都有清楚授權。",
    body: "未來，AI 將可協助查找資料、更新系統及協調工作。Mantle 正探索如何在每一步加入清楚的權限、審批及操作紀錄。",
    statement: "現階段：管理 AI 可以使用的資料。下一步：管理 AI 助手可以執行的工作。",
    disclaimer: "Agent Workrooms 為規劃中的功能，目前尚未提供自主執行工作。",
  },
  foundingTeam: {
    ...siteContent.foundingTeam,
    eyebrow: "關於我們",
    headline: "立足香港，結合金融、營運與科技經驗。",
    body: "Mantle Intelligence 由香港大學 MBA 校友團隊在香港創立。團隊經驗橫跨環球投資銀行、受監管金融、企業營運、區塊鏈、Web3 與新興科技。",
    experienceLabel: "創辦團隊曾任職及就讀於",
    experienceLogos,
    disclaimer: "以上機構只代表創辦團隊的工作及學術背景，並不表示任何合作、投資或認可。",
    pillars: [
      { label: "金融專業", detail: "具備環球投資銀行及受監管金融服務的工作經驗。" },
      { label: "營運經驗", detail: "曾在企業、科技及數碼資產業務中負責實際營運與執行。" },
      { label: "新興科技", detail: "曾參與區塊鏈、Web3 及新興科技產品的開發與應用。" },
    ],
  },
  strategicEcosystem: {
    ...siteContent.strategicEcosystem,
    eyebrow: "科技生態",
    title: "策略合作夥伴",
    intro: "",
    organisations: siteContent.strategicEcosystem.organisations.map((organisation) =>
      organisation.key === "nvidia" ? { ...organisation, note: "創辦團隊參與的產業計劃" } : organisation,
    ),
    disclaimer: "",
  },
  pilot: {
    eyebrow: "企業試用與合作",
    headline: "從您團隊的日常工作開始。",
    body: "告訴我們您想改善哪項工作，以及需要遵守的保密要求。我們會與您一起規劃合適的試用方式。",
  },
  footer: {
    line: "善用 AI，掌握資料與審批。",
    origin: "立足香港，面向亞洲及國際企業。",
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
    headline: "信任不是默认条件，而是治理的结果。",
    body: "Mantle 管理 AI 工作背后的数据、模型、审批与证据，让员工安心使用 AI，也让企业清楚了解每个结果如何产生。",
    note: "为信任不可妥协的机构而设计。",
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
  sectors: {
    eyebrow: "适用机构",
    title: "为信任不可妥协的机构而设计。",
    body: "从银行、政府部门到学校和企业团队，Mantle 帮助机构在处理敏感数据时充分利用 AI，同时管好数据、模型、审批与证据。",
    columns: { sector: "行业", help: "Mantle 如何提供帮助" },
    rows: [
      { sector: "企业及私营机构", help: "提升日常工作效率，同时避免客户数据和商业机密在未受控情况下外泄。" },
      { sector: "政府及公共机构", help: "加快文件与个案审核，同时保护公民信息、财务数据、审批与决策记录。" },
      { sector: "银行及金融服务", help: "在政策范围内使用 AI 支持 KYC、风险管理和合规工作，保护敏感金融数据。" },
      { sector: "学校、大学及研究机构", help: "让教职员工充分利用 AI，同时保护学生隐私、研究数据及机构问责。" },
      { sector: "专业服务", help: "在遵守客户保密要求、公司政策和获准模型范围的前提下，更快完成客户工作。" },
      { sector: "受监管行业及关键服务", help: "探索高价值 AI 工作流，同时保留数据访问控制、人工审批及可追溯证据。" },
    ],
  },
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
    eyebrow: "科技生态",
    title: "战略合作伙伴",
    intro: "",
    organisations: siteContent.strategicEcosystem.organisations.map((organisation) =>
      organisation.key === "nvidia" ? { ...organisation, note: "创始团队参与的产业计划" } : organisation,
    ),
    disclaimer: "",
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
    home: "Mantle Intelligence 首頁", menu: "目錄", requestPilot: "洽談試用", explore: "了解 Mantle", company: "公司", contact: "聯絡我們", privacy: "私隱政策", terms: "使用條款",
    secureEnquiry: "透過網站安全提交查詢。", copyright: "© 2026 Mantle Intelligence。保留所有權利。", swipe: "向右滑動 →", backHome: "← 返回首頁",
    legalEyebrow: "網站聲明 · 須由法律顧問審閱", legalNotice: "本頁內容是早期網站的暫擬版本，不構成最終法律意見。產品正式推出前，應交由合資格法律顧問審閱。",
    demoAlt: "Mantle 產品示範影片", openPrototype: "體驗產品示範", placeholderNote: "按播放觀看產品示範，影片附有聲音及字幕。", originalContext: "原始內容", approvedPayload: "已批准內容", keep: "保留", mask: "隱藏敏感資料", remove: "移除",
  },
  "zh-cn": {
    home: "Mantle Intelligence 首页", menu: "菜单", requestPilot: "申请试点", explore: "探索", company: "公司", contact: "联系我们", privacy: "隐私政策", terms: "使用条款",
    secureEnquiry: "通过网站安全提交咨询。", copyright: "© 2026 Mantle Intelligence。保留所有权利。", swipe: "向右滑动 →", backHome: "← 返回首页",
    legalEyebrow: "网站声明 · 须由法律顾问审阅", legalNotice: "本页内容是早期网站的暂定版本，不构成最终法律意见。产品正式推出前，应交由合资格法律顾问审阅。",
    demoAlt: "Mantle 产品演示视频", openPrototype: "打开在线原型", placeholderNote: "点击播放即可连同声音观看 · 视频已配字幕。", originalContext: "原始内容", approvedPayload: "已批准内容", keep: "保留", mask: "掩码", remove: "移除",
  },
} as const;
