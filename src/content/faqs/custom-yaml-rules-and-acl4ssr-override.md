---
title: "如何自定义 Clash 覆写规则 (Script/YAML) 给特定公司内网域名放行或指定节点？"
question: "如何自定义 Clash 覆写规则 (Script/YAML) 给特定公司内网域名放行或指定节点？"
summary: "每次在机场后台点击“更新订阅”，自己辛辛苦苦在 YAML 文件里手改的自定义分流规则和内网白名单就被全部覆盖清零？教你用 Clash Verge 全局拓展脚本/合并配置一劳永逸解决！"
category: "开发与极客进阶"
keywords: ["Clash更新订阅规则被覆盖","Clash Verge全局拓展脚本","prepend-rules自定义分流","公司内网直连白名单配置","Mihomo YAML覆写教程"]
pubDate: "2026-11-20"
updatedDate: "2026-11-25"
author: "2027机场榜技术专家组"
---

### 一、为什么直接改机场 YAML 配置文件是“无用功”？

机场订阅每隔一两天可能更新节点 IP，每当你手动或软件定时触发 **“更新订阅 (Update Profile)”**，客户端就会从网上拉一份全新的 YAML 文件直接把你本地的文件彻底覆盖掉，你写进去的私人规则自然也就蒸发了。

---

### 二、Clash Verge Rev 一劳永逸做法：利用【全局拓展配置 (Merge)】

1. 打开 **Clash Verge Rev**；
2. 点击左侧 **【订阅 (Profiles)】**，找到底部或右上角的 **【全局拓展配置 (Global Merge)】**（或右键你当前激活的那一条机场订阅 ➔ 点击 **【编辑拓展配置】**）；
3. 填入下方代码模板，利用 **`prepend-rules`**（优先插队到所有机场规则的最前面匹配）：

```yaml
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
```

保存后，点击一次重启规则匹配即可。以后无论机场主更新多少次订阅，你的私人规则都会稳如泰山插队生效！
