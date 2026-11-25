import type { FaqItem } from './types';

export const CLIENTS_FAQS: FaqItem[] = [
  {
    id: "clash-verge-timeout-all-red",
    question: "为什么Clash Verge / Sing-box 节点全部显示超时或红色Timeout？10秒快速排查与修复教程",
    category: "客户端与故障排查",
    summary: "节点全红是科学上网最常见的故障。90%的用户都是因为本地系统时间不同步、内核端口占用或杀毒软件拦截导致，手把手教您快速自查自愈。",
    answer: "遇到节点全红通常由以下原因引起：1. 本地电脑/手机系统时间未校准：TLS 加密握手要求系统时间与标准北京时间偏差不超过 90 秒，请在系统设置中点击“立即同步时间”；2. 客户端内核未启动或网络权限被杀软拦截：检查防火墙是否允许 Clash/Sing-box 通信；3. 订阅链接过期或流量已耗尽：登录机场后台核对套餐有效期；4. 机场节点正在切换入口：在客户端中右键点击订阅执行“更新订阅”即可获取最新节点。",
    keywords: ["Clash节点全红", "节点全部超时Timeout", "Clash Verge无法连接", "Sing-box超时排查", "TLS握手失败时间同步"],
    relatedAirports: [
      { name: "微风网络", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "全端兼容", reason: "全协议自动适配，后台提供一键订阅健康度检测与智能转换" },
      { name: "飞猫云", url: "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW", badge: "性价比首选", reason: "多入口备用节点丰富，支持一键更新与自动故障转移" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "稳定榜首", reason: "企业级高可用SLA，节点几乎零维护中断" }
    ],
    relatedFaqs: ["subscription-link-import-failed-fix", "windows-proxy-port-conflict-and-residual-fix", "clash-tun-mode-game-acceleration"],
    detailedContent: `
### 一、节点全部爆红超时的四大根本原因

当你在 Clash Verge Rev、Sing-box 或 Shadowrocket 客户端中点击“延迟测速”时，所有节点全部显示 \`Timeout\` 或 \`9999ms\`，请立刻按照以下优先级从上到下排查：

---

### 二、10秒急救排查步骤

#### 1. 致命原因第一名：电脑/手机系统时间未同步（占比 75%）
现代科学上网协议（包括 TLS 1.3、Reality、Trojan、Hysteria 2）均强制包含严格的时间戳握手校验。**只要你的本地系统时间与国际标准北京时间偏差超过 90 秒，TLS 加密握手就会被远端服务器直接拒绝！**
- **Windows 修复方法**：右键点击右下角时钟 ➔ 选择【调整日期和时间】 ➔ 点击【立即同步】按钮。
- **macOS 修复方法**：进入【系统设置】 ➔ 【通用】 ➔ 【日期与时间】 ➔ 关闭后重新开启【自动设置时间】。
- **手机修复方法**：进入系统设置打开【自动通过网络确定时间】。

#### 2. 致命原因第二名：套餐流量已耗尽或服务到期（占比 15%）
很多用户并未留意当月流量已用完或包月刚过期。登录机场后台核对【剩余流量】与【到期时间】。

#### 3. 致命原因第三名：旧内核进程残留或 7897/7890 端口冲突（占比 8%）
- 如果之前安装过其他代理软件，后台经常残留未杀死的旧内核进程。
- **解决方法**：打开 Windows 任务管理器，搜索 \`clash-meta\` 或 \`mihomo\`，将相关进程全部右键【结束任务】，然后重新以管理员身份启动 Clash Verge Rev。

#### 4. 致命原因第四名：机场正在进行入口 IP 动态更新（占比 2%）
- 在客户端的【订阅】页面中，右键点击你的机场订阅卡片，选择【更新订阅】，数秒内即可拉取最新解析 IP 恢复全绿。
`
  },
  {
    id: "global-vs-rule-mode-domestic-sites",
    question: "为什么开启代理后微信打不开、淘宝和百度连不上？Rule规则模式与分流原理解析",
    category: "客户端与故障排查",
    summary: "很多新手误开全局模式导致国内APP打不开甚至触发异地封号。本文深度科普分流规则（Rule/Global/Direct）的运作原理与最佳设置方案。",
    answer: "这通常是因为客户端误开启了【Global（全局代理）】模式，导致所有国内流量强行走境外代理绕了一大圈。解决方案非常简单：打开客户端的模式切换设置，将运行模式从【Global (全局)】切换为【Rule (规则模式)】。在规则模式下，国内网站自动走本地宽带直连，海外受限网站才会走代理通道，既省流量又保证国内 APP 秒开。",
    keywords: ["代理后微信连不上", "淘宝打不开", "Global和Rule区别", "Clash分流规则", "国内直连海外走代理"],
    relatedAirports: [
      { name: "微风网络", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "智能分流", reason: "内置高精度分流规则集，国内直连毫秒响应" },
      { name: "飞猫云", url: "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW", badge: "大流量推荐", reason: "分流规则省流效果立竿见影，流量包更耐用" }
    ],
    relatedFaqs: ["clash-verge-timeout-all-red", "dns-leak-and-dns-pollution-prevention", "bandwidth-multiplier-explained-05x-2x"],
    detailedContent: `
### 一、三大运行模式彻底搞懂

现代科学上网客户端（Clash Verge Rev、Sing-box、Shadowrocket）普遍提供以下三种流量出站模式：

1. **Rule（规则模式 / 智能分流）—— 【强烈推荐，99%场景首选】**：
   - 客户端内部维护了一套庞大的域名与 IP 数据库（GeoIP / GeoSite）；
   - 当你访问 \`baidu.com\`、\`qq.com\`、\`taobao.com\` 或中国境内的 IP 时，客户端直接调用你的本地运营商宽带直连（DIRECT），速度最快且完全不消耗机场流量；
   - 当你访问 \`google.com\`、\`youtube.com\`、\`github.com\` 时，客户端才自动将数据包转交给境外机场节点。
2. **Global（全局模式）—— 【仅在极少数调试排错时使用】**：
   - 所有流量（包括微信打字、发朋友圈、百度搜索）全部强行走境外节点绕一大圈；
   - 导致国内 APP 极其缓慢、微信频繁提示“网络连接异常”，甚至导致淘宝、银行 APP 或支付宝触发异地跨国登录风控强制锁号！
3. **Direct（直连模式）**：
   - 完全不经过代理，所有流量均走本地宽带（相当于关闭翻墙）。

---

### 二、一键修复国内网络打不开教程

1. 打开 Clash Verge Rev 客户端；
2. 点击左侧 **【代理 (Proxy)】** 菜单；
3. 在顶部切换栏中，将勾选由 **【Global】** 切换为 **【Rule】**；
4. 此时打开微信、百度或刷新网购软件，即可秒速恢复正常！
`
  },
  {
    id: "clash-tun-mode-game-acceleration",
    question: "如何开启Clash Tun虚拟网卡模式给外服游戏或跨国会议加速？",
    category: "客户端与故障排查",
    summary: "普通系统代理无法接管外服网游对战与某些命令行工具。本文教您如何在Clash Verge Rev中一键开启Tun虚拟网卡实现系统级全流量接管。",
    answer: "系统代理（System Proxy）只能接管支持 HTTP/Socks5 协议的浏览器流量，无法接管游戏进程的 UDP 流量或某些终端工具。通过在 Clash Verge Rev 中开启【Tun 模式（虚拟网卡模式）】，系统会在操作系统底层安装一张虚拟网卡，实现全系统所有软件、外服对战游戏（如 Steam、CS2、Apex、GTA5）与国际会议的 100% 接管与低延迟加速。",
    keywords: ["Clash Tun模式开启教程", "外服游戏加速配置", "Clash Verge打不开游戏", "Steam低延迟代理", "虚拟网卡模式教程"],
    relatedAirports: [
      { name: "暮光加速", url: "https://varnexa.twilightaff.com/#/?code=3qqonTlH", badge: "电竞利器", reason: "深港/沪日专属低延迟隧道，开Tun模式联机无跳ping、无卡顿" },
      { name: "星岛梦 StarDream", url: "https://kfccbb.xingdaomeng.com/#/?code=JTRIWFim", badge: "游戏优选", reason: "海外游戏低延迟专属节点，支持各区外服直连加速" }
    ],
    relatedFaqs: ["macbook-clash-verge-brew-curl-terminal-proxy", "nintendo-switch-ps5-xbox-nat-type-b-to-a", "clash-verge-timeout-all-red"],
    detailedContent: `
### 一、为什么玩外服游戏和某些终端软件必须开启 Tun 模式？

许多玩家购买了机场专线节点后，在电脑上开启了系统代理，但打开 Steam、Apex、或某些客户端软件时，发现它们根本不走代理。原因在于：
- **普通系统代理（System Proxy）**：仅是个温柔的“建议”，只拦截遵循系统代理规范的浏览器（如 Chrome/Edge）；
- **网络游戏、Docker 与终端命令行**：底层大量使用 **UDP 数据包**，或完全无视 Windows 系统代理设置，直接尝试裸连公网从而超时！

开启 **Tun 模式（虚拟网卡）** 后，客户端会在系统底层虚拟出一张全接管网卡，**强制拦截接管机器发出的每一个 TCP 与 UDP 数据包**，直接送进物理专线！

---

### 二、Clash Verge Rev 开启 Tun 模式三步法

1. **第一步：安装系统服务（Service Mode）**：
   - 打开 Clash Verge Rev ➔ 点击左侧【设置 (Settings)】；
   - 找到【服务模式 (Service Mode)】右侧的【安装】按钮点击安装，并在管理员弹窗点“是”。安装成功后旁边将变成可用状态；
2. **第二步：开启 Tun 模式**：
   - 在设置页面将【Tun 模式 (Tun Mode)】开关拨至【开启】；
   - 协议栈（Stack）保持默认的 \`gVisor\` 或 \`mixed\` 即可；
3. **第三步：挑选超低延迟节点**：
   - 切至【代理】页面，勾选深港/沪日极光低延迟节点（如 **暮光加速**），开启游戏即可享受丝滑不跳 ping 体验！
`
  },
  {
    id: "dns-leak-and-dns-pollution-prevention",
    question: "什么是DNS泄漏与DNS污染？如何防止真实国内IP暴露并提升解析速度？",
    category: "客户端与故障排查",
    summary: "科普科学上网中的安全死角——DNS泄漏。为什么你的代理虽然连上了，访问的域名依然被国内ISP监控？如何配置DoH/Fake-IP安全加密解析。",
    answer: "DNS 污染是 GFW 针对境外受限网站返回虚假错误 IP 的技术手段；而 DNS 泄漏是指当你在翻墙访问海外网站时，解析请求依然发送给了国内运营商的本地 DNS 服务器，不仅会导致网站无法打开，还会向当地运营商泄漏你的全部网络浏览轨迹。通过在 Clash / Sing-box 中配置 Fake-IP 模式和 DoH（基于 HTTPS 的加密 DNS），即可彻底杜绝 DNS 泄漏并实现秒速解析。",
    keywords: ["DNS泄漏怎么解决", "DNS污染原理", "Fake-IP模式原理", "DoH加密DNS配置", "科学上网隐私保护"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "极致隐私", reason: "全节点配备独家防DNS泄漏自研解析服务，彻底保护上网足迹" },
      { name: "边缘节点 EdgeNova", url: "https://work.edgenovaaff.cc/#/?code=z81zCfw1", badge: "边缘解析", reason: "全球边缘就近安全DNS解析，首包响应极快" }
    ],
    relatedFaqs: ["global-vs-rule-mode-domestic-sites", "ipv6-proxy-conflicts-and-disable-guide", "free-vpn-and-cracked-nodes-security-risks"],
    detailedContent: `
### 一、什么是 DNS 泄漏？为什么它很危险？

哪怕代理节点连接正常，如果本地配置的 DNS 解析链不严谨：
- 浏览器准备访问 \`www.google.com\` 时，会先问一次 \`DNS 服务器\` 它的 IP 是什么；
- 如果这一步向本地电信/联通发起了明文 UDP 53 端口查询，你的**本地运营商不仅瞬间得知你在访问谷歌，还会立即给你塞入一个伪造的虚假 IP（即 DNS 污染）**，造成网页怎么也打不开或泄露浏览足迹！

---

### 二、如何自检自己是否存在 DNS 泄漏？

1. 开启翻墙客户端连接海外节点；
2. 浏览器访问权威检测网站：**\`https://browserleaks.com/dns\`**；
3. 查看网页报告的 DNS Server 列表：
   - **安全通过**：列表中仅显示海外服务器（如 Google、Cloudflare、或者节点当地运营商）；
   - **存在泄漏**：列表中混杂着 \`China Telecom / China Unicom / 114DNS\` 等国内服务器！

---

### 三、终极防范方案：启用 Fake-IP + 加密 DNS (DoH)

在最新版 **Clash Verge Rev (Mihomo内核)** 和 **Sing-box** 中，尽量采用机场下发的默认 **\`enhanced-mode: fake-ip\`** 模式：
- 本地只分配伪装虚拟内网段 IP（如 \`198.18.x.x\`），根本不向国内发出境外域名的明文 DNS 解析查询；
- 真正的域名解析动作被全部打包送入加密隧道，交给海外机场落地节点完成，彻底根除 DNS 污染与泄漏！
`
  },
  {
    id: "subscription-link-import-failed-fix",
    question: "机场订阅链接导入失败提示“Invalid URL”或“Network Error”怎么办？",
    category: "客户端与故障排查",
    summary: "订阅导入报错是最常见的新手拦路虎。本文梳理订阅链接被本地宽带拦截、SSL证书报错以及订阅格式不匹配的四大速查解决办法。",
    answer: "订阅导入失败通常由三种原因导致：1. 机场官网域名被本地宽带临时阻断：尝试用手机开启热点分享给电脑，导入成功后再切回宽带；2. 客户端未勾选允许不安全证书：在Clash Verge设置中开启“Skip Cert Verify”；3. 订阅格式不兼容：在机场后台生成专门的“Clash通用订阅”或“Subconverter转换订阅”重新导入。",
    keywords: ["订阅导入失败Invalid URL", "Clash导入网络错误", "订阅链接打不开", "小火箭添加订阅失败", "订阅转换教程"],
    relatedAirports: [
      { name: "飞猫云", url: "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW", badge: "一键配置", reason: "后台支持一键自动导入Clash/Sing-box/小火箭，彻底告别手动复制错误" },
      { name: "微风网络", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "全端订阅", reason: "提供多条冗余备份订阅域名，防本地阻断能力强" }
    ],
    relatedFaqs: ["clash-verge-timeout-all-red", "clash-for-windows-discontinued-migration-guide", "ios-shadowrocket-apple-id-download-guide"],
    detailedContent: `
### 一、订阅导入失败四大解决绝招

#### 绝招一：手机开热点避开本地宽带运营商拦截
很多地区的家庭宽带会针对未备案域名或某些常见机场订阅地址进行 SNI 阻断，导致客户端下载订阅卡死在 Network Error。
- **秒杀方法**：打开手机移动 4G/5G 蜂窝网开个人热点，让电脑连上手机热点，再回 Clash Verge 点一次【导入】或【更新订阅】，通常 1 秒瞬间搞定！导入完再连回家庭 Wi-Fi 即可正常使用。

#### 绝招二：打开已有的备用代理再更新主力订阅（“梯中梯”）
如果你已经有了一个小备用机场（这就是为什么强调“双持策略”！），先开启备用机场的系统代理，再去 Clash 里右键更新主力机场订阅即可畅通无阻。

#### 绝招三：确认没有误选了“通用 Base64 V2Ray”而非 Clash 格式
Clash Verge Rev 需要的是 **YAML 格式** 订阅；如果直接把纯 Base64 字符串的 V2Ray 订阅贴进去会报错。请在机场后台查找 **【复制 Clash 订阅链接】** 或勾选客户端导入配置中的格式自动识别。

#### 绝招四：检查前后多余空格或换行符
复制 URL 时不小心包含的不可见空格会导致提示 \`Invalid URL\`，建议直接点击机场仪表盘上的 **【一键导入到 Clash】** 按钮让浏览器直接唤醒客户端写入。
`
  },
  {
    id: "ios-shadowrocket-apple-id-download-guide",
    question: "iOS iPhone/iPad 如何安全下载正版 Shadowrocket (小火箭)？外区 Apple ID 避坑与防锁机警告",
    category: "客户端与故障排查",
    summary: "因为大陆区 App Store 下架了科学上网工具，下载小火箭必须用到外区 Apple ID。本文重点警告最致命的“iCloud锁机诈骗”黑产陷阱，教您100%安全操作流程！",
    answer: "在苹果 iPhone / iPad 上使用科学上网需要下载正版 Shadowrocket（俗称小火箭，售价2.99美元）。因为中国大陆区 App Store 已下架相关软件，必须使用非大陆区（如美区或港区）Apple ID 下载。【安全最高红线警告】：如果使用他人分享或购买的临时外区 Apple ID，绝对禁止在苹果【设置 -> 顶部iCloud】中登录！ 必须仅在【App Store 商店应用右上角头像 -> 退出并重新登录】操作！否则对方一旦后台修改密码并开启查找我的iPhone，你的手机将直接变砖遭到勒索！最安全的方案是自己免费注册一个永久美区账号并购入官方礼品卡买断正版。",
    keywords: ["小火箭怎么下载安全", "Shadowrocket外区Apple ID防锁机", "苹果手机科学上网教程", "iOS翻墙软件下载", "App Store切换美区警告"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "iOS一键导入", reason: "手机后台支持Safari点击直接唤醒Shadowrocket一键写入节点" },
      { name: "闪电鼠", url: "https://a01vipaff.shandianshuaff.com/#/?code=aaIZUXfY", badge: "新手友好", reason: "面板配备超清晰小火箭图文操作指引，小白两分钟即插即用" }
    ],
    relatedFaqs: ["apple-tv-4k-streaming-shadowrocket-stash", "subscription-link-import-failed-fix", "free-vpn-and-cracked-nodes-security-risks"],
    detailedContent: `
### 🚨 最高等级安全警告：千万别把共享 Apple ID 登进“设置 iCloud”！

每年都有大量新手在网上搜“免费美区账号下载小火箭”，然后按骗子的指示**在手机的【设置 (Settings)】最顶部登录了别人的 Apple ID**。
后果极其灾难性：
骗子会在后台立刻修改账号密码，通过 **iCloud 网页端远程将你的手机标记为“丢失模式”并锁定整机**，弹出弹窗向你勒索数百至数千元解锁费，否则手机彻底变砖！

---

### 一、100% 绝对安全的标准下载步骤

记住核心口诀：**【设置不动，只登商店】**！

1. **只打开蓝色图标的【App Store】应用**（千万别点灰色的“设置”图标！）；
2. 点击 App Store **右上角的个人头像**；
3. 将页面拉到最底部，点击红色的 **【退出登录 (Sign Out)】**；
4. 滑动回到顶部，输入你的**美区/港区 Apple ID 与密码**登录；
   - *安全小贴士：如果系统弹出“Apple ID 安全提示”，务必点击【其他选项】➔ 【不升级】，切勿开启双重认证或绑定对方的手机号！*
5. 搜索 **\`Shadowrocket\`**（注意核对开发者为 \`Shadow Launch Technology Limited\`，图标是一枚小火箭，切勿误下国产山寨广告假软件！），下载安装完成后**立刻退出该外区账号，重新登回你自己的国区 Apple ID**。

> **最一劳永逸的建议**：强烈建议自己花 5 分钟用国内手机号/邮箱在官网注册一个**完全属于你自己的永久美区 Apple ID**，通过支付宝海外购正规购买一张 \$5 美元 App Store 礼品卡永久买断正版 Shadowrocket（仅需约 ¥22 人民币），后续升级系统与 Apple TV tvOS 版均可终身免费畅用！
`
  },
  {
    id: "windows-proxy-port-conflict-and-residual-fix",
    question: "关闭 Clash 后电脑浏览器依然提示“无法连接到代理服务器 (ERR_PROXY_CONNECTION_FAILED)”怎么彻底修复？",
    category: "客户端与故障排查",
    summary: "每次电脑突然断电、或者直接用任务管理器强行杀掉 Clash 客户端后，浏览器甚至微信都上不了网？教您一秒重置 Windows 系统残留代理开关！",
    answer: "这是因为 Clash 等客户端启用系统代理时，会修改 Windows 注册表中的 Internet Explorer 全局代理开关指向 127.0.0.1:7897（或 7890）。如果在未正常关闭系统代理开关的情况下发生客户端崩溃或直接关机，该代理端口指向仍留在系统中，导致软件全部去连一个根本没有在监听的死端口，浏览器就会报错 ERR_PROXY_CONNECTION_FAILED。修复极简单：打开 Windows 设置 ➔ 网络和 Internet ➔ 代理 ➔ 手动关闭【使用代理服务器】开关即可。",
    keywords: ["ERR_PROXY_CONNECTION_FAILED修复", "关闭梯子后上不了网", "Windows残留代理清除", "127.0.0.1代理连不上", "无法连接到代理服务器"],
    relatedAirports: [
      { name: "微风网络 Breezenet", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "Clash Verge推荐", reason: "推荐使用现代Clash Verge Rev，具备完善的异常退出自动清理代理钩子" },
      { name: "飞猫云", url: "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW", badge: "稳定首选", reason: "提供官方纯净版最新客户端下载导航，彻底告别异常闪退" }
    ],
    relatedFaqs: ["clash-verge-timeout-all-red", "clash-for-windows-discontinued-migration-guide", "global-vs-rule-mode-domestic-sites"],
    detailedContent: `
### 一、故障现场还原：为什么没开代理反而全部断网了？

当你遇到这个症状时，典型表现是：
- QQ 和部分 P2P 软件勉强有网；
- **Edge、Chrome 浏览器全部报错**：\`无法连接至互联网 / ERR_PROXY_CONNECTION_FAILED\`；
- 打开网址发现它提示代理设置指向 \`127.0.0.1:7890\` 或 \`127.0.0.1:7897\`。

这并非网线断了或路由器坏了，而是**系统代理注册表开关被挂死在了死端口上**！

---

### 二、两套秒级恢复方案

#### 方法一：通过 Windows 设置面板图形化一键关闭（小白推荐）
1. 按下键盘快捷键 **\`Win + I\`** 打开 Windows 设置；
2. 点击 **【网络和 Internet】** ➔ 点击左侧或下方的 **【代理 (Proxy)】**；
3. 找到【手动设置代理】下方的 **【使用代理服务器】**，点击【编辑】或直接将开关拨到 **【关 (Off)】**，点击保存；
4. 刷新浏览器，所有国内网页瞬间秒开恢复！

#### 方法二：通过 PowerShell 一行命令清理残留代理（极客最爱）
按下 \`Win + X\` 打开终端运行以下语句：
\`\`\`powershell
Set-ItemProperty -Path 'HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings' -Name ProxyEnable -Value 0
\`\`\`
> **日常好习惯**：每次打算退出 Clash 客户端或者准备重启电脑前，建议先在客户端主界面手动点击一下关闭【系统代理】，或右键系统托盘图标选择正常的【退出 (Quit)】，让软件体面地自动清理干净注册表开关。
`
  },
  {
    id: "macbook-clash-verge-brew-curl-terminal-proxy",
    question: "macOS 上开启了 Clash，为什么 Chrome 能翻墙但终端 Terminal (git/curl/brew) 依然连不上？",
    category: "客户端与故障排查",
    summary: "程序员用 Mac 最常遇到的疑难杂症：浏览器畅通无阻，一到 Terminal 里敲 git clone、brew update 或 curl 就卡住超时。教你两种终极解决办法。",
    answer: "因为 macOS 的默认“系统代理（System Proxy）”机制只会告知 Safari、Chrome 等图形化浏览器去走 127.0.0.1:7897，而 iTerm2 / Terminal 等 Unix 命令行工具默认完全无视系统网络代理！有两种彻底解决办法：1. 最省心的办法是在 Clash Verge Rev 中开启【Tun 模式 (虚拟网卡)】，从底层强制接管终端流量；2. 快捷命令办法是点击客户端中的“复制终端代理命令”并在终端粘贴执行（即在 ~/.zshrc 配置 export https_proxy=http://127.0.0.1:7897）。",
    keywords: ["Mac终端走代理", "macOS git clone超时", "Homebrew走Clash代理", "curl怎么用Clash代理", "zsh配置http_proxy"],
    relatedAirports: [
      { name: "边缘节点 EdgeNova", url: "https://work.edgenovaaff.cc/#/?code=z81zCfw1", badge: "极客开发推荐", reason: "低首包延时极客节点，拉取GitHub源码仓库、npm/brew秒级响应" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "高并发开发", reason: "960Mbps极速下载大模型权重与Docker容器镜像不限流" }
    ],
    relatedFaqs: ["github-docker-npm-pip-slow-or-timeout-fix", "clash-tun-mode-game-acceleration", "cursor-windsurf-copilot-ai-ide-proxy-issues"],
    detailedContent: `
### 一、方案一（一劳永逸推荐）：直接开启 Tun 模式

在 Mac 上使用 Clash Verge Rev、Stash 或 Surge 时，只要开启 **Tun 模式（增强模式 / Enhanced Mode）**，不需要配置任何复杂环境变量，所有 Terminal、iTerm2、Docker、Python pip、Git 全部无感知通过虚拟网卡直连节点！

---

### 二、方案二（不想开Tun模式时的优雅快捷函数）

许多老程序员喜欢按需给终端开启代理（用完即关以免干扰公司内网工具）。打开你的 \`~/.zshrc\`（使用 \`nano ~/.zshrc\`），在文件底部加入以下方便切换的两个别名函数（注意把 \`7897\` 换成你客户端显示的混合端口，Clash Verge Rev 默认为 \`7897\`，CFW 旧版为 \`7890\`）：

\`\`\`bash
# 一键开启当前终端代理
function proxy_on() {
    export http_proxy="http://127.0.0.1:7897"
    export https_proxy="http://127.0.0.1:7897"
    export all_proxy="socks5://127.0.0.1:7897"
    echo -e "✅ 终端代理已开启 (端口: 7897)"
}

# 一键关闭当前终端代理
function proxy_off() {
    unset http_proxy
    unset https_proxy
    unset all_proxy
    echo -e "🛑 终端代理已关闭"
}
\`\`\`

保存后运行 \`source ~/.zshrc\`。以后只要在终端里敲一句 **\`proxy_on\`**，紧接着运行 \`curl -I https://www.google.com\` 或 \`brew update\`，瞬间如飞！
`
  },
  {
    id: "android-clash-meta-background-killed-fix",
    question: "安卓手机使用 Clash Meta / Sing-box 锁屏几分钟就断网掉线？国产手机杀后台保活设置指南",
    category: "客户端与故障排查",
    summary: "华为、小米、OPPO、vivo 手机为了省电激进杀死后台进程，导致翻墙软件黑屏就断连接收不到海外邮件/通知。手把手教你设置 100% 永不掉线白名单。",
    answer: "国产安卓手机系统（HyperOS/MIUI、HarmonyOS、ColorOS、OriginOS）有着全球最严厉的后台进程休眠清理机制。一旦屏幕熄灭超过 3-5 分钟，系统会自动断掉代理软件的唤醒锁或直接强杀服务，导致代理断开。解决方法只需设置三大白名单：1. 关闭电池优化：在系统设置 -> 应用管理 -> 找到 Clash Meta / Sing-box -> 省电策略设为“无限制/允许后台高耗电”；2. 多任务卡片锁定：上滑进入最近任务页面，向下拉动或长按 Clash 卡片点选【锁图标】；3. 开启自启动与关联启动允许。",
    keywords: ["安卓Clash黑屏断线", "手机翻墙锁屏掉线怎么解决", "小米华为杀Clash后台", "Clash Meta保活设置", "Android VPN频繁自动断开"],
    relatedAirports: [
      { name: "灵动云", url: "https://varnexa.lingdongaff.com/#/?code=QcRK6OPG", badge: "安卓移动优化", reason: "支持TUIC与Hysteria 2协议，移动网络Wi-Fi切换基站不断线重连" },
      { name: "快狸 KuaiLi", url: "https://work.kuailicloud.cc/#/?code=gVGJa0Mp", badge: "手机轻便备用", reason: "低功耗轻量协议，放在安卓手机全天挂后台几乎不耗电" }
    ],
    relatedFaqs: ["hysteria2-vs-vless-reality-protocols", "clash-verge-timeout-all-red", "device-concurrency-limits"],
    detailedContent: `
### 一、国产四大系统保活防杀设置精确路径

#### 1. 小米 / 红米（HyperOS / MIUI）
- **应用管理 ➔ 搜索 Clash Meta / Sing-box**：
  - 打开 **【自启动】** 开关；
  - 进入 **【省电策略】** ➔ 必须选择 **【无限制】**（不要选“智能限制”！）；
- **多任务卡片加锁**：在后台最近任务列表长按该软件窗口，点击【小锁】图标锁定常驻内存；
- **关闭智能休眠**：进入手机【设置 ➔ 省电与电池 ➔ 场景优化】，关闭“锁屏后清理内存”。

#### 2. 华为 / 荣耀（HarmonyOS / MagicOS）
- **设置 ➔ 应用和服务 ➔ 应用启动管理**：找到代理软件，关闭右侧的【自动管理】，在弹出窗中将 **【允许自启动】、【允许关联启动】、【允许后台活动】** 三个开关全部打开！
- **电池优化忽略**：搜索“电池优化”，选择【所有应用】，找到客户端并选择 **【不允许】**（即禁止系统对其进行电池休眠优化）。

#### 3. OPPO / 一加 / Realme（ColorOS）
- **应用管理 ➔ 耗电管理**：开启【允许完全后台行为】与【允许自启动】；
- 后台多任务卡片右上角点击三个点，选择 **【锁定】**。

#### 4. vivo / iQOO（OriginOS）
- 进入 i 管家 ➔ 应用管理 ➔ 权限管理 ➔ 自启动 ➔ 允许；
- **设置 ➔ 电池 ➔ 后台耗电管理** ➔ 找到软件切换为 **【允许后台高耗电】**。
`
  },
  {
    id: "clash-for-windows-discontinued-migration-guide",
    question: "为什么不建议继续用老旧 Clash for Windows (CFW)？2027安全替代客户端迁移教程",
    category: "客户端与故障排查",
    summary: "停更已久的 Clash for Windows (CFW) 存在已知安全漏洞、且完全无法支持现代最新的 Hysteria 2 与 VLESS-Reality 协议！教你平滑迁移至现代安全新锐客户端。",
    answer: "原版 Clash for Windows (CFW) 早在数年前就已永久删库停更，继续在网上找来源不明的旧安装包或魔改汉化版面临三大致命问题：1. 高危安全隐患：早已暴露的高危漏洞（如远程 XSS / 恶意配置文件注入）无法得到修复，甚至许多第三方网盘修改版直接被植入木马偷盗数字货币钱包；2. 协议严重落伍：旧版内核根本不支持 2027 主流的 Hysteria 2、VLESS-Reality 与 TUIC v5 抗封锁协议，导入现代机场新订阅会直接报错无法读取；3. 内存泄漏严重。强烈建议立即迁移到开源干净的 Clash Verge Rev 或 FlClash / Sing-box GUI。",
    keywords: ["Clash for Windows停更替代品", "Clash Verge Rev好用吗", "FlClash客户端推荐", "旧版CFW不能导入节点", "Clash安全替代客户端2027"],
    relatedAirports: [
      { name: "微风网络 Breezenet", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "现代内核首选", reason: "全面针对Mihomo与Sing-box新一代内核深度调校订阅配置" },
      { name: "飞V", url: "https://varnexa.flyvaff.com/#/?code=IC0p64fi", badge: "新协议支持", reason: "全量下发Hysteria 2与Reality高速防封节点，新版客户端发挥100%实力" }
    ],
    relatedFaqs: ["sing-box-vs-clash-mihomo-comparison", "clash-verge-timeout-all-red", "subscription-link-import-failed-fix"],
    detailedContent: `
### 一、2027 年 Windows / macOS 完美替代软件矩阵

别再冒险下载停更多年的第三方网盘压缩包了，目前开源社区最公认、活跃更新且界面美观的安全替代客户端如下：

| 客户端名称 | 底层内核 | 界面与操作逻辑 | 最核心优势 |
| :--- | :--- | :--- | :--- |
| **Clash Verge Rev** | Mihomo (原Meta) | 现代化 Tauri 框架，极高还原并超越 CFW | **全中文支持、极低内存占用（约30MB）、支持全局拓展脚本、无缝替代CFW** |
| **FlClash** | Mihomo | Flutter 全平台自适应统一界面 | **Windows / Mac / Linux / Android 界面完全一模一样，颜值极高且上手零难度** |
| **Sing-box GUI / Clash Nyanpasu** | Sing-box / Mihomo | 极客感十足，多内核灵活切换 | 支持高级规则集与高性能 TUN 网卡转发 |

---

### 二、两分钟完成无缝安全迁移

1. **彻底卸载旧 CFW**：先在旧版 Clash for Windows 中关闭系统代理，然后将其完全退出并卸载；
2. **安装新版 Clash Verge Rev**：从官方安全渠道下载对应操作系统架构的最新安装包；
3. **直接重新导入最新订阅链接**：登录你在【2027机场榜】购入的机场后台，直接点击最新的 **【一键导入到 Clash】**。新版机场下发的配置已全面启用现代安全加密协议，速度与稳定性立刻迎来飞跃！
`
  },
  {
    id: "sing-box-vs-clash-mihomo-comparison",
    question: "Sing-box 与 Clash (Mihomo) 内核有什么区别？2027电脑和手机分别该选哪个客户端？",
    category: "客户端与故障排查",
    summary: "如今机场普遍提供 Clash (Mihomo) 和 Sing-box 两种核心订阅格式。用大白话剖析这两大当红开源内核的技术理念、内存占用以及普通用户选型建议。",
    answer: "Mihomo（原 Clash Meta）内核继承了强大的 YAML 策略组可视化生态，界面交互最成熟、电脑端软件如 Clash Verge Rev 生态最丰富，对新手最为友好；而 Sing-box 是由新一代 Go 语言从零编写的“通用统一全能内核”，采用 JSON 配置，内存控制极致省电（极其适合低配安卓、iOS 苹果设备及老款小内存路由器），对原生 QUIC/Hysteria 2/ShadowTLS 等新协议跑分性能略胜一筹。普通桌面端选 Clash Verge Rev (Mihomo)，移动端与极客低内存路由器强烈推荐 Sing-box。",
    keywords: ["Sing-box和Clash区别", "Mihomo内核是什么", "Sing-box订阅怎么用", "Clash Meta和Sing-box哪个快", "手机翻墙软件对比"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "双格式完美下发", reason: "后台原生同时提供针对Mihomo和Sing-box深度优化的独立专属订阅链接" },
      { name: "边缘节点 EdgeNova", url: "https://work.edgenovaaff.cc/#/?code=z81zCfw1", badge: "Sing-box极佳", reason: "全面支持Sing-box新一代高速传输协议，跑速零损耗" }
    ],
    relatedFaqs: ["clash-for-windows-discontinued-migration-guide", "openwrt-openclash-vs-passwall-vs-homeproxy", "hysteria2-vs-vless-reality-protocols"],
    detailedContent: `
### 一、两大内核核心基因大对比

| 比较维度 | Mihomo (原 Clash Meta) | Sing-box (通用全能新一代) |
| :--- | :--- | :--- |
| **配置文件格式** | YAML（直观人类易读，方便手改写分流） | JSON（严格机器可读，解析极其飞快） |
| **内存与电池功耗** | 中等（桌面端轻松忽略，手机略高一点） | **极致轻量化（内存占用常减半，最省电）** |
| **规则处理与图形UI**| **天下无敌（各类美观桌面套壳极其成熟）** | 起步较新，原生官方 UI 偏硬核极客风 |
| **协议前瞻性支持** | 快速跟进主流全部新协议 | **几乎所有前沿新协议的第一首发载体** |

---

### 二、普通人无脑抄作业选型建议

- **Windows / macOS 电脑端**：首选 **Clash Verge Rev**（基于 Mihomo），视觉直观，点点鼠标就能测速切节点、看流量统计图、配置脚本；
- **iOS 苹果端**：**Shadowrocket**（小火箭）或 **Stash** 依然稳坐头把交椅，但若你订阅支持官方原生配置，**Sing-box App Store 免费正版** 也是极其轻量省电的好选择！
- **Android 手机端**：想简单直接用 **Clash Meta for Android** 或 **FlClash**；若手机老旧注重极致省电，选官方 **Sing-box (SFA)**。
- **Linux 服务器 & 新版 OpenWrt 软路由**：**Sing-box / HomeProxy** 几乎成为新一代事实性能霸主！
`
  }
];
