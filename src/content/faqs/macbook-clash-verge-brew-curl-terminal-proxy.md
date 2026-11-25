---
title: "macOS 上开启了 Clash，为什么 Chrome 能翻墙但终端 Terminal (git/curl/brew) 依然连不上？"
question: "macOS 上开启了 Clash，为什么 Chrome 能翻墙但终端 Terminal (git/curl/brew) 依然连不上？"
summary: "程序员用 Mac 最常遇到的疑难杂症：浏览器畅通无阻，一到 Terminal 里敲 git clone、brew update 或 curl 就卡住超时。教你两种终极解决办法。"
category: "客户端与故障排查"
keywords: ["Mac终端走代理","macOS git clone超时","Homebrew走Clash代理","curl怎么用Clash代理","zsh配置http_proxy"]
pubDate: "2026-11-20"
updatedDate: "2026-11-25"
author: "2027机场榜技术专家组"
---

### 一、方案一（一劳永逸推荐）：直接开启 Tun 模式

在 Mac 上使用 Clash Verge Rev、Stash 或 Surge 时，只要开启 **Tun 模式（增强模式 / Enhanced Mode）**，不需要配置任何复杂环境变量，所有 Terminal、iTerm2、Docker、Python pip、Git 全部无感知通过虚拟网卡直连节点！

---

### 二、方案二（不想开Tun模式时的优雅快捷函数）

许多老程序员喜欢按需给终端开启代理（用完即关以免干扰公司内网工具）。打开你的 `~/.zshrc`（使用 `nano ~/.zshrc`），在文件底部加入以下方便切换的两个别名函数（注意把 `7897` 换成你客户端显示的混合端口，Clash Verge Rev 默认为 `7897`，CFW 旧版为 `7890`）：

```bash
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
```

保存后运行 `source ~/.zshrc`。以后只要在终端里敲一句 **`proxy_on`**，紧接着运行 `curl -I https://www.google.com` 或 `brew update`，瞬间如飞！
