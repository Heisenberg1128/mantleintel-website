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
    description: "用 Mantle 審閱文件、分析資料及草擬內容，同時保護敏感資料，記錄每次 AI 操作及審批。",
  },
  navigation: [
    { label: "產品", href: "/zh-hk/product/" },
    { label: "如何運作", href: "/zh-hk/how-it-works/" },
    { label: "應用例子", href: "/zh-hk/use-cases/" },
    { label: "未來發展", href: "/zh-hk/vision/" },
    { label: "關於 Mantle", href: "/zh-hk/company/" },
  ],
  hero: {
    ...siteContent.hero,
    eyebrow: "企業 AI 平台｜保護資料・管理審批",
    headline: "用 AI 做事，公司全程掌握。",
    body: "審閱文件、分析資料、草擬內容，都可在 Mantle 完成。系統會先檢查敏感資料，再把內容交給公司批准使用的 AI，並記錄每次操作及審批。",
    note: "適合需要保護客戶資料、公司機密及清楚分工的團隊。",
    primaryCta: "預約",
    secondaryCta: "看看產品",
  },
  demo: {
    ...siteContent.demo,
    eyebrow: "產品示範",
    headline: "交給 AI 前，先看看有甚麼內容。",
    body: "Mantle 會標示文件內的敏感資料，並建議保留、隱藏或刪除。你確認後，內容才會交給 AI。",
    note: "你確認後，內容才會交給 AI。",
    video: { ...siteContent.demo.video, title: "Mantle 產品示範" },
  },
  workflow: [
    { title: "說明要做甚麼", body: "輸入工作要求並加入文件，Mantle 會找出 AI 完成工作所需的資料。" },
    { title: "找出敏感資料", body: "檢查你的要求及附件，找出個人資料、公司機密及其他敏感內容。" },
    { title: "套用公司規則", body: "按公司的規則，決定哪些內容可以交給 AI，哪些需要先批准。" },
    { title: "隱藏或刪除敏感內容", body: "保留工作需要的資料，並隱藏或刪除其他敏感內容。有需要時，也可交給指定人員檢查。" },
    { title: "查看將會傳送的內容", body: "把原文和處理後的內容放在一起比較，清楚看到 AI 將會收到甚麼。" },
    { title: "選擇公司批准的 AI", body: "按工作需要及保密要求，使用公司批准的 AI 模型。" },
    { title: "按需要還原資料", body: "如果公司允許，可在 Mantle 內把代號還原成原有資料；已刪除的內容不會還原。" },
    { title: "記錄每次操作", body: "記錄資料如何處理、用了哪個 AI，以及由誰批准，方便之後查看。紀錄不會保存已刪除的敏感內容。" },
  ],
  controls: ["保留", "隱藏", "刪除", "交給人員檢查"],
  planes: [
    { label: "資料", question: "哪些資料可以交給 AI？", detail: "敏感資料 · 分享範圍 · 保存時間" },
    { label: "AI", question: "可以使用哪些 AI？", detail: "公司批准的模型 · 私人部署 · 使用規則" },
    { label: "操作", question: "AI 可以做甚麼？", detail: "提出建議 · 人手批准 · 操作記錄" },
  ],
  capabilities: [
    { title: "按需要處理資料", status: "示範版已有", body: "按文件用途，建議哪些資料要保留、隱藏或刪除。" },
    { title: "管理 AI 使用的資料", status: "開發中", body: "由找出敏感內容，到批准、分享及保存資料，整個流程都可管理。" },
    { title: "按公司規則保護資料", status: "示範版已有", body: "按公司設定的規則檢查內容，避免未經批准的資料交給 AI。" },
    { title: "傳送前查看完整內容", status: "示範版已有", body: "交給 AI 前，員工及負責審批的人都可查看完整內容。" },
    { title: "由指定人員批准", status: "示範版已有", body: "遇到不清楚或風險較高的內容，先交給指定人員決定。" },
    { title: "選擇合適的 AI", status: "開發中", body: "按工作需要及保密要求，選用公司批准的 AI。" },
    { title: "操作及審批紀錄", status: "示範版已有", body: "記錄資料如何處理、用了哪個 AI，以及由誰批准，之後隨時可查。" },
    { title: "管理使用權限", status: "開發中", body: "設定誰可以查看資料、使用 AI 及批准下一步操作。" },
  ],
  useCases: [
    { title: "文件審閱", body: "審閱資助申請，同時移除與工作無關的個人及銀行資料。" },
    { title: "內部分析", body: "整理業務資料、草擬報告，同時減少披露與工作無關的員工、客戶及交易資料。" },
    { title: "客戶工作", body: "整理客戶文件及草擬內容，同時按公司的要求保護資料。" },
    { title: "教育與研究", body: "整理研究及行政文件，同時記錄資料如何使用及由誰批准。" },
    { title: "合規工作", body: "在權限及審批清楚的情況下，用 AI 協助日常工作。" },
  ],
  sectors: {
    eyebrow: "適合哪些團隊",
    title: "需要用 AI，也需要保護資料。",
    body: "銀行、政府、學校及企業都會遇到同一個問題：怎樣用 AI 提高效率，同時保護敏感資料？Mantle 幫團隊管理資料、AI 及審批。",
    columns: { sector: "行業", help: "Mantle 可以怎樣幫忙" },
    rows: [
      { sector: "企業及私人機構", help: "加快日常工作，同時避免客戶資料及公司機密意外外洩。" },
      { sector: "政府及公共機構", help: "加快處理文件及個案，同時保護市民資料、財務資料及審批紀錄。" },
      { sector: "銀行及金融服務", help: "整理 KYC、風險管理及合規文件，同時按公司規則保護敏感金融資料。" },
      { sector: "學校、大學及研究機構", help: "協助教職員處理行政及研究工作，同時保護學生及研究資料。" },
      { sector: "專業服務", help: "整理客戶文件及草擬報告，同時遵守保密要求及公司的 AI 使用規則。" },
      { sector: "受監管行業及公共服務", help: "在權限及人手審批清楚的情況下使用 AI，並記錄每次操作。" },
    ],
  },
  future: {
    ...siteContent.future,
    eyebrow: "下一步 · Agent Workrooms",
    headline: "AI 可以幫你做更多，公司仍可控制每一步。",
    body: "未來，AI 可以幫你找資料、更新系統及跟進工作。Mantle 會為每一步設定權限、審批及操作記錄。",
    statement: "現在：管理 AI 可以使用的資料。下一步：管理 AI 可以執行的工作。",
    disclaimer: "Agent Workrooms 還在開發，現時未能自動執行工作。",
  },
  foundingTeam: {
    ...siteContent.foundingTeam,
    eyebrow: "關於我們",
    headline: "由香港團隊創立，擁有金融、營運及科技經驗。",
    body: "Mantle Intelligence 由香港大學 MBA 校友在香港創立。團隊成員曾在環球投資銀行、金融機構、企業營運、區塊鏈、Web3 及科技公司工作。",
    experienceLabel: "創辦團隊的工作及學歷背景",
    experienceLogos,
    disclaimer: "以上機構只代表團隊成員的工作或學歷背景，不代表任何合作、投資或認可。",
    pillars: [
      { label: "金融", detail: "曾在環球投資銀行及受監管金融機構工作。" },
      { label: "營運", detail: "曾負責企業、科技及數碼資產業務的日常營運。" },
      { label: "科技", detail: "曾開發及應用區塊鏈、Web3 及其他新科技產品。" },
    ],
  },
  strategicEcosystem: {
    ...siteContent.strategicEcosystem,
    eyebrow: "科技夥伴",
    title: "合作夥伴",
    intro: "",
    organisations: siteContent.strategicEcosystem.organisations.map((organisation) =>
      organisation.key === "nvidia" ? { ...organisation, note: "創辦團隊參與的計劃" } : organisation,
    ),
    disclaimer: "",
  },
  pilot: {
    eyebrow: "預約",
    headline: "先看看 Mantle 怎樣幫到你的團隊。",
    body: "告訴我們你想改善哪項工作，以及需要注意哪些保密要求。我們會按你的情況準備產品示範。",
  },
  footer: {
    line: "用 AI 工作，資料和審批仍由你掌握。",
    origin: "香港團隊，服務亞洲及國際企業。",
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
    home: "Mantle Intelligence 首頁", menu: "選單", requestPilot: "預約", explore: "產品", company: "公司", contact: "聯絡我們", privacy: "私隱政策", terms: "使用條款",
    secureEnquiry: "我們會直接跟進。", copyright: "© 2026 Mantle Intelligence。版權所有。", swipe: "向右滑動 →", backHome: "← 返回首頁",
    legalEyebrow: "網站聲明 · 須由法律顧問審閱", legalNotice: "本頁內容是早期網站的暫擬版本，不構成最終法律意見。產品正式推出前，應交由合資格法律顧問審閱。",
    demoAlt: "Mantle 產品示範影片", openPrototype: "立即試用", placeholderNote: "按播放鍵觀看示範，影片有聲音及字幕。", originalContext: "原本內容", approvedPayload: "確認傳送的內容", keep: "保留", mask: "隱藏", remove: "刪除",
  },
  "zh-cn": {
    home: "Mantle Intelligence 首页", menu: "菜单", requestPilot: "申请试点", explore: "探索", company: "公司", contact: "联系我们", privacy: "隐私政策", terms: "使用条款",
    secureEnquiry: "通过网站安全提交咨询。", copyright: "© 2026 Mantle Intelligence。保留所有权利。", swipe: "向右滑动 →", backHome: "← 返回首页",
    legalEyebrow: "网站声明 · 须由法律顾问审阅", legalNotice: "本页内容是早期网站的暂定版本，不构成最终法律意见。产品正式推出前，应交由合资格法律顾问审阅。",
    demoAlt: "Mantle 产品演示视频", openPrototype: "打开在线原型", placeholderNote: "点击播放即可连同声音观看 · 视频已配字幕。", originalContext: "原始内容", approvedPayload: "已批准内容", keep: "保留", mask: "掩码", remove: "移除",
  },
} as const;
