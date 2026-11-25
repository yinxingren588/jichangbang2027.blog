import type { FaqItem } from './types';

export const NETWORK_FAQS: FaqItem[] = [
  {
    id: "iplc-vs-iepl-difference",
    question: "IPLC专线与IEPL专线有何本质区别？为什么2027年科学上网首选IEPL内网专线？",
    category: "专线与网络架构",
    summary: "深度剖析国际私有租用线路（IPLC）与国际以太网专线（IEPL）的技术拓扑、丢包率表现与抗封锁原理，解释为什么2027年高端机场普遍转向二层IEPL物理专线。",
    answer: "IPLC（国际私有租用线路）与IEPL（国际以太网专线）均采用点对点端到端内网物理光缆传输，数据不经过公网国家防火墙（GFW），因此在网络管制期完全不受阻断影响，且延迟极低、0丢包。两者的核心区别在于：IEPL基于现代二层以太网技术构建，具备更优的带宽弹性调度、更低的Jitter抖动以及更快速的环网容灾倒换。2027年首选纯IEPL内网专线机场（如隐形人、微风网络、大佬云）。",
    keywords: ["IPLC和IEPL区别", "专线机场原理", "IEPL专线怎么选", "2027专线梯子", "0丢包机场"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "2027榜首", reason: "全节点纯IEPL企业级内网专线，晚高峰实测960Mbps且0丢包" },
      { name: "大佬云", url: "https://vip.dalaocloud.com/#/?code=05KusH3b", badge: "资深老牌", reason: "金融级多点冗余IPLC/IEPL双机热备架构，SLA达99.99%" },
      { name: "暮光加速", url: "https://varnexa.twilightaff.com/#/?code=3qqonTlH", badge: "极速极光", reason: "深港/沪日专属超低延迟IPLC隧道，平均延迟低至22ms" }
    ],
    relatedFaqs: ["how-to-identify-real-iplc-dedicated-line", "nat-vps-relay-vs-dedicated-iplc", "telecom-unicom-mobile-isp-matching"],
    detailedContent: `
### 一、什么是真正意义上的专线传输？

在探讨科学上网技术时，很多初学者常常把“专线”与普通“中转”混淆。真正的专线（Private Leased Line）是指**企业向跨国电信运营商直接租用的物理光纤传输通道**：
- **公网中转**：数据包从国内入口服务器出发，经过中国公网国际出口，由 GFW 审查后再转发给境外服务器。敏感时期公网出口拥堵，丢包率往往飙升至 30% 以上。
- **物理专线**：数据包在国内局端机房直接进入私有内网物理管道，跨国通信完全在海底或陆地光纤物理层闭环传输，**物理上彻底跨越防火长城（GFW）检测**。

---

### 二、IPLC 与 IEPL 的核心技术参数横向对比

| 评测维度 | IPLC (国际私有租用线路) | IEPL (国际以太网专线) | 普通公网BGP中转 |
| :--- | :--- | :--- | :--- |
| **物理层技术** | 传统 SDH / TDM 虚电路切片 | 现代二层以太网 (Carrier Ethernet) | 公网三层 IP 路由 (公网转发) |
| **GFW审查** | **完全不过 GFW，彻底免疫** | **完全不过 GFW，彻底免疫** | 经过公网国际出口审查 |
| **晚高峰丢包率** | **0.00% ~ 0.10%** | **0.00% ~ 0.05%** | 5% ~ 35% 剧烈波动 |
| **亚太基准延迟** | 极低（深港约 18~22ms） | 极致（深港约 15~19ms） | 浮动较大（35~80ms） |
| **容灾倒换时间** | 较长（通常需人工切路由） | **极快（毫秒级环网自愈倒换）** | 依赖 DNS 或客户端轮询 |
| **适用核心场景** | 外贸、金融外汇交易 | **8K秒播、AI科研、外服电竞网游** | 日常轻度网页浏览、普通视频 |

---

### 三、为什么 2027 年高端机场全面转向 IEPL？

1. **Jitter（网络抖动）更低**：IEPL 对突发流量的数据帧封装效率更高，即使在千兆满载吞吐下，网络抖动依然控制在 1.5ms 以内，彻底杜绝外服网游卡顿跳 ping。
2. **多点环网容灾能力强**：传统 IPLC 一旦某条海缆施工挖断，整个节点直接爆红超时；而现代 IEPL 机场（如**隐形人、大佬云**）均配置了多入口双路由热备，一条物理缆线故障可在 50ms 内自动平滑切换至备用专线，用户端几乎完全无感知。
3. **更利于部署轻量高效协议**：在 IEPL 纯内网环境中，机场服务商无需高开销的套壳 TLS 混淆即可稳定运行，显著降低手机和路由器的 CPU 发热与电量消耗。
`
  },
  {
    id: "telecom-unicom-mobile-isp-matching",
    question: "中国电信、联通、移动三大运营商宽带应该如何选配最合适的高速机场节点？",
    category: "专线与网络架构",
    summary: "由于中国电信163、联通169/9929与移动CMIN2骨干网国际出口特性天差地别，本文详细梳理三网用户选择机场的最佳接入点与协议优化技巧。",
    answer: "三大运营商由于国际出口拓扑不同，体验有所差异：电信用户（163骨干网晚高峰极拥堵）务必选择具备优质 BGP 入口或 IEPL 内网专线的机场（推荐隐形人、大佬云）；联通用户（4837/9929出口优质）连接日本和香港专线极佳（推荐暮光加速、微风网络）；移动用户（国际带宽大但晚高峰UDP限速严苛）优先选择支持 Hysteria 2 协议或纯物理 IPLC 的机场（推荐隐形人、飞V、灵动云）。",
    keywords: ["电信宽带机场推荐", "联通4837节点推荐", "移动宽带翻墙选什么", "三大运营商梯子匹配", "晚高峰限速破局"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "三网通杀", reason: "纯IEPL内网专线国内多线BGP入口，完美抚平电信163与移动QoS波动" },
      { name: "暮光加速", url: "https://varnexa.twilightaff.com/#/?code=3qqonTlH", badge: "联通极光", reason: "深港沪日极速隧道，联通宽带握手延迟稳定在20ms以内" },
      { name: "飞V", url: "https://varnexa.flyvaff.com/#/?code=IC0p64fi", badge: "移动利器", reason: "高质多线中继智能调度，移动5G网络握手极快" }
    ],
    relatedFaqs: ["iplc-vs-iepl-difference", "what-is-anycast-and-bgp-entry", "hysteria2-vs-vless-reality-protocols"],
    detailedContent: `
### 一、三大运营商国际出口现状大起底

#### 1. 中国电信（China Telecom）—— 冰火两重天
- **普通 163 骨干网（AS4134）**：承载了国内 80% 以上的民用家庭宽带。晚高峰 20:00 - 23:00 国际出口带宽极度饱和，公网丢包率往往超过 30%。
- **选购关键**：电信用户**千万不要买公网直连机场**，必须选用具备**优质多线 BGP 国内入口或纯 IEPL 专线**的机场（如**隐形人、大佬云**），通过国内高速光纤将数据送入专线机房。

#### 2. 中国联通（China Unicom）—— 天生丽质，国际互联最平滑
- **169 骨干网（AS4837）与高端 A 网（AS9929）**：联通国际出口人均带宽最高，连接日本软银（SoftBank）、IIJ 以及香港各大机房延迟极低。
- **选购关键**：联通用户挑选空间极大，首选日韩与香港节点的 IPLC/IEPL 专线（如**暮光加速、微风网络**），体验近乎本地局域网。

#### 3. 中国移动（China Mobile）—— 大水管与严苛的 QoS 限速
- **骨干网（AS9808 / CMIN2）**：移动出境大水管带宽很宽，但由于用户量庞大，晚高峰对 UDP 协议与单线程长连接实施了极具进攻性的 QoS 限速策略。
- **选购关键**：移动宽带与 5G 手机用户，强烈建议选择**支持 Hysteria 2 协议或端到端物理专线**的机场，能有效突破移动的单连接 QoS 限速。
`
  },
  {
    id: "how-to-identify-real-iplc-dedicated-line",
    question: "怎样鉴别真假IPLC专线？晚高峰丢包率与基准延迟实测验证方法",
    category: "专线与网络架构",
    summary: "市面上大量普通中转甚至直连机场套皮假冒IPLC高价售卖。教您利用Ping测试、路由追踪与晚高峰压测三招识破虚假专线。",
    answer: "鉴别真假专线主要看三点：1. 晚高峰丢包率：在晚间 21:00 用 Ping 持续测试 100 个包，真物理专线（IPLC/IEPL）丢包率严格保持在 0% ~ 0.2%，而普通中转丢包率常突破 5% 以上；2. 延迟基准：深圳到香港专线 ping 值应稳定在 15~20ms，上海到日本专线应在 28~35ms，若延迟超过 60ms 则很可能是公网直连套皮；3. 敏感期表现：在重大网络管制期，假专线会大面积掉线爆红，而真物理专线完全不受影响。",
    keywords: ["真假IPLC鉴别", "怎么测是不是真专线", "Traceroute抓包专线", "晚高峰丢包率测试", "专线机场真伪识别"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "实测真专线", reason: "晚高峰持续1000次ping拨测，丢包率恒定0.00%，真实物理光缆" },
      { name: "大佬云", url: "https://vip.dalaocloud.com/#/?code=05KusH3b", badge: "金融级骨干", reason: "全节点多点冗余物理专线，敏感时期坚挺不掉线" }
    ],
    relatedFaqs: ["iplc-vs-iepl-difference", "nat-vps-relay-vs-dedicated-iplc", "how-to-prevent-airport-runaway"],
    detailedContent: `
### 一、无良商家常见的三大“套皮假专线”手段

1. **普通公网中转伪装为 IPLC**：国内买台廉价单线服务器，通过公网 SSH/iptables 转发到海外免费或低价 VPS，在节点列表里冠名“深港 IPLC 专线”；
2. **直连节点混淆为 IEPL**：海外 VPS 开启 Reality 协议，直接在后台改名为“沪日 IEPL 高速”，实际走的是拥堵不堪的公网海缆；
3. **峰值限流超售**：白天测速正常，晚上由于多达数十倍的超售，丢包率直接炸裂。

---

### 二、三招实操验证法，1分钟揭晓真相

#### 第一招：晚间 21:00 进行 100 次持续 Ping 丢包率检测
- 打开终端或客户端 TCPing 工具对节点入口进行连续测试（如 \`ping -n 100 <入口域名>\`）。
- **真专线**：丢包率严格在 **0%**，最大延迟与最小延迟偏差（Jitter）小于 3ms。
- **假专线**：晚高峰丢包率往往在 **5% ~ 25%** 之间，延迟忽高忽低抖动严重。

#### 第二招：核验亚太物理光速延迟基准
信号在海底/陆地玻璃光纤中的传播存在物理光速极限（折射率约 1.5，每 100 公里往返约 1ms）：
- **深圳 ➔ 香港**：真专线应在 **15 ms ~ 20 ms**。若测出 50ms 以上，必是绕路假专线；
- **上海 ➔ 东京**：真专线应在 **28 ms ~ 38 ms**。若测出 70ms 以上，很可能是公网绕美或绕港；
- **广州 ➔ 新加坡**：真专线应在 **38 ms ~ 48 ms**。

#### 第三招：敏感重保时期实机检验
在每年重大会议或网络管制期，公网国际出口常常伴随高强度干扰与端口阻断。假专线会大面积爆红断流；而真 IPLC/IEPL 物理专线因为完全不过公网国际出口，全程保持零中断。
`
  },
  {
    id: "hysteria2-vs-vless-reality-protocols",
    question: "2027年主流翻墙协议怎么选？Hysteria 2、VLESS-Reality、TUIC与Trojan深度横评",
    category: "专线与网络架构",
    summary: "2027年新一代翻墙协议全面普及。本文深入科普基于UDP的暴力拥塞控制Hysteria 2、无证书伪装神作Reality以及经典Trojan的技术优缺点。",
    answer: "2027年科学上网协议各有所长：Hysteria 2 基于定制 UDP (QUIC)，专治弱网环境与恶劣丢包，在校园网与移动5G下能暴力跑满带宽；VLESS-Reality 借用海外权威大厂真实证书，彻底解决证书特征泄漏问题，抗封锁能力行业第一；Trojan 兼容性与稳定性极高，日常使用最省心；Shadowsocks 2022 CPU开销最小，软路由与物理专线首选。",
    keywords: ["Hysteria 2怎么样", "VLESS-Reality原理", "2027协议对比", "Trojan和Hysteria区别", "防封协议怎么选"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "全协议覆盖", reason: "全面支持新一代防封协议与现代AEAD加密，极低CPU开销" },
      { name: "灵动云", url: "https://varnexa.lingdongaff.com/#/?code=QcRK6OPG", badge: "敏捷协议", reason: "自研多协议混合调度，弱网穿透能力极强" },
      { name: "Firefly机场", url: "https://vip02.fireflyaff.com/#/?code=Fes6j9rn", badge: "智能混淆", reason: "极光混淆协议，深度报文检测下极难被阻断" }
    ],
    relatedFaqs: ["iplc-vs-iepl-difference", "why-speedtest-fast-but-youtube-buffers", "telecom-unicom-mobile-isp-matching"],
    detailedContent: `
### 一、2027主流核心协议横向对比表

| 协议名称 | 传输层基础 | 抗封锁与伪装原理 | 速度与延迟特性 | 资源占用 | 最适配场景 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hysteria 2** | UDP (定制QUIC) | 主动式伪装与暴力拥塞控制算法 | 极快，弱网环境下起步秒开 | CPU消耗略高 | **校园网、晚高峰丢包严重的弱网** |
| **VLESS-Reality**| TCP + TLS | 借用微软/苹果真实TLS证书消除特征 | 极佳，几乎与原生HTTPS完全一致 | 极低 | **敏感时期防GFW主动探测封端口** |
| **Trojan-Go** | TCP + TLS | 伪装成浏览器访问正常443端口 | 成熟稳定，老客户端兼容度极高 | 适中 | **全平台客户端日常主力翻墙** |
| **TUIC v5** | 原生 QUIC | 0-RTT快速建连，无TCP队头阻塞 | 握手超快，移动切基站无缝漫游 | 适中 | **手机移动出行、高铁跨城通信** |
| **SS-2022** | 对称强加密 | 现代AEAD对称加密(Blake3-AES) | 极致吞吐性能，线速加解密 | **极低** | **物理IEPL/IPLC专线、软路由旁路** |

---

### 二、不同网络环境的最优协议选择指南

1. **大学校园网 / 合租公寓 Wi-Fi / 晚高峰丢包高发区**：
   优先挑选支持 **Hysteria 2** 的节点。由于传统 TCP 一旦发生 2% 丢包就会触发降速一半，而 Hysteria 2 主动忽略冗余拥塞退避，能够在恶劣公网中强行榨干本地宽带。
2. **公网直连或中转敏感防护需求**：
   选用 **VLESS-Reality**，它彻底抛弃了自建域名与可疑 TLS 指纹，令深度报文检测（DPI）无法将其与正常的 HTTPS 浏览区分开。
3. **已经用上了 IPLC/IEPL 物理内网专线**：
   选用 **Shadowsocks 2022** 或精简 **Trojan** 即可。专线本身在物理层免疫检测，低复杂度的对称加密能让手机续航与路由器温度处于最佳状态。
`
  },
  {
    id: "what-is-anycast-and-bgp-entry",
    question: "什么是多线BGP与Anycast任播入口？为什么能大幅降低翻墙起步延迟？",
    category: "专线与网络架构",
    summary: "解析顶级机场后台常标榜的“Anycast任播”和“三网多线BGP智能入口”究竟有何技术含金量，如何决定您跨省跨网访问的第一跳速度。",
    answer: "多线BGP（边界网关协议）入口是指服务器同时接入电信、联通、移动等多家运营商线路，使不同宽带用户都能直连不绕远；而 Anycast（任播）技术则让全国多个城市共享同一个加速入口IP，系统自动把用户的连接请求引导至物理距离最近的国内机房节点。两者结合（如微风网络、边缘节点 EdgeNova）能将用户的第一跳国内接入延迟压低至 5~15ms，实现网页秒开。",
    keywords: ["Anycast任播原理", "多线BGP入口是什么", "三网BGP优化", "降低翻墙起步延迟", "跨网QOS解决"],
    relatedAirports: [
      { name: "微风网络 Breezenet", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "Anycast多入口", reason: "全球多区域Anycast智能接入，三网跨省不绕路，首包响应极快" },
      { name: "边缘节点 EdgeNova", url: "https://work.edgenovaaff.cc/#/?code=z81zCfw1", badge: "边缘计算", reason: "分布式就近接入边缘机房，大幅缩减握手时延" }
    ],
    relatedFaqs: ["telecom-unicom-mobile-isp-matching", "iplc-vs-iepl-difference", "why-speedtest-fast-but-youtube-buffers"],
    detailedContent: `
### 一、单线入口 vs 三网多线 BGP vs Anycast 任播

假设你住在北京使用**中国联通宽带**，如果机场只有一个位于深圳电信的单线服务器：
1. **单线跨网跨省绕路痛点**：你的数据包要先从北京联通跳到全国骨干交换节点，再绕进广东电信机房（跨网极易丢包），然后再进专线，光国内这一段路程延迟就高达 60ms+！
2. **三网多线 BGP 入口**：机房同时拉入电信、联通、移动三条独立光纤，并配置 BGP 动态路由表。你的北京联通请求直接通过联通自家路由直达入口，消除“跨网结界”。
3. **Anycast 任播加速接入**：全国北京、上海、广州、成都机房同时广播同一个入口 IP。你在北京就会连上北京机房就近握手，再通过内网高频通道接入境外落地，把物理延迟压缩到极致！

---

### 二、如何识别机场是否具备优质 BGP / 任播接入？

- **看不同地区用户的 Ping 值分布**：如果机场提供同一组“香港专线”，无论在北方（北京/沈阳）还是南方（深圳/广州）的用户，在自己宽带下测延迟都能处于各自省份到周边骨干机房的极限低值（如广东 15ms、江浙沪 28ms、北京 38ms），说明其真正部署了覆盖南北的分布式 BGP/Anycast 接入网。
`
  },
  {
    id: "nat-vps-relay-vs-dedicated-iplc",
    question: "国内NAT中转、公网转发与IEPL物理专线有什么区别？各自延迟与稳定性对比",
    category: "专线与网络架构",
    summary: "用通俗易懂的架构图与对比数据拆解市面上平价中转机场常见的“国内NAT端口转发”技术，告诉您它与昂贵物理专线在敏感期和晚高峰的真实差距。",
    answer: "国内 NAT 中转（端口转发）是指机场利用国内多台廉价宽带或云服务器，将用户的加密流量通过公网国际出口转发到境外落地服务器；优点是流量成本极低（月费十几元可给几百GB），日常看4K足够流畅；缺点是仍然经过公网防火墙（GFW），敏感管控期可能短暂抖动。而 IEPL 物理专线彻底走企业私有内网光缆，不过公网，零丢包但带宽成本高。平价选优质NAT/BGP（如飞猫云、快狸），商务重保必选IEPL（如隐形人、大佬云）。",
    keywords: ["NAT中转机场原理", "公网中转和专线区别", "机场中转机是什么意思", "BGP转发稳定性", "中转梯子优缺点"],
    relatedAirports: [
      { name: "飞猫云", url: "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW", badge: "中转爆款", reason: "高速BGP隧道中转+专线容灾备份，单G价格低至¥0.05" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "纯IEPL专线", reason: "彻底跳过公网转发，物理内网全程0丢包保障" }
    ],
    relatedFaqs: ["iplc-vs-iepl-difference", "how-to-identify-real-iplc-dedicated-line", "cheap-airport-vs-high-end-airport"],
    detailedContent: `
### 一、三代机场底层链路演化史

| 架构代际 | 数据流通路径 | GFW干预程度 | 单G市场参考价 | 代表体验特征 |
| :--- | :--- | :--- | :--- | :--- |
| **第一代：公网直连** | 本地 ➔ 公网国际出口 ➔ 境外VPS | **直接拦截/阻断IP** | ¥0.01 ~ ¥0.03 | 晚高峰频繁爆红断连（2027已基本淘汰） |
| **第二代：NAT/BGP公网中转** | 本地 ➔ 国内BGP中转机 ➔ 公网出口 ➔ 境外 | 仍过公网，依赖端口与协议伪装 | ¥0.04 ~ ¥0.12 | **日常追剧下载极其划算，偶有维护切换** |
| **第三代：IPLC/IEPL专线** | 本地 ➔ 专线入口 ══【私有物理光纤】══ 境外 | **物理绕过，零干预** | ¥0.12 ~ ¥0.50+ | **全天候99.98%稳如磐石，8K/AI/外贸首选** |

---

### 二、普通用户该如何理性做决定？

并不是所有场景都需要无脑花高价买纯专线：
- 如果您主要是用来看 YouTube、下载大型开源模型权重、大学生查阅论文，优质 **BGP 中转 + 专线容灾**（例如 **飞猫云、浪网、灵动云**）完全够用，还能省下大笔开销；
- 如果您涉及**外贸店铺防关联、金融高频交易、高强度 AI 开发或绝对不想在敏感期失联**，请务必一步到位选择真 **IEPL 专线**（例如 **隐形人、大佬云、暮光加速**）。
`
  },
  {
    id: "why-speedtest-fast-but-youtube-buffers",
    question: "为什么Speedtest测速几百兆，看YouTube 4K依然一直转圈卡顿？TCP窗口与单线程速率解析",
    category: "专线与网络架构",
    summary: "深度剖析“测速软件虚高但实际看视频卡顿”的网络欺骗现象。为您解释多线程测速 vs 单线程传输速率、TCP BBR拥塞控制算法与节点真实体验的关系。",
    answer: "Speedtest 测速默认采用 4~16 条多线程并发抢占带宽，因此即使单条连接丢包严重也能跑出几百 Mbps 的虚假高分；而浏览器播放 YouTube 视频或下载单个文件主要依赖【单线程连接】。如果在晚高峰节点丢包率超过 2% 或缺少 TCP BBR 优化，单线程速率会瞬间暴跌至几百 KB/s 导致 4K 转圈。真实评测应当以 YouTube“详细统计信息 (Stats for nerds)”中的 Connection Speed 为准。",
    keywords: ["Speedtest很快看油管卡", "多线程和单线程测速", "YouTube详细统计信息怎么看", "TCP BBR对机场速度影响", "节点虚标测速揭秘"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "单线程拉满", reason: "IEPL专线0丢包+服务端深度BBR调优，油管Connection Speed轻松破30万Kbps" },
      { name: "浪网 WaveNet", url: "https://varnexa.wavenetaff.com/#/?code=j468t9eF", badge: "大水管追剧", reason: "高冗余带宽设计，单线程拉取4K/8K大视频流无掉速" }
    ],
    relatedFaqs: ["how-to-identify-real-iplc-dedicated-line", "hysteria2-vs-vless-reality-protocols", "ipv6-proxy-conflicts-and-disable-guide"],
    detailedContent: `
### 一、揭穿“Speedtest 跑满但看视频卡顿”的技术真相

许多用户买到一个新机场后习惯性打开 \`speedtest.net\` 测出 500Mbps 便沾沾自喜，结果晚上打开 YouTube 却依然只能看 480P，拖动进度条半天不缓冲。原因如下：

1. **多线程拼凑假象（Multi-Connection）**：
   Speedtest 默认同时建立 **8~16 个并发 TCP 套接字**。即便当前国际线路有 10% 丢包、每条线程都被降速到 30Mbps，8 条加起来测速界面依然显示 240Mbps！
2. **YouTube / 网页加载是“单线程（Single-Connection）”**：
   视频分片缓冲通常只建立 1~2 条长连接。根据物理层著名的 **Mathis 公式**，只要 TCP 线路延迟超过 80ms 且存在 2% 以上的随机丢包，传统算法下**单线程最高吞吐将被死锁在 1~2Mbps 以下**——甚至连 1080P 都带不动！

---

### 二、真正的实战验货指标怎么看？

在浏览器中打开任意一条 4K/8K 测试视频，在画面上**点击鼠标右键 ➔ 选择【详细统计信息 (Stats for nerds)】**：
- 重点盯紧第三行参数：**Connection Speed（连接速度）** 与 **Buffer Health（缓冲健康度）**。
  - **及格线**：\`30,000 Kbps\` 以上（流畅观看 4K 30fps）；
  - **优秀线**：\`80,000 ~ 150,000 Kbps\`（流畅秒拖 4K 60fps 甚至 8K）；
  - **天花板级（如隐形人、暮光加速）**：晚高峰可冲破 **200,000 ~ 350,000 Kbps+**，进度条指哪播哪！
`
  },
  {
    id: "ipv6-proxy-conflicts-and-disable-guide",
    question: "开启IPv6后导致节点无法连接或流媒体解锁失效怎么解决？IPv6分流与关闭教程",
    category: "专线与网络架构",
    summary: "国内三大运营商全面放开家庭宽带IPv6后，常出现IPv6流量直接绕过代理或触发Netflix流媒体IPv6屏蔽错误。教您如何在Clash/Sing-box中优雅处理IPv6。",
    answer: "2027年国内宽带和移动5G已普及分配原生 IPv6 地址，但许多老节点配置、部分路由器或分流规则未妥善处理 IPv6 路由，容易造成两个典型故障：一是系统优先走本地直连 IPv6 导致代理失效或暴露真实位置；二是海外落地节点对 Netflix/ChatGPT 仅在 IPv4 上配置了原生住宅解锁，走 IPv6 反而会被封禁。建议在 Clash Verge Rev 设置中关闭“IPv6 开关”或在覆写配置中设置 ipv6: false。",
    keywords: ["关闭IPv6解决翻墙失败", "Clash IPv6设置", "IPv6导致Netflix解锁失败", "手机5G IPv6代理冲突", "Mihomo禁用IPv6"],
    relatedAirports: [
      { name: "微风网络 Breezenet", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "双栈优化", reason: "订阅配置内置精准IPv4/IPv6优先策略，避免5G网络IPv6绕过冲突" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "纯净原生", reason: "全节点严格剥离高风险IPv6脏段，保证解锁稳定" }
    ],
    relatedFaqs: ["dns-leak-and-dns-pollution-prevention", "tiktok-netflix-region-unlock-guide", "clash-verge-timeout-all-red"],
    detailedContent: `
### 一、IPv6 为什么常常让科学上网“越帮越忙”？

1. **流媒体和 AI 的 IPv6 黑洞**：全球大量 IDC 厂商免费赠送海量 /64 的廉价 IPv6 地址段，导致 Netflix、Disney+ 和 OpenAI 对机房 IPv6 的风控比 IPv4 严苛得多。不少机场节点 **IPv4 是珍贵的双 ISP 住宅原生 IP，而 IPv6 却是被拉黑的机房段**！一旦你的客户端优先尝试 IPv6 连接，解锁立刻失效！
2. **本地直连抢跑泄漏（Leak）**：当你在手机 5G 移动网络下打开某些仅靠系统代理模式的客户端时，部分 App 会直接经由移动原生 IPv6 通道发出直连请求，既打不开受限站点又容易暴露请求记录。

---

### 二、Clash Verge Rev / Mihomo 彻底关闭 IPv6 步骤

1. 打开 **Clash Verge Rev**；
2. 点击左侧菜单栏的 **【设置 (Settings)】** ➔ 找到 **【Clash 设置 (Clash Setting)】** 板块；
3. 将 **【IPv6】** 开关保持为 **关闭（Off / 灰色）**；
4. 点击右下角重启内核生效。

如果您自己编写覆写配置，可以在 YAML 顶部加入：
\`\`\`yaml
ipv6: false
dns:
  ipv6: false
\`\`\`
关闭不必要的 IPv6 路由后，不仅连接速度更快，流媒体全绿解锁与 ChatGPT 通过率往往能立刻恢复 100%！
`
  },
  {
    id: "bandwidth-multiplier-explained-05x-2x",
    question: "机场节点名字后面的 0.5x、1x、2x 倍率是什么意思？哪些节点最省流量？",
    category: "专线与网络架构",
    summary: "详细解释机场节点名称后缀 [2x]、[0.5x]、[1.5x] 的流量计算规则，教您如何巧妙利用低倍率节点省下一半流量费。",
    answer: "机场节点后缀的【倍率（Traffic Multiplier）】决定了你通过该节点消耗 1GB 真实网络数据时，机场后台会从你的套餐余额中扣除多少流量。普通中转节点一般为 1x（消耗1G扣1G）；高成本的稀有地区节点、双ISP原生住宅节点或超高速IPLC/IEPL专线可能会标为 1.5x 或 2x（消耗1G扣2G）；而部分闲置冷门大带宽下载节点则会标为 0.2x 或 0.5x（用1G仅扣0.5G），大文件下载强烈建议切换至低倍率节点。",
    keywords: ["机场节点倍率什么意思", "2x倍率扣除双倍流量", "0.5x省流节点", "科学上网流量消耗快原因", "节点名称数字含义"],
    relatedAirports: [
      { name: "飞猫云", url: "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW", badge: "1x良心全速", reason: "主流高速节点均采用实在的1x倍率，月度流量高达1800GB毫不缩水" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "标注透明", reason: "后台所有节点倍率清晰透明，普通1x专线带宽即极高" }
    ],
    relatedFaqs: ["cheap-airport-vs-high-end-airport", "pay-by-traffic-non-expiring-vs-monthly-plan", "global-vs-rule-mode-domestic-sites"],
    detailedContent: `
### 一、节点倍率（Multiplier）账单计算公式

实际后台扣除流量 ＝ 客户端真实跑过的上下行总数据 × 节点标注倍率

- **0.1x ~ 0.5x（省流下载节点）**：多见于普通直连或边缘冷门路线（如冷门欧洲节点、美西普通下载线）。你用它看 10GB 视频或更新游戏，后台仅扣除 **1GB ~ 5GB** 流量！
- **1.0x（标准正常倍率）**：绝大多数正规机场的主流香港、日本、新加坡、美国高速节点均为 1 倍扣费。
- **1.5x ~ 3.0x（高成本稀有节点）**：通常出现在成本极高的**台湾原生、英国/巴西小众地区、专门采购昂贵住宅宽带的 AI/跨境专享节点**上。

---

### 二、省流高阶技巧：不同任务匹配不同倍率

1. **下载网盘文件 / 拉取 Docker 镜像 / 游戏更新**：优先看一眼机场列表里有没有 \`0.5x\` 或 \`0.2x\` 的下载专属节点；
2. **平时刷网页、看油管 1080P**：选 \`1.0x\` 常规节点即可；
3. **仅在登录 ChatGPT/Claude、或观看地区限制大片时**：再手动切过去使用稀有原生节点，避免让大体积文件无意中走在高倍率线路上白白浪费流量！
`
  }
];
