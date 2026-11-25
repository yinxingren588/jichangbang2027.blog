import type { FaqItem } from './types';

export const AI_STREAMING_FAQS: FaqItem[] = [
  {
    id: "chatgpt-claude-access-denied-solution",
    question: "访问ChatGPT/Claude提示“Access Denied 1020”或服务不可用？双ISP住宅原生IP彻底解决指南",
    category: "AI与流媒体解锁",
    summary: "详解2027年OpenAI与Anthropic史上最严风控机制，如何看懂Scamalytics欺诈风险评分，以及为什么必须选择具备双ISP住宅原生静态IP的机场。",
    answer: "OpenAI 与 Anthropic 对云服务器机房 IP（如 AWS、甲骨文、DigitalOcean 等数据中心 IP）实施了极其严格的风控过滤。一旦检测到机房 IP 便会直接阻断或频繁要求真人验证。要彻底解决该问题，必须使用配备“双ISP纯净住宅原生IP”的机场。在【2027机场榜】中，首推【隐形人】和【灵猫】，其配备的住宅节点纯净度极高，能完美通过各大 AI 平台的安全风控检测。",
    keywords: ["ChatGPT Access Denied解决", "Claude防封机场", "双ISP住宅IP是什么", "OpenAI专用梯子", "Scamalytics风控"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "AI首选", reason: "全节点配备纯正双ISP住宅静态原生IP，OpenAI/Claude免验证秒过" },
      { name: "灵猫", url: "https://vip02.civetaff.com/#/?code=kZlRw46w", badge: "纯净IP池", reason: "独立住宅原生IP池，风控欺诈分低于3分，AI与学术重保" },
      { name: "跨界云", url: "https://vip02.kuajieaff.com/#/?code=VfWeYwHM", badge: "跨境商用", reason: "专注跨境商务与AI开发优化，支持主流大模型免验证登录" }
    ],
    relatedFaqs: ["claude-account-disabled-prevention-guide", "gemini-advanced-not-supported-region-fix", "clash-url-test-fallback-load-balance"],
    detailedContent: `
### 一、为什么你的梯子一打开 ChatGPT 就报错？

很多用户遇到过这样的情况：梯子测速跑得飞快，看 YouTube 4K 毫无压力，但一打开 \`chatgpt.com\` 或 \`claude.ai\`，立刻弹出：
- **"Access Denied (Error code: 1020)"**
- **"Unable to load site / We have detected unusual activity"**
- **无法通过 Cloudflare Turnstile 验证码，无限打勾循环**
- **刚充值了 Plus/Pro 会员，第二天账号无故被封禁**

根本原因在于：**AI 巨头对接了全网最顶级的威胁情报数据库（如 Cloudflare Radar、MaxMind、IPQualityScore、Scamalytics）。**

---

### 二、机房数据中心 IP vs 双 ISP 住宅原生 IP 深度解密

| 检测项目 | 普通机房数据中心 IP (Hosting) | 双 ISP 住宅原生 IP (Residential) |
| :--- | :--- | :--- |
| **所属 ASN** | AWS、Linode、阿里云、甲骨文等机房 | 美国 AT&T、Verizon、Comcast，香港 HKT/HKBN |
| **Scamalytics 欺诈分** | **70 ~ 100 分 (极高风险)** | **0 ~ 5 分 (极度安全纯净)** |
| **IP 使用类型 (Usage)** | Commercial / DataCenter | **Fixed Residential / ISP (家用宽带)** |
| **并发访问人数** | 成千上万名机场用户共用同一公网 IP | 独立分配给民用宽带，行为特征极度分散 |
| **AI 平台风控判定** | **自动化机器人/代理流量，直接拦截** | **真实家庭用户正常访问，秒速放行** |

---

### 三、三步排查与彻底解决保姆级步骤

1. **第一步：检测当前节点的 IP 纯净度**：
   打开浏览器访问 \`https://scamalytics.com/ip\`，输入你当前梯子节点的落地 IP。如果 **Fraud Score > 25** 或类型为 **Data Center**，建议立即放弃该节点用于 AI。
2. **第二步：切换至具备双 ISP 住宅属性的优质机场**：
   推荐选择【2027机场榜】收录的 **隐形人** 或 **灵猫**，选择带有“美西住宅原生”或“日本住宅专线”标识的节点。
3. **第三步：彻底清理浏览器缓存与指纹痕迹**：
   打开浏览器设置，彻底清除 \`openai.com\` 和 \`claude.ai\` 的 Cookie 与本地缓存数据，关闭浏览器重新开启，即可顺利秒登！
`
  },
  {
    id: "tiktok-netflix-region-unlock-guide",
    question: "为什么有些节点看不了Netflix非自制剧或打不开TikTok？流媒体原生住宅IP解锁技巧",
    category: "AI与流媒体解锁",
    summary: "科普Netflix自制剧与非自制版权剧的区别，以及TikTok对中国SIM卡与IP风控的双重检测原理，带您挑选全绿解锁原生机场。",
    answer: "Netflix 等流媒体平台将内容分为“全球自制剧”（机房IP即可看）和“地区版权剧”（严格要求必须为当地原生住宅IP）。如果节点使用的是机房IP，在Netflix上就搜不到当地独家版权大片；而TikTok还会同时检测手机SIM卡运营商与IP欺诈度。解决办法是选用具备海外当地原生住宅双ISP节点的机场（如隐形人、灵猫、微风网络），并配合客户端分流策略锁定该节点。",
    keywords: ["Netflix看不了非自制剧", "TikTok黑屏打不开", "流媒体解锁全绿机场", "奈飞原生IP推荐", "流媒体分流配置"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "影音榜首", reason: "港美日韩主流地区流媒体全绿原生解锁，支持8K杜比视界" },
      { name: "微风网络", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "流媒体大户", reason: "Anycast多地区智能调度，各区Netflix/Disney+深度适配" },
      { name: "浪网 WaveNet", url: "https://varnexa.wavenetaff.com/#/?code=j468t9eF", badge: "大水管追剧", reason: "带宽充沛，晚高峰追剧不降画质不卡顿" }
    ],
    relatedFaqs: ["spotify-disney-hbo-max-ip-detection", "apple-tv-4k-streaming-shadowrocket-stash", "ipv6-proxy-conflicts-and-disable-guide"],
    detailedContent: `
### 一、为什么很多梯子在 Netflix 上只能看“自制剧”？

很多新手以为只要能打开 Netflix 就算解锁了，其实大错特错：
- **Netflix 自制剧（Netflix Originals）**：如《怪奇物语》、《鱿鱼游戏》，网飞拥有全球版权，任何普通机房 IP 都能打开；
- **地区版权限制剧（Non-Originals）**：如特定国家才能看的某些热门日漫、华纳/索尼独家院线大片。如果你的节点被 Netflix 标记为机房代理，**这些高价值版权剧会被全部隐蔽，搜索框直接搜不出来！**
- **全绿解锁标准**：只有具备**当地原生住宅 IP（Residential IP）**或配备高质量 DNS 解锁流量的节点，才能解锁全部区域的版权影视库。

---

### 二、TikTok 黑屏、0播放与刷不出视频的解决技巧

TikTok 拥有全球最严苛的跨国风控模型，只挂梯子往往还不够，必须注意四要素：
1. **拔掉国内 SIM 卡（关键）**：TikTok App 会直接向系统底层读取基站 MCC 国家代码，若插有中国移动/电信/联通实体卡（哪怕开了飞行模式）在 iOS/安卓老版本也极易黑屏；建议用无卡备用机或开启客户端高级伪装脚本；
2. **关闭定位与更改系统时区/语言**：连接美区节点，手机时区必须同步改为纽约或洛杉矶时间，系统语言改为英文；
3. **拒绝港澳节点**：由于运营策略原因，**香港、台湾节点对 TikTok 常年不可用（或受限）**，请务必切换到**日本、新加坡、美国或英国节点**；
4. **必须使用纯净原生 IP**：避免群控机房 IP 导致发视频直接 0 播放，推荐使用【2027机场榜】的 **隐形人** 或 **跨界云**。
`
  },
  {
    id: "gemini-advanced-not-supported-region-fix",
    question: "Google Gemini / NotebookLM 提示“当前所在地区不支持”怎么彻底解决？",
    category: "AI与流媒体解锁",
    summary: "明明挂了美国或日本节点，打开 Google Gemini 和 NotebookLM 却依然提示“Unsupported location”或自动跳回无法访问？解析 Google 账号送中机制与修复全步骤。",
    answer: "Google 对 Gemini 与 NotebookLM 的地域校验比普通 Google 搜索严格得多：它会同时检测【当前节点IP归属地】、【Google 账号历史关联地区（送中风控）】以及【Chrome 本地语言设置】。若此前长期使用香港节点（香港不在 Gemini 官方支持列表中）或带有中国区 IP 的残余定位，Google 会将账号永久打上受限标记。解决方法是：1. 坚决切换至美国、日本或新加坡干净原生节点（如隐形人、灵猫）；2. 访问 Google 隐私设置检查“IP 归属地关联申请”；3. 将浏览器首选语言调整为 English 或搭配干净无痕模式测试。",
    keywords: ["Gemini地区不支持怎么解决", "NotebookLM无法访问", "Google账号送中怎么办", "香港节点不能用Gemini", "谷歌AI地区修改"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "美日原生IP", reason: "拥有纯净美西、日本及新加坡双ISP原生节点，绝无送中漂移风险" },
      { name: "大佬云", url: "https://vip.dalaocloud.com/#/?code=05KusH3b", badge: "全绿稳定", reason: "严控广播IP，Google位置库长期稳定定位在美国与新加坡本土" }
    ],
    relatedFaqs: ["chatgpt-claude-access-denied-solution", "claude-account-disabled-prevention-guide", "dns-leak-and-dns-pollution-prevention"],
    detailedContent: `
### 一、避坑警告：为什么连香港节点绝对打不开 Gemini？

由于谷歌官方政策限制，**香港特别行政区（Hong Kong）目前并不在 Google Gemini 和 NotebookLM 的官方支持列表之内**！
很多用户在客户端开启 \`Rule\` 或 \`Url-test\` 自动测速时，由于香港节点延迟最低（18ms），系统默认就把谷歌域名全部分配到了香港节点，结果就是永远提示 **"Gemini isn't currently supported in your country"**！

---

### 二、彻底解决三步法（立竿见影）

1. **第一步：将 Google 专属分流规则指向【美国/新加坡/日本】**：
   在 Clash 客户端中把 \`Gemini\` 或 \`Google\` 所属规则组手动锁死在**美国、日本或新加坡原生节点**上，切勿使用任何香港节点访问 AI 服务。
2. **第二步：排查“IP 被广播误判（IP 送中）”**：
   打开 \`https://www.google.com\` 拉到最底部查看左下角显示的城市/国家。如果明明连着美国节点左下角却显示 **Hong Kong** 或 **China**，说明该机场该节点 IP 库已被污染（广播纠偏），请立即更换具备原生 IP 库认证的机场节点（推荐 **隐形人** 的美西或新加坡专线）。
3. **第三步：调整浏览器语言与清除站点定位缓存**：
   清除浏览器中的 \`gemini.google.com\` 与 \`accounts.google.com\` 缓存，如果使用 Chrome，建议在设置语言列表中把 **English (United States)** 置于中文上方或开启无痕窗口重新登录即可秒进。
`
  },
  {
    id: "claude-account-disabled-prevention-guide",
    question: "Anthropic Claude 账号频繁被秒封？2027防封环境配置、IP锁定与浏览器指纹指南",
    category: "AI与流媒体解锁",
    summary: "Anthropic Claude 3.5 Sonnet 代码能力冠绝全网，但封号堪称业内“屠夫级”。手把手教您用固定单一静态住宅IP、禁止节点乱跳和防指纹策略保护Pro账号。",
    answer: "Anthropic Claude 对风控的敏感度远高于 OpenAI，造成“注册即秒封”或 Pro 订阅被直接 Disabled 的三大元凶分别是：1. 客户端开启了自动测速（Url-test）或负载均衡，导致同一对话期间 IP 频繁在美、日、新之间跳来跳去；2. 使用了被数万人共用的廉价机房 IP；3. 注册或登录时使用了香港IP或国内接码平台高危号段。防封铁律：只用【隐形人/灵猫】等双ISP住宅静态原生节点的固定单一条美国节点，严格关闭负载均衡，绑定独立专用浏览器配置。",
    keywords: ["Claude账号被封原因", "Claude防封号教程", "Your account has been disabled解决", "Anthropic严格风控避坑", "Claude专用静态IP机场"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "静态双ISP", reason: "美西双ISP静态住宅IP长期不漂移，高度模拟真实本土用户" },
      { name: "灵猫", url: "https://vip02.civetaff.com/#/?code=kZlRw46w", badge: "AI专用分组", reason: "专门针对Claude风控做过IP库洁净度筛查，大幅降低封号概率" }
    ],
    relatedFaqs: ["chatgpt-claude-access-denied-solution", "clash-url-test-fallback-load-balance", "gemini-advanced-not-supported-region-fix"],
    detailedContent: `
### 一、为什么 Claude 的风控比 ChatGPT 还变态？

很多用户只用一个普通的梯子玩 ChatGPT 没事，可一登录 Claude 不到半小时就收到冷冰冰的邮件通知：**"Your account has been disabled for violating our Acceptable Use Policy."**
Anthropic 的风控系统重点紧盯以下四大异常行为：
1. **IP 高频跨国瞬移**：这是最常见的死因！你在客户端选用了 \`⚡ 自动选择 (Url-test)\` 分组，上一秒延迟是美国节点发了一条消息，十分钟后客户端自动切换到了新加坡或香港节点——风控直接判定为“被盗号或多人共享代理”；
2. **使用不合规区域 IP（尤其是香港/俄罗斯/朝鲜等受限区域）**：哪怕只切去香港节点误刷新了一下 Claude 页面，账号瞬间进入高危待封列表；
3. **机房高黑名单 ASN**：常见于 AWS、甲骨文、搬瓦工、Contabo 等廉价云机房；
4. **虚拟接码手机号风控**：一次性便宜接码平台（如短信平台反复卖给几十人）极易触发连坐。

---

### 二、2027 Claude 账号“零封号”生存配置规范

| 防封维度 | 推荐标准操作 | 绝对禁止行为 |
| :--- | :--- | :--- |
| **策略组规则** | 为 \`claude.ai\` / \`anthropic.com\` 建立独立策略组，**手动选定单一美国或日本原生节点** | **严禁使用负载均衡、自动切换或香港节点** |
| **节点 IP 性质** | **双 ISP 静态住宅原生 IP**（推荐**隐形人**美西静态住宅或**灵猫**专线） | 严禁使用免费机场、廉价公网大杂烩节点 |
| **浏览器隔离** | 用独立 Chrome Profile / Edge 独立配置专门运行 Claude | 勿在公司公共网、多终端同时来回挂机登录 |
| **充值方式** | 建议使用正规美区 Apple Store App 内购或独立正规国外卡 | 勿使用来路不明淘宝黑卡/低价代充 |
`
  },
  {
    id: "youtube-premium-ad-free-and-region-pricing",
    question: "为什么挂了香港或新加坡节点看YouTube还是有广告？YouTube无广告节点推荐与跨区避坑",
    category: "AI与流媒体解锁",
    summary: "科普为什么部分冷门地区（如阿尔巴尼亚、俄罗斯或部分无广告投放节点）无需购买YouTube Premium即可实现天然零广告，以及跨区开通会员的注意事项。",
    answer: "YouTube 广告投放与节点 IP 归属国直接挂钩：香港、美国、日本、新加坡由于商业广告市场极其发达，片头与片中都会插入大量高频广告；而部分特殊国家/地区（如俄罗斯、阿尔巴尼亚、缅甸等）由于 Google 暂停了该地区的商业广告变现体系，使用对应地区节点看 YouTube 几乎【天然全程无广告】。此外若要低价订阅正规 YouTube Premium 家庭组，需准备相应国家的纯净原生IP与合规支付方式。",
    keywords: ["YouTube无广告节点", "阿尔巴尼亚看油管没广告", "YouTube有广告怎么回事", "香港节点看YouTube广告多", "YouTube跨区会员避坑"],
    relatedAirports: [
      { name: "大佬云", url: "https://vip.dalaocloud.com/#/?code=05KusH3b", badge: "全球50+国家", reason: "全网覆盖冷门地区节点最全，包含阿尔巴尼亚/乌克兰/俄罗斯等无广告极佳线路" },
      { name: "微风网络 Breezenet", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "多区丰富", reason: "节点覆盖全球多区，带宽充足保障高画质追剧体验" }
    ],
    relatedFaqs: ["tiktok-netflix-region-unlock-guide", "why-speedtest-fast-but-youtube-buffers", "spotify-disney-hbo-max-ip-detection"],
    detailedContent: `
### 一、为什么连香港和美国节点看 YouTube 广告特别多？

因为 YouTube 的广告分发完全是基于**你的代理出口 IP 所在国的商业广告投放竞争度**来决定的：
- **美国、香港、新加坡、台湾、日本**：属于全球广告主出价最高的黄金市场，几乎每一个超过 5 分钟的视频都会被强制插播 2~4 次双连不可跳过广告；
- **无广告“黄金冷门地区”（天然屏蔽商业广告）**：在谷歌停止商业变现运营的部分国家或地区（如**阿尔巴尼亚、俄罗斯、缅甸、古巴**等），当地根本没有建立商业广告主投放池，因此连上去观看 YouTube **系统直接不插入任何广告（即自带免费 Premium 无广告体验）**！

---

### 二、实操技巧：专门为 YouTube 配置无广告冷门节点

在支持全局多国家节点的机场（例如覆盖 50+ 国家的 **大佬云**）中，可以检查节点列表里是否带有 **俄罗斯 / 阿尔巴尼亚 / 乌克兰** 等字样：
- 开启 Rule 规则模式后，只将 \`youtube.com\` 和 \`googlevideo.com\` 手动指向上述无广告地区中速度较快的那一个节点；
- 其他网页浏览、ChatGPT 与日常办公依然走速度最快的香港/美国高速 IEPL 专线！既享受完全无广告丝滑看片，又不影响其他软件极速体验！
`
  },
  {
    id: "spotify-disney-hbo-max-ip-detection",
    question: "Disney+ 报错 Error 83 / HBO Max 提示“Not Available”怎么破？流媒体原生IP检测脚本推荐",
    category: "AI与流媒体解锁",
    summary: "Disney+、HBO Max、Hulu 和 BBC iPlayer 对代理 IP 的检测甚至比 Netflix 更狠。详解 Error 83 故障根源与一键自检流媒体全绿解锁状态的方法。",
    answer: "Disney+ 提示 Error 83、或者 HBO Max / Hulu 拒绝播放，通常是因为：1. 当前代理节点的出口 IP 属于被流媒体版权方拉黑的数据中心广播 IP（尽管它可能侥幸能看 Netflix 自制剧）；2. 路由器或客户端未关闭 IPv6，导致部分认证请求走了不支持地区的 IPv6；3. 浏览器或客户端开启了代理分流不全，认证域名漏到了中国本地网络或另一个国家的节点上。解决办法：关闭 IPv6，选用全绿原生解锁的【隐形人、大佬云、微风网络】，锁定单一新加坡/香港/美西原生节点。",
    keywords: ["Disney+ Error 83解决", "HBO Max地区不支持", "流媒体解锁检测工具", "Spotify跨区失效", "原生IP流媒体机场推荐"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "全绿解锁", reason: "港美日新Disney+/HBO Max/BBC/AbemaTV全绿直出原生解锁" },
      { name: "微风网络 Breezenet", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "影音优化", reason: "专门针对主流流媒体部署DNS分流与原生落地，杜绝Error 83报错" }
    ],
    relatedFaqs: ["tiktok-netflix-region-unlock-guide", "ipv6-proxy-conflicts-and-disable-guide", "apple-tv-4k-streaming-shadowrocket-stash"],
    detailedContent: `
### 一、流媒体版权平台风控严格程度排行榜（2027实测）

1. **地狱级（严防一切常规云主机）**：**HBO Max (Max)、Hulu、BBC iPlayer、AbemaTV、巴哈姆特动画疯（台湾本土IP严检）**
2. **高危级（双检DRM与IP欺诈库）**：**Disney+（频繁爆 Error 83 / Error 73）、Spotify（14天跨区登录封禁）**
3. **中等严苛（区分自制剧与地区剧）**：**Netflix（非原生只能看自制剧）、YouTube Premium**

---

### 二、为什么会出现 Disney+ Error 83 报错？排查清单

- **原因 1（IP 欺诈）**：当前节点 IP 被归类为数据中心匿名代理；请切换至标注为【原生】或【解锁】的新加坡/香港/美国节点；
- **原因 2（域名分流不完整）**：Disney+ 的登录验证与视频流分属不同域名（如 \`disneyplus.com\`、\`bamgrid.com\`、\`dssott.com\`）。如果你的规则集过老漏掉了其中某一条域名导致走了直连或另一节点，鉴权会立即崩坏报错 **Error 83**！建议更新最新的 \`ACL4SSR\` 或 \`Loyalsoldier\` 规则集；
- **原因 3（关闭 IPv6）**：Disney+ 对廉价隧道 IPv6 的封禁率为 99%，务必在 Clash 客户端设置中将 IPv6 开关关闭。
`
  },
  {
    id: "midjourney-discord-and-copilot-proxy",
    question: "Midjourney、Discord 与 GitHub Copilot 经常断连或加载不出图片怎么办？",
    category: "AI与流媒体解锁",
    summary: "Discord 和 Midjourney 依赖长连接 WebSocket 推送画图进度，普通劣质机场晚高峰丢包极易导致“Updating...”卡死或语音房间断连。教你排查与规则配置。",
    answer: "Discord（含 Midjourney）底层依赖高频率心跳保活的加密 WebSocket 长连接与独立图片 CDN 域名（discordapp.net、discordapp.com），而 GitHub Copilot 与 Cursor 则依赖稳固的 gRPC / HTTP2 通道。如果机场在晚高峰有超过 3% 的公网丢包，长连接就会反复断开重连；如果分流规则缺失 CDN 域名，图片就会永远显示裂图或转圈。解决之道：采用 0 丢包的【隐形人、暮光加速】物理专线节点，并确保规则包含完整 Discord 与 Copilot 域名规则。",
    keywords: ["Discord连不上转圈", "Midjourney图片加载不出来", "Discord语音卡顿断连", "GitHub Copilot连接超时", "WebSocket代理优化"],
    relatedAirports: [
      { name: "暮光加速", url: "https://varnexa.twilightaff.com/#/?code=3qqonTlH", badge: "0丢包长连接", reason: "低延迟IPLC专线，Discord语音频道与Midjourney即时推送丝滑不掉线" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "高速CDN拉取", reason: "千兆级别下行冗余，Midjourney高清大图瞬间秒开加载" }
    ],
    relatedFaqs: ["cursor-windsurf-copilot-ai-ide-proxy-issues", "github-docker-npm-pip-slow-or-timeout-fix", "clash-tun-mode-game-acceleration"],
    detailedContent: `
### 一、为什么网页能秒开，但 Discord 一直显示“Checking for updates / 连接中”？

1. **普通系统代理对桌面端 Electron 客户端接管不全**：Discord PC 桌面端底层语音（UDP）和核心心跳流在没有开启 **Tun 模式** 时，经常漏走系统直连网络；
2. **漏掉了 Discord 的 CDN 与媒体域**：很多老旧规则只代理了 \`discord.com\`，却遗漏了实际传输画作大图的 \`cdn.discordapp.com\` 与 \`media.discordapp.net\`！导致能聊文字但 Midjourney 永远白屏转圈。

---

### 二、一键修复配置技巧

1. 在 Clash Verge Rev 中开启 **【Tun 模式】**，强行接管 Discord 与 IDE 客户端的每一个底层套接字（尤其涉及语音通话和实时推送）；
2. 确保机场规则包含以下完整后缀：
\`\`\`yaml
rules:
  - DOMAIN-SUFFIX,discord.com,PROXY
  - DOMAIN-SUFFIX,discord.gg,PROXY
  - DOMAIN-SUFFIX,discordapp.com,PROXY
  - DOMAIN-SUFFIX,discordapp.net,PROXY
  - DOMAIN-SUFFIX,discord.media,PROXY
  - DOMAIN-SUFFIX,githubcopilot.com,PROXY
\`\`\`
3. **选择低丢包物理专线**：Discord 语音通话对网络抖动极为敏感，强烈推荐切换到如 **暮光加速** 或 **隐形人** 的港/日低延迟节点（延迟 < 35ms，丢包 0%）。
`
  },
  {
    id: "apple-tv-4k-streaming-shadowrocket-stash",
    question: "如何在 Apple TV 4K 上科学上网看 Netflix/YouTube？Stash 与 Loon tvOS 配置教程",
    category: "AI与流媒体解锁",
    summary: "自 tvOS 17 起苹果官方开放了原生 VPN 接口！现在完全不需要折腾复杂的软路由，直接在 Apple TV 4K 上安装 Shadowrocket、Stash 或 Loon 即可畅看 4K 杜比视界大片。",
    answer: "自 tvOS 17 系统发布以来，Apple TV 4K 已经正式支持直接在电视盒本地运行网络代理客户端，无需再折腾昂贵的旁路由硬件。目前在 tvOS App Store 中最主流的客户端有 Shadowrocket（小火箭 tvOS 版，已购 iOS 版可免费通用下载）、Stash for tvOS 与 Loon for tvOS。操作流程极为简单：在外区 Apple ID 账号登录电视 App Store 下载客户端后，手机端直接开启局域网扫码 / iCloud 配置同步，30 秒即可将机场订阅传入电视端畅享 YouTube 4K、Netflix 与 Disney+！",
    keywords: ["Apple TV翻墙教程", "Apple TV小火箭配置", "tvOS科学上网软件", "Stash tvOS教程", "电视盒子看Netflix 4K"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "8K客厅影院", reason: "960Mbps带宽与全绿原生住宅IP，完美撑起客厅Apple TV 4K杜比视界码流" },
      { name: "微风网络 Breezenet", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "兼容tvOS", reason: "一键订阅直接兼容Stash/Shadowrocket/Loon tvOS，免繁琐手动调校" }
    ],
    relatedFaqs: ["tiktok-netflix-region-unlock-guide", "ios-shadowrocket-apple-id-download-guide", "xiaomi-asus-router-flashing-or-pc-hotspot"],
    detailedContent: `
### 一、2027 年 Apple TV 4K 最优雅的科学上网姿势

过去想要用 Apple TV 看 Netflix，家里必须配一台刷好 OpenWrt 的旁路由甚至改网关，不仅门槛高，还容易在维护时把全家的手机 Wi-Fi 弄断。
如今只需你的 Apple TV 升级至 tvOS 17 及以上系统，**原生直接在电视上装客户端**：

| tvOS 主流客户端 | 购买价格策略 | 界面与易用性 | 最核心亮点 |
| :--- | :--- | :--- | :--- |
| **Shadowrocket (小火箭)** | 与 iOS 版**通用买断**（无需重复花钱） | 简洁实用 | 如果你手机上买过小火箭，在 Apple TV 上免费直接下载，扫码一键同步！ |
| **Stash for tvOS** | 兼容 Clash 生态，功能极强 | 颜值高，遥感友好 | 原生完美读取标准 Clash/Mihomo 机场订阅与智能分流策略 |
| **Loon / Surge for tvOS** | 进阶高阶玩家最爱 | 极为精致丝滑 | 配备专门针对电视盒遥控器优化的节点切换界面与强悍规则引擎 |

---

### 二、三步搞定 Apple TV 订阅导入（无需拿遥控器一个字母一个字母输入）

1. 在 Apple TV 的 App Store 登录购买过软件的**美区或港区 Apple ID**（例如下载安装 **Shadowrocket**）；
2. 打开手机上的 Shadowrocket，进入电视端小火箭主界面点击【从局域网同步】或【扫码添加配置】，会生成局域网导入网页地址 / 二维码；
3. 用手机浏览器直接把你从【2027机场榜】复制的订阅链接远程推送到 Apple TV 上，或者通过 **iCloud 同步** 直接一键同步手机里的全套节点！挑选高带宽原生节点后即可在客厅大屏秒播 YouTube 4K & Netflix！
`
  }
];
