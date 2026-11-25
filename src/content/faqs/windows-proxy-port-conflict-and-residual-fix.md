---
title: "关闭 Clash 后电脑浏览器依然提示“无法连接到代理服务器 (ERR_PROXY_CONNECTION_FAILED)”怎么彻底修复？"
question: "关闭 Clash 后电脑浏览器依然提示“无法连接到代理服务器 (ERR_PROXY_CONNECTION_FAILED)”怎么彻底修复？"
summary: "每次电脑突然断电、或者直接用任务管理器强行杀掉 Clash 客户端后，浏览器甚至微信都上不了网？教您一秒重置 Windows 系统残留代理开关！"
category: "客户端与故障排查"
keywords: ["ERR_PROXY_CONNECTION_FAILED修复","关闭梯子后上不了网","Windows残留代理清除","127.0.0.1代理连不上","无法连接到代理服务器"]
pubDate: "2026-11-20"
updatedDate: "2026-11-25"
author: "2027机场榜技术专家组"
---

### 一、故障现场还原：为什么没开代理反而全部断网了？

当你遇到这个症状时，典型表现是：
- QQ 和部分 P2P 软件勉强有网；
- **Edge、Chrome 浏览器全部报错**：`无法连接至互联网 / ERR_PROXY_CONNECTION_FAILED`；
- 打开网址发现它提示代理设置指向 `127.0.0.1:7890` 或 `127.0.0.1:7897`。

这并非网线断了或路由器坏了，而是**系统代理注册表开关被挂死在了死端口上**！

---

### 二、两套秒级恢复方案

#### 方法一：通过 Windows 设置面板图形化一键关闭（小白推荐）
1. 按下键盘快捷键 **`Win + I`** 打开 Windows 设置；
2. 点击 **【网络和 Internet】** ➔ 点击左侧或下方的 **【代理 (Proxy)】**；
3. 找到【手动设置代理】下方的 **【使用代理服务器】**，点击【编辑】或直接将开关拨到 **【关 (Off)】**，点击保存；
4. 刷新浏览器，所有国内网页瞬间秒开恢复！

#### 方法二：通过 PowerShell 一行命令清理残留代理（极客最爱）
按下 `Win + X` 打开终端运行以下语句：
```powershell
Set-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings' -Name ProxyEnable -Value 0
```
> **日常好习惯**：每次打算退出 Clash 客户端或者准备重启电脑前，建议先在客户端主界面手动点击一下关闭【系统代理】，或右键系统托盘图标选择正常的【退出 (Quit)】，让软件体面地自动清理干净注册表开关。
