import type { FaqItem } from './types';

export const HARDWARE_FAQS: FaqItem[] = [
  {
    id: "openwrt-openclash-vs-passwall-vs-homeproxy",
    question: "软路由科学上网插件选哪个？OpenClash、PassWall 2 与 HomeProxy (Sing-box) 2027 实测对比",
    category: "路由器与硬件设备",
    summary: "针对 R2S/R4S、J4125、N100 等家庭软路由用户，从内存占用、新协议支持度、分流精细化以及 OpenWrt nftables 兼容性全方位横向测评三大核心插件。",
    answer: "2027年 OpenWrt 软路由三大代理插件各自对应明确的硬件生态位：1. HomeProxy (基于 Sing-box)：新版 OpenWrt 23/24/25 原生 fw4/nftables 亲儿子，极其轻量省内存，ARM 盒子跑满千兆CPU负载最低；2. OpenClash (基于 Mihomo)：规则可视化最强、完美原生一键吃下各大机场的 Clash YAML 订阅，适合硬件较充裕的 x86（如 N100/J4125，内存 >= 1GB）；3. PassWall 2：老牌多协议全能王，配置上手直觉好，兼顾稳定性与多节点分流，ARM小路由友好。无论哪个插件，配合【隐形人/微风网络】等机场的专线，均可发挥全家满速透明代理性能。",
    keywords: ["OpenClash和PassWall区别", "HomeProxy好用吗", "软路由插件推荐2027", "N100软路由跑多少兆", "OpenWrt翻墙插件对比"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "软路由千兆满速", reason: "IEPL专线SS-2022超低加解密开销，哪怕小规格R2S软路由也可轻松跑出极高带宽" },
      { name: "微风网络 Breezenet", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "OpenClash完美兼容", reason: "YAML配置规范度业内顶级，OpenClash一键下载订阅零报错直接上线" }
    ],
    relatedFaqs: ["main-router-vs-bypass-gateway-pros-cons", "sing-box-vs-clash-mihomo-comparison", "nintendo-switch-ps5-xbox-nat-type-b-to-a"],
    detailedContent: `
### 一、2027 软路由三大科学上网插件全方位横向横评

| 评测维度 | OpenClash (Mihomo内核) | PassWall 2 (Xray/Sing-box) | HomeProxy (纯正Sing-box) |
| :--- | :--- | :--- | :--- |
| **底层防火墙框架** | fw3 / fw4 (需仔细选Meta与Redir/Fake-IP) | fw3 / fw4 兼容良好 | **原生专为新版 fw4/nftables 打造** |
| **内存与CPU开销** | 较高（规则集大，建议设备内存 **>= 1GB**） | 中等（256MB-512MB老路由器无压力） | **极低（全网最省资源，跑满千兆温度最低）** |
| **机场订阅上手难度** | **全自动傻瓜式（机场YAML直出直接用）** | 通用订阅简单，复杂规则需手调 | 需要机场提供原生 Sing-box JSON 订阅 |
| **新协议支持度** | 完美支持 Hysteria 2、Reality、SS-2022 | 完美支持全系新旧协议 | **前沿协议支持最为彻底、吞吐效率极高** |
| **最推荐硬件设备** | **x86 软路由 (N100/J4125)、树莓派、R4S/R5S** | **老旧硬路由、中低配 ARM 盒子 (R2S)** | **新版官方 OpenWrt 固件极客用户** |

---

### 二、避免软路由高负载卡死的调优铁律

1. **尽量别选过于臃肿的多余千万条广告拦截规则**：很多小白在 OpenClash 里一次性开启 10 个超大去广告 + 规则集合，瞬间把路由器的 512MB 内存撑爆导致天天自动重启！一般保留基础的国内 GeoIP/GeoSite 分流已经完全足够丝滑。
2. **协议优先选轻量化加密**：在性能孱弱的小型 ARM 路由器（如老款 MT7621 / R2S）上，尽量挑选支持 **Shadowsocks 2022** 或常规内网专线节点，避开运算复杂的长密钥叠加加密，CPU 占用直接腰斩！
`
  },
  {
    id: "main-router-vs-bypass-gateway-pros-cons",
    question: "家庭透明代理应该把软路由当主路由还是旁路由？网络架构优缺点与断网兜底方案",
    category: "路由器与硬件设备",
    summary: "全屋智能翻墙的永恒争议：主路由拨号一把梭，还是单臂旁路由当网关？用真实痛点帮您理清这两种拓扑结构在家庭断网容灾和Wi-Fi稳健度上的决定性差异。",
    answer: "对于绝大多数跟家人同住、且平时不希望家里断网引发“家庭信任危机”的用户，强烈建议采用【硬路由做主路由 + 软路由做单臂旁路由】架构！ 原因在于：主路由（如小米/华硕无线路由器）只负责光猫 PPPoE 拨号和稳定的全家 Wi-Fi 覆盖，永远不会因为你折腾翻墙插件崩溃而全家断网；想要科学上网的设备（手机/Apple TV/Switch）只需将 Wi-Fi 里的“网关”与“DNS”手动指向旁路由内网 IP（例如 192.168.1.2）即可；一旦旁路由需要重启或发生任何故障，5 秒钟把手机恢复成自动 DHCP，全家立刻满血直连上网互不干扰！",
    keywords: ["软路由主路由和旁路由区别", "旁路由科学上网设置方法", "旁路由怎么防止全家断网", "单臂旁路由网关DNS设置", "家庭透明代理架构"],
    relatedAirports: [
      { name: "大佬云", url: "https://vip.dalaocloud.com/#/?code=05KusH3b", badge: "全屋稳定支柱", reason: "99.99%高可用率SLA，挂在家庭旁路由全年不断线省心" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "家庭4K影院", reason: "大带宽不限速，客厅电视、手机平板多人看8K互不抢网" }
    ],
    relatedFaqs: ["openwrt-openclash-vs-passwall-vs-homeproxy", "xiaomi-asus-router-flashing-or-pc-hotspot", "device-concurrency-limits"],
    detailedContent: `
### 一、主路由 vs 旁路由（单臂网关）实战对比

| 架构指标 | 软路由当【主路由 (Main Router)】 | 硬路由主拨号 + 软路由当【旁路由 (Bypass)】 |
| :--- | :--- | :--- |
| **网络拓扑结构** | 光猫 ➔ **软路由 (拨号+翻墙)** ➔ AP/交换机 | 光猫 ➔ **硬路由 (拨号+Wi-Fi)** ⇄ **软路由(只管旁路代理)** |
| **全家断网风险** | **高！插件配置错或重启软件=全屋彻底无网** | **零风险！折腾旁路由挂了，硬路由Wi-Fi照常满速上国内网** |
| **按需设备控制灵活性** | 默认接管一切，需反过来写大量黑白名单隔离老人机 | **极其灵活！想翻的设备把网关填旁路由，老人电视默认完全不碰** |
| **主机/游戏 Full-Cone NAT**| 少一跳，设置得当略强一丢丢 | 完全足够优秀（注意关闭旁路由不必要的二次冲突转发） |

---

### 二、旁路由最优雅防翻车配置标准模板

假设你的家用硬路由（主路由）IP 为 \`192.168.1.1\`（开启 DHCP 服务分配 IP），把旁路由接入主路由的 LAN 口，设置好如下固定静态配置：
1. **旁路由 LAN 口设置**：
   - IPv4 地址设为同网段空闲 IP（如 **\`192.168.1.2\`**）；
   - 子网掩码：\`255.255.255.0\`；
   - **默认网关（重要）**：指向主路由 **\`192.168.1.1\`**；
   - **DNS 服务器**：填入国内公共 DNS 如 \`223.5.5.5\` 或 \`119.29.29.29\`；
   - **关闭旁路由自身的 DHCP 服务器（勾选“忽略此接口”）**，避免跟主路由打架！
2. **哪些设备需要科学上网？**：
   只需打开你手机/电脑/Switch/Apple TV 的 Wi-Fi 网络详情，把配置 IP 从“自动”改为“手动（静态）”，将 **路由器(网关)** 与 **DNS** 填为旁路由 IP **\`192.168.1.2\`**，保存瞬间即实现全自动免客户端透明翻墙！
`
  },
  {
    id: "nintendo-switch-ps5-xbox-nat-type-b-to-a",
    question: "任天堂 Switch、PS5、Xbox 连不上联机大厅或 NAT 类型为 D/C 怎么破？游戏主机科学上网满速方案",
    category: "路由器与硬件设备",
    summary: "购买了 Switch / PS5 却因为连不上朋友的联机房、NAT 类型死卡在 D 而无法玩《斯普拉遁3》《马车8》《怪猎》？揭秘 Full-Cone 全锥形 NAT 与主机加速机场配置法。",
    answer: "Switch / PS5 / Xbox 等家用游戏主机本身无法直接安装 Clash/Shadowrocket 客户端，且其 P2P 多人联机极度依赖 UDP Full-Cone（全锥形 NAT，即 Switch 测网中的 NAT 类型 A 或 B）！如果代理节点不支持 UDP 转发、或者所使用的廉价中转线路丢包严重（甚至不支持全锥形 NAT），Switch 测速就会直接变成 NAT D / F（完全进不去联机房间）。正确解法：1. 核心节点要求：必须挑选明确支持 UDP Full-Cone 转发且低丢包、亚太超低延迟 的 IPLC/IEPL 专线机场（强烈推荐暮光加速、星岛梦，沪日/深港延迟仅 20ms 级别）；2. 实现通道：通过旁路由 OpenClash / PassWall 开启 UDP 代理，或开启电脑 Clash Verge Tun 模式 + 局域网代理/热点共享给主机使用！",
    keywords: ["Switch怎么连科学上网", "Switch NAT类型D变A教程", "PS5梯子加速教程", "游戏主机Full-Cone NAT", "斯普拉遁3机场推荐"],
    relatedAirports: [
      { name: "暮光加速", url: "https://varnexa.twilightaff.com/#/?code=3qqonTlH", badge: "主机电竞之王", reason: "全系IPLC专线完美开放原生UDP全锥形转发，Switch测速轻松达成NAT A/B与满速下载" },
      { name: "星岛梦 StarDream", url: "https://kfccbb.xingdaomeng.com/#/?code=JTRIWFim", badge: "日港低延迟", reason: "针对主机联机调优沪日专线，怪物猎人与Apex外服不丢包" }
    ],
    relatedFaqs: ["clash-tun-mode-game-acceleration", "openwrt-openclash-vs-passwall-vs-homeproxy", "xiaomi-asus-router-flashing-or-pc-hotspot"],
    detailedContent: `
### 一、Switch 联机 NAT 类型分级详解

在 Switch 设置 ➔ 互联网 ➔ 测试连接中，**NAT 类型** 决定了你能否连上其他玩家：
- **NAT Type A / B（全锥形 / 受限锥形）**：最佳绿色通行证！可以自由创建并进入几乎所有联机房间，《斯普拉遁3》《任天堂明星大乱斗》《动森》丝滑联机；
- **NAT Type C / D / F（对称型 / 严格受限）**：**地狱级噩梦！** 虽然能连 eShop 商城，但进游戏就提示“无法与其他玩家的控制台通信”，永远匹配不到队友！

---

### 二、免折腾软路由：电脑开启 Clash 30秒给 Switch 加速

如果你手头没有软路由，仅靠一台连了 Wi-Fi 或网线的 Windows 电脑就能搞定：
1. 在电脑 Clash Verge Rev 中开启 **【Tun 模式】** 与 **【允许局域网连接 (Allow LAN)】**（记下混合端口如 \`7897\`）；
2. 在 Switch 连接同一局域网 Wi-Fi，进入互联网设置更改：
   - 若直接借用电脑 HTTP 代理（适合下载 eShop 游戏满速）：在 Switch 设置中找到 **代理服务器 ➔ 开启**，服务器填电脑内网 IP（如 \`192.168.1.105\`），端口填 \`7897\`；
   - 若要打 **UDP 联机对战**（HTTP 代理不支持游戏 UDP，必须走网关或热点）：打开 Windows 的 **【移动热点】**，在“更改适配器选项”中把虚拟网卡 Clash TUN 的网络共享给你的移动热点！Switch 连上电脑开出来的热点，立刻完美实现全 UDP 加速直冲 **NAT A / B**！
   - *(记得在节点列表里选准 **暮光加速** 的日本或香港专线节点，延迟只有 20~30ms 哦！)*
`
  },
  {
    id: "xiaomi-asus-router-flashing-or-pc-hotspot",
    question: "普通家用路由器（小米/华硕/TP-Link）不刷固件能让全屋手机/电视翻墙吗？免刷机科学上网方案汇总",
    category: "路由器与硬件设备",
    summary: "家里用的是原厂小米、TP-Link 路由器或者租房网线不能动，不想冒着变砖风险刷第三方 OpenWrt 固件，有什么办法让没有客户端的设备也能享受高速外网？",
    answer: "完全不需要拿家里主力无线路由器冒变砖风险去硬刷机！针对不同设备，目前有三大零风险免刷机优雅方案：1. 各设备直装客户端（90%设备最强方案）：手机/电脑/Apple TV 4K/安卓电视盒子其实全部能直接原生安装 Clash / Shadowrocket / FlClash 等官方开源软件，根本无需路由器代劳；2. 旧闲置主机或笔记本电脑充当临时局域网网关/Wi-Fi热点：开启 Clash Verge 【Tun 模式 + 允许局域网】后，将Switch/电视的网关直接指向这台电脑的内网 IP；3. 百元低功耗微型单口软路由盒子：花两百块钱买一只刷好机的小巧 R2S/R4S 网线插在原厂路由器背面的空网口当纯旁路由，原路由器设置完全一动不动！",
    keywords: ["路由器不刷机怎么科学上网", "小米路由器免刷机翻墙", "电脑做局域网网关给手机翻墙", "电视盒子翻墙方法", "零成本免刷机代理"],
    relatedAirports: [
      { name: "飞猫云", url: "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW", badge: "多端通用订阅", reason: "提供全端标准订阅链接，电视安卓客户端/Mac/Windows一键直接安装跑满" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "全生态兼容", reason: "完美适配Windows/Mac/iOS/Android/tvOS全系免刷机本地客户端" }
    ],
    relatedFaqs: ["main-router-vs-bypass-gateway-pros-cons", "apple-tv-4k-streaming-shadowrocket-stash", "device-concurrency-limits"],
    detailedContent: `
### 一、先破除一个常见误区：你真的需要路由器翻墙吗？

很多初学者以为家里想要全覆盖翻墙，第一件事就是把路由器刷了。其实在 2027 年，**90% 的智能设备本身就能直接装客户端，甚至比挂在路由器上速度更快、分流更精准**！
- **iPhone / iPad / Apple TV**：直接安装 Shadowrocket（小火箭）或 Stash；
- **安卓手机 / 小米电视 / 当贝盒子**：直接安装 FlClash 或 Clash Meta for Android（自带电视遥控器适配版）；
- **Windows / Mac**：直接安装 Clash Verge Rev。

本地客户端直接调用设备强大的多核 CPU 加解密，通常比百元老路由器的速度**快出 3~5 倍**！

---

### 二、针对无法安装 App 的设备（如游戏主机/智能音箱），如何免刷机共享电脑代理？

1. **打开电脑上的 Clash Verge Rev** ➔ 点击【设置】➔ 开启 **【允许局域网连接 (Allow LAN)】** 开关；
2. 鼠标悬停在系统设置或输入 \`ipconfig\` 查看你这台电脑的局域网 IP（例如 \`192.168.31.88\`），并记住混合代理端口（默认 \`7897\`）；
3. 在同一 Wi-Fi 下的设备（如另一台不能装软件的设备、部分安卓电视）无线网络高级设置里：
   - 将 **代理** 选为“手动”；
   - 服务器主机名填入：\`192.168.31.88\`；
   - 端口填入：\`7897\`；
   - 保存即可零风险蹭用电脑代理！
`
  }
];
