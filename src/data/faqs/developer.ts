import type { FaqItem } from './types';

export const DEVELOPER_FAQS: FaqItem[] = [
  {
    id: "github-docker-npm-pip-slow-or-timeout-fix",
    question: "程序员必备：GitHub Clone 报错、Docker Pull 超时、npm/pip 下载卡顿一站式加速方案",
    category: "开发与极客进阶",
    summary: "专为国内软件工程师与科研学者打造！彻底根治 `Failed to connect to github.com port 443`、`docker pull timeout` 以及 Python pip 安装龟速问题。",
    answer: "虽然浏览器能轻松打开 GitHub 网页，但 git clone、docker pull、npm install 和 pip 等开发 CLI 工具默认常常忽略系统 HTTP 代理，导致直连境外源遭遇重置。终极解决方案矩阵：1. 最无脑省心方案：直接在 Clash Verge 中开启【Tun 模式 (虚拟网卡)】，从系统网络层强制接管全部开发 CLI；2. 局部精准加速方案：分别为 Git 设置 git config --global http.proxy http://127.0.0.1:7897，为 Docker Daemon 在 /etc/docker/daemon.json 或 Docker Desktop Settings -> Proxies 填入本地代理，即可实现千兆跑满秒拉镜像！",
    keywords: ["GitHub Clone报错443解决", "Docker Pull超时代理配置", "git设置Clash代理命令", "npm pip走梯子加速", "程序员科学上网配置"],
    relatedAirports: [
      { name: "边缘节点 EdgeNova", url: "https://work.edgenovaaff.cc/#/?code=z81zCfw1", badge: "极客开发推荐", reason: "分布式边缘接入极低首包延迟，git push/pull与包管理下载畅通如飞" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "千兆跑满镜像", reason: "960Mbps下推拉数十GB大模型权重与Docker大型镜像几分钟搞定" }
    ],
    relatedFaqs: ["macbook-clash-verge-brew-curl-terminal-proxy", "cursor-windsurf-copilot-ai-ide-proxy-issues", "linux-ubuntu-server-proxy-mihomo-cli"],
    detailedContent: `
### 一、四大常用开发工具一键走代理配置速查清单

*(注意：以下示例均假设您的 Clash Verge Rev 混合代理端口为默认的 \`7897\`；若使用其他软件或修改过端口请对应替换)*

#### 1. Git (解决 github.com:443 Connection timed out / Reset)
在终端执行以下两条命令：
\`\`\`bash
git config --global http.proxy http://127.0.0.1:7897
git config --global https.proxy http://127.0.0.1:7897
\`\`\`
*注：如果以后不再使用代理拉取国内 Gitee 仓库，可执行取消命令：\`git config --global --unset http.proxy\`。*

#### 2. Docker Desktop / Linux Docker Engine (拉取 Docker Hub 镜像)
- **Windows / macOS Docker Desktop**：打开右上角齿轮 ⚙️ Settings ➔ **Resources** ➔ **Proxies** ➔ 打开 Manual proxy configuration ➔ 在 HTTP & HTTPS Proxy 中均填入 \`http://127.0.0.1:7897\` ➔ 点击 **Apply & restart**；
- **Linux Systemd Docker**：由于 Docker 后台以独立守护进程运行，环境变量不会自动生效，需创建覆写配置 \`/etc/systemd/system/docker.service.d/http-proxy.conf\`：
\`\`\`ini
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7897"
Environment="HTTPS_PROXY=http://127.0.0.1:7897"
Environment="NO_PROXY=localhost,127.0.0.1,.cn,registry.npmmirror.com"
\`\`\`
然后执行 \`sudo systemctl daemon-reload && sudo systemctl restart docker\`。

#### 3. Node.js npm / pnpm / yarn
\`\`\`bash
npm config set proxy http://127.0.0.1:7897
npm config set https-proxy http://127.0.0.1:7897
\`\`\`

#### 4. Python pip / uv / HuggingFace 下载权重
在命令前临时挂上环境变量，或开启 **Clash Tun 模式** 后直接执行 \`pip install\` 与 \`huggingface-cli download\`，利用 **隐形人 / 飞猫云** 的超高下行带宽几分钟拖完几十 G 模型！
`
  },
  {
    id: "cursor-windsurf-copilot-ai-ide-proxy-issues",
    question: "AI 编程神器 Cursor / Windsurf 提示 Connection Failed 或代码补全卡顿如何调优代理？",
    category: "开发与极客进阶",
    summary: "明明用浏览器打开 ChatGPT 毫无问题，在 Cursor 编辑器中按 Tab 或 Chat 却频繁报 `Connection failed` 或 `HTTP/2 Error`？手把手解决 AI IDE 代理通信底层暗坑！",
    answer: "Cursor、Windsurf 等 AI 编程 IDE 与普通网页聊天最大的技术区别在于：它们在底层大量使用 HTTP/2 多路复用流与 gRPC 长连接协议 进行实时代码上下文流式传输。造成失败的三大原因分别是：1. 未开启系统 Tun 模式，IDE 内核子进程未正确读取局部代理；2. 某些老旧代理协议或老中转机房防火墙剥离了 HTTP/2 流特征导致报错；3. 客户端把 Cursor 设置中的 HTTP/2 关闭即可瞬间绕过（在 Cursor Settings -> Network -> 勾选 Disable HTTP/2）。配合【隐形人 / 暮光加速】双 ISP 住宅 IEPL 专线，代码补全响应仅需毫秒级！",
    keywords: ["Cursor Connection failed怎么解决", "Cursor代理设置HTTP2关闭", "Windsurf连不上网", "AI编程IDE节点推荐", "Cursor Tab补全卡顿优化"],
    relatedAirports: [
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "0丢包低风控", reason: "IEPL物理专线配合双ISP原生住宅，Cursor调用Claude 3.5 Sonnet极稳零断开" },
      { name: "暮光加速", url: "https://varnexa.twilightaff.com/#/?code=3qqonTlH", badge: "低延迟代码补全", reason: "22ms超低亚太握手机制，Tab智能代码补全快如本地渲染" }
    ],
    relatedFaqs: ["chatgpt-claude-access-denied-solution", "claude-account-disabled-prevention-guide", "github-docker-npm-pip-slow-or-timeout-fix"],
    detailedContent: `
### 一、彻底根治 Cursor / Windsurf 报错 Connection Failed 的两大神技

#### 神技一：在 Cursor 设置中关闭 HTTP/2（实测解决 85% 代理断流报错）
Cursor 默认强迫与服务端保持基于 HTTP/2 协议的长流复用，而许多 HTTP 局部代理对长连接 HTTP/2 转发支持存在兼容性暗坑。
1. 打开 Cursor，按下快捷键 \`Ctrl + ,\`（Mac 为 \`Cmd + ,\`）打开设置；
2. 搜索栏输入 **\`http2\`**；
3. 找到 **\`Cursor > General: Disable Http2\`**（或 Network 里的 HTTP/2 兼容模式），**务必勾选上（改为 True / HTTP/1.1）**！
4. 完全关闭重启一下 Cursor，你会发现刚才频繁转圈报错的 Chat 对话瞬间秒出代码！

#### 神技二：开启 Clash Verge Tun 模式 + 锁定高纯净度原生节点
- 因为 Cursor 的 AI 底层同时调用了 OpenAI 与 Anthropic 的混合后端鉴权校验，千万不要开负载均衡；
- 请开启 **Tun 模式** 保证 IDE 进程 100% 走通代理，并选用具备高洁净度 IP 的 **隐形人** 或 **灵猫** 美国/日本专线节点，避免因为公用脏 IP 触发 Cursor 账号受限提示！
`
  },
  {
    id: "clash-url-test-fallback-load-balance",
    question: "Clash 策略组中的 Url-test (自动测速)、Fallback (故障转移) 与 Load-balance (负载均衡) 有何区别？千万别乱开负载均衡！",
    category: "开发与极客进阶",
    summary: "新手看到“负载均衡”以为网速能翻倍，结果开启后十分钟 ChatGPT/Claude/PayPal 账号全部暴毙封号！深度剖析 Clash 三大自动调度模式原理与安全边界。",
    answer: "Clash 核心策略组提供三种自动化模式：1. Url-test（自动选择最低延迟）：定时并发测速并自动切换到毫秒值最小的那一条节点，适合平时常规网页视频，但仍会隔段时间跳节点；2. Fallback（故障转移）：按优先级从上到下依次死盯第一顺位节点，只有当第一节点完全超时失联时才切换到第二备用节点，最适合需要固定 IP 环境的 AI 与跨境业务；3. Load-balance（负载均衡）：极其高危！它会让你访问同一网站的每一次请求轮流通过香港、日本、美国等不同 IP 发出，导致 10 分钟内触发 AI/支付平台“跨国多地盗号”风控直接永久封号！普通用户建议手动选择或采用 Fallback。",
    keywords: ["Clash负载均衡危害", "Url-test和Fallback区别", "负载均衡导致ChatGPT封号", "Clash自动测速切换IP", "代理策略组最佳实践"],
    relatedAirports: [
      { name: "大佬云", url: "https://vip.dalaocloud.com/#/?code=05KusH3b", badge: "稳定Fallback推荐", reason: "单点稳定性极高，配合Fallback策略几乎整月稳固在第一主线不切换" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "防封首选", reason: "手动锁定单一美西/日本双ISP静态节点，100%避免IP跨区飘移" }
    ],
    relatedFaqs: ["claude-account-disabled-prevention-guide", "chatgpt-claude-access-denied-solution", "custom-yaml-rules-and-acl4ssr-override"],
    detailedContent: `
### 一、三种自动策略组机制一图看懂

| 策略组类型 | 调度核心原理 | 节点 IP 稳定性 | 常见误区与真实风险 | 最佳用途场景 |
| :--- | :--- | :--- | :--- | :--- |
| **Select (手动选择)** | 完全固定死在你自己点选的那一个节点上 | **100% 绝对不飘移** | 无自动容灾（断了需手动换一个） | **Claude、ChatGPT、亚马逊店铺、外币银行** |
| **Fallback (故障转移)**| **死守第一条节点**；仅当第一条 Ping 不通时才退居第二条 | **极稳，几乎不跳变** | 需确保你排第一的节点质量极优 | **既有稳定性诉求又想兼顾防断网的主流组** |
| **Url-test (自动测速)**| 每隔 300 秒重测一次延迟，谁延迟低切给谁 | 中等（高峰期可能横跳） | 延迟相差几毫秒时可能在港日新来回横跳 | **仅看 YouTube / Google 搜索等无登录风控场景** |
| **Load-balance (负载均衡)**| **每一次新 HTTP 连接轮流换一个不同出口 IP** | **极差！（每秒都在换国家）**| **绝对无法叠加网速！且100%秒封所有高价值账号！** | **仅限纯无登录公开爬虫批量并发（普通人禁用！）** |

---

### 二、切记：千万不要幻想通过“负载均衡”实现多条带宽叠加！

单条浏览网页连接无法把 5 条机场节点合并成 5 倍带宽，开启 **Load-balance（散列/轮询模式）** 的唯一后果就是：
你在打开 Claude、PayPal 或谷歌账号的同一分钟内，后台服务器看到你的请求一秒从香港发出、下一秒从德国发出、第三秒又从美国发出——**任何安全风控系统都会毫不犹豫把你的账号直接永久锁死！**
`
  },
  {
    id: "custom-yaml-rules-and-acl4ssr-override",
    question: "如何自定义 Clash 覆写规则 (Script/YAML) 给特定公司内网域名放行或指定节点？",
    category: "开发与极客进阶",
    summary: "每次在机场后台点击“更新订阅”，自己辛辛苦苦在 YAML 文件里手改的自定义分流规则和内网白名单就被全部覆盖清零？教你用 Clash Verge 全局拓展脚本/合并配置一劳永逸解决！",
    answer: "绝对不要直接修改下载下来的原始订阅 YAML 文件，因为每次更新订阅它都会被远端文件覆写替换！在现代 Clash Verge Rev 中，应当使用内置的 【全局拓展覆写 (Merge YAML) 或 全局拓展脚本 (JavaScript Script)】 功能：在右侧订阅栏点击配置或进入【配置/规则覆写】区域，通过 prepend-rules 将你想直连（DIRECT）的公司内网域名或你想指定锁死某个国家节点的 AI 域名永久注入在规则最顶端，从此无论怎么点“更新订阅”，你的个人定制规则永远自动生效保留！",
    keywords: ["Clash更新订阅规则被覆盖", "Clash Verge全局拓展脚本", "prepend-rules自定义分流", "公司内网直连白名单配置", "Mihomo YAML覆写教程"],
    relatedAirports: [
      { name: "微风网络 Breezenet", url: "https://edp01.breezenetaff.com/#/?code=4KDOroY0", badge: "标准YAML友好", reason: "订阅配置格式完全遵循Mihomo规范，极佳适配各种第三方覆写与拓展脚本" },
      { name: "隐形人", url: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy", badge: "精细分组", reason: "原生内置完善的AI、流媒体、微软苹果精细分流组，开箱即用几乎免手改" }
    ],
    relatedFaqs: ["global-vs-rule-mode-domestic-sites", "clash-url-test-fallback-load-balance", "midjourney-discord-and-copilot-proxy"],
    detailedContent: `
### 一、为什么直接改机场 YAML 配置文件是“无用功”？

机场订阅每隔一两天可能更新节点 IP，每当你手动或软件定时触发 **“更新订阅 (Update Profile)”**，客户端就会从网上拉一份全新的 YAML 文件直接把你本地的文件彻底覆盖掉，你写进去的私人规则自然也就蒸发了。

---

### 二、Clash Verge Rev 一劳永逸做法：利用【全局拓展配置 (Merge)】

1. 打开 **Clash Verge Rev**；
2. 点击左侧 **【订阅 (Profiles)】**，找到底部或右上角的 **【全局拓展配置 (Global Merge)】**（或右键你当前激活的那一条机场订阅 ➔ 点击 **【编辑拓展配置】**）；
3. 填入下方代码模板，利用 **\`prepend-rules\`**（优先插队到所有机场规则的最前面匹配）：

\`\`\`yaml
# 自动插队在订阅所有规则最上方，每次更新订阅依然100%生效！
prepend-rules:
  # 1. 让公司内网 OA 系统、局域网地址强制走直连 (不进代理)
  - DOMAIN-SUFFIX,internal-company.com,DIRECT
  - IP-CIDR,10.0.0.0/8,DIRECT,no-resolve
  - IP-CIDR,192.168.0.0/16,DIRECT,no-resolve

  # 2. 强行拦截或直连某个特定开发源
  - DOMAIN-SUFFIX,npmmirror.com,DIRECT
  - DOMAIN-SUFFIX,aliyun.com,DIRECT

  # 3. 强行让 OpenAI / Claude 走某个固定名称的策略组
  - DOMAIN-SUFFIX,openai.com,🤖 AI智能模型专属
  - DOMAIN-SUFFIX,claude.ai,🤖 AI智能模型专属
\`\`\`

保存后，点击一次重启规则匹配即可。以后无论机场主更新多少次订阅，你的私人规则都会稳如泰山插队生效！
`
  },
  {
    id: "linux-ubuntu-server-proxy-mihomo-cli",
    question: "Linux Ubuntu / Debian 服务器终端或 WSL2 如何部署无界面科学上网代理并加速 apt/docker？",
    category: "开发与极客进阶",
    summary: "针对纯命令行无桌面环境的 Linux 服务器或 Windows WSL2 子系统，手把手演示如何在 WSL2 开启镜像网络直通宿主机 Clash，以及如何在纯 Linux 上用 systemd 运行 Mihomo。",
    answer: "如果您使用的是 Windows 下的 WSL2 (Ubuntu)，最优雅的方法完全不需要在 Linux 里面重装客户端：只需在 Windows 用户目录创建 .wslconfig 开启 networkingMode=mirrored 镜像网络模式并在 Clash Verge 打开 Tun 模式，WSL2 内的 apt/curl/docker 立刻共享宿主机的翻墙环境！如果是独立的纯无桌面 Linux Ubuntu 服务器，可以直接下载 Mihomo 官方 Linux 二进制文件 并注册为 systemd 后台常驻服务，通过环境变量即可全自动代理服务器。",
    keywords: ["WSL2怎么用主机Clash代理", "networkingMode mirrored设置", "Linux终端命令行翻墙教程", "Ubuntu部署Mihomo教程", "服务器apt走代理"],
    relatedAirports: [
      { name: "边缘节点 EdgeNova", url: "https://work.edgenovaaff.cc/#/?code=z81zCfw1", badge: "Linux/CLI友好", reason: "提供纯净标准化Mihomo配置，服务器拉包与极客部署高速低丢包" },
      { name: "飞猫云", url: "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW", badge: "高流量服务器加速", reason: "大流量套餐极其适合服务器长期跑大模型数据同步与包镜像下载" }
    ],
    relatedFaqs: ["github-docker-npm-pip-slow-or-timeout-fix", "macbook-clash-verge-brew-curl-terminal-proxy", "sing-box-vs-clash-mihomo-comparison"],
    detailedContent: `
### 一、场景 1：Windows 11 WSL2 (Ubuntu) 最完美零折腾直通方案

以前 WSL2 采用 NAT 隔离虚拟网卡，要连上宿主机 Clash 需要查变动虚拟 IP 并关闭防火墙极其折磨。现在 Windows 11 原生推出了 **镜像网络模式 (Mirrored Mode)**：
1. 在 Windows 电脑 \`C:\\Users\\你的用户名\\.wslconfig\` 文件中写入：
\`\`\`ini
[wsl2]
networkingMode=mirrored
dnsTunneling=true
autoProxy=true
\`\`\`
2. 命令行运行 \`wsl --shutdown\` 完全重启 WSL2；
3. 宿主机开启 **Clash Verge Rev 系统代理或 Tun 模式**，此时进 WSL2 里运行 \`curl -I https://www.google.com\` 或 \`sudo apt update\` **直接共用 \`127.0.0.1:7897\` 或直接全自动走通宿主网络**！

---

### 二、场景 2：纯 Linux Ubuntu/Debian 服务器命令行部署 Mihomo

1. 下载最新对应架构的 Mihomo 核心解压至 \`/usr/local/bin/mihomo\` 并赋予执行权限 \`chmod +x /usr/local/bin/mihomo\`；
2. 将机场获取的 Clash YAML 配置下载保存到 \`/etc/mihomo/config.yaml\`（\`curl -A "Clash" -o /etc/mihomo/config.yaml "你的订阅链接"\`）；
3. 编写守护进程 \`/etc/systemd/system/mihomo.service\`：
\`\`\`ini
[Unit]
Description=Mihomo Daemon Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/mihomo -d /etc/mihomo
Restart=always

[Install]
WantedBy=multi-user.target
\`\`\`
4. 启动并导出环境变量：\`systemctl enable --now mihomo\` 后，只需 \`export https_proxy=http://127.0.0.1:7890\` 即可让终端全速下载海外源码与安装包！
`
  }
];
