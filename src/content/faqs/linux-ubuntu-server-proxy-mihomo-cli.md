---
title: "Linux Ubuntu / Debian 服务器终端或 WSL2 如何部署无界面科学上网代理并加速 apt/docker？"
question: "Linux Ubuntu / Debian 服务器终端或 WSL2 如何部署无界面科学上网代理并加速 apt/docker？"
summary: "针对纯命令行无桌面环境的 Linux 服务器或 Windows WSL2 子系统，手把手演示如何在 WSL2 开启镜像网络直通宿主机 Clash，以及如何在纯 Linux 上用 systemd 运行 Mihomo。"
category: "开发与极客进阶"
keywords: ["WSL2怎么用主机Clash代理","networkingMode mirrored设置","Linux终端命令行翻墙教程","Ubuntu部署Mihomo教程","服务器apt走代理"]
pubDate: "2026-11-20"
updatedDate: "2026-11-25"
author: "2027机场榜技术专家组"
---

### 一、场景 1：Windows 11 WSL2 (Ubuntu) 最完美零折腾直通方案

以前 WSL2 采用 NAT 隔离虚拟网卡，要连上宿主机 Clash 需要查变动虚拟 IP 并关闭防火墙极其折磨。现在 Windows 11 原生推出了 **镜像网络模式 (Mirrored Mode)**：
1. 在 Windows 电脑 `C:\Users\你的用户名\.wslconfig` 文件中写入：
```ini
[wsl2]
networkingMode=mirrored
dnsTunneling=true
autoProxy=true
```
2. 命令行运行 `wsl --shutdown` 完全重启 WSL2；
3. 宿主机开启 **Clash Verge Rev 系统代理或 Tun 模式**，此时进 WSL2 里运行 `curl -I https://www.google.com` 或 `sudo apt update` **直接共用 `127.0.0.1:7897` 或直接全自动走通宿主网络**！

---

### 二、场景 2：纯 Linux Ubuntu/Debian 服务器命令行部署 Mihomo

1. 下载最新对应架构的 Mihomo 核心解压至 `/usr/local/bin/mihomo` 并赋予执行权限 `chmod +x /usr/local/bin/mihomo`；
2. 将机场获取的 Clash YAML 配置下载保存到 `/etc/mihomo/config.yaml`（`curl -A "Clash" -o /etc/mihomo/config.yaml "你的订阅链接"`）；
3. 编写守护进程 `/etc/systemd/system/mihomo.service`：
```ini
[Unit]
Description=Mihomo Daemon Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/mihomo -d /etc/mihomo
Restart=always

[Install]
WantedBy=multi-user.target
```
4. 启动并导出环境变量：`systemctl enable --now mihomo` 后，只需 `export https_proxy=http://127.0.0.1:7890` 即可让终端全速下载海外源码与安装包！
