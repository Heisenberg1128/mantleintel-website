import type { Locale } from "./i18n";

export const pageCopy = {
  en: {
    home: {
      plateTagline: "Trust is not assumed. It is governed.", plateTrust: "CONTROL → EVIDENCE → TRUST", plateContext: "ORGANISATIONAL CONTEXT", plateAi: "APPROVED AI",
      planesEyebrow: "Data governance for AI workflows", planesTitle: "Govern data before intelligence is invoked.", planesBody: "Mantle governs how organisational data is selected, classified, transformed, approved, exposed to AI systems, routed, retained and evidenced in the context of AI work.",
      whyEyebrow: "Why now?", whyTitle: "AI adoption is moving faster than enterprise control.", whyBody: "Employees already use multiple AI models. Agents are beginning to access systems and act on behalf of users. Governance has to move from model-level security to control over data, authority and action.",
      boundaryLabel: "01 · Governed boundary", boundaryLink: "See how it works", capabilitiesEyebrow: "Product capabilities", capabilitiesTitle: "Four controls that make AI usable.",
      realWork: "Real work", realWorkTitle: "Start with a workflow, not a transformation programme.",
      sequence: ["See", "Propose", "Approve", "Act", "Evidence"],
    },
    product: {
      eyebrow: "Employee AI Workspace · Current prototype", title: "Useful AI work, through a trusted boundary.", intro: "Ask, attach and analyse in one workspace. Mantle makes the controls visible before an approved model receives the exact payload, so trust can be verified rather than assumed.",
      demoEyebrow: "Product demonstration", demoTitle: "See what leaves Mantle.", controlsEyebrow: "Control language", controlsTitle: "Clear treatments. Exact consequences.", capabilitiesEyebrow: "Product capabilities", capabilitiesTitle: "Control around intelligence.", architectureEyebrow: "Architecture in development", architectureTitle: "Data → AI → action governance.",
    },
    how: { eyebrow: "How it works", title: "AI understands. Policy authorises. Evidence earns trust.", intro: "Mantle lets the task proceed while deterministic organisational policy controls data, model access and approvals—and leaves evidence that people can verify.", planesEyebrow: "Three governed planes", planesTitle: "Control what AI can see, receive and do." },
    cases: { eyebrow: "Use cases", title: "Put AI to work where trust matters most.", intro: "Start with one practical workflow where AI creates value and data, permissions or accountability cannot be left to assumption." },
    vision: {
      eyebrow: "Vision", title: "Intelligence will become abundant. Trust and authority will not.", intro: "The scarce enterprise layer is becoming context, permissions, authority and evidence—not access to another model.",
      today: "Today · Current prototype", todayTitle: "Govern what AI can see and use.", todayBody: "The Employee AI Workspace governs prompts, documents, data treatments, approved model routes and safe evidence.",
      tomorrow: "Tomorrow · Future direction", tomorrowTitle: "Govern what AI agents can do.", tomorrowBody: "Agent Workrooms are a direction under development for proposed actions, approvals, expiring authority and evidence.",
      planesEyebrow: "Data → AI → action", planesTitle: "A control layer for increasingly capable systems.",
    },
    company: {
      eyebrow: "Company", perspective: "Founding perspective", perspectiveTitle: "Built for organisations where trust is non-negotiable.",
      perspectiveBody: ["Mantle’s founding team combines institutional finance with hands-on operating experience across regulated financial services, corporate operations, digital assets, Web3, blockchain and emerging technology.", "That combination shapes a product designed to make AI useful inside real organisations—where data boundaries, delegated authority and accountable decisions matter."],
      hongKong: "Hong Kong", hongKongTitle: "Built in Hong Kong. Designed across jurisdictions.", hongKongBody: "Hong Kong combines global finance, regulated institutions, cross-border data considerations, universities, public bodies and enterprise technology adoption in one compact market—a strong place to build and validate governed AI workflows before expanding across Asia.",
    },
    contact: {
      eyebrow: "Request a pilot", title: "Bring one real AI workflow.", intro: "Start with one team and one real policy boundary. Tell us where useful AI work meets data, model or approval constraints.",
      fields: { name: "Name", organisation: "Organisation", email: "Work email", role: "Role", workflow: "What AI workflow are you exploring?", trap: "Leave this field empty", submit: "Send pilot request" },
      promiseEyebrow: "Private enquiry", promiseTitle: "Send it from here.", promiseBody: "Your note is delivered directly to the Mantle founding team. No external email application is required, and no personal mailbox is displayed on this site.",
      promiseList: ["One workflow is enough to start.", "We will only use your details to discuss a pilot or design-partner conversation.", "Submitting this form does not create a customer relationship."],
    },
    privacy: { title: "Privacy notice", intro: "This notice describes the limited information this public website may handle at its current stage.", sections: [
      { title: "Website information", body: ["The website may receive ordinary technical request information needed to deliver pages, such as IP address, browser type and request time, through its hosting provider.", "No invasive analytics or advertising trackers are enabled by default in this initial release."] },
      { title: "Pilot enquiries", body: ["If you contact Mantle about a pilot, the information you choose to provide may be used to understand and respond to your enquiry. Do not submit confidential, regulated or sensitive operational data through an initial website enquiry."] },
      { title: "Third-party services", body: ["The website, including its product demonstration video, is delivered through third-party hosting and domain services. The video is served directly from Mantle’s website and is not embedded from a public video-sharing channel."] },
      { title: "Questions", body: ["Privacy and website questions can be submitted through the contact form. This notice remains subject to qualified legal review as Mantle develops."] },
    ] },
    terms: { title: "Website terms", intro: "These preliminary terms cover use of the public Mantle Intelligence website.", sections: [
      { title: "Informational purpose", body: ["This website presents an early-stage company, its current prototype direction and its longer-term product vision. Content is provided for general information and design-partner conversations."] },
      { title: "Product status", body: ["References to prototypes, architecture in development and future Agent Workrooms are not promises that every capability is production-ready or generally available."] },
      { title: "No reliance", body: ["Nothing on this website is legal, regulatory, security, investment or other professional advice. Organisations should conduct their own assessment before relying on any product or workflow."] },
      { title: "Intellectual property", body: ["Unless otherwise stated, the website copy and design are presented as Mantle Intelligence materials. Third-party names remain the property of their respective owners."] },
      { title: "Changes", body: ["These terms may change as the company, website and product develop. A final version should be reviewed by qualified counsel before substantive commercial use."] },
    ] },
  },
  "zh-hk": {
    home: {
      plateTagline: "文件審閱、資料分析、內容草擬。", plateTrust: "資料有保護 · 操作有紀錄 · 審批有依據", plateContext: "企業資料", plateAi: "獲准使用的 AI",
      planesEyebrow: "資料保護與使用管理", planesTitle: "用好 AI，由管好資料開始。", planesBody: "哪些資料可以交給 AI？應該使用哪個模型？誰來批准結果？Mantle 將這些安排放進同一個工作流程。",
      whyEyebrow: "企業面對的挑戰", whyTitle: "團隊開始用 AI，管理方式也要跟上。", whyBody: "當員工使用不同 AI 工具處理文件，企業需要知道哪些資料曾經分享、使用了哪個模型，以及結果由誰覆核。Mantle 協助您把這些步驟看清楚。",
      boundaryLabel: "01 · 傳送前審閱", boundaryLink: "了解運作方式", capabilitiesEyebrow: "產品功能", capabilitiesTitle: "四項核心功能，協助團隊妥善使用 AI。",
      realWork: "實際工作", realWorkTitle: "從日常工作開始，看見 AI 的實際價值。",
      sequence: ["檢視", "建議", "批准", "執行", "記錄"],
    },
    product: {
      eyebrow: "企業 AI 工作平台 · 產品示範", title: "處理文件、分析資料、草擬內容，一個平台完成。", intro: "上載文件並說明工作需要。Mantle 會先協助處理敏感資料，令您確認內容後，再交給獲准的 AI 模型。結果附有來源，方便覆核。",
      demoEyebrow: "產品示範", demoTitle: "傳送給 AI 的內容，先看清楚，再確認。", controlsEyebrow: "處理方式", controlsTitle: "哪些資料保留、哪些需要隱藏，由您確認。", capabilitiesEyebrow: "產品功能", capabilitiesTitle: "從資料處理到人工覆核，每一步都有安排。", architectureEyebrow: "功能開發中", architectureTitle: "管理資料、模型與後續操作。",
    },
    how: { eyebrow: "運作方式", title: "由上載文件到覆核結果，每一步都清楚。", intro: "先檢查資料，再確認傳送內容，最後由指定人員覆核結果。Mantle 將公司的 AI 使用規則融入日常工作。", planesEyebrow: "三個管理重點", planesTitle: "管控 AI 可以看見、接收和執行甚麼。" },
    cases: { eyebrow: "行業應用", title: "令 AI 協助處理重要工作。", intro: "由文件審閱到內部分析，按行業需要安排資料保護、使用權限及審批流程。" },
    vision: {
      eyebrow: "願景", title: "AI 能做得更多，企業也要掌握每一步。", intro: "隨着 AI 開始協助更多工作，企業需要清楚界定它可以使用哪些資料、執行哪些操作，以及何時需要人工審批。",
      today: "現階段 · 產品示範", todayTitle: "管控 AI 可以看見和使用甚麼。", todayBody: "在同一平台提出工作要求、處理附件、確認資料分享方式，並查看模型使用及審批紀錄。",
      tomorrow: "未來 · 發展方向", tomorrowTitle: "管控 AI 智能體可以執行甚麼。", tomorrowBody: "Agent Workrooms 將探索令 AI 提出操作建議，由指定人員審批，並在授權期限內執行及記錄。",
      planesEyebrow: "資料 → AI → 行動", planesTitle: "令每項 AI 操作都有清楚的授權與紀錄。",
    },
    company: {
      eyebrow: "關於我們", perspective: "創辦理念", perspectiveTitle: "了解企業需要，也重視每項決定的責任。",
      perspectiveBody: ["Mantle 團隊結合金融、企業營運及科技產品經驗，了解機構在保密、審批及責任分工上的實際需要。", "我們希望令 AI 真正幫到團隊，同時令企業清楚掌握資料如何使用、工作由誰批准，以及結果如何產生。"],
      hongKong: "香港", hongKongTitle: "立足香港，面向亞洲及國際企業。", hongKongBody: "香港匯聚金融、專業服務、教育及公共機構。我們從本地團隊的工作需要出發，探索如何在跨境業務中妥善使用 AI。",
    },
    contact: {
      eyebrow: "洽談試用", title: "一起看看，AI 可以怎樣幫到您的團隊。", intro: "告訴我們您想改善哪項工作，以及相關的資料保密或審批要求。我們會與您聯絡，討論合適的試用安排。",
      fields: { name: "姓名", organisation: "機構", email: "工作電郵", role: "職位", workflow: "您希望 AI 協助處理哪項工作？", trap: "請留空此欄", submit: "提交查詢" },
      promiseEyebrow: "保密查詢", promiseTitle: "直接與 Mantle 團隊聯絡。", promiseBody: "簡單介紹您的團隊及工作需要，我們會跟進查詢，與您討論下一步。",
      promiseList: ["可以先從一項日常工作開始。", "您提供的資料只會用於跟進查詢及討論試用合作。", "提交表格不代表建立客戶關係。"],
    },
    privacy: { title: "私隱政策", intro: "本聲明說明您瀏覽本網站或提交查詢時，我們可能處理哪些資料。", sections: [
      { title: "網站技術資料", body: ["網站託管服務供應商可能會接收提供頁面所需的一般技術資料，例如 IP 地址、瀏覽器類型及請求時間。", "網站初期版本預設不啟用侵入式分析或廣告追蹤器。"] },
      { title: "試用查詢", body: ["如果您聯絡 Mantle 查詢試用，我們可能會使用您主動提供的資料來理解及回覆查詢。首次網站查詢請勿提交機密、受監管或敏感營運資料。"] },
      { title: "第三方服務", body: ["網站及產品示範影片均透過第三方託管及網域服務提供。影片由 Mantle 網站直接播放，並非嵌入任何公開影片分享頻道。"] },
      { title: "查詢", body: ["私隱及網站相關問題可透過聯絡表格提交。隨著 Mantle 發展，本聲明仍須由合資格法律顧問審閱。"] },
    ] },
    terms: { title: "網站使用條款", intro: "以下初步條款適用於 Mantle Intelligence 公開網站。", sections: [
      { title: "資訊用途", body: ["本網站介紹Mantle 的業務、現階段產品示範及未來發展方向。內容只供一般參考及試用及合作討論。"] },
      { title: "產品狀態", body: ["網站提及的原型、開發中架構及未來 Agent Workrooms，不代表所有功能已正式推出或可供商業使用。"] },
      { title: "不構成專業意見", body: ["網站內容不構成法律、監管、安全、投資或其他專業意見。任何機構採用產品或流程前，均應自行評估。"] },
      { title: "知識產權", body: ["除非另有說明，網站文字及設計均以 Mantle Intelligence 資料呈現。第三方名稱的權利仍屬各自擁有人。"] },
      { title: "條款更新", body: ["條款可隨公司、網站及產品發展而更新。進行實質商業用途前，最終版本應由合資格法律顧問審閱。"] },
    ] },
  },
  "zh-cn": {
    home: {
      plateTagline: "信任不是默认条件，而是治理的结果。", plateTrust: "清晰管控 → 可验证证据 → 建立信任", plateContext: "企业上下文", plateAi: "获准 AI",
      planesEyebrow: "AI 工作流的数据治理", planesTitle: "先管好数据，再启用智能。", planesBody: "Mantle 以工作上下文为基础，管理企业数据如何被选取、分类、转换、审批、发送至 AI、路由、保存并形成证据。",
      whyEyebrow: "为什么是现在？", whyTitle: "AI 的采用速度，已经超过企业的管控能力。", whyBody: "员工已经在使用多种 AI 模型，AI 智能体也开始访问系统并代表用户执行工作。治理不能只停留在模型安全，还要管控数据、权限与行动。",
      boundaryLabel: "01 · 受控边界", boundaryLink: "了解工作原理", capabilitiesEyebrow: "产品能力", capabilitiesTitle: "四项核心控制，让企业放心使用 AI。",
      realWork: "实际工作", realWorkTitle: "从一个工作流开始，而不是先推动庞大转型。",
      sequence: ["查看", "建议", "批准", "执行", "留证"],
    },
    product: {
      eyebrow: "员工 AI 工作空间 · 现有原型", title: "让实际 AI 工作，在可信边界内完成。", intro: "在同一工作空间提出问题、添加附件并进行分析。Mantle 先展示并执行数据管控，再将实际批准内容发送给合规模型，让信任有据可查。",
      demoEyebrow: "产品演示", demoTitle: "清楚看到哪些内容会离开 Mantle。", controlsEyebrow: "处理方式", controlsTitle: "简单清晰的选项，对应明确结果。", capabilitiesEyebrow: "产品能力", capabilitiesTitle: "为 AI 建立完整控制。", architectureEyebrow: "架构开发中", architectureTitle: "数据 → AI → 行动治理。",
    },
    how: { eyebrow: "工作原理", title: "AI 负责理解，政策负责授权，证据建立信任。", intro: "Mantle 让工作继续进行，同时以企业政策管控数据、模型访问和审批，并留下可验证记录。", planesEyebrow: "三个治理层面", planesTitle: "管控 AI 可以看到、接收和执行什么。" },
    cases: { eyebrow: "应用场景", title: "在最需要信任的工作中充分利用 AI。", intro: "从一个实际工作流开始：AI 能创造价值，而数据、权限和问责不能依靠假设。" },
    vision: {
      eyebrow: "愿景", title: "智能将越来越普及，但信任与授权仍然稀缺。", intro: "企业真正需要掌握的，不是再多一个模型，而是上下文、权限、授权与证据。",
      today: "今天 · 现有原型", todayTitle: "管控 AI 可以看到和使用什么。", todayBody: "员工 AI 工作空间管控提示、文件、数据处理方式、获批准模型路由和安全证据。",
      tomorrow: "未来 · 发展方向", tomorrowTitle: "管控 AI 智能体可以执行什么。", tomorrowBody: "Agent Workrooms 将探索建议行动、审批、限时授权和审计证据。",
      planesEyebrow: "数据 → AI → 行动", planesTitle: "为能力不断提升的系统建立控制层。",
    },
    company: {
      eyebrow: "关于我们", perspective: "创办理念", perspectiveTitle: "为信任不可妥协的机构而设计。",
      perspectiveBody: ["Mantle 创始团队结合机构金融经验与实际运营能力，背景涵盖受监管金融服务、企业运营、数字资产、Web3、区块链与新兴科技。", "这些经验塑造出一款面向真实企业环境的产品：AI 必须有用，同时数据边界、授权范围与决策责任必须清楚。"],
      hongKong: "香港", hongKongTitle: "立足香港，面向跨地域企业。", hongKongBody: "香港在一个紧密市场中汇聚全球金融、受监管机构、跨境数据议题、大学、公共机构与企业科技应用，是验证治理型 AI 工作流并拓展亚洲市场的理想起点。",
    },
    contact: {
      eyebrow: "申请试点", title: "带来一个真实 AI 工作流。", intro: "从一个团队和一条真实政策边界开始。告诉我们，您的工作在哪些地方同时需要 AI 效率与数据、模型或审批控制。",
      fields: { name: "姓名", organisation: "机构", email: "工作邮箱", role: "职位", workflow: "您希望探索哪一个 AI 工作流？", trap: "请留空此栏", submit: "提交试点申请" },
      promiseEyebrow: "保密咨询", promiseTitle: "直接在这里提交。", promiseBody: "您的信息会直接发送给 Mantle 创始团队，无需打开外部邮件程序，网站也不会公开任何私人邮箱。",
      promiseList: ["只需一个流程即可开始。", "您的资料只会用于讨论试点或设计伙伴合作。", "提交表格不代表建立客户关系。"],
    },
    privacy: { title: "隐私政策", intro: "本声明说明这个公开网站在现阶段可能处理的有限数据。", sections: [
      { title: "网站技术数据", body: ["网站托管服务商可能会接收提供页面所需的一般技术数据，例如 IP 地址、浏览器类型和请求时间。", "网站初期版本默认不启用侵入式分析或广告追踪器。"] },
      { title: "试点咨询", body: ["如果您联系 Mantle 咨询试点，我们可能会使用您主动提供的数据来理解并回复咨询。首次网站咨询请勿提交机密、受监管或敏感运营数据。"] },
      { title: "第三方服务", body: ["网站及产品演示视频均通过第三方托管及域名服务提供。视频由 Mantle 网站直接播放，并非嵌入任何公开视频分享频道。"] },
      { title: "咨询", body: ["隐私及网站相关问题可通过联系表格提交。随着 Mantle 发展，本声明仍须由合资格法律顾问审阅。"] },
    ] },
    terms: { title: "网站使用条款", intro: "以下初步条款适用于 Mantle Intelligence 公开网站。", sections: [
      { title: "信息用途", body: ["本网站介绍一家早期公司、现有原型方向及长期产品愿景。内容仅供一般参考与设计伙伴交流。"] },
      { title: "产品状态", body: ["网站提及的原型、开发中架构及未来 Agent Workrooms，不代表所有能力已可投入生产或普遍提供。"] },
      { title: "不构成专业意见", body: ["网站内容不构成法律、监管、安全、投资或其他专业意见。任何机构采用产品或流程前，均应自行评估。"] },
      { title: "知识产权", body: ["除非另有说明，网站文字和设计均以 Mantle Intelligence 资料呈现。第三方名称的权利仍归各自所有者。"] },
      { title: "条款更新", body: ["条款可随公司、网站及产品发展而更新。进行实质商业用途前，最终版本应由合资格法律顾问审阅。"] },
    ] },
  },
} as const satisfies Record<Locale, object>;
