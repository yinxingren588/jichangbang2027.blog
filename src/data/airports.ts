export interface AirportPlan {
  cycle: string;
  name: string;
  sub: string;
  price: string;
  discountedPrice: string;
  traffic: string;
  speed: string;
  devices: string;
  features: string[];
}

export interface AirportItem {
  id: string;
  name: string;
  rank: number;
  score: number;
  badge?: string;
  categoryTag: '专线旗舰' | '高性价比' | 'AI原生住宅' | '低延迟电竞' | '平价轻量';
  tagline: string;
  price: string;
  billingCycle: string;
  startQuota: string;
  yearlyNote: string;
  traffic: string;
  lineType: string;
  streamingUnlock: string;
  aiUnlock: string;
  clientSupport: string[];
  tags: string[];
  features: string[];
  pros: string[];
  cons: string[];
  suitableFor: string;
  peakSpeed: string;
  latency: string;
  stabilityRate: string;
  couponCode: string;
  couponDesc: string;
  buyUrl: string;
  reviewUrl: string;
  plans: AirportPlan[];
}

export const AIRPORT_LIST: AirportItem[] = [
  {
    "id": "yinxingren",
    "name": "隐形人",
    "rank": 1,
    "score": 9.9,
    "badge": "2027综合榜首・极致隐匿",
    "categoryTag": "专线旗舰",
    "tagline": "官方主推星耀风暴年付物理专线，涵盖白银、黄金、铂金与钻石全周期定制套餐。晚高峰超低丢包，全节点真实 1x 倍率，企业级抗封锁高可用架构。",
    "price": "¥19.20",
    "billingCycle": "/月起",
    "startQuota": "80GB/月起",
    "yearlyNote": "8折券后实付 ¥87.20 /年（折合约 ¥7.27/月）",
    "traffic": "80GB ~ 1.6TB /月 + 永久买断包",
    "lineType": "全 IEPL 物理专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash Verge",
      "Sing-box",
      "Shadowrocket",
      "Loon",
      "Surge"
    ],
    "tags": [
      "2027机场榜首",
      "IEPL专线",
      "双ISP住宅",
      "8K秒开",
      "0丢包"
    ],
    "features": [
      "全 IEPL 物理专线，晚高峰 0.8% 极低丢包，单节点峰值最高 2.5Gbps",
      "全节点统一 1.0x 真实计费倍率，全程不限速，不限同时在线设备数",
      "流媒体 4K/8K 与 ChatGPT / Claude / TikTok 原生纯净 IP 解锁"
    ],
    "pros": [
      "全 IEPL 物理专线，晚高峰 0.8% 极低丢包，单节点峰值最高 2.5Gbps",
      "全节点统一 1.0x 真实计费倍率，全程不限速，不限同时在线设备数",
      "流媒体 4K/8K 与 ChatGPT / Claude / TikTok 原生纯净 IP 解锁"
    ],
    "cons": [
      "高峰期新用户注册需抢购专属名额"
    ],
    "suitableFor": "外贸商务、科研人员、AI大模型重度研发者、4K/8K影音发烧友",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "18 ms",
    "stabilityRate": "99.99%",
    "couponCode": "yxr888",
    "couponDesc": "yxr888 (全场通用 8 折优惠券)",
    "buyUrl": "https://varnexa.invisibleaff.com/#/?code=JF4seZUy",
    "reviewUrl": "/reviews/yinxingren",
    "plans": [
      {
        "cycle": "年付",
        "name": "星耀风暴 365天不熄 ⚡",
        "sub": "适用人群：适合小流量/新手用户，年付折算约 8 元/月。",
        "price": "¥109.00 / 年",
        "discountedPrice": "8折券后实付 ¥87.20 /年（折合约 ¥7.27/月）",
        "traffic": "80GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：适合小流量/新手用户，年付折算约 8 元/月",
          "流量政策：80GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年付 / 年付",
        "name": "隐形人 白银纪元 👑",
        "sub": "每月提供约 144GB 高速可用流量（全天候极速）",
        "price": "¥24.00 / 月",
        "discountedPrice": "8折券后实付 ¥19.20 /月",
        "traffic": "144GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月提供约 144GB 高速可用流量（全天候极速）",
          "满足深度网课用户、全高清视频会议、高强度短视频运营与流媒体长期深度用户需求",
          "云端多链路即时优化 + 全链路专线架构，秒级响应，节点统一 1x 计费倍率",
          "流媒体全家桶：Netflix / Prime Video / BBC / Abema / TVer 等全面覆盖，原生IP直通"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年付 / 年付",
        "name": "隐形人 黄金序列 💥",
        "sub": "每月 360GB 高速流量，搭配中高频视频与流媒体，主力首选！",
        "price": "¥48.00 / 月",
        "discountedPrice": "8折券后实付 ¥38.40 /月",
        "traffic": "360GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 360GB 高速流量，搭配中高频视频与流媒体，主力首选！",
          "BGP 三网智能优化 + 纯专线出口，稳定优先，晚高峰也绝不卡顿",
          "纯专线不限速，4K 秒开、兼容 8K 超清播放，视听体验拉满"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年付 / 年付",
        "name": "隐形人 铂金至臻 🔱",
        "sub": "每月包含 750GB 高速可用流量，适合高频网络使用场景",
        "price": "¥105.00 / 月",
        "discountedPrice": "8折券后实付 ¥84.00 /月",
        "traffic": "750GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月包含 750GB 高速可用流量，适合高频网络使用场景",
          "高频流媒体下载、远程办公、大文件传输？750GB 让你彻底告别流量焦虑",
          "BGP 多线融合调度 + 专线级网络出口，带宽充足，全节点 1x 计费",
          "全流媒体平台完美解锁，4K/8K 超清内容稳定播放，一爽到底"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年付 / 年付",
        "name": "隐形人 钻石穹顶 💎",
        "sub": "每月提供 1600GB 超大流量池，适合团队使用与高并发访问场景",
        "price": "¥185.00 / 月",
        "discountedPrice": "8折券后实付 ¥148.00 /月",
        "traffic": "1.6TB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月提供 1600GB 超大流量池，适合团队使用与高并发访问场景",
          "企业级 BGP 智能路由 + 专线出口方案，全程不限速，节点流量不放大",
          "1.6TB 超大带宽，跨境电商、海外自媒体团队日常高强度下载必备",
          "全球主流媒体与内容平台全解锁，高码率 8K 视频多台设备同时稳定播放"
        ]
      },
      {
        "cycle": "月付",
        "name": "王者定制版 ✈️",
        "sub": "这就是跨境企业的生命线 普通的共享节点，无法承载高净值的商业梦想",
        "price": "¥680.00 / 月",
        "discountedPrice": "8折券后实付 ¥544.00 /月",
        "traffic": "500GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "这就是跨境企业的生命线 普通的共享节点，无法承载高净值的商业梦想",
          "我们为您推出顶配商业级解决方案",
          "500GB/月 独立带宽，全程不限速，保证高并发业务丝滑顺畅"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "一次性小流量 🪩",
        "sub": "一次性买断 160GB，无时间限制，高端纯备用梯子天花板",
        "price": "¥229.00 / 一次性",
        "discountedPrice": "8折券后实付 ¥183.20",
        "traffic": "160GB (买断)",
        "speed": "不限速",
        "devices": "严格限 1 台",
        "features": [
          "一次性买断 160GB，无时间限制，高端纯备用梯子天花板",
          "告别月租焦虑，¥229 拥有一个永不过期的网络安全气囊",
          "独立买断区专属节点，严格限 1 台设备，主打一个纯净与不挤兑"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "一次性标准流量包 🌀",
        "sub": "420GB 独立买断流量，没有过期时间，海外出差、商旅跨年黄金组合",
        "price": "¥549.00 / 一次性",
        "discountedPrice": "8折券后实付 ¥439.20",
        "traffic": "420GB (买断)",
        "speed": "不限速",
        "devices": "支持 2 台设备",
        "features": [
          "420GB 独立买断流量，没有过期时间，海外出差、商旅跨年黄金组合",
          "进阶优质带宽加持，支持 2 台设备同时在线，手机电脑无缝同步",
          "进阶优质带宽保证晚高峰不卡顿，追剧、办公、开会全能打",
          "把预算花在刀刃上，永不过期的 420G 专线，比天天续费省心百倍"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "一次性精英流量包 🌊",
        "sub": "1000GB（1TB）旗舰独享买断流量，一口价 ¥1199，永不过期！",
        "price": "¥1199.00 / 一次性",
        "discountedPrice": "8折券后实付 ¥959.20",
        "traffic": "1.0TB (买断)",
        "speed": "不限速",
        "devices": "支持 3 台设备",
        "features": [
          "1000GB（1TB）旗舰独享买断流量，一口价 ¥1199，永不过期！",
          "极速旗舰级最高优先级带宽，支持 3 台设备同时狂飙，稳如泰山",
          "专为高净值金融、跨境核心业务、高端工作室打造的商务断区",
          "1TB 大容量且没有时间限制，重度生产力用户的终身省心方案"
        ]
      }
    ]
  },
  {
    "id": "muguang",
    "name": "暮光加速",
    "rank": 2,
    "score": 9.8,
    "badge": "高速极光专线",
    "categoryTag": "低延迟电竞",
    "tagline": "全 IPLC 国际物理专线搭配 BGP 三网智能优化，单节点峰值高达 2.5Gbps。晚高峰极低丢包与抖动，不限同时在线设备，附带独家极速客户端一键导入。",
    "price": "¥20",
    "billingCycle": "/月起",
    "startQuota": "70GB/月起",
    "yearlyNote": "折合约 ¥9.08/月",
    "traffic": "70GB ~ 1.5TB /月 + 永久买断包",
    "lineType": "全 IPLC 物理专线 / BGP 三网优化",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash Verge",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "极速低延迟",
      "电竞加速",
      "IPLC专线",
      "超稳骨干"
    ],
    "features": [
      "全 IPLC 物理专线出口，单节点峰值 2.5Gbps",
      "晚高峰 1.2% 优异丢包率",
      "全 IPLC 物理专线通道，高峰不限速",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IPLC 物理专线出口，单节点峰值 2.5Gbps",
      "晚高峰 1.2% 优异丢包率",
      "全 IPLC 物理专线通道，高峰不限速",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "按量付费包无折上折"
    ],
    "suitableFor": "外服网游玩家、跨国视频会议、重度视频用户",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "22 ms",
    "stabilityRate": "99.95%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://varnexa.twilightaff.com/#/?code=3qqonTlH",
    "reviewUrl": "/reviews/muguang",
    "plans": [
      {
        "cycle": "年付",
        "name": "暮光·年付轻量版",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥109 / 年",
        "discountedPrice": "折合约 ¥9.08/月",
        "traffic": "70 GB / 每30天刷新",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 物理专线出口",
          "单节点峰值 2.5Gbps",
          "不限设备数",
          "全解锁支持"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "月付入门",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥20 / 月",
        "discountedPrice": "",
        "traffic": "120 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 多线路调度与专线出口",
          "支持多设备同时连接",
          "ChatGPT/流媒体原生解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "暮光·标准版 (站长力荐)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥40 / 月",
        "discountedPrice": "",
        "traffic": "240 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 三网优化 + IPLC 专线出口",
          "流媒体 4K 超清秒开",
          "不限客户端在线数"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "暮光·旗舰版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥100 / 月",
        "discountedPrice": "",
        "traffic": "700 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "高速 IPLC 专线极低抖动",
          "适合多人/多设备高负载",
          "峰值速率 2.5Gbps"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "暮光·至尊版 (极客尊享)",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥180 / 月",
        "discountedPrice": "",
        "traffic": "1500 GB (1.5TB) / 每月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "智能专属路由专线通道",
          "超大 1.5TB 流量",
          "多端并发不降速",
          "全天候海外运维"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "暮光·不限时标准包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥318 / 一次性",
        "discountedPrice": "",
        "traffic": "400 GB · 永久有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 专线权限",
          "永久有效不过期",
          "全节点 1x 计费不限速",
          "不限设备数"
        ]
      }
    ]
  },
  {
    "id": "breezenet",
    "name": "微风网络 Breezenet",
    "rank": 3,
    "score": 9.8,
    "badge": "轻奢高速典范",
    "categoryTag": "专线旗舰",
    "tagline": "老牌大带宽稳定专线集群，智能 BGP 多线融合调度与全内网物理隧道。全天候 4K/8K 超清流媒体与 ChatGPT 原生解锁，全节点统一 1.0x 真实计费。",
    "price": "¥25",
    "billingCycle": "/月起",
    "startQuota": "100GB/月起",
    "yearlyNote": "9折券后实付 ¥123.30 /年（约 ¥10.28/月）",
    "traffic": "100GB ~ 1.2TB /月 + 永久买断包",
    "lineType": "全 IPLC 物理专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "Surge"
    ],
    "tags": [
      "丝滑稳定",
      "Anycast多入口",
      "大流量优选",
      "全端适配"
    ],
    "features": [
      "全 IPLC 物理专线通道，高峰不限速",
      "晚高峰 1.8% 优异丢包表现",
      "原生 IP 双 ISP 机房纯净出口，抗封锁强",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IPLC 物理专线通道，高峰不限速",
      "晚高峰 1.8% 优异丢包表现",
      "原生 IP 双 ISP 机房纯净出口，抗封锁强",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "暂无低于10元的超轻量体验套餐"
    ],
    "suitableFor": "白领商务、追剧合租党、海外社交媒体运营",
    "peakSpeed": "860 Mbps",
    "latency": "28 ms",
    "stabilityRate": "99.95%",
    "couponCode": "weifeng90",
    "couponDesc": "weifeng90 (全场 9 折优惠券)",
    "buyUrl": "https://edp01.breezenetaff.com/#/?code=4KDOroY0",
    "reviewUrl": "/reviews/breezenet",
    "plans": [
      {
        "cycle": "年付",
        "name": "清风 · 年付精算 (本站力荐)",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥137 / 年",
        "discountedPrice": "9折券后实付 ¥123.30 /年（约 ¥10.28/月）",
        "traffic": "100 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 物理专线",
          "每月 100GB 专线流量",
          "不限设备数",
          "4K与ChatGPT秒开"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "月付热门",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥25 / 月",
        "discountedPrice": "",
        "traffic": "200 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "IPLC 物理专线高峰不限速",
          "原生纯净 IP 节点",
          "全平台客户端一键登录"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "破风 · 高频进阶",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥55 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "充裕 500GB 月度大流量",
          "支持多设备协同并发",
          "原生 IP 流媒体解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "海量吞吐",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥125 / 月",
        "discountedPrice": "",
        "traffic": "1200 GB (1.2TB) / 每月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "超大 1.2TB 月度流量",
          "企业级 IPLC 专线大带宽",
          "多端高负载不降速"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "信风 · 一次性不限时包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥200 / 一次性",
        "discountedPrice": "",
        "traffic": "270 GB · 永久有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全专线节点高速访问",
          "用完为止永不过期",
          "全节点 1x 倍率真实计费"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "长风 · 一次性海量包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥370 / 一次性",
        "discountedPrice": "",
        "traffic": "570 GB · 永久有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "570GB 永久有效总流量",
          "多设备跨平台无缝连接",
          "晚高峰稳定低抖动"
        ]
      }
    ]
  },
  {
    "id": "flycat",
    "name": "飞猫云",
    "rank": 4,
    "score": 9.7,
    "badge": "2027高性价比爆款",
    "categoryTag": "高性价比",
    "tagline": "高性价比老牌稳定机场，专为高频流媒体、学术科研与跨境办公打造。大带宽专线中转与原生双 ISP 节点矩阵，晚高峰流畅不卡顿，多端一键导入订阅。",
    "price": "¥25",
    "billingCycle": "/月起",
    "startQuota": "50GB/月起",
    "yearlyNote": "折合仅 ¥7.00 /月",
    "traffic": "50GB ~ 1.2TB /月 + 永久买断包",
    "lineType": "IPLC 高速物理专线 / 原生双 ISP",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "tags": [
      "高性价比",
      "大流量套餐",
      "学生推荐",
      "秒开4K"
    ],
    "features": [
      "原生 IP 双 ISP 机房纯净出口，抗封锁强",
      "IPLC 高速物理专线，覆盖 15+ 全球地区节点",
      "全线搭载旗舰级 IEPL/IPLC 物理专线，超低延迟与 99.9% 高可用 SLA",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "原生 IP 双 ISP 机房纯净出口，抗封锁强",
      "IPLC 高速物理专线，覆盖 15+ 全球地区节点",
      "全线搭载旗舰级 IEPL/IPLC 物理专线，超低延迟与 99.9% 高可用 SLA",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "冷门国家节点较少"
    ],
    "suitableFor": "大学生、海量视频下载党、备用主力双修玩家",
    "peakSpeed": "750 Mbps",
    "latency": "35 ms",
    "stabilityRate": "99.95%",
    "couponCode": "flycat888",
    "couponDesc": "flycat888 (9 折优惠码)",
    "buyUrl": "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW",
    "reviewUrl": "/reviews/flycat",
    "plans": [
      {
        "cycle": "年付",
        "name": "飞猫·学生版 (超低门槛)",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥84 / 年",
        "discountedPrice": "折合仅 ¥7.00 /月",
        "traffic": "50 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "IPLC 高速专线",
          "每月 50GB 自动刷新",
          "不限设备数",
          "原生纯净 IP 解锁 AI/流媒体"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "月付热门",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥25 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "IPLC 专线与原生纯净 IP",
          "每月刷新 150GB",
          "ChatGPT/流媒体秒开"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "影音主推",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥45 / 月",
        "discountedPrice": "",
        "traffic": "300 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月充裕 300GB",
          "15+ 地区任选",
          "4K 超清流畅播放",
          "自研客户端一键登录"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "飞猫·银河版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥85 / 月",
        "discountedPrice": "",
        "traffic": "600 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "超大 600GB 专线流量",
          "双 ISP 机房纯净原生出口",
          "工单技术支持"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "极客尊享",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥160 / 月",
        "discountedPrice": "",
        "traffic": "1200 GB (1.2TB) / 每月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "海量 1.2TB 专线带宽",
          "低抖动网络拓扑路由优化",
          "全节点 1x 倍率"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "飞猫·不限时轻量包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥188 / 一次性",
        "discountedPrice": "",
        "traffic": "200 GB · 永久有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 专线节点高速访问",
          "永久有效不过期",
          "不限设备数随时可用"
        ]
      }
    ]
  },
  {
    "id": "dalao-cloud",
    "name": "大佬云 (旗舰站)",
    "rank": 5,
    "score": 9.7,
    "badge": "行业资深老牌",
    "categoryTag": "专线旗舰",
    "tagline": "全线搭载旗舰级 IEPL/IPLC 国际专线与优质 BGP 智能调度，单节点峰值最高 2.5Gbps。全节点 1x 真实计费倍率，晚高峰绝不限速；深度解锁 ChatGPT、Claude 及全平台流媒体，多端设备畅连无阻。",
    "price": "¥19.99",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00 /月",
    "traffic": "60GB ~ 600GB /月 + 永久买断包",
    "lineType": "全 IPLC/IEPL 国际专线 / BGP 智能调度",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Surge",
      "Quantumult X"
    ],
    "tags": [
      "老牌大厂",
      "金融专线",
      "超高可用率",
      "极低抖动"
    ],
    "features": [
      "全线搭载旗舰级 IEPL/IPLC 物理专线，超低延迟与 99.9% 高可用 SLA",
      "全节点统一 x1 真实倍率扣费，晚高峰大带宽绝不限速",
      "千兆 BGP 多线融合调度 + IEPL/IPLC 跨境专线",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全线搭载旗舰级 IEPL/IPLC 物理专线，超低延迟与 99.9% 高可用 SLA",
      "全节点统一 x1 真实倍率扣费，晚高峰大带宽绝不限速",
      "千兆 BGP 多线融合调度 + IEPL/IPLC 跨境专线",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "无小额日卡套餐"
    ],
    "suitableFor": "金融外贸、跨境企业、需要全天候不掉线的高端用户",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "25 ms",
    "stabilityRate": "99.98%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://vip.dalaocloud.com/#/?code=05KusH3b",
    "reviewUrl": "/reviews/dalao-cloud",
    "plans": [
      {
        "cycle": "年付",
        "name": "年付活动包 ⚡",
        "sub": "适用人群：适合小流量/新手用户，年付折算约 8 元/月。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00 /月",
        "traffic": "60GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "适用人群：适合小流量/新手用户，年付折算约 8 元/月",
          "流量政策：60GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "财云 · 福利版 💰",
        "sub": "每天不到 ¥0.65，初入云端，自由畅连全网！",
        "price": "¥19.99 / 月",
        "discountedPrice": "",
        "traffic": "100GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天不到 ¥0.65，初入云端，自由畅连全网！",
          "每月 100GB 充足流量，全节点 x1 倍率扣费，晚高峰绝不限速",
          "全线搭载旗舰级 IEPL 专线，超低延迟，99.9% 高可用 SLA 保证",
          "覆盖香港、台湾、日本、韩国、美国、新加坡等多国优质节点"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "初云 · 进阶版 ☁️",
        "sub": "每天不到 ¥0.8，初入云端，自有天地。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "150GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天不到 ¥0.8，初入云端，自有天地",
          "每月 150GB，适合日常浏览、AI 助手与影音娱乐",
          "IEPL 专线直连体验，极低延迟，智能优选路由",
          "全节点 x1 倍率，晚高峰不限速"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "凌云 · 基础版 🚀",
        "sub": "每天约 ¥1.43，让每一次流淌，融入你的生活节奏。",
        "price": "¥43.00 / 月",
        "discountedPrice": "",
        "traffic": "300GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天约 ¥1.43，让每一次流淌，融入你的生活节奏",
          "月度 300GB：兼顾日常使用、职场工作、学习与休闲",
          "全线 IPLC 专线：智能路由，跨区访问更顺畅",
          "全节点 x1 倍率，晚高峰不限速"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "御云 · 高级版 👑",
        "sub": "每天约 ¥2.43，以高阶之势，承载更广阔的网络探索。",
        "price": "¥73.00 / 月",
        "discountedPrice": "",
        "traffic": "600GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "每天约 ¥2.43，以高阶之势，承载更广阔的网络探索",
          "月度 600GB：面向高强度使用，为极致体验的你而设",
          "极速专线：全线 IPLC 专线，单节点峰值带宽可达 2.5Gbps",
          "智能路由：全节点 x1 倍率，晚高峰不限速"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "闲云 · 随心包 🪩",
        "sub": "随心连接，让流量跟随你的节奏，永不过期。",
        "price": "¥268.00 / 终身",
        "discountedPrice": "",
        "traffic": "200GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "随心连接，让流量跟随你的节奏，无需按月续费",
          "适用人群：适合偶尔使用、轻量浏览与备用连接的用户",
          "套餐价格：一次性付款 268 元，永不过期",
          "流量额度：总计 200GB，按实际使用扣减，非每月额度"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "悠云 · 长享包 🌊",
        "sub": "悠然上云，为未来的每一次连接留足余量。",
        "price": "¥498.00 / 终身",
        "discountedPrice": "",
        "traffic": "500GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "悠然上云，为未来的每一次连接留足余量",
          "适用人群：适合长期低频使用、希望一次购买更多流量的用户",
          "套餐价格：一次性付款 498 元，无需按月续费",
          "流量额度：总计 500GB，按实际使用扣减，非每月额度"
        ]
      }
    ]
  },
  {
    "id": "fly-v",
    "name": "飞V",
    "rank": 6,
    "score": 9.6,
    "badge": "新锐急速之星",
    "categoryTag": "高性价比",
    "tagline": "为极速跨境与重度生产力而生，全节点 BGP 自动容灾调度。覆盖香港、日本、新加坡及美欧核心骨干机房，流媒体全量解锁，支持独享专线定制业务。",
    "price": "¥25.00",
    "billingCycle": "/月起",
    "startQuota": "65GB/月起",
    "yearlyNote": "折合 ¥8.25/月",
    "traffic": "65GB ~ 1.8TB /月 + 永久买断包",
    "lineType": "BGP 优质高速入口 / IEPL / IPLC 专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash Verge",
      "Sing-box",
      "Shadowrocket",
      "Loon"
    ],
    "tags": [
      "新锐品牌",
      "低延迟",
      "极速体验",
      "智能路由"
    ],
    "features": [
      "千兆 BGP 多线融合调度 + IEPL/IPLC 跨境专线",
      "全节点统一 1.0x 计费倍率，全程不限速",
      "BGP 智能多网专线 + 穿云物理 IPLC 专线通道",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "千兆 BGP 多线融合调度 + IEPL/IPLC 跨境专线",
      "全节点统一 1.0x 计费倍率，全程不限速",
      "BGP 智能多网专线 + 穿云物理 IPLC 专线通道",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "成立时间相对老牌略短"
    ],
    "suitableFor": "年轻白领、科技爱好者、流媒体爱好者",
    "peakSpeed": "720 Mbps",
    "latency": "38 ms",
    "stabilityRate": "99.95%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://varnexa.flyvaff.com/#/?code=IC0p64fi",
    "reviewUrl": "/reviews/fly-v",
    "plans": [
      {
        "cycle": "年付",
        "name": "FlyV 会员 - 年付标准轻量版",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥99.00 / 年",
        "discountedPrice": "折合 ¥8.25/月",
        "traffic": "65 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全节点不限速，统一 1.0x 倍率",
          "不限制在线设备数",
          "适合轻度网络备份"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "精选方案 · 入门",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适配 YouTube/Netflix/TikTok",
          "适配 ChatGPT、GitHub Copilot"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "FlyV 会员 - 进阶方案",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥50.00 / 月",
        "discountedPrice": "",
        "traffic": "380 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 智能调度 + IEPL/IPLC 专线",
          "4K/8K 超清流媒体秒开",
          "深度兼容 Midjourney/Claude"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "高端商务 · 800GB",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥110.00 / 月",
        "discountedPrice": "",
        "traffic": "800 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "千兆 BGP 多线融合调度",
          "全节点 1.0x 计费",
          "商务办公与家庭多设备打造"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "FlyV 会员 - 商业方案",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥190.00 / 月",
        "discountedPrice": "",
        "traffic": "1800 GB (1.8TB) / 每月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "冗余专线出口架构",
          "专为跨境企业/多人工作室/AI研发设计"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "单次轻量版 · 小流量包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥189.00 / 一次性",
        "discountedPrice": "",
        "traffic": "130 GB (永久有效买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "永久有效无使用期限",
          "一次购买用完即止",
          "低频备用首选"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "单次轻量版 · 标准流量包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥479.00 / 一次性",
        "discountedPrice": "",
        "traffic": "380 GB (永久有效买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "无月租清零压力",
          "多地区节点自由切换",
          "商旅出差首选"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "单次轻量版 · 精英流量包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥799.00 / 一次性",
        "discountedPrice": "",
        "traffic": "600 GB (永久有效买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "高优先级带宽通道",
          "全节点不限速",
          "大容量储备"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "FlyV 会员 - 原生IP·独享黄金专线",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥680.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 每月独享流量",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "独立原生公网 IP 杜绝污染",
          "独享专属带宽保障",
          "TikTok 海外直播与跨境电商首选"
        ]
      }
    ]
  },
  {
    "id": "lingdong",
    "name": "灵动云",
    "rank": 7,
    "score": 9.6,
    "badge": "智能负载优选",
    "categoryTag": "高性价比",
    "tagline": "深度优化电信、联通、移动三网穿云专线，单节点最高 2.5Gbps 物理峰值。全节点不限速，全平台流媒体与 AI 工具极速解锁，配置极简即开即用。",
    "price": "¥16.00",
    "billingCycle": "/月起",
    "startQuota": "70GB/月起",
    "yearlyNote": "折合约 ¥8.25 /月 · 专线年度爆款",
    "traffic": "70GB ~ 1.5TB /月 + 永久买断包",
    "lineType": "BGP 智能多网专线 / 穿云 IPLC 专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "动态智能选路",
      "抗封锁",
      "多入口保障",
      "晚高峰无忧"
    ],
    "features": [
      "BGP 智能多网专线 + 穿云物理 IPLC 专线通道",
      "单节点峰值高达 2.5Gbps，全节点 1.0x 计费不虚标",
      "全 IPLC 物理专线低延迟，单节点最高 2.5Gbps",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "BGP 智能多网专线 + 穿云物理 IPLC 专线通道",
      "单节点峰值高达 2.5Gbps，全节点 1.0x 计费不虚标",
      "全 IPLC 物理专线低延迟，单节点最高 2.5Gbps",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "高峰期偶尔部分冷门节点维护"
    ],
    "suitableFor": "追求省心免维护的用户、家庭网络共享",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "34 ms",
    "stabilityRate": "99.95%",
    "couponCode": "wsj888",
    "couponDesc": "wsj888 (全场 8 折优惠券); iOS客户端识别码: ldy",
    "buyUrl": "https://varnexa.lingdongaff.com/#/?code=QcRK6OPG",
    "reviewUrl": "/reviews/lingdong",
    "plans": [
      {
        "cycle": "年付",
        "name": "灵动·穿云 (年度精选IPLC)",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥99 / 年",
        "discountedPrice": "折合约 ¥8.25 /月 · 专线年度爆款",
        "traffic": "70 GB / 每30天额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "物理 IPLC 专线通道",
          "峰值高达 2.5Gbps",
          "每 30 天自动刷新 70GB",
          "流媒体与 ChatGPT 原生解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "灵动·拂风 (亲民入门)",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥20 / 月",
        "discountedPrice": "8折券后仅 ¥16.00 /月",
        "traffic": "100 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 多网专线调度接入",
          "全节点 1.0x 真实倍率",
          "多设备在线无限制",
          "主流社交与流媒体解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "灵动·驭浪 (主力推荐)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥50 / 月",
        "discountedPrice": "8折券后仅 ¥40.00 /月",
        "traffic": "300 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 三网优化 + 原生纯净 IP",
          "支持 4K 超高清流畅秒开",
          "AI 对话工具专属纯净线路"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "灵动·破晓",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥100 / 月",
        "discountedPrice": "8折券后仅 ¥80.00 /月",
        "traffic": "700 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 多线专线高速通道",
          "全节点 1.0x 计费不虚标",
          "多设备共享大流量池",
          "低抖动链路保障"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "灵动·凌霄 (1.5TB)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥180 / 月",
        "discountedPrice": "8折券后仅 ¥144.00 /月",
        "traffic": "1500 GB (1.5TB) / 每月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "海量 1.5TB 每月流量",
          "BGP 智能专线流量不放大",
          "多端并发无压力连接"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "灵动·不限时轻享包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥168 / 一次性",
        "discountedPrice": "8折券后仅 ¥134.40",
        "traffic": "200 GB · 永久有效",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 专线节点高速访问",
          "不限使用期限用完为止",
          "实打实 1.0x 扣减计费"
        ]
      }
    ]
  },
  {
    "id": "wavenet",
    "name": "浪网 WaveNet",
    "rank": 8,
    "score": 9.6,
    "badge": "冲浪极客力荐",
    "categoryTag": "高性价比",
    "tagline": "企业级高可用架构，全自建 IPLC 国际专线与高端中继网络。严控单节点在线负载与峰值冗余，晚高峰 0 丢包体验，提供高性价比周期订阅与永不过期买断包。",
    "price": "¥30.00",
    "billingCycle": "/月起",
    "startQuota": "80GB/月起",
    "yearlyNote": "折合约 ¥9.92/月",
    "traffic": "80GB ~ 2TB /月 + 永久买断包",
    "lineType": "全 IPLC 物理专线 / BGP 多线融合调度",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "Surge"
    ],
    "tags": [
      "海量大带宽",
      "极客定制",
      "大文件秒传",
      "高吞吐"
    ],
    "features": [
      "全 IPLC 物理专线低延迟，单节点最高 2.5Gbps",
      "全节点统一 1.0x 倍率真实计费，不设峰值限速",
      "核心骨干网 IEPL 专线集群 + SLA 连通性保障",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IPLC 物理专线低延迟，单节点最高 2.5Gbps",
      "全节点统一 1.0x 倍率真实计费，不设峰值限速",
      "核心骨干网 IEPL 专线集群 + SLA 连通性保障",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "基础套餐价格稍高"
    ],
    "suitableFor": "开发者、影视下载党、外贸大流量用户",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "30 ms",
    "stabilityRate": "99.95%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://varnexa.wavenetaff.com/#/?code=j468t9eF",
    "reviewUrl": "/reviews/wavenet",
    "plans": [
      {
        "cycle": "年付",
        "name": "浪网 年付标准",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥119.00 / 年",
        "discountedPrice": "折合约 ¥9.92/月",
        "traffic": "80 GB / 每30天刷新",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 专线低延迟",
          "单节点峰值最高 2.5Gbps",
          "不限设备数",
          "原生 IP 解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "入门精选 · 150GB",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥30.00 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 智能调度 + 专线级出口",
          "全节点 1x 计费",
          "4K即点即播支持8K"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "浪网 进阶",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥70.00 / 月",
        "discountedPrice": "",
        "traffic": "400 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 三网优化 + 纯专线出口",
          "AI 生产力平台深度支持",
          "全平台一键配置"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "高频首选 · 800GB",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥120.00 / 月",
        "discountedPrice": "",
        "traffic": "800 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "多线融合专线网络出口",
          "带宽充足不设限速",
          "团队与家庭多端共享"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "商业级 · 2.0TB",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥200.00 / 月",
        "discountedPrice": "",
        "traffic": "2000 GB (2.0TB) / 每月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "企业级 BGP + 专线出口",
          "实打实 1.0x 真实计费",
          "高抗封锁支持多工位并发"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "浪网 小流量包 (独立IP)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥239.00 / 一次性",
        "discountedPrice": "",
        "traffic": "180 GB (永久不过期)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "独立 IP 不共享专人维护",
          "跨境防封号出海配置",
          "限 1 设备核心守号"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "浪网 标准流量包 (商务精英)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥569.00 / 一次性",
        "discountedPrice": "",
        "traffic": "450 GB (永久不过期)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "稳定抗封锁架构",
          "适合经常出差商务用户",
          "多地区主流节点随意切换"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "浪网 精英流量包 (旗舰买断)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥1099.00 / 一次性",
        "discountedPrice": "",
        "traffic": "900 GB (永久不过期)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "高净值金融与跨境核心断区",
          "专线级多路容灾出口",
          "终极生产力免续费"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "浪网 定制线路包",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥680.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 每月独享流量",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "独立公网 IP 专线独享",
          "独占带宽不抢网",
          "跨境直播大团队顶配基建"
        ]
      }
    ]
  },
  {
    "id": "laddercloud",
    "name": "梯子云 LadderCloud",
    "rank": 9,
    "score": 9.5,
    "badge": "稳定爬梯典范",
    "categoryTag": "高性价比",
    "tagline": "新一代高速 IEPL 内网专线网络，智能动态优选全球超低延迟路由。晚高峰高并发吞吐保障，流媒体 4K/8K 与海外主流平台全解锁，跨平台客户端全面适配。",
    "price": "¥25.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合 ¥7.42/月",
    "traffic": "60GB ~ 1.6TB /月 + 永久买断包",
    "lineType": "BGP 三网智能优化 + 核心骨干 IEPL 专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "老牌沉稳",
      "简单好用",
      "新手友好",
      "稳定无忧"
    ],
    "features": [
      "核心骨干网 IEPL 专线集群 + SLA 连通性保障",
      "全网统一 1.0x 真实计费倍率，无恶性翻倍",
      "全节点纯 IPLC 物理专线，端到端专用隧道直连境外机房",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "核心骨干网 IEPL 专线集群 + SLA 连通性保障",
      "全网统一 1.0x 真实计费倍率，无恶性翻倍",
      "全节点纯 IPLC 物理专线，端到端专用隧道直连境外机房",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "界面设计风格偏传统"
    ],
    "suitableFor": "初次接触翻墙的新手、长辈长效使用",
    "peakSpeed": "680 Mbps",
    "latency": "40 ms",
    "stabilityRate": "99.95%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://varnexa.ladderaff.com/#/?code=KSmLLEnR",
    "reviewUrl": "/reviews/laddercloud",
    "plans": [
      {
        "cycle": "年付",
        "name": "天梯随行 · 年度保活方案",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥89.00 / 年",
        "discountedPrice": "折合 ¥7.42/月",
        "traffic": "60 GB / 每月自动刷新",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "年度高性价比保活",
          "全节点不限速 1.0x",
          "不限设备数"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "精选方案 · 初阶入门",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "125 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "多入口智能调度全程不限速",
          "完整解锁 Netflix/YouTube/ChatGPT"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "中阶加速 · 极清多线",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥60.00 / 月",
        "discountedPrice": "",
        "traffic": "350 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 三网优化 + 高速专线出口",
          "4K/8K 视频秒开",
          "适配 ChatGPT 语音模式"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "旗舰级 · 750GB",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥110.00 / 月",
        "discountedPrice": "",
        "traffic": "750 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "核心骨干网 IEPL 专线",
          "原生 IP 解锁不降画质",
          "跨境电商与外贸首选"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "商业级 · 1.6TB",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥190.00 / 月",
        "discountedPrice": "",
        "traffic": "1600 GB (1.6TB) / 每月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "企业级专线集群 + SLA 连通保障",
          "专属多活容灾方案最高优先级调度"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "云端买断 · 永不限时轻量包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥169.00 / 一次性",
        "discountedPrice": "",
        "traffic": "120 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "用完即止永不限时",
          "谷歌检索与跨境业务守号防失联备用"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "云端买断 · 永不限时标准包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥449.00 / 一次性",
        "discountedPrice": "",
        "traffic": "350 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "中长期免续费方案",
          "高频 AI 交互与学术研究备用"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "云端买断 · 永不限时精英包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥849.00 / 一次性",
        "discountedPrice": "",
        "traffic": "700 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "多终端大容量终极方案",
          "高优先级调度骨干网络"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "云端独享 · 私人定制专线",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥680.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 每月独享流量",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "独立纯净公网 IP",
          "彻底杜绝 IP 污染与连带封号",
          "一对一专家维护"
        ]
      }
    ]
  },
  {
    "id": "firefly",
    "name": "Firefly机场",
    "rank": 10,
    "score": 9.5,
    "badge": "萤火闪耀・轻巧迅捷",
    "categoryTag": "平价轻量",
    "tagline": "端到端纯 IPLC 国际物理专线，全程不经公网审查，敏感时期稳定如常。单节点峰值大带宽通道保障，全节点原生 IP 矩阵深度解锁 Netflix 与 ChatGPT。",
    "price": "¥25.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00/月",
    "traffic": "60GB ~ 1TB /月 + 永久买断包",
    "lineType": "端到端纯 IPLC 物理专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "Loon"
    ],
    "tags": [
      "轻量迅捷",
      "高性价比",
      "流媒体解锁",
      "超值月付"
    ],
    "features": [
      "全节点纯 IPLC 物理专线，端到端专用隧道直连境外机房",
      "覆盖香港(20)、日本(10)、新加坡(10)、美国(10)、台湾(10)等 50+ 节点",
      "全 IPLC 专线 (港/台/新/日/美)，1000 Mbps 最大峰值带宽",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全节点纯 IPLC 物理专线，端到端专用隧道直连境外机房",
      "覆盖香港(20)、日本(10)、新加坡(10)、美国(10)、台湾(10)等 50+ 节点",
      "全 IPLC 专线 (港/台/新/日/美)，1000 Mbps 最大峰值带宽",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "超高峰期偶有轻微测速波动"
    ],
    "suitableFor": "移动手机党、iPad通勤刷剧、日常社交浏览",
    "peakSpeed": "640 Mbps",
    "latency": "42 ms",
    "stabilityRate": "99.95%",
    "couponCode": "firefly",
    "couponDesc": "firefly (专属推荐优惠码)",
    "buyUrl": "https://vip02.fireflyaff.com/#/?code=Fes6j9rn",
    "reviewUrl": "/reviews/firefly",
    "plans": [
      {
        "cycle": "年付",
        "name": "Firefly年付版",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00/月",
        "traffic": "60 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全节点 IPLC 物理专线",
          "不限速不限设备",
          "当月用完加 ¥15 重置流量"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "Firefly Lite (轻量入门)",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合日常网页浏览与轻度视频",
          "IPLC 专线不限速",
          "50+ 节点全覆盖"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "Firefly Plus (黄金进阶 · 销量冠军)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥45.00 / 月",
        "discountedPrice": "",
        "traffic": "300 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "高清影音与商务办公主力",
          "全流媒体与 AI 原生 IP 解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "Firefly Blaze (极速烈焰)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥85.00 / 月",
        "discountedPrice": "",
        "traffic": "600 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合 4K/8K 视频与多设备家庭",
          "不限速不限设备数"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "Firefly Nova (新星之顶 · 旗舰海量)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥150.00 / 月",
        "discountedPrice": "",
        "traffic": "1000 GB (1.0TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "团队协作与超大流量池",
          "全节点原生 IP 矩阵"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "Firefly不限时",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥100.00 / 一次性",
        "discountedPrice": "",
        "traffic": "100 GB (永久有效买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "永久 100GB 不过期",
          "用完为止",
          "出差备用神包"
        ]
      }
    ]
  },
  {
    "id": "civet",
    "name": "灵猫",
    "rank": 11,
    "score": 9.5,
    "badge": "机智灵敏・原生解锁",
    "categoryTag": "AI原生住宅",
    "tagline": "全套高端 IPLC 国际专线接入，节点覆盖亚太与欧美核心枢纽。提供超低门槛年付小包与周期订阅方案，不限制在线设备数量，家庭与团队共享优选。",
    "price": "¥25.00",
    "billingCycle": "/月起",
    "startQuota": "45GB/月起",
    "yearlyNote": "折合约 ¥7.08/月",
    "traffic": "45GB ~ 300GB /月 + 永久买断包",
    "lineType": "全 IPLC 国际专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "Surge"
    ],
    "tags": [
      "原生住宅IP",
      "风控极低",
      "AI专属",
      "灵动敏捷"
    ],
    "features": [
      "全 IPLC 专线 (港/台/新/日/美)，1000 Mbps 最大峰值带宽",
      "单节点最高下载 156.46 MB/s (1251.7 Mbps 满血千兆)",
      "全 IPLC 专线晚高峰不限速，所有节点统一 x1 倍率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IPLC 专线 (港/台/新/日/美)，1000 Mbps 最大峰值带宽",
      "单节点最高下载 156.46 MB/s (1251.7 Mbps 满血千兆)",
      "全 IPLC 专线晚高峰不限速，所有节点统一 x1 倍率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "大流量下载套餐单价稍高"
    ],
    "suitableFor": "ChatGPT重度写作者、跨境电商运营人员",
    "peakSpeed": "1251.7 Mbps",
    "latency": "36 ms",
    "stabilityRate": "99.95%",
    "couponCode": "lingmao",
    "couponDesc": "lingmao (专属优惠码)",
    "buyUrl": "https://vip02.civetaff.com/#/?code=kZlRw46w",
    "reviewUrl": "/reviews/civet",
    "plans": [
      {
        "cycle": "年付",
        "name": "灵猫·年付小包",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥85.00 / 年",
        "discountedPrice": "折合约 ¥7.08/月",
        "traffic": "45 GB / 月 (365天时长)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 专线",
          "不限速不限设备",
          "订单日自动重置流量或购加油包"
        ]
      },
      {
        "cycle": "年付",
        "name": "灵猫·年付Small",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥195.00 / 年",
        "discountedPrice": "折合约 ¥16.25/月",
        "traffic": "150 GB / 月 (365天时长)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "1000 Mbps 最大带宽",
          "原生 IP 解锁各大流媒体及 AI"
        ]
      },
      {
        "cycle": "年付",
        "name": "灵猫·年付Big",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥295.00 / 年",
        "discountedPrice": "折合约 ¥24.58/月",
        "traffic": "300 GB / 月 (365天时长)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "大流量豪华畅快",
          "全 IPLC 专线 1.0x 费率"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "灵猫·季付Small",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥65.00 / 季",
        "discountedPrice": "折合约 ¥21.67/月",
        "traffic": "150 GB / 月 (90天时长)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "灵活周期",
          "全 IPLC 专线",
          "原生 IP 解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "灵猫·季付Big",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥125.00 / 季",
        "discountedPrice": "折合约 ¥41.67/月",
        "traffic": "300 GB / 月 (90天时长)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "高阶影音办公",
          "1000 Mbps 峰值"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "灵猫·月付Small",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 月 (30天时长)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "月付尝鲜起步轻松",
          "全平台流媒体原生解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "灵猫·月付Big",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥45.00 / 月",
        "discountedPrice": "",
        "traffic": "300 GB / 月 (30天时长)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "月付大包随意畅享",
          "4K 视频秒开"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "灵猫·不限时Small",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥100.00 / 一次性",
        "discountedPrice": "",
        "traffic": "100 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "永久有效不过期用完为止",
          "重置享 9 折优惠"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "灵猫·不限时Big",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥350.00 / 一次性",
        "discountedPrice": "",
        "traffic": "500 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "超大不限时池",
          "全专线节点权限"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "灵猫·大流量定制",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥999.00 / 月起",
        "discountedPrice": "",
        "traffic": "按需定制 (大流量/独享专线)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "海外直播/跨境电商专线",
          "独享千兆上行带宽与原生公网静态 IP"
        ]
      }
    ]
  },
  {
    "id": "flashleap",
    "name": "闪跃 FlashLeap",
    "rank": 12,
    "score": 9.5,
    "badge": "雷霆闪跃・瞬间加载",
    "categoryTag": "高性价比",
    "tagline": "新一代低延迟高速专线网络，所有节点统一 1.0x 真实计费倍率。专线高优先级调度拒绝任何网络拥堵，全天候 4K/8K 秒开，主流流媒体深度原生解锁。",
    "price": "¥24.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00/月",
    "traffic": "60GB ~ 1TB /月 + 永久买断包",
    "lineType": "全 IPLC 专线网络",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash Verge",
      "Sing-box",
      "Shadowrocket"
    ],
    "tags": [
      "毫秒加载",
      "UDP优化",
      "视频秒开",
      "全网低阻"
    ],
    "features": [
      "全 IPLC 专线晚高峰不限速，所有节点统一 x1 倍率",
      "覆盖香港、日本、新加坡、美国、台湾等亚洲低延迟节点",
      "全 IPLC 专线节点速率 ×1 (绝不虚标扣量)",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IPLC 专线晚高峰不限速，所有节点统一 x1 倍率",
      "覆盖香港、日本、新加坡、美国、台湾等亚洲低延迟节点",
      "全 IPLC 专线节点速率 ×1 (绝不虚标扣量)",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "高峰期冷门节点偶尔限流"
    ],
    "suitableFor": "YouTube/Bilibili海外版观众、影音玩家",
    "peakSpeed": "730 Mbps",
    "latency": "33 ms",
    "stabilityRate": "99.95%",
    "couponCode": "shanyue",
    "couponDesc": "shanyue (专属优惠码)",
    "buyUrl": "https://vip02.flashleapaff.com/#/?code=FkCGEeaC",
    "reviewUrl": "/reviews/flashleap",
    "plans": [
      {
        "cycle": "年付",
        "name": "闪跃年付版",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00/月",
        "traffic": "60 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "轻度日常与备用首选",
          "统一 x1 倍率",
          "全 IPLC 专线"
        ]
      },
      {
        "cycle": "年付",
        "name": "闪跃年付版（高）",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥180.00 / 年",
        "discountedPrice": "折合约 ¥15.00/月",
        "traffic": "120 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "中重度首选充裕不焦虑",
          "视频办公两不误"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "闪动 (Flicker)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥24.00 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "月付随心开通",
          "亚太高速低延迟出口"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "飞跃 (Leap)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥44.00 / 月",
        "discountedPrice": "",
        "traffic": "300 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "4K/8K 视频拖动无缓冲",
          "秒开 ChatGPT/Claude"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "瞬移 (Teleport)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥84.00 / 月",
        "discountedPrice": "",
        "traffic": "600 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "大流量高清追剧与大文件下载",
          "多设备并发高速下载"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "旗舰海量 · 1TB 超大包",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥134.00 / 月",
        "discountedPrice": "",
        "traffic": "1000 GB (1TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "跨境电商、外贸团队、高吞吐科研"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "闪跃不限时版",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥150.00 / 一次性",
        "discountedPrice": "",
        "traffic": "100 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "长期有效不过期",
          "全量优质亚太核心专线"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "闪跃不限时版（高）",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥288.00 / 一次性",
        "discountedPrice": "",
        "traffic": "200 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "无时间限制的高品质防失联",
          "全节点统一 x1 倍率"
        ]
      }
    ]
  },
  {
    "id": "worryfree",
    "name": "无忧链接",
    "rank": 13,
    "score": 9.4,
    "badge": "省心无忧・长效在线",
    "categoryTag": "平价轻量",
    "tagline": "全链路 IPLC 物理专线架构，秒级网络响应。超低门槛 MINI 周期方案与永不过期一次性备用包无缝结合，全设备全客户端完美兼容，长效稳定不失联。",
    "price": "¥19.00",
    "billingCycle": "/月起",
    "startQuota": "40GB/月起",
    "yearlyNote": "折合约 ¥6.58/月",
    "traffic": "40GB ~ 1TB /月 + 永久买断包",
    "lineType": "全 IPLC 专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "省心无忧",
      "免折腾",
      "稳定保活",
      "新手福音"
    ],
    "features": [
      "全 IPLC 专线节点速率 ×1 (绝不虚标扣量)",
      "年付低至 ¥79/年 (折合 ¥6.58/月)",
      "全线采用旗舰级 IEPL/IPLC 国际物理专线，晚高峰 0 丢包稳定流畅",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IPLC 专线节点速率 ×1 (绝不虚标扣量)",
      "年付低至 ¥79/年 (折合 ¥6.58/月)",
      "全线采用旗舰级 IEPL/IPLC 国际物理专线，晚高峰 0 丢包稳定流畅",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "不支持定制高级路由脚本"
    ],
    "suitableFor": "不想折腾节点的普通网民、文科研究者",
    "peakSpeed": "620 Mbps",
    "latency": "45 ms",
    "stabilityRate": "99.95%",
    "couponCode": "wuyou666",
    "couponDesc": "wuyou666 (专属优惠码)",
    "buyUrl": "https://wep01.worryfreeaff.com/#/?code=56A0RTpU",
    "reviewUrl": "/reviews/worryfree",
    "plans": [
      {
        "cycle": "年付",
        "name": "MINI链接",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥79.00 / 年",
        "discountedPrice": "折合约 ¥6.58/月",
        "traffic": "40 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 专线",
          "1x 费率",
          "高可靠备用防失联"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "舒心链接",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥19.00 / 月",
        "discountedPrice": "",
        "traffic": "100 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "月付无压力",
          "晚高峰低延迟直连"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "省心链接",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥33.00 / 月",
        "discountedPrice": "",
        "traffic": "200 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "上班族与科研学生最佳口粮",
          "充裕不焦虑"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "随心链接",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥77.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "4K/8K 极致流畅",
          "多设备全天候在线"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "旗舰海量 · 1TB 超级大包",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥117.00 / 月",
        "discountedPrice": "",
        "traffic": "1000 GB (1TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "跨境电商、高并发下载首选"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "100G永久不限时 无忧链接",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥98.00 / 一次性",
        "discountedPrice": "",
        "traffic": "100 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "一次购买永久有效",
          "出差旅游纯备用"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "300G永久不限时 无忧链接",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥288.00 / 一次性",
        "discountedPrice": "",
        "traffic": "300 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "大容量买断首选",
          "全专线节点权限"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "无忧专业级定制套餐",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥680.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 月 独享专属流量",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "独享原生 IP 杜绝风控",
          "独立带宽保障与专属部署"
        ]
      }
    ]
  },
  {
    "id": "liulian",
    "name": "榴莲云",
    "rank": 14,
    "score": 9.4,
    "badge": "香浓大带宽",
    "categoryTag": "高性价比",
    "tagline": "专注打造高性价比旗舰级 IEPL/IPLC 跨境国际专线，全节点统一 1.0x 真实计费倍率。专线峰值最高达 2.5Gbps，晚高峰超低延迟绝不卡顿；全系列支持多周期阶梯优惠与防腐不限时买断包，深度解锁全平台 4K/8K 流媒体与主流 AI 工具。",
    "price": "¥15.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00 /月",
    "traffic": "50GB ~ 800GB /月 + 永久买断包",
    "lineType": "全 IPLC/IEPL 国际物理专线 / BGP 高速调度",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket"
    ],
    "tags": [
      "大流量好物",
      "超高吞吐",
      "实惠耐用",
      "家庭共享"
    ],
    "features": [
      "全线采用旗舰级 IEPL/IPLC 国际物理专线，晚高峰 0 丢包稳定流畅",
      "全节点 1x 真实倍率扣费，单节点峰值最高 2.5Gbps，全程不限速",
      "全线搭载新一代旗舰级 IEPL/IPLC 物理内网专线，晚高峰 0 丢包保障",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全线采用旗舰级 IEPL/IPLC 国际物理专线，晚高峰 0 丢包稳定流畅",
      "全节点 1x 真实倍率扣费，单节点峰值最高 2.5Gbps，全程不限速",
      "全线搭载新一代旗舰级 IEPL/IPLC 物理内网专线，晚高峰 0 丢包保障",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "晚高峰个别节点延迟稍高5-10ms"
    ],
    "suitableFor": "合租室友、影视收藏下载、高清视频重度用户",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "37 ms",
    "stabilityRate": "99.98%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://a01vipaff.liulianyunaff.com/#/?code=UrJ7H4Si",
    "reviewUrl": "/reviews/liulian",
    "plans": [
      {
        "cycle": "年付",
        "name": "金枕小包 · 年付特惠 ⚡",
        "sub": "活动套餐：适合小流量/新手用户，年付折算约 8 元/月。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00 /月",
        "traffic": "60GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "活动套餐：适合小流量/新手用户，年付折算约 8 元/月",
          "流量政策：60GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "榴莲皮 🍃",
        "sub": "活动套餐：榴莲皮 · 轻量入门套餐，适合日常浏览、社交通讯与轻量使用。",
        "price": "¥15.00 / 月",
        "discountedPrice": "年付 8 折 ¥144/年 (折合 ¥12/月)",
        "traffic": "50GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "活动套餐：榴莲皮 · 轻量入门套餐",
          "每月 50GB 流量，适合日常浏览、社交通讯与轻量使用",
          "月付：15 元/月",
          "季付：40.50 元/季，享 9 折优惠"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年 / 两年",
        "name": "小榴莲 🍈",
        "sub": "日常之选：兼顾日常需求与预算，网页浏览、社交与视频主力。",
        "price": "¥24.00 / 月",
        "discountedPrice": "两年付 7 折折合 ¥16.80/月",
        "traffic": "140GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "日常之选：兼顾日常需求与预算",
          "流量额度：每月 140G，适合网页浏览、社交沟通与日常观看视频",
          "套餐价值：比轻享包每月多花 12 元，多享 80G 充足流量",
          "月付价格：24 元/月"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年 / 两年",
        "name": "好榴莲 ✨",
        "sub": "进阶之选：追剧、学习、下载，使用更从容。",
        "price": "¥40.00 / 月",
        "discountedPrice": "两年付 7 折折合 ¥28.00/月",
        "traffic": "260GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "进阶之选：追剧、学习、下载，使用更从容",
          "流量额度：每月 260G，适合经常观看视频、学习网课与下载文件",
          "套餐价值：比轻享包每月多花 16 元，多享 120G 流量",
          "月付价格：40 元/月"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年 / 两年",
        "name": "猫山王 👑",
        "sub": "重度之选：高频使用更从容，工作娱乐都有余量。",
        "price": "¥60.00 / 月",
        "discountedPrice": "两年付 7 折折合 ¥42.00/月",
        "traffic": "420GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "重度之选：高频使用更从容，工作娱乐都有余量",
          "流量额度：每月 420G，适合频繁观看视频与下载文件的用户",
          "套餐价值：以轻享包 2.5 倍的月付价格，享受 3 倍充裕流量",
          "月付价格：60 元/月"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年 / 两年",
        "name": "大黑刺 🖤",
        "sub": "海量之选：大流量，更实惠，为高用量而选。",
        "price": "¥100.00 / 月",
        "discountedPrice": "两年付 7 折折合 ¥70.00/月",
        "traffic": "800GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "海量之选：大流量，更实惠，为高用量而选",
          "流量额度：每月 800G，适合大量观看超清视频与高频下载大型文件",
          "套餐价值：按月付计算每 100G 约 13.33 元，为各档周期套餐中单价最低",
          "月付价格：100 元/月"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "防腐小榴莲 🛡️",
        "sub": "活动套餐：学生党与轻度用户之选，一次性买断，永不过期。",
        "price": "¥99.00 / 终身",
        "discountedPrice": "",
        "traffic": "100GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "防腐小榴莲 | 学生党与轻度用户之选",
          "一次性付费 ¥99，畅享 100GB 高速专线流量",
          "不限使用时间，用完为止，无需按月续费",
          "按实际使用扣减流量，非按月重置，按需使用更省心"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "防腐大榴莲 🏰",
        "sub": "活动套餐：大流量，随心用，一次性买断，永不过期。",
        "price": "¥498.00 / 终身",
        "discountedPrice": "",
        "traffic": "500GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "防腐大榴莲 | 大流量，随心用",
          "一次性付费 ¥498，包含 500GB 旗舰专线流量",
          "不限使用时间，用完为止，无需按月续费",
          "告别月末清零焦虑，不用为了赶在月底用完流量而烦恼"
        ]
      }
    ]
  },
  {
    "id": "dalao-vip",
    "name": "大佬云 (VIP专线)",
    "rank": 15,
    "score": 9.4,
    "badge": "VIP定制尊享",
    "categoryTag": "专线旗舰",
    "tagline": "全线搭载旗舰级 IEPL/IPLC 国际专线与优质 BGP 智能调度，单节点峰值最高 2.5Gbps。全节点 1x 真实计费倍率，晚高峰绝不限速；深度解锁 ChatGPT、Claude 及全平台流媒体，多端设备畅连无阻。",
    "price": "¥19.99",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00 /月",
    "traffic": "60GB ~ 600GB /月 + 永久买断包",
    "lineType": "全 IPLC/IEPL 国际专线 / BGP 智能调度",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Surge",
      "Loon"
    ],
    "tags": [
      "VIP通道",
      "高优先级",
      "企业品质",
      "极客定制"
    ],
    "features": [
      "全线搭载旗舰级 IEPL/IPLC 物理专线，超低延迟与 99.9% 高可用 SLA",
      "全节点统一 x1 真实倍率扣费，晚高峰大带宽绝不限速",
      "千兆 BGP 多线融合调度 + IEPL/IPLC 跨境专线",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全线搭载旗舰级 IEPL/IPLC 物理专线，超低延迟与 99.9% 高可用 SLA",
      "全节点统一 x1 真实倍率扣费，晚高峰大带宽绝不限速",
      "千兆 BGP 多线融合调度 + IEPL/IPLC 跨境专线",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "资费偏中高端"
    ],
    "suitableFor": "企业高管、跨境高频业务、追求最高服务标准的用户",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "20 ms",
    "stabilityRate": "99.98%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://a01vipaff.dalaoyunaff.com/#/?code=05KusH3b",
    "reviewUrl": "/reviews/dalao-vip",
    "plans": [
      {
        "cycle": "年付",
        "name": "年付活动包 ⚡",
        "sub": "适用人群：适合小流量/新手用户，年付折算约 8 元/月。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00 /月",
        "traffic": "60GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "适用人群：适合小流量/新手用户，年付折算约 8 元/月",
          "流量政策：60GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "财云 · 福利版 💰",
        "sub": "每天不到 ¥0.65，初入云端，自由畅连全网！",
        "price": "¥19.99 / 月",
        "discountedPrice": "",
        "traffic": "100GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天不到 ¥0.65，初入云端，自由畅连全网！",
          "每月 100GB 充足流量，全节点 x1 倍率扣费，晚高峰绝不限速",
          "全线搭载旗舰级 IEPL 专线，超低延迟，99.9% 高可用 SLA 保证",
          "覆盖香港、台湾、日本、韩国、美国、新加坡等多国优质节点"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "初云 · 进阶版 ☁️",
        "sub": "每天不到 ¥0.8，初入云端，自有天地。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "150GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天不到 ¥0.8，初入云端，自有天地",
          "每月 150GB，适合日常浏览、AI 助手与影音娱乐",
          "IEPL 专线直连体验，极低延迟，智能优选路由",
          "全节点 x1 倍率，晚高峰不限速"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "凌云 · 基础版 🚀",
        "sub": "每天约 ¥1.43，让每一次流淌，融入你的生活节奏。",
        "price": "¥43.00 / 月",
        "discountedPrice": "",
        "traffic": "300GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天约 ¥1.43，让每一次流淌，融入你的生活节奏",
          "月度 300GB：兼顾日常使用、职场工作、学习与休闲",
          "全线 IPLC 专线：智能路由，跨区访问更顺畅",
          "全节点 x1 倍率，晚高峰不限速"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "御云 · 高级版 👑",
        "sub": "每天约 ¥2.43，以高阶之势，承载更广阔的网络探索。",
        "price": "¥73.00 / 月",
        "discountedPrice": "",
        "traffic": "600GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "每天约 ¥2.43，以高阶之势，承载更广阔的网络探索",
          "月度 600GB：面向高强度使用，为极致体验的你而设",
          "极速专线：全线 IPLC 专线，单节点峰值带宽可达 2.5Gbps",
          "智能路由：全节点 x1 倍率，晚高峰不限速"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "闲云 · 随心包 🪩",
        "sub": "随心连接，让流量跟随你的节奏，永不过期。",
        "price": "¥268.00 / 终身",
        "discountedPrice": "",
        "traffic": "200GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "随心连接，让流量跟随你的节奏，无需按月续费",
          "适用人群：适合偶尔使用、轻量浏览与备用连接的用户",
          "套餐价格：一次性付款 268 元，永不过期",
          "流量额度：总计 200GB，按实际使用扣减，非每月额度"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "悠云 · 长享包 🌊",
        "sub": "悠然上云，为未来的每一次连接留足余量。",
        "price": "¥498.00 / 终身",
        "discountedPrice": "",
        "traffic": "500GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "悠然上云，为未来的每一次连接留足余量",
          "适用人群：适合长期低频使用、希望一次购买更多流量的用户",
          "套餐价格：一次性付款 498 元，无需按月续费",
          "流量额度：总计 500GB，按实际使用扣减，非每月额度"
        ]
      }
    ]
  },
  {
    "id": "shandianshu",
    "name": "闪电鼠",
    "rank": 16,
    "score": 9.4,
    "badge": "灵动飞速・平价首选",
    "categoryTag": "平价轻量",
    "tagline": "全线搭载新一代旗舰级 IEPL/IPLC 跨境物理专线与智能多线调度，峰值带宽最高可达 2.5Gbps。全节点 1x 真实计费倍率，晚高峰自动智能调度绝不拥堵；原生双 ISP 纯净出口深度解锁 ChatGPT、Claude 及 Netflix、Disney+ 4K/8K 流媒体，多端并发稳定不掉线。",
    "price": "¥19.88",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00 /月",
    "traffic": "60GB ~ 500GB /月 + 永久买断包",
    "lineType": "全 IPLC/IEPL 国际专线 / 原生双 ISP 出口",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "tags": [
      "平价神器",
      "轻量入门",
      "随身备用",
      "学生优惠"
    ],
    "features": [
      "全线搭载新一代旗舰级 IEPL/IPLC 物理内网专线，晚高峰 0 丢包保障",
      "全节点统一 1x 真实倍率扣费，单节点峰值最高 2.5Gbps，全程不限速",
      "全球优质原生/高速节点覆盖，全节点统一 1.0x 真实计费倍率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全线搭载新一代旗舰级 IEPL/IPLC 物理内网专线，晚高峰 0 丢包保障",
      "全节点统一 1x 真实倍率扣费，单节点峰值最高 2.5Gbps，全程不限速",
      "全球优质原生/高速节点覆盖，全节点统一 1.0x 真实计费倍率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "高峰期4K下载速度略逊于百元专线"
    ],
    "suitableFor": "学生、轻度查资料与查文献人群",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "48 ms",
    "stabilityRate": "99.98%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://a01vipaff.shandianshuaff.com/#/?code=aaIZUXfY",
    "reviewUrl": "/reviews/shandianshu",
    "plans": [
      {
        "cycle": "年付",
        "name": "限时钜惠小包 ⚡",
        "sub": "适用人群：适合小流量/新手用户，年付折算约 8 元/月。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00 /月",
        "traffic": "60GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "适用人群：适合小流量/新手用户，年付折算约 8 元/月",
          "流量政策：60GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "闪电鼠 · 性价比版 💰",
        "sub": "日均低至 ¥0.66，体验专线级丝滑连通。",
        "price": "¥19.88 / 月",
        "discountedPrice": "",
        "traffic": "100GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "日均低至 ¥0.66，体验专线级丝滑连通",
          "每月 100GB 充足流量，支持多设备并发在线",
          "优选低延迟节点，晚高峰自动智能调度，稳定不掉线",
          "全节点解锁 ChatGPT / Claude 等 AI 助手及 Netflix 4K"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "闪电鼠 · 进阶版 ☁️",
        "sub": "每天不到 ¥0.84，轻松连接全球精彩。",
        "price": "¥24.88 / 月",
        "discountedPrice": "",
        "traffic": "150GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天不到 ¥0.84，轻松连接全球精彩",
          "每月 150GB，适合日常浏览、AI 助手与影音娱乐",
          "IEPL 专线直连体验，低延迟，智能优选路由",
          "全节点 x1 倍率，晚高峰不限速"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "闪电鼠 · 疾速版 🚀",
        "sub": "每天约 ¥1.33，让全球影音与 AI 随时在线。",
        "price": "¥38.88 / 月",
        "discountedPrice": "",
        "traffic": "250GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每天约 ¥1.33，让全球影音与 AI 随时在线",
          "每月 250GB，兼顾追剧娱乐、学习办公与多端使用",
          "全线 IEPL 专线，智能路由，跨区访问更顺畅",
          "全节点 x1 倍率，晚高峰不限速"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "闪电鼠 · 雷霆版 ⚡",
        "sub": "每天约 ¥2.33，大流量畅享全球数字生活。",
        "price": "¥68.88 / 月",
        "discountedPrice": "",
        "traffic": "500GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "每天约 ¥2.33，大流量畅享全球数字生活",
          "每月 500GB，适合高频影音、跨区办公与多设备使用",
          "全线 IEPL 专线，单节点峰值带宽可达 2.5Gbps",
          "智能优选路由，全节点 x1 倍率，晚高峰不限速"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "闪电鼠 · 破风版 🌪️",
        "sub": "220GB 高速专线流量，晚高峰自动智能调度，永不过期。",
        "price": "¥198.00 / 终身",
        "discountedPrice": "",
        "traffic": "220GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "220GB 高速专线流量，一次性买断永不过期",
          "晚高峰自动智能调度，超低延迟抗网络抖动",
          "全节点解锁 ChatGPT / Claude 等主流 AI 与 4K/8K 流媒体",
          "支持多设备并发在线，适合中度科研办公与高清影音体验"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "闪电鼠 · 擎天版 🛡️",
        "sub": "688GB 旗舰充沛流量，尊享原生双 ISP 纯净出口，企业级专线。",
        "price": "¥468.00 / 终身",
        "discountedPrice": "",
        "traffic": "688GB (买断)",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "688GB 旗舰充沛流量，尊享原生双 ISP 纯净出口",
          "多端并发无阻碍，完美适配出海电商、跨境办公与全天候 AI 编程",
          "企业级 IEPL 内网专线直连，晚高峰零丢包保障",
          "一次性付费买断，不限使用时间，用完为止"
        ]
      }
    ]
  },
  {
    "id": "huanqiuti",
    "name": "环球梯",
    "rank": 17,
    "score": 9.3,
    "badge": "环球节点覆盖",
    "categoryTag": "高性价比",
    "tagline": "专为全球跨境连接打造的综合专线服务商，搭载全球优质原生与高速骨干节点。全节点统一 1.0x 真实倍率，晚高峰大带宽保障，4K/8K 视频秒开不卡顿；全系列覆盖学生优惠、日常畅享、极客大容量及不限时买断备用包，深度解锁主流 AI 与全平台流媒体。",
    "price": "¥19.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00 /月",
    "traffic": "60GB ~ 1.2TB /月 + 永久买断包",
    "lineType": "全 IPLC/IEPL 国际专线 / 全球多线智能接入",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "Surge"
    ],
    "tags": [
      "全球多国",
      "海淘跨区",
      "节点丰富",
      "稳定兼备"
    ],
    "features": [
      "全球优质原生/高速节点覆盖，全节点统一 1.0x 真实计费倍率",
      "晚高峰大带宽保障，超低延迟抗抖动，4K/8K 视频秒开不卡顿",
      "全线搭载旗舰级 IPLC 国际专线，BGP 三网智能调度优化与 VLESS 协议",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全球优质原生/高速节点覆盖，全节点统一 1.0x 真实计费倍率",
      "晚高峰大带宽保障，超低延迟抗抖动，4K/8K 视频秒开不卡顿",
      "全线搭载旗舰级 IPLC 国际专线，BGP 三网智能调度优化与 VLESS 协议",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "部分远距离节点物理延迟正常偏高"
    ],
    "suitableFor": "海淘代购、Steam跨区玩家、跨国数字游民",
    "peakSpeed": "670 Mbps",
    "latency": "52 ms",
    "stabilityRate": "99.98%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://a01vipaff.huanqiutiaff.com/#/?code=1TJh9vmR",
    "reviewUrl": "/reviews/huanqiuti",
    "plans": [
      {
        "cycle": "年付",
        "name": "环球学生套餐 🎓",
        "sub": "适合轻度使用与个人用户，年付折算约 8 元/月。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00 /月",
        "traffic": "60GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合轻度使用与个人用户，年付折算约 8 元/月",
          "每月 60GB 高速流量（全节点 1x 倍率，晚高峰不限速）",
          "流量每月自动重置",
          "解锁常用流媒体与 AI 服务（ChatGPT、Netflix 等）"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "环球轻享 🍃",
        "sub": "适合轻度使用与个人用户，日常社交与网页浏览。",
        "price": "¥19.00 / 月",
        "discountedPrice": "",
        "traffic": "110GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合轻度使用与个人用户",
          "每月 110GB~120GB 高速流量，满足日常工作与社交",
          "流量每月自动重置，全程不限速",
          "解锁常用流媒体与主流 AI 服务"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "环球畅享 🚀",
        "sub": "全球优质原生/高速节点覆盖，畅联全球网络。",
        "price": "¥29.00 / 月",
        "discountedPrice": "",
        "traffic": "200GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全球优质原生/高速节点覆盖，畅联全球网络",
          "晚高峰大带宽保障，4K/8K 视频秒开不卡顿",
          "完美解锁主流流媒体平台及 AI 常用工具",
          "支持多设备并发在线，全平台客户端通用支持"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "环球畅游 🌊",
        "sub": "适合日常高清视频、办公及多设备使用。",
        "price": "¥39.00 / 月",
        "discountedPrice": "",
        "traffic": "280GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合日常高清视频、办公及多设备使用",
          "每月 280GB 高速流量，充沛不焦虑",
          "流量每月自动重置",
          "优质线路与高峰期专属调度优化"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "环球进阶 ⚡",
        "sub": "中度高频用户进阶优选，4K 流媒体与高频下载无忧。",
        "price": "¥52.00 / 月",
        "discountedPrice": "",
        "traffic": "420GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "中度高频用户进阶优选，4K 流媒体与高频下载无忧",
          "专为影视爱好者与多任务日常办公打造的黄金容量套餐",
          "每月 420 GB 充沛流量，全天候晚高峰抗丢包保障",
          "流畅支持 4K/8K 超高清流媒体播放"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "环球尊享 👑",
        "sub": "适合重度用户、家庭共享和高流量需求。",
        "price": "¥69.00 / 月",
        "discountedPrice": "",
        "traffic": "600GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合重度用户、家庭共享和高流量需求",
          "每月 600GB 高速流量，满足全家或工作室日常调用",
          "流量每月自动重置",
          "接入高优先级精品骨干线路，高峰期稳定性大幅优化"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "环球极客 💻",
        "sub": "大户重度专享，多端并发与大流量传输旗舰之选。",
        "price": "¥128.00 / 月",
        "discountedPrice": "",
        "traffic": "1.2TB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "大户重度专享，多端并发与大流量传输旗舰之选",
          "专为重度网络玩家、家庭多端共享及跨国协作工作室定制",
          "每月 1200 GB (1.2TB) 极客级超大容量",
          "提供最高优先级接入通道与卓越网络吞吐表现"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "环球备用包 🛡️",
        "sub": "永不过期应急包，关键时刻稳定备灾。",
        "price": "¥39.00 / 终身",
        "discountedPrice": "",
        "traffic": "30GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "永不过期应急包，关键时刻稳定备灾",
          "不受自然月限制的永久有效流量包，无需按月续费",
          "提供 30 GB 弹性备用配额，按实际使用扣除",
          "适合商务出差应急、突发断线备灾或轻度低频使用"
        ]
      },
      {
        "cycle": "一次性买断 · 长期有效",
        "name": "环球随行包 🧳",
        "sub": "一次购买按量使用，流量不按月清零，长效有效。",
        "price": "¥99.00 / 终身",
        "discountedPrice": "",
        "traffic": "80GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "一次购买，按量使用，不属于月付订阅套餐",
          "套餐流量不会按月清零，长期有效，用完为止",
          "80GB 独立配额，按实际使用扣减，告别月末清零压力",
          "适合商旅出差、海外差旅及日常轻度备用"
        ]
      },
      {
        "cycle": "一次性买断 · 长期有效",
        "name": "环球灵活包 🎯",
        "sub": "一次购买按量使用，400GB 大容量，不按月清零。",
        "price": "¥299.00 / 终身",
        "discountedPrice": "",
        "traffic": "400GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "一次购买，按量使用，不属于月付订阅套餐",
          "套餐流量不会按月清零，长效有效，随用随扣",
          "400GB 充沛按量买断流量，无需按月续费",
          "晚高峰智能专线调度，超低延迟抗抖动"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "环球海量包 🌐",
        "sub": "长效不限时大容量储备，随用随扣无续费压力。",
        "price": "¥688.00 / 终身",
        "discountedPrice": "",
        "traffic": "1.0TB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "长效不限时大容量储备，随用随扣无续费压力",
          "自由支配的超大容量不限时储备包，无固定到期周期",
          "1000 GB (1.0TB) 充裕专线流量，用完为止",
          "特别适合长期按需调用的开发者、工作室与大流量用户"
        ]
      }
    ]
  },
  {
    "id": "shenxing",
    "name": "神行加速",
    "rank": 18,
    "score": 9.3,
    "badge": "神行千里・疾速无阻",
    "categoryTag": "低延迟电竞",
    "tagline": "全线搭载旗舰级 IPLC 国际物理专线与 BGP 三网智能优化，全面支持先进 VLESS 协议。单节点峰值最高可达 2.5Gbps，全节点统一 1.0x 真实计费倍率，晚高峰超低延迟绝不限速；原生 IP 纯净解锁 4K/HDR 影视与主流 AI 助手，多设备并发自由在线。",
    "price": "¥19.88",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00 /月",
    "traffic": "60GB ~ 666GB /月 + 永久买断包",
    "lineType": "全 IPLC 物理专线 / BGP 三网优化 / VLESS 协议",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket"
    ],
    "tags": [
      "协议优化",
      "低抖动",
      "快速响应",
      "防丢包"
    ],
    "features": [
      "全线搭载旗舰级 IPLC 国际专线，BGP 三网智能调度优化与 VLESS 协议",
      "单节点峰值带宽最高可达 2.5Gbps，全节点 1x 真实倍率扣费，晚高峰绝不限速",
      "搭载优质 BGP + IEPL 国际高速专线与全光纤互联架构，晚高峰流畅不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全线搭载旗舰级 IPLC 国际专线，BGP 三网智能调度优化与 VLESS 协议",
      "单节点峰值带宽最高可达 2.5Gbps，全节点 1x 真实倍率扣费，晚高峰绝不限速",
      "搭载优质 BGP + IEPL 国际高速专线与全光纤互联架构，晚高峰流畅不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "部分小众老旧客户端需升级支持新协议"
    ],
    "suitableFor": "经常出差、酒店弱网 Wi-Fi 使用者",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "32 ms",
    "stabilityRate": "99.98%",
    "couponCode": "sx0077",
    "couponDesc": "专属优惠码 sx0077 享首单 7 折特惠",
    "buyUrl": "https://a01vipaff.shenxingaff.com/#/?code=eLqnwBCM",
    "reviewUrl": "/reviews/shenxing",
    "plans": [
      {
        "cycle": "年付",
        "name": "神行 · 年付特惠版 ⚡",
        "sub": "适用人群：适合小流量/新手用户，年付折算约 8 元/月，不参与 7 折优惠。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00 /月",
        "traffic": "60GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "适用人群：适合小流量/新手用户，年付折算约 8 元/月（不参与 7 折优惠）",
          "流量政策：60GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每 30 天自动刷新流量",
          "网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "神行 · 性价比包 💰",
        "sub": "优惠政策：神行优惠码 (sx0077) 享首单 7 折优惠。",
        "price": "¥19.88 / 月",
        "discountedPrice": "7折券后 ¥13.92/月",
        "traffic": "100GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "优惠政策：输入优惠码 sx0077 享首单 7 折优惠",
          "适用人群：适合查阅文献、社交通讯、每日主力翻墙、高画质看剧 (4K/HDR)",
          "流量政策：100GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每月自动重置"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "神行 · 基础包 ☁️",
        "sub": "优惠政策：神行优惠码 (sx0077) 享首单 7 折优惠。",
        "price": "¥24.88 / 月",
        "discountedPrice": "7折券后 ¥17.42/月",
        "traffic": "150GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "优惠政策：输入优惠码 sx0077 享首单 7 折优惠",
          "适用人群：适合查阅文献、社交通讯、每日主力翻墙、高画质看剧 (4K/HDR)",
          "流量政策：150GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每月自动重置"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "神行 · 进阶包 🚀",
        "sub": "优惠政策：神行优惠码 (sx0077) 享首单 7 折优惠。",
        "price": "¥38.88 / 月",
        "discountedPrice": "7折券后 ¥27.22/月",
        "traffic": "300GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "优惠政策：输入优惠码 sx0077 享首单 7 折优惠",
          "适用人群：适合大流量下载、多设备软路由分流与高清影视狂揽",
          "流量政策：300GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每月自动重置"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "神行 · 尊享包 👑",
        "sub": "优惠政策：神行优惠码 (sx0077) 享首单 7 折优惠。",
        "price": "¥68.88 / 月",
        "discountedPrice": "7折券后 ¥48.22/月",
        "traffic": "666GB / 月",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "优惠政策：输入优惠码 sx0077 享首单 7 折优惠",
          "适用人群：适合大流量下载、多设备软路由分流、大量下载、工作室等",
          "流量政策：666GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "刷新规则：购买日起算，每月自动重置"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "神行 · 不限时小包 🛡️",
        "sub": "一次购买，流量不限使用期限，适合不需要固定月度流量的用户。",
        "price": "¥99.00 / 终身",
        "discountedPrice": "",
        "traffic": "100GB (买断)",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "一次购买，流量不限使用期限，适合不需要固定月度流量的用户",
          "100GB 不限时按量流量，用完即止，无需按月续费",
          "按实际使用扣减流量，剩余额度永久保留",
          "全节点统一 1.0x 真实倍率扣费，晚高峰不限速"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "神行 · 不限时大包 🌐",
        "sub": "一次购买，流量不限使用期限，适合不需要固定月度流量的用户。",
        "price": "¥298.00 / 终身",
        "discountedPrice": "",
        "traffic": "333GB (买断)",
        "speed": "单节点峰值最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "一次购买，流量不限使用期限，适合不需要固定月度流量的用户",
          "333GB 充沛专线储备流量，永不过期，用完即止",
          "按实际使用扣减流量，无固定到期周期，告别清零烦恼",
          "全线 IPLC 专线直连，单节点峰值最高 2.5Gbps"
        ]
      }
    ]
  },
  {
    "id": "yunjiexian",
    "name": "云界线",
    "rank": 19,
    "score": 9.3,
    "badge": "打破边界・云游四海",
    "categoryTag": "平价轻量",
    "tagline": "全线搭载旗舰级 BGP 三网融合入口与 IEPL 国际高速专线，全节点统一 1.0x 真实计费倍率。专线大带宽保障晚高峰超低延迟、稳定不降速；覆盖从轻量日常、跨国办公、高频生产力到多档不限时买断储备包，深度解锁主流 AI 与全平台 4K/8K 流媒体。",
    "price": "¥19.88",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00 /月",
    "traffic": "60GB ~ 520GB /月 + 永久买断包",
    "lineType": "BGP 入口 + IEPL 高速专线 / 全光纤互联",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "打破限制",
      "稳定长跑",
      "高性价比",
      "日常首选"
    ],
    "features": [
      "搭载优质 BGP + IEPL 国际高速专线与全光纤互联架构，晚高峰流畅不限速",
      "全节点统一 1.0x 真实倍率扣费，全天候保障充足带宽冗余",
      "IPLC 高端线路，全程不限速，所有节点 1 倍率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "搭载优质 BGP + IEPL 国际高速专线与全光纤互联架构，晚高峰流畅不限速",
      "全节点统一 1.0x 真实倍率扣费，全天候保障充足带宽冗余",
      "IPLC 高端线路，全程不限速，所有节点 1 倍率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "暂未提供定制化企业独立出口"
    ],
    "suitableFor": "日常社媒使用、科研文献搜索、日常外网浏览",
    "peakSpeed": "650 Mbps",
    "latency": "44 ms",
    "stabilityRate": "99.98%",
    "couponCode": "yjx888",
    "couponDesc": "专属优惠码 yjx888 享首单 7 折专享折扣",
    "buyUrl": "https://a01vipaff.yunjiexianaff.com/#/?code=WVSnJ3V6",
    "reviewUrl": "/reviews/yunjiexian",
    "plans": [
      {
        "cycle": "年付",
        "name": "云界线 · 年付特惠版 ⚡",
        "sub": "轻度网络用户首选，日常网页浏览、社交沟通与轻量办公。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00 /月",
        "traffic": "60GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：轻度网络用户，日常网页浏览、社交沟通与轻量办公",
          "流量政策：60GB/月高速流量，流量每月自动重置",
          "资费方案：超值年付仅需 96.00 元（折合每月仅 8 元）",
          "服务保障：全节点接入，晚高峰稳定不降速"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "云界线 · 性价比包 💰",
        "sub": "输入优惠码【yjx888】享 7 折专享折扣！首单月付仅需 ¥13.92。",
        "price": "¥19.88 / 月",
        "discountedPrice": "7折券后 ¥13.92/月",
        "traffic": "100GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "输入优惠码【yjx888】享 7 折专享折扣！首单月付仅需 ¥13.92",
          "适用人群：适合查阅文献、社交通讯、主力翻墙、画质看剧 (4K/HDR)",
          "流量政策：100GB/月高速流量（全节点 x1 倍率，晚高峰不限速）",
          "重置规则：流量按月自动重置"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "云界线 · 基础包 ☁️",
        "sub": "输入优惠码【yjx888】享 7 折优惠！首单月付仅需 ¥17.42。",
        "price": "¥24.88 / 月",
        "discountedPrice": "7折券后 ¥17.42/月",
        "traffic": "150GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "输入优惠码【yjx888】享 7 折优惠！首单月付仅需 ¥17.42",
          "适用人群：日常重度浏览、外贸办公、多设备主力使用",
          "流量政策：150GB/月高速纯专线流量（节点全倍率 1.0）",
          "流媒体解锁：支持 Netflix、Disney+、YouTube 4K 及主流 AI 工具"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "云界线 · 进阶包 🚀",
        "sub": "输入优惠码【yjx888】立享 7 折！首单月付仅需 ¥27.22。",
        "price": "¥38.88 / 月",
        "discountedPrice": "7折券后 ¥27.22/月",
        "traffic": "300GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "输入优惠码【yjx888】立享 7 折！首单月付仅需 ¥27.22",
          "适用人群：大流量用户、跨国远程办公、极速下载与高码率串流",
          "流量政策：300GB/月顶级专线流量，全天候保障带宽冗余",
          "重置规则：流量按月自动重置"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "云界线 · 旗舰包 👑",
        "sub": "输入优惠码【yjx888】享 7 折专享折扣！首单月付仅需 ¥48.22。",
        "price": "¥68.88 / 月",
        "discountedPrice": "7折券后 ¥48.22/月",
        "traffic": "520GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "输入优惠码【yjx888】享 7 折专享折扣！首单月付仅需 ¥48.22",
          "适用人群：适合 AI 高频生产力 (ChatGPT/Claude)、8K/4K 影视发烧友",
          "线路保障：BGP + IEPL 高速专线，全节点解锁主流流媒体与 AI 工具",
          "流量政策：520GB/月充沛专线配额，全天候带宽充足"
        ]
      },
      {
        "cycle": "一次性买断 · 长期有效",
        "name": "云界线 · 50G 不限时包 🍃",
        "sub": "轻度低频用户、备用应急网络、临时出差或 AI 工具日常查询。",
        "price": "¥48.88 / 终身",
        "discountedPrice": "",
        "traffic": "50GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：轻度低频用户、备用应急网络、临时出差或 AI 工具日常查询",
          "流量政策：50GB 高速专线流量，全节点 x1 倍率无限制",
          "有效期限：不限到期时间，流量用完即止（长期有效）",
          "按实际使用扣减流量，告别按月续费压力"
        ]
      },
      {
        "cycle": "一次性买断 · 长期有效",
        "name": "云界线 · 100G 不限时包 🛡️",
        "sub": "日常网页浏览、社交与 AI 轻办公用户、主力套餐防断连补充。",
        "price": "¥98.88 / 终身",
        "discountedPrice": "",
        "traffic": "100GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：日常网页浏览、社交与 AI 轻办公用户、主力套餐防断连补充",
          "流量政策：100GB 高速专线流量，全节点 x1 倍率，全天候极低延迟",
          "有效期限：不限到期时间，无月底清零焦虑，用完即止",
          "无需按月续费，剩余流量永久保留"
        ]
      },
      {
        "cycle": "一次性买断 · 长期有效",
        "name": "云界线 · 200G 一次性包 🧳",
        "sub": "轻度低频用户、备用网络、短期出差或主力套餐防断连。",
        "price": "¥199.00 / 终身",
        "discountedPrice": "",
        "traffic": "200GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：轻度低频用户、备用网络、短期出差或主力套餐防断连",
          "流量政策：200GB 高速专线流量，全节点 x1 倍率",
          "有效期限：不限到期时间，流量用完即止（长期有效）",
          "网络保障：全光纤专线互联，晚高峰流畅不限速，支持 4K/HDR 串流"
        ]
      },
      {
        "cycle": "一次性买断 · 永久有效",
        "name": "云界线 · 尊享不限时包 🌐",
        "sub": "大流量需求、跨国办公、流媒体深度玩家、无周期续费压力。",
        "price": "¥499.00 / 终身",
        "discountedPrice": "",
        "traffic": "500GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适用人群：大流量需求、跨国办公、流媒体深度玩家、无周期续费压力",
          "流量政策：500GB 顶级专线流量，高速通道保障",
          "有效期限：永久有效无到期日限制，用完为止",
          "专属优势：极速低延迟，全天候保障带宽冗余，支持多设备并发"
        ]
      }
    ]
  },
  {
    "id": "kuajie",
    "name": "跨界云",
    "rank": 20,
    "score": 9.3,
    "badge": "跨境贸易首选",
    "categoryTag": "AI原生住宅",
    "tagline": "高规格 IPLC 高端物理专线网络，自带官方多周期深度折扣。支持高码率 8K 极速播放与超低延迟游戏联机加速，适合个人长期订阅与工作室团队多端共用。",
    "price": "¥20.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "全年 ¥96，折合每月 ¥8",
    "traffic": "60GB ~ 1.8TB /月 + 永久买断包",
    "lineType": "IPLC 高端专线网络",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "Surge"
    ],
    "tags": [
      "跨境运营",
      "纯净IP",
      "电商专用",
      "安全合规"
    ],
    "features": [
      "IPLC 高端线路，全程不限速，所有节点 1 倍率",
      "官方自带年付 8折 / 两年 7折 / 三年 6折，优惠码可叠加",
      "全 IPLC/IEPL 专线，最高 2.5Gbps 物理速率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "IPLC 高端线路，全程不限速，所有节点 1 倍率",
      "官方自带年付 8折 / 两年 7折 / 三年 6折，优惠码可叠加",
      "全 IPLC/IEPL 专线，最高 2.5Gbps 物理速率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "单月小流量套餐性价比略低"
    ],
    "suitableFor": "TikTok运营者、亚马逊/eBay跨国电商店主",
    "peakSpeed": "700 Mbps",
    "latency": "38 ms",
    "stabilityRate": "99.95%",
    "couponCode": "kuajie",
    "couponDesc": "kuajie (专属优惠码)",
    "buyUrl": "https://vip02.kuajieaff.com/#/?code=VfWeYwHM",
    "reviewUrl": "/reviews/kuajie",
    "plans": [
      {
        "cycle": "年付",
        "name": "跨界年付版",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥96.00 / 年",
        "discountedPrice": "全年 ¥96，折合每月 ¥8",
        "traffic": "60 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合轻度日常与偶尔 AI 对话",
          "所有节点 1 倍率"
        ]
      },
      {
        "cycle": "年付",
        "name": "年付版 (100GB/月)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥150.00 / 年",
        "discountedPrice": "折合每月 ¥12.5",
        "traffic": "100 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "追剧与 AI 对话更从容",
          "设备数不限"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "轻云 Lite（季付）",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥43.00 / 季",
        "discountedPrice": "季付超值 ¥43 特别优惠 (年付折合 ¥16/月)",
        "traffic": "120 GB / 月",
        "speed": "不限速",
        "devices": "支持 2 台设备",
        "features": [
          "1-2 台设备主力",
          "可叠加年付折扣"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "轻云 Lite (月付)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥20.00 / 月",
        "discountedPrice": "",
        "traffic": "120 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "月付灵活尝试",
          "随时可升档"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "跃云 Leap (全家共用爆款)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥40.00 / 月",
        "discountedPrice": "年付折合约 ¥32/月",
        "traffic": "330 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全家共用/多设备",
          "常下载与高清看视频"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "凌云 Soar (4K 重度影音)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥90.00 / 月",
        "discountedPrice": "年付折合约 ¥72/月",
        "traffic": "830 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "4K 重度观影与大量下载",
          "多屏并发"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "旗舰巨无霸 · 1.8TB 团队专属",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥130.00 / 月",
        "discountedPrice": "每 GB 成本全场最低 (年付折合约 ¥104/月)",
        "traffic": "1800 GB (1.8TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "大型下载、工作室与跨境电商共用"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "跨界·不限时包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥200.00 / 一次性",
        "discountedPrice": "",
        "traffic": "300 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "长期有效不自动续费",
          "用完重置享 9 折"
        ]
      }
    ]
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦 StarDream",
    "rank": 21,
    "score": 9.3,
    "badge": "梦幻速度・星岛互联",
    "categoryTag": "低延迟电竞",
    "tagline": "全 IEPL / IPLC 物理内网专线集群，专为高校学术研究、海外流媒体与外贸出海设计。拥有高纯净美国家宽原生 IP 节点，晚高峰大带宽吞吐保障。",
    "price": "¥25.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00/月",
    "traffic": "60GB ~ 1TB /月 + 永久买断包",
    "lineType": "全 IEPL / IPLC 专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "Loon"
    ],
    "tags": [
      "亚太低延迟",
      "巴哈姆特解锁",
      "星岛专线",
      "超清看番"
    ],
    "features": [
      "全 IPLC/IEPL 专线，最高 2.5Gbps 物理速率",
      "全节点 x1 真实倍率，晚高峰不降速",
      "全 IEPL/IPLC 专线，单节点最高 2.5Gbps 满血速率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IPLC/IEPL 专线，最高 2.5Gbps 物理速率",
      "全节点 x1 真实倍率，晚高峰不降速",
      "全 IEPL/IPLC 专线，单节点最高 2.5Gbps 满血速率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "欧美地区节点数量稍少"
    ],
    "suitableFor": "追番二次元爱好者、亚太游戏服玩家",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "26 ms",
    "stabilityRate": "99.95%",
    "couponCode": "xdm888",
    "couponDesc": "xdm888 (专属优惠码)",
    "buyUrl": "https://kfccbb.xingdaomeng.com/#/?code=JTRIWFim",
    "reviewUrl": "/reviews/xingdaomeng",
    "plans": [
      {
        "cycle": "年付",
        "name": "星岛梦 · 高校套餐",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00/月",
        "traffic": "60 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合小流量/学生党",
          "全 IPLC 专线",
          "单节点峰值最高 2.5Gbps"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "星岛梦 · 超量150G",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IEPL 专线",
          "原生 IP 解锁 Netflix/ChatGPT"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "星岛梦 · 进阶300G",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥50.00 / 月",
        "discountedPrice": "",
        "traffic": "300 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "4K 影音与日常科研主力"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "星岛梦 · 闪光500G",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥70.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "大容量狂飙",
          "多设备在线稳定"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "星岛梦 · 旗舰1T版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥130.00 / 月",
        "discountedPrice": "",
        "traffic": "1000 GB (1TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "海量狂欢",
          "智能路由自动择优"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "星岛梦 · 永久不限时100",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥100.00 / 一次性",
        "discountedPrice": "",
        "traffic": "100 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "无限时长",
          "全 IPLC 专线",
          "所有节点 x1 倍率"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "星岛梦 · 永久不限时300",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥300.00 / 一次性",
        "discountedPrice": "",
        "traffic": "300 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "高人气长期备用"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "星岛梦 · 永久不限时1TB",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥600.00 / 一次性",
        "discountedPrice": "",
        "traffic": "1000 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每 GB 超低单价永久储备"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "星岛梦 · 美国家宽定制",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥700.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "美国原生住宅家宽 IP",
          "跨境电商与 TikTok 直播高风控防封",
          "重置享 8 折"
        ]
      }
    ]
  },
  {
    "id": "gsy",
    "name": "光速云 LightSpeed",
    "rank": 22,
    "score": 9.2,
    "badge": "光速狂飙・超高性价比",
    "categoryTag": "高性价比",
    "tagline": "全 IEPL/IPLC 专线与经典买断包结合，主打高品质原生 IP 跨境网络。单节点大带宽冗余，全节点统一 1x 倍率，支持各大主流客户端一键订阅导入。",
    "price": "¥25.00",
    "billingCycle": "/月起",
    "startQuota": "69GB/月起",
    "yearlyNote": "年付折合约 ¥8.25 / 月",
    "traffic": "69GB ~ 900GB /月 + 永久买断包",
    "lineType": "全 IEPL / IPLC 专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "光速响应",
      "超高性价比",
      "大带宽",
      "稳定中继"
    ],
    "features": [
      "全 IEPL/IPLC 专线，单节点最高 2.5Gbps 满血速率",
      "致敬斯诺克 147 永久买断不过期流量包 (¥147/247GB)",
      "全 IPLC 专线 + vless 协议，增加备用直连节点",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IEPL/IPLC 专线，单节点最高 2.5Gbps 满血速率",
      "致敬斯诺克 147 永久买断不过期流量包 (¥147/247GB)",
      "全 IPLC 专线 + vless 协议，增加备用直连节点",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "高峰期需选择负载低的绿标节点"
    ],
    "suitableFor": "预算适中的视频与下载用户",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "39 ms",
    "stabilityRate": "99.95%",
    "couponCode": "gsy888",
    "couponDesc": "gsy888 (专属优惠码)",
    "buyUrl": "https://mdlky.gsyaff.com/#/?code=6tRWbtgK",
    "reviewUrl": "/reviews/gsy",
    "plans": [
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "致敬斯诺克147永久套餐",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥147.00 / 一次性",
        "discountedPrice": "",
        "traffic": "247 GB (永久有效不过期)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "经典买断随用随停",
          "全 IEPL/IPLC 专线",
          "单节点峰值 2.5Gbps",
          "原生 IP 解锁"
        ]
      },
      {
        "cycle": "年付",
        "name": "光速云 · 轻量版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥99.00 / 年",
        "discountedPrice": "年付折合约 ¥8.25 / 月",
        "traffic": "69 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "适合小流量日常与学生党",
          "全 IPLC 专线",
          "晚高峰不限速"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "光速云 · 极速版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "168 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "性价比标杆最多人选",
          "全 IEPL 专线"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "光速云 · 流光版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥34.00 / 月",
        "discountedPrice": "",
        "traffic": "238 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "进阶大流量",
          "4K 流媒体畅看"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "光速云 · 量子版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥68.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "量子尊享大容量",
          "多屏 4K 重度影音"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "光速云 · 无界版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥138.00 / 月",
        "discountedPrice": "",
        "traffic": "900 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "重度专属海量",
          "顶级带宽晚高峰不降速"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "光速云 · 美国家宽定制",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥680.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "美国真实原生住宅家庭宽带",
          "纯净静态 IP",
          "跨境电商与直播防风控首选"
        ]
      }
    ]
  },
  {
    "id": "v2yun",
    "name": "唯兔云（V2云）",
    "rank": 23,
    "score": 9.2,
    "badge": "稳健可靠・经典V2",
    "categoryTag": "平价轻量",
    "tagline": "极致性价比物理专线机场，年付折算极低门槛。全节点高可用冗余中继，晚高峰追剧、办公与 AI 提问丝滑顺畅，提供多种买断备用包与团队大额套餐。",
    "price": "¥19.90",
    "billingCycle": "/月起",
    "startQuota": "45GB/月起",
    "yearlyNote": "年付折合仅 ¥6.66/月",
    "traffic": "45GB ~ 1TB /月 + 永久买断包",
    "lineType": "全 IPLC / IEPL 专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN",
      "Surge"
    ],
    "tags": [
      "经典架构",
      "老牌协议",
      "高兼容性",
      "简单易用"
    ],
    "features": [
      "支持所有历史版本老旧客户端导入",
      "节点稳定性高",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "支持所有历史版本老旧客户端导入",
      "节点稳定性高",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "协议技术相对偏保守稳妥"
    ],
    "suitableFor": "使用老旧路由器、电视盒子或旧手机的用户",
    "peakSpeed": "610 Mbps",
    "latency": "46 ms",
    "stabilityRate": "99.95%",
    "couponCode": "v2yun",
    "couponDesc": "v2yun (专属优惠码)",
    "buyUrl": "https://fast.v2yunvipaff.com/#/?code=xYEe8gyb",
    "reviewUrl": "/reviews/v2yun",
    "plans": [
      {
        "cycle": "年付",
        "name": "唯兔云 · 年付版限量款",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "约 ¥80.00 / 年",
        "discountedPrice": "年付折合仅 ¥6.66/月",
        "traffic": "45 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "爆款轻量设计",
          "看新闻/查资料/写论文",
          "全 IPLC 专线 vless 协议"
        ]
      },
      {
        "cycle": "年付",
        "name": "唯兔云 · 年付加强专线",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "约 ¥120.00 / 年",
        "discountedPrice": "",
        "traffic": "75 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "IEPL 企业跨境专线",
          "流媒体与 AI 全解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "唯兔云 · 普通版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥19.90 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "热销入门 150GB 充沛",
          "全 IPLC 专线"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "唯兔云 · 进阶版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥29.90 / 月",
        "discountedPrice": "",
        "traffic": "200 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "进阶追剧 200GB 畅快",
          "多设备在线"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "唯兔云 · 专业版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥59.90 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "专业大容量 500GB 狂欢"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "唯兔云 · 至尊版",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥119.90 / 月",
        "discountedPrice": "",
        "traffic": "1000 GB (1.0TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "旗舰 1.0TB 海量不限速"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "唯兔云 · 永久不限时 (100GB)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥100.00 / 一次性",
        "discountedPrice": "",
        "traffic": "100 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 专线",
          "用完点击重置流量享 9 折"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "唯兔云 · 永久不限时 (200GB)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥160.00 / 一次性",
        "discountedPrice": "",
        "traffic": "200 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "不限时主力备用"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "唯兔云 · 永久不限时 (500GB)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥340.00 / 一次性",
        "discountedPrice": "",
        "traffic": "500 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "高性价比大容量备用"
        ]
      }
    ]
  },
  {
    "id": "u1s1",
    "name": "U1S1（有一说一）",
    "rank": 24,
    "score": 9.2,
    "badge": "诚实无套路",
    "categoryTag": "高性价比",
    "tagline": "BGP 三网智能优化调度与 IEPL 高速出口结合，定期扩容核心骨干物理带宽。全节点原生住宅 IP 矩阵，全平台流媒体 4K 秒开，客服响应极速售后无忧。",
    "price": "¥20.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合仅 ¥8.00/月",
    "traffic": "60GB ~ 1.5TB /月",
    "lineType": "BGP 三网智能优化 + IEPL 专线出口",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket"
    ],
    "tags": [
      "真实不虚标",
      "良心商家",
      "口碑之选",
      "透明公正"
    ],
    "features": [
      "所有节点倍率清晰标注",
      "带宽实时仪表盘公示",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "所有节点倍率清晰标注",
      "带宽实时仪表盘公示",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "不提供无限流量套餐"
    ],
    "suitableFor": "厌恶虚假宣传与超售套路的务实用户",
    "peakSpeed": "630 Mbps",
    "latency": "42 ms",
    "stabilityRate": "99.95%",
    "couponCode": "u1s1",
    "couponDesc": "u1s1 (专属优惠码)",
    "buyUrl": "https://pkdj7.vipaff.cc/#/?code=NMjmHbvu",
    "reviewUrl": "/reviews/u1s1",
    "plans": [
      {
        "cycle": "年付",
        "name": "u1s1 · 就是好用包",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "约 ¥96.00 / 年",
        "discountedPrice": "折合仅 ¥8.00/月",
        "traffic": "60 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "学生党查资料 AI",
          "日常网页社交轻量视频",
          "IEPL 专线出口"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "u1s1 · 普通人真够了包",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥20.00 / 月",
        "discountedPrice": "",
        "traffic": "120 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "日常主力首选",
          "刷视频看剧远程办公"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "u1s1 · 你以为用不到包",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥40.00 / 月",
        "discountedPrice": "",
        "traffic": "300 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "高频重度首选",
          "4K/8K 解锁秒开",
          "多设备并发"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "u1s1 · 瘾大就拉满包",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥100.00 / 月",
        "discountedPrice": "",
        "traffic": "700 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "700GB 海量储备",
          "千兆跑满"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "u1s1 · 我全都要包",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥180.00 / 月",
        "discountedPrice": "",
        "traffic": "1500 GB (1.5TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "小团队运营与跨国协作",
          "支撑海量并发"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "u1s1 · 定制包",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥600.00 / 月",
        "discountedPrice": "",
        "traffic": "按需定制 (独享纯净 IP)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "跨境电商与 TikTok 直播定制",
          "防封控防关联"
        ]
      }
    ]
  },
  {
    "id": "jilianyun",
    "name": "极连云",
    "rank": 25,
    "score": 9.2,
    "badge": "极致互联",
    "categoryTag": "高性价比",
    "tagline": "全 IPLC 物理专线与轻量化高速节点矩阵，专为追求省心与高稳定性的用户打造。晚高峰超低延迟与网络抖动，全节点不限速，流媒体原生全解锁。",
    "price": "¥18.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合仅 ¥8.00/月",
    "traffic": "60GB ~ 1TB /月 + 永久买断包",
    "lineType": "全 IPLC 物理专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "智能组网",
      "端到端加速",
      "稳定流媒体",
      "多端协同"
    ],
    "features": [
      "全 IPLC 专线，单节点最大提供 2.5Gbps 速率",
      "全节点 x1 倍率，晚高峰不限速",
      "BGP 多线路智能调度 + 专线级出口架构，全程不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IPLC 专线，单节点最大提供 2.5Gbps 速率",
      "全节点 x1 倍率，晚高峰不限速",
      "BGP 多线路智能调度 + 专线级出口架构，全程不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "暂不支持定制UDP游戏端口映射"
    ],
    "suitableFor": "多地出差走动的商务白领、家庭常驻设备",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "38 ms",
    "stabilityRate": "99.95%",
    "couponCode": "jly666",
    "couponDesc": "jly666 (专属优惠码)",
    "buyUrl": "https://kdjhao.jlyvipaff.com/#/?code=poyoU7mq",
    "reviewUrl": "/reviews/jilianyun",
    "plans": [
      {
        "cycle": "年付",
        "name": "限时年付套餐体验",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "约 ¥96.00 / 年",
        "discountedPrice": "折合仅 ¥8.00/月",
        "traffic": "60 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 专线",
          "单节点最大 2.5Gbps",
          "原生 IP 解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "极连云 · 基础套餐",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥18.00 / 月",
        "discountedPrice": "",
        "traffic": "100 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "热销入门 100GB 充沛",
          "晚高峰不限速"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "极连云 · 进阶套餐",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥32.00 / 月",
        "discountedPrice": "",
        "traffic": "200 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "进阶追剧优化带宽调度",
          "晚高峰流畅"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "极连云 · 旗舰套餐",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥61.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "高速旗舰 500GB 重度优选",
          "低延迟体验"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "极连云 · 尊享套餐",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥122.00 / 月",
        "discountedPrice": "",
        "traffic": "1000 GB (1.0TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "顶级尊享最高 2.5Gbps",
          "原生 IP 全解锁"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "极连云 · 不限时套餐",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥399.00 / 一次性",
        "discountedPrice": "",
        "traffic": "600 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "一次性 600G 永久不过期",
          "无需担心每月重置"
        ]
      }
    ]
  },
  {
    "id": "quanqiuyun",
    "name": "全球云",
    "rank": 26,
    "score": 9.2,
    "badge": "寰宇畅连",
    "categoryTag": "专线旗舰",
    "tagline": "BGP 多线路智能调度与国际专线出口架构，智能避开网络拥堵与故障链路。支持多端并发稳定在线，全平台 4K/8K 视频与海外主流社交平台无缝秒开。",
    "price": "¥20.00",
    "billingCycle": "/月起",
    "startQuota": "59GB/月起",
    "yearlyNote": "折合仅 ¥8.25/月",
    "traffic": "59GB ~ 1.5TB /月 + 永久买断包",
    "lineType": "BGP 多线路智能调度 + 专线级出口架构",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "Surge"
    ],
    "tags": [
      "全球覆盖",
      "跨洋加速",
      "大厂资源",
      "多节点"
    ],
    "features": [
      "BGP 多线路智能调度 + 专线级出口架构，全程不限速",
      "全节点流量统一 1.0x 真实计费，无放大比例",
      "全套 IPLC 国际物理专线，单节点最高 2.5Gbps 速率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "BGP 多线路智能调度 + 专线级出口架构，全程不限速",
      "全节点流量统一 1.0x 真实计费，无放大比例",
      "全套 IPLC 国际物理专线，单节点最高 2.5Gbps 速率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "月费略高于普通平价小机场"
    ],
    "suitableFor": "海外多国网站高频访问者、跨境科研工作者",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "35 ms",
    "stabilityRate": "99.95%",
    "couponCode": "qqy888",
    "couponDesc": "qqy888 (专属优惠码)",
    "buyUrl": "https://sswdh.gcvipaff.com/#/?code=NE1AcNIX",
    "reviewUrl": "/reviews/quanqiuyun",
    "plans": [
      {
        "cycle": "年付",
        "name": "轻量版",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "约 ¥99.00 / 年",
        "discountedPrice": "折合仅 ¥8.25/月",
        "traffic": "59 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 专线",
          "单节点峰值最高 2.5Gbps",
          "原生 IP 解锁"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "BGP 智能优化 · 入门方案",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥20.00 / 月",
        "discountedPrice": "",
        "traffic": "120 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "日常网页社交轻度用户",
          "4K 即点即播支持 8K"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "BGP 智能优化 · 进阶方案",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥40.00 / 月",
        "discountedPrice": "",
        "traffic": "300 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "BGP 三网优化 + 纯专线出口",
          "稳定优先 4K 秒开"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "BGP 智能优化 · 高端方案",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥100.00 / 月",
        "discountedPrice": "",
        "traffic": "700 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "700GB 海量储备",
          "满足 ChatGPT/Claude 高强度使用"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "BGP 智能优化 · 商业方案",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥180.00 / 月",
        "discountedPrice": "",
        "traffic": "1500 GB (1.5TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "企业级 BGP 专线出口",
          "支持大量设备并发"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "BGP 智能优化 · 不限时轻量包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥100.00 / 一次性",
        "discountedPrice": "",
        "traffic": "100 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "永久不过期",
          "长周期差旅高端备用"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "BGP 智能优化 · 不限时标准包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥360.00 / 一次性",
        "discountedPrice": "",
        "traffic": "400 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "400GB 大容量买断",
          "全节点 1.0x 计费"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "BGP 智能优化 · 不限时大容量包",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥700.00 / 一次性",
        "discountedPrice": "",
        "traffic": "800 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "尊享买断 800GB 海量储备"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "独享私人专线 · 独立公网IP",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥680.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 月 独享流量",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "独立带宽与独立公网 IP",
          "TikTok 直播与跨境电商防封控"
        ]
      }
    ]
  },
  {
    "id": "guangnianti",
    "name": "光年梯",
    "rank": 27,
    "score": 9.1,
    "badge": "跨越光年・极速通达",
    "categoryTag": "平价轻量",
    "tagline": "全系标配高规格 IPLC 国际物理专线与 1.0x 真实倍率，全程不经 GFW。超低网络延迟与丢包率，敏感期高可用抗封锁，提供灵活的周期与定制选项。",
    "price": "¥18.00",
    "billingCycle": "/月起",
    "startQuota": "50GB/月起",
    "yearlyNote": "折合约 ¥7.42 / 月",
    "traffic": "50GB ~ 900GB /月",
    "lineType": "全套 IPLC 国际物理专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket"
    ],
    "tags": [
      "光速网络",
      "视频友好",
      "大带宽中继",
      "超值月选"
    ],
    "features": [
      "全套 IPLC 国际物理专线，单节点最高 2.5Gbps 速率",
      "所有节点统一 X1 真实倍率计费，晚高峰不限速不降速",
      "全 IPLC/IEPL 物理专线接入 + 原生纯净双 ISP 出口",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全套 IPLC 国际物理专线，单节点最高 2.5Gbps 速率",
      "所有节点统一 X1 真实倍率计费，晚高峰不限速不降速",
      "全 IPLC/IEPL 物理专线接入 + 原生纯净双 ISP 出口",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "客服工作时间非24小时值守"
    ],
    "suitableFor": "TikTok / YouTube 短视频重度爱好者",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "43 ms",
    "stabilityRate": "99.95%",
    "couponCode": "gnt888",
    "couponDesc": "gnt888 (专属优惠码，可与官方年付折扣叠加)",
    "buyUrl": "https://ggmq.gntaff.com/#/?code=RAJFvngV",
    "reviewUrl": "/reviews/guangnianti",
    "plans": [
      {
        "cycle": "年付",
        "name": "年付限时套餐",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥89.00 / 年",
        "discountedPrice": "折合约 ¥7.42 / 月",
        "traffic": "50 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 专线通道",
          "全节点 X1 真实倍率",
          "原生 IP 解锁 ChatGPT 与流媒体"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "光年梯 入门版",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥18.00 / 月",
        "discountedPrice": "",
        "traffic": "110 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "110G 充沛专线流量",
          "单节点最高 2.5Gbps",
          "4K 超清流媒体秒开"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "光年梯 晋级版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥34.00 / 月",
        "discountedPrice": "",
        "traffic": "220 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "晚高峰并发不限速",
          "原生纯净 IP 深度支持 AI 生态"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "光年梯 专业版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥68.00 / 月",
        "discountedPrice": "",
        "traffic": "450 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全专线低延迟保障通道",
          "多设备高并发无瓶颈"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "光年梯 至尊版",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥130.00 / 月",
        "discountedPrice": "",
        "traffic": "900 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "900G 旗舰流量池",
          "最高 2.5Gbps 物理峰值速率",
          "VIP 专属售后服务"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "独享私人专线节点",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥680.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 月 独立公网IP",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "独享独立公网 IP 零干扰防封禁",
          "TikTok 美区运营与跨境电商店铺首选"
        ]
      }
    ]
  },
  {
    "id": "sogoyun",
    "name": "Sogo云",
    "rank": 28,
    "score": 9.1,
    "badge": "潮流好用・轻快飞扬",
    "categoryTag": "平价轻量",
    "tagline": "单节点最高 2.5Gbps 物理峰值，搭载原生双 ISP 跨境网络架构。全节点 1x 真实计费倍率，晚高峰高并发大带宽保障，流媒体全家桶与 AI 工具深度解锁。",
    "price": "¥25.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合 ¥8.17/月",
    "traffic": "60GB ~ 1.1TB /月 + 永久买断包",
    "lineType": "全 IPLC / IEPL 物理专线 + 原生双 ISP",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "Loon"
    ],
    "tags": [
      "清新潮牌",
      "简单易用",
      "价格实惠",
      "随用随走"
    ],
    "features": [
      "全 IPLC/IEPL 物理专线接入 + 原生纯净双 ISP 出口",
      "单节点最高 2.5Gbps 峰值带宽，全节点统一 x1 真实倍率",
      "全内网 IPLC 物理专线架构，单节点最高 2.5Gbps",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IPLC/IEPL 物理专线接入 + 原生纯净双 ISP 出口",
      "单节点最高 2.5Gbps 峰值带宽，全节点统一 x1 真实倍率",
      "全内网 IPLC 物理专线架构，单节点最高 2.5Gbps",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "不支持大额按年预付费特惠"
    ],
    "suitableFor": "学生、年轻潮流群体、初阶科学上网用户",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "46 ms",
    "stabilityRate": "99.95%",
    "couponCode": "",
    "couponDesc": "官方自带周期折扣 (季付/半年付/年付)",
    "buyUrl": "https://wzjc.sogoyunaff.cc/#/?code=2x2EywO9",
    "reviewUrl": "/reviews/sogoyun",
    "plans": [
      {
        "cycle": "年付",
        "name": "小包-年付版",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥98.00 / 年",
        "discountedPrice": "折合 ¥8.17/月",
        "traffic": "60 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC/IEPL 专线",
          "原生纯净双 ISP 出口",
          "支持多端在线"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "精选方案 · 日常轻量",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "最高 2.5Gbps 峰值带宽",
          "4K 秒开，ChatGPT/Claude 秒级响应"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "精选方案 · 最多白领通用首选",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥45.00 / 月",
        "discountedPrice": "",
        "traffic": "350 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "晚高峰并发不限速无卡顿",
          "原生双 ISP 住宅级纯净 IP"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "进阶方案 · 深度极客",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥80.00 / 月",
        "discountedPrice": "",
        "traffic": "550 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "超大 550GB 专线流量",
          "低丢包企业级技术运维"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "旗舰方案 · 团队工作室",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥150.00 / 月",
        "discountedPrice": "",
        "traffic": "1100 GB (1.1TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全节点满速并发保障",
          "一对一 VIP 客服优先响应"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "永久不限时 (120G)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥120.00 / 一次性",
        "discountedPrice": "",
        "traffic": "120 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "随用随停不设过期时间",
          "全节点 x1 真实倍率"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "永久不限时 (250G)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥250.00 / 一次性",
        "discountedPrice": "",
        "traffic": "250 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "原生双 ISP 纯净线路支持",
          "长期出差与备用首选"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "永久不限时 (500G)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥450.00 / 一次性",
        "discountedPrice": "",
        "traffic": "500 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "500GB 永久海量储备",
          "全节点晚高峰不限速"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "永久不限时 · 顶配 (1TB)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥850.00 / 一次性",
        "discountedPrice": "",
        "traffic": "1000 GB (1.0TB) (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "1.0TB 永久不过期终极储备",
          "企业级优先级路由保障"
        ]
      }
    ]
  },
  {
    "id": "yuzhouyun",
    "name": "宇宙云 YuZhou",
    "rank": 29,
    "score": 9.1,
    "badge": "浩瀚宇宙・无界探索",
    "categoryTag": "高性价比",
    "tagline": "全内网 IPLC 物理专线，单节点最高 2.5Gbps 冗余带宽。所有节点统一 1.0x 真实倍率，流媒体原生纯净 IP 矩阵，提供高性价比周期订阅与专属独享定制。",
    "price": "¥25.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00 / 月",
    "traffic": "60GB ~ 1.4TB /月 + 永久买断包",
    "lineType": "全内网 IPLC 物理专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "探索无界",
      "多国节点",
      "安全加密",
      "长效保活"
    ],
    "features": [
      "全内网 IPLC 物理专线架构，单节点最高 2.5Gbps",
      "全节点统一 x1 真实倍率计费，晚高峰高并发不限速",
      "全 IEPL 物理专线，晚高峰 0.00% 极稳丢包，下行高达 168.30 MB/s",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全内网 IPLC 物理专线架构，单节点最高 2.5Gbps",
      "全节点统一 x1 真实倍率计费，晚高峰高并发不限速",
      "全 IEPL 物理专线，晚高峰 0.00% 极稳丢包，下行高达 168.30 MB/s",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "测速峰值略显平稳没有超高突发"
    ],
    "suitableFor": "注重网络安全与隐私的数据敏感人士",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "41 ms",
    "stabilityRate": "99.95%",
    "couponCode": "",
    "couponDesc": "官方自带周期优惠折扣",
    "buyUrl": "https://wzjc.yuzoucloud.cc/#/?code=wL7YStBa",
    "reviewUrl": "/reviews/yuzhouyun",
    "plans": [
      {
        "cycle": "年付",
        "name": "星云年付小包 (Annual Plan)",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00 / 月",
        "traffic": "60 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全内网 IPLC 物理专线",
          "原生 IP 解锁流媒体与 AI"
        ]
      },
      {
        "cycle": "年付",
        "name": "年付精选",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥188.00 / 年",
        "discountedPrice": "折合约 ¥15.67 / 月",
        "traffic": "120 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "最高 2.5Gbps 峰值",
          "4K 超清秒开"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "日常轻量",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "Netflix/Disney+/YouTube 4K 秒开",
          "原生 IP 解锁 ChatGPT"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "恒星标准版 (Standard Plan)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥50.00 / 月",
        "discountedPrice": "",
        "traffic": "320 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "320GB 充沛专线流量",
          "多端设备协同稳定在线"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "进阶方案",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥100.00 / 月",
        "discountedPrice": "",
        "traffic": "650 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全线极致低延迟通道",
          "不限制在线客户端数量"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "团队旗舰",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥200.00 / 月",
        "discountedPrice": "",
        "traffic": "1400 GB (1.4TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "最高级别网络吞吐与优先通道",
          "企业级技术运维"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "永久不限时 (120G)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥110.00 / 一次性",
        "discountedPrice": "",
        "traffic": "120 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "永不按月清零随用随停",
          "全节点 x1 真实倍率"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "永久不限时 · 极客备用 (240G)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥220.00 / 一次性",
        "discountedPrice": "",
        "traffic": "240 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全线 IPLC 专线隧道",
          "随时支持加购补充"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "独享定制 (美国家宽)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥600.00 / 一次性 (月计)",
        "discountedPrice": "",
        "traffic": "500 GB / 独享资源",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "赠送 500GB 原生住宅家宽流量",
          "独立独享公网住宅 IP 防封"
        ]
      }
    ]
  },
  {
    "id": "ermaoyun",
    "name": "二猫云 2mao",
    "rank": 30,
    "score": 9.1,
    "badge": "萌猫加速・亲民好价",
    "categoryTag": "平价轻量",
    "tagline": "全 IEPL 物理专线出口，趣味猫咪分级梯队与多样化流量套餐设计。晚高峰 4K 秒开，原生住宅 IP 深度解锁主流海外平台，支持各类 Clash 客户端一键配置。",
    "price": "¥20.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合 ¥8.00/月",
    "traffic": "60GB ~ 850GB /月 + 永久买断包",
    "lineType": "全 IEPL 物理专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket"
    ],
    "tags": [
      "亲民低价",
      "猫咪主题",
      "稳定省钱",
      "轻量好物"
    ],
    "features": [
      "全 IEPL 物理专线，晚高峰 0.00% 极稳丢包，下行高达 168.30 MB/s",
      "全节点统一真实 X1 倍率，晚高峰并发不限速",
      "全 IEPL 尊享专线高速流量，单节点最高 2.5Gbps",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IEPL 物理专线，晚高峰 0.00% 极稳丢包，下行高达 168.30 MB/s",
      "全节点统一真实 X1 倍率，晚高峰并发不限速",
      "全 IEPL 尊享专线高速流量，单节点最高 2.5Gbps",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "大促期间工单处理略有排队"
    ],
    "suitableFor": "爱猫极客、社群活跃玩家、学生党",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "48 ms",
    "stabilityRate": "99.95%",
    "couponCode": "2mao888",
    "couponDesc": "2mao888 (官方专属优惠码，可与年付折扣叠加享折上折)",
    "buyUrl": "https://waaa.2maoyunaff.cc/#/?code=uHeyKG44",
    "reviewUrl": "/reviews/ermaoyun",
    "plans": [
      {
        "cycle": "年付",
        "name": "二猫年付小包",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合 ¥8.00/月",
        "traffic": "60 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IEPL 物理专线",
          "晚高峰超低延迟保障",
          "个人多端登录"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "白猫套餐 (入门推荐)",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥20.00 / 月",
        "discountedPrice": "",
        "traffic": "120 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "单节点最高 2.5Gbps 带宽",
          "Netflix/YouTube 4K 秒开"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "橘猫畅玩版 (主力畅享)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥40.00 / 月",
        "discountedPrice": "",
        "traffic": "260 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "原生纯净 IP 解锁 ChatGPT/Claude",
          "4K 影音发烧友主力"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "牛奶猫尊享版 (团队高配)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥80.00 / 月",
        "discountedPrice": "",
        "traffic": "550 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "独立专线通道与低丢包率",
          "企业级售后技术响应"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "黑猫重度用户版 (重度专属)",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥160.00 / 月",
        "discountedPrice": "",
        "traffic": "850 GB / 每月额度",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "850G 高速流量",
          "60+ 节点解锁全部流媒体与 AI"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "二猫云 · 不限时套餐",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥100.00 / 一次性",
        "discountedPrice": "",
        "traffic": "100 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "流量永久有效随用随停",
          "无需担心每月重置",
          "支持后续加购补充"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "二猫云 · 不限时套餐加大版",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥199.00 / 一次性",
        "discountedPrice": "",
        "traffic": "220 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "超值大容量永久储备",
          "全线 IEPL 隧道"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "二猫云 · 美国家宽定制",
        "sub": "海量流量与最高优先级物理专线，适合跨境团队、电商与高并发场景。",
        "price": "¥700.00 / 月",
        "discountedPrice": "",
        "traffic": "500 GB / 独享资源",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "美国真实原生住宅 IP",
          "TikTok 美区带货与跨境店铺首选"
        ]
      }
    ]
  },
  {
    "id": "yifanyun",
    "name": "一翻云 1fly",
    "rank": 31,
    "score": 9.1,
    "badge": "一键翻越・直达大洋",
    "categoryTag": "平价轻量",
    "tagline": "全 IEPL 尊享国际物理专线，极速高带宽保障。不限制设备同时在线数量，全节点 1.0x 真实计费倍率，晚高峰超低丢包，外贸、出海与学术加速首选。",
    "price": "¥20.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合 ¥8.17/月",
    "traffic": "60GB ~ 1.2TB /月 + 永久买断包",
    "lineType": "全 IEPL 尊享专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "一键翻越",
      "极简操作",
      "新手友好",
      "即开即用"
    ],
    "features": [
      "全 IEPL 尊享专线高速流量，单节点最高 2.5Gbps",
      "全节点 x1 真实倍率，晚高峰并发低延迟通道",
      "全 IPLC 专线网络，最高 2.5Gbps 稳定速率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IEPL 尊享专线高速流量，单节点最高 2.5Gbps",
      "全节点 x1 真实倍率，晚高峰并发低延迟通道",
      "全 IPLC 专线网络，最高 2.5Gbps 稳定速率",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "没有高级策略组分流自定义"
    ],
    "suitableFor": "零基础纯小白、希望一键搞定的用户",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "49 ms",
    "stabilityRate": "99.95%",
    "couponCode": "",
    "couponDesc": "官方自带周期特惠折扣 (季付/半年/年付)",
    "buyUrl": "https://wzjc.1flyunaff.cc/#/?code=F7eaT191",
    "reviewUrl": "/reviews/yifanyun",
    "plans": [
      {
        "cycle": "年付",
        "name": "主推套餐 · 年付专属",
        "sub": "高性价比年度优选方案，全节点高速物理专线，晚高峰不限速。",
        "price": "¥98.00 / 年",
        "discountedPrice": "折合 ¥8.17/月",
        "traffic": "60 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "轻度需求首选",
          "全 IEPL 专线不限速",
          "覆盖 60+ 优质全球节点"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "精选方案",
        "sub": "全天候 4K/8K 超清流媒体与 AI 工具原生解锁，视听体验拉满。",
        "price": "¥20.00 / 月",
        "discountedPrice": "",
        "traffic": "150 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "极速高带宽保障",
          "解锁主流流媒体及各类 AI 工具"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "舒享版",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥35.00 / 月",
        "discountedPrice": "",
        "traffic": "350 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "独享高速通道保障",
          "多设备协同"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "进阶之选",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥55.00 / 月",
        "discountedPrice": "",
        "traffic": "600 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "4K/8K 超高清流媒体无缓冲播放",
          "全线晚高峰极致低延迟"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "团队极客",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥95.00 / 月",
        "discountedPrice": "",
        "traffic": "1200 GB (1.2TB) / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "单节点最高 2.5Gbps 带宽",
          "工作室团队与重度下载首选"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "永久不过期 (150G)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥100.00 / 一次性",
        "discountedPrice": "",
        "traffic": "150 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "不设到期时间随用随停",
          "支持随时补充流量包"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "永久不过期 (350G)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥200.00 / 一次性",
        "discountedPrice": "",
        "traffic": "350 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "无月租压力永不清零",
          "全节点 x1 真实倍率"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "永久不过期 · 海量储备 (800G)",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥400.00 / 一次性",
        "discountedPrice": "",
        "traffic": "800 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "800GB 永久海量储备",
          "一次购买长久无忧"
        ]
      }
    ]
  },
  {
    "id": "edgenova",
    "name": "边缘节点 EdgeNova",
    "rank": 32,
    "score": 9.1,
    "badge": "边缘计算・低延超感",
    "categoryTag": "低延迟电竞",
    "tagline": "全 IPLC 国际物理专线网络，提供高达 2.5Gbps 稳定速率。智能流量均衡分配与多链路动态路由优化，晚高峰稳定秒开，流媒体与 AI 全生态无障碍访问。",
    "price": "¥15.00",
    "billingCycle": "/月起",
    "startQuota": "120GB/月起",
    "yearlyNote": "8折券后 ¥17.60/月",
    "traffic": "45GB ~ 320GB /月 + 永久买断包",
    "lineType": "全 IPLC 国际专线",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "Surge"
    ],
    "tags": [
      "边缘计算",
      "超低延迟",
      "前沿技术",
      "智能就近"
    ],
    "features": [
      "全 IPLC 专线网络，最高 2.5Gbps 稳定速率",
      "本站 8 折专属优惠券: xk808",
      "全线采用企业级 IEPL 物理内网专线，60+ 顶级核心节点直连",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全 IPLC 专线网络，最高 2.5Gbps 稳定速率",
      "本站 8 折专属优惠券: xk808",
      "全线采用企业级 IEPL 物理内网专线，60+ 顶级核心节点直连",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "套餐名额有限经常需要等开仓"
    ],
    "suitableFor": "极客程序员、对外延极其敏感的高频交互场景",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "21 ms",
    "stabilityRate": "99.95%",
    "couponCode": "xk808",
    "couponDesc": "xk808 (立享 8 折优惠券)",
    "buyUrl": "https://work.edgenovaaff.cc/#/?code=z81zCfw1",
    "reviewUrl": "/reviews/edgenova",
    "plans": [
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "极界·标准套餐",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥22.00 / 月",
        "discountedPrice": "8折券后 ¥17.60/月",
        "traffic": "120 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "全 IPLC 专线最高 2.5Gbps",
          "原生 IP 解锁 Netflix/ChatGPT",
          "不限设备数"
        ]
      },
      {
        "cycle": "年付",
        "name": "精选方案 · 年付小包",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥98.00 / 年",
        "discountedPrice": "8折券后实付 ¥78.40/年 (折合 ¥6.53/月)",
        "traffic": "45 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "年费小包",
          "10 元随时可重置流量",
          "原生 IP 线路"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "轻度尝鲜",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥15.00 / 月",
        "discountedPrice": "",
        "traffic": "60 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "IPLC 专线通道",
          "原生纯净 IP",
          "不限同时在线设备"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "进阶优选",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥35.00 / 月",
        "discountedPrice": "8折券后 ¥28.00/月",
        "traffic": "200 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "单节点最高 2.5Gbps",
          "原生 IP 深度解锁 AI 工具"
        ]
      },
      {
        "cycle": "月付 / 季付 / 年付",
        "name": "团队高配",
        "sub": "满足日常网页浏览、流媒体播放与多端远程办公全场景需求。",
        "price": "¥50.00 / 月",
        "discountedPrice": "8折券后 ¥40.00/月",
        "traffic": "320 GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "海量物理专线池",
          "极速高带宽保障",
          "全天候运维"
        ]
      },
      {
        "cycle": "一次性买断 · 永不过期",
        "name": "精选方案 · 永久不过期",
        "sub": "一次性买断无过期时间限制，长周期差旅与轻度防失联纯备用神器。",
        "price": "¥100.00 / 一次性",
        "discountedPrice": "",
        "traffic": "100 GB (永久有效)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "无限时长购买后不自动重置",
          "所有节点 x1 倍率不限速"
        ]
      }
    ]
  },
  {
    "id": "kosing",
    "name": "可信云",
    "rank": 33,
    "score": 9.1,
    "badge": "诚信为本・信誉立足",
    "categoryTag": "平价轻量",
    "tagline": "全线搭载企业级 IEPL 国际内网专线与 60+ 顶级骨干节点，专线直连覆盖港台、日韩、新加坡与美欧核心区域。全节点统一 1.0x 真实倍率扣费，晚高峰超低延迟、全程不限速；多周期订阅享最高 7 折阶梯特惠与重置 9 折特权，深度解锁全平台流媒体与 ChatGPT、TikTok 等主流服务。",
    "price": "¥15.00",
    "billingCycle": "/月起",
    "startQuota": "60GB/月起",
    "yearlyNote": "折合约 ¥8.00 /月",
    "traffic": "60GB ~ 1.2TB /月 + 永久买断包",
    "lineType": "全 IEPL 国际专线 / 60+ 顶级骨干节点",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "诚信靠谱",
      "状态透明",
      "良心品质",
      "长效耐用"
    ],
    "features": [
      "全线采用企业级 IEPL 物理内网专线，60+ 顶级核心节点直连",
      "覆盖香港、台湾、新加坡、日本、美国等核心地区，晚高峰稳定抗抖动",
      "全线搭载 IPLC 国际高速专线网络，单节点峰值最高 2.5Gbps 稳定速率",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全线采用企业级 IEPL 物理内网专线，60+ 顶级核心节点直连",
      "覆盖香港、台湾、新加坡、日本、美国等核心地区，晚高峰稳定抗抖动",
      "全线搭载 IPLC 国际高速专线网络，单节点峰值最高 2.5Gbps 稳定速率",
      "全节点统一 1.0x 真实计费倍率，晚高峰大带宽绝不限速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "冷门小语种国家节点覆盖较少"
    ],
    "suitableFor": "追求踏实保障、重视服务承诺的理性用户",
    "peakSpeed": "610 Mbps",
    "latency": "45 ms",
    "stabilityRate": "99.98%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://work.kosingaff.com/#/?code=BNsA58Es",
    "reviewUrl": "/reviews/kosing",
    "plans": [
      {
        "cycle": "年付",
        "name": "可信云年费小礼包 ⚡",
        "sub": "小包专属，每月 60GB 流量，平均月付低至每月约 8 元。",
        "price": "¥96.00 / 年",
        "discountedPrice": "折合约 ¥8.00 /月",
        "traffic": "60GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "小包专属，每月 60GB 充沛专线流量",
          "轻度使用，平均月付低至约 8 元/月",
          "全 IEPL 专线，不限速，不限制在线设备数量",
          "支持主流流媒体与 AI 工具原生 IP 解锁"
        ]
      },
      {
        "cycle": "月付",
        "name": "可信云月付小包 🍃",
        "sub": "每月 60GB 流量配置，仅支持月付，轻量尝鲜。",
        "price": "¥15.00 / 月",
        "discountedPrice": "",
        "traffic": "60GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 60GB 流量配置 | 仅支持月付灵活订阅",
          "全 IEPL 专线 | 不限速 | 不限制设备数量",
          "原生 IP 深度解锁 Netflix、Disney+ 等主流流媒体",
          "稳定解锁 ChatGPT | Claude | TikTok"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年 / 两年 / 三年",
        "name": "基础版 (Basic) ☁️",
        "sub": "每月 150GB 流量配置，流量重置享 9 折优惠。",
        "price": "¥25.00 / 月",
        "discountedPrice": "三年付 7 折折合 ¥17.50/月",
        "traffic": "150GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 150GB 充沛流量配置，流量重置享 9 折",
          "全 IEPL 专线，不限速，不限制在线设备数量",
          "多周期梯度优惠：季付 95 折 · 半年付 9 折 · 年付 85 折 · 两年付 8 折 · 三年付 7 折",
          "原生 IP 纯净解锁各大流媒体及 AI 工具"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年 / 两年 / 三年",
        "name": "标准版 (Standard) 🚀",
        "sub": "每月 300GB 流量配置，流量重置享 9 折优惠。",
        "price": "¥50.00 / 月",
        "discountedPrice": "三年付 7 折折合 ¥35.00/月",
        "traffic": "300GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 300GB 充沛流量配置，流量重置享 9 折",
          "全 IEPL 专线，不限速，不限制在线设备数量",
          "多周期特惠：季付 95 折 · 半年付 9 折 · 年付 85 折 · 两年付 8 折 · 三年付 7 折",
          "完美解锁 Netflix 4K、Disney+、ChatGPT、Claude 等"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年 / 两年 / 三年",
        "name": "专业版 (Pro) 👑",
        "sub": "每月 600GB 流量配置，流量重置享 9 折优惠。",
        "price": "¥100.00 / 月",
        "discountedPrice": "三年付 7 折折合 ¥70.00/月",
        "traffic": "600GB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 600GB 大容量配置，流量重置享 9 折",
          "全 IEPL 专线，不限速，不限制在线设备数量",
          "多周期特惠：季付 95 折 · 半年付 9 折 · 年付 85 折 · 两年付 8 折 · 三年付 7 折",
          "解锁各大流媒体及全套 AI 生产力工具"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年 / 两年 / 三年",
        "name": "旗舰版 (Ultimate) 💻",
        "sub": "每月 1200GB (1.2TB) 流量配置，流量重置享 9 折优惠。",
        "price": "¥200.00 / 月",
        "discountedPrice": "三年付 7 折折合 ¥140.00/月",
        "traffic": "1.2TB / 月",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "每月 1200GB (1.2TB) 极客级超大容量配置，流量重置享 9 折",
          "全 IEPL 专线，不限速，不限制在线设备数量",
          "多周期特惠：季付 95 折 · 半年付 9 折 · 年付 85 折 · 两年付 8 折 · 三年付 7 折",
          "高优先级专线带宽，全天候保障极致吞吐与零丢包"
        ]
      },
      {
        "cycle": "一次性买断 · 永久有效",
        "name": "可信云轻量不限时 🛡️",
        "sub": "仅限前 1w 名用户，售完即止，永久不限时 50G。",
        "price": "¥50.00 / 终身",
        "discountedPrice": "",
        "traffic": "50GB (买断)",
        "speed": "不限速",
        "devices": "不限",
        "features": [
          "仅限前 1w 名用户，售完即止，一次性付费 ¥50",
          "永久不限时 50G 专线流量，性能规格与月付完全一致",
          "全 IEPL 专线 | 不限速 | 不限制设备数量",
          "原生 IP 深度解锁流媒体与 ChatGPT / TikTok"
        ]
      }
    ]
  },
  {
    "id": "sujie",
    "name": "速界 SuJie",
    "rank": 34,
    "score": 9,
    "badge": "速度无界・驰骋全球",
    "categoryTag": "平价轻量",
    "tagline": "全线搭载旗舰级 IPLC 国际高速物理专线，提供最高 2.5Gbps 极致稳定速率。所有节点统一 1.0x 真实计费倍率，晚高峰时段稳定不降速；覆盖从体验试用、限时年付、极速版、超速版到 1.0TB 跃迁版全方案，原生 IP 轻松解锁 Netflix、Disney+、ChatGPT 与 TikTok。",
    "price": "¥15.00",
    "billingCycle": "/月起",
    "startQuota": "50GB/月起",
    "yearlyNote": "折合约 ¥7.50 /月",
    "traffic": "50GB ~ 1TB /月",
    "lineType": "全 IPLC 物理专线网络 / 峰值最高 2.5Gbps",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket"
    ],
    "tags": [
      "速度无界",
      "大流量优选",
      "轻巧敏捷",
      "平价好用"
    ],
    "features": [
      "全线搭载 IPLC 国际高速专线网络，单节点峰值最高 2.5Gbps 稳定速率",
      "所有节点统一 1.0x 真实倍率扣费，晚高峰时段绝不降速",
      "全线采用旗舰级 IEPL 物理专线，单节点峰值最高至 2.5Gbps 极致大带宽",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全线搭载 IPLC 国际高速专线网络，单节点峰值最高 2.5Gbps 稳定速率",
      "所有节点统一 1.0x 真实倍率扣费，晚高峰时段绝不降速",
      "全线采用旗舰级 IEPL 物理专线，单节点峰值最高至 2.5Gbps 极致大带宽",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "高峰期偶尔需手动切换备用节点"
    ],
    "suitableFor": "学生党、刷剧族、日常网页浏览",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "47 ms",
    "stabilityRate": "99.98%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://work.speedworldaff.cc/#/?code=wSjLCpIf",
    "reviewUrl": "/reviews/sujie",
    "plans": [
      {
        "cycle": "月付",
        "name": "单月试用15元 🍃",
        "sub": "限时体验月付小包，适用于低流量用户与学生党。",
        "price": "¥15.00 / 月",
        "discountedPrice": "",
        "traffic": "50GB / 月",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "限时体验月付小包，低门槛尝鲜",
          "每月高速流量 (50G)，所有节点统一 x1 倍率",
          "晚高峰时段稳定不降速，每月自动刷新",
          "全 IPLC 专线网络，提供最高 2.5Gbps 稳定速率"
        ]
      },
      {
        "cycle": "年付",
        "name": "限时年付 ⚡",
        "sub": "年费小包，适用于低流量用户学生党，折算仅约 7.5 元/月。",
        "price": "¥90.00 / 年",
        "discountedPrice": "折合约 ¥7.50 /月",
        "traffic": "70GB / 月",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "限时特惠年付方案，年费小包折合约 7.5 元/月",
          "每月高速流量 (70G)，所有节点 x1 倍率，高峰时段不降速",
          "适用于低流量用户学生党，每月自动刷新流量",
          "支持 10 元流量重置包，流量不足按需充值"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "极速版 🚀",
        "sub": "极速版套餐，兼顾日常网页浏览、社交通讯与影音娱乐。",
        "price": "¥25.00 / 月",
        "discountedPrice": "",
        "traffic": "130GB / 月",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "极速版套餐，日常主力推荐",
          "每月高速流量 (130G)，所有节点统一 x1 倍率扣费",
          "高峰时段不降速，每月自动刷新",
          "全 IPLC 专线网络，提供最高 2.5Gbps 稳定速率"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "超速版 ⚡",
        "sub": "超速版套餐，适合追剧、网课学习、日常下载与多端办公。",
        "price": "¥50.00 / 月",
        "discountedPrice": "",
        "traffic": "260GB / 月",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "超速版套餐，中度高频用户进阶优选",
          "每月高速流量 (260G)，所有节点 x1 倍率，高峰时段不降速",
          "全 IPLC 专线网络，提供最高 2.5Gbps 稳定速率",
          "原生 IP 线路，支持 4K/8K 极致秒开与各大 AI 助手"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "光速版 🌟",
        "sub": "光速版套餐，面向影视发烧友与高频生产力大流量需求。",
        "price": "¥99.00 / 月",
        "discountedPrice": "",
        "traffic": "550GB / 月",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "光速版套餐，影视爱好者与重度用户首选",
          "每月高速流量 (550G)，所有节点 x1 倍率，高峰时段不降速",
          "全 IPLC 专线网络，单节点峰值最高 2.5Gbps",
          "原生 IP 纯净线路，全平台流媒体 4K/8K 超高清畅连"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "跃迁版 🌌",
        "sub": "跃迁版套餐，每月 1.0TB (1000G) 极客级超大容量。",
        "price": "¥200.00 / 月",
        "discountedPrice": "",
        "traffic": "1.0TB / 月",
        "speed": "单节点最高 2.5Gbps",
        "devices": "不限",
        "features": [
          "跃迁版套餐，极客海量旗舰方案",
          "每月高速流量高达 1.0TB (1000G)，全节点统一 x1 真实倍率",
          "高峰时段不降速，全天候保障极致带宽吞吐与零丢包",
          "全 IPLC 专线网络，单节点峰值最高 2.5Gbps"
        ]
      }
    ]
  },
  {
    "id": "kuaili",
    "name": "快狸 KuaiLi",
    "rank": 35,
    "score": 9,
    "badge": "敏捷如狸・超值实惠",
    "categoryTag": "平价轻量",
    "tagline": "全线搭载旗舰级 IEPL 国际高速物理专线，智能路由自动择优，单节点峰值最高可达 2.5Gbps。全节点统一 1.0x 真实倍率扣费，晚高峰超低延迟、稳定不降速；覆盖森林小包、月狸尝鲜、灵狸进阶到天狸顶配 1.0TB 全阶梯，原生 IP 深度解锁 Netflix、Disney+、ChatGPT 及 TikTok。",
    "price": "¥15.00",
    "billingCycle": "/月起",
    "startQuota": "30GB/月起",
    "yearlyNote": "折合约 ¥10.00 /月",
    "traffic": "30GB ~ 1TB /月",
    "lineType": "全 IEPL 国际高速物理专线 / 智能择优路由",
    "streamingUnlock": "Netflix 4K / Disney+ / YouTube 8K / TikTok 全绿原生解锁",
    "aiUnlock": "OpenAI ChatGPT / Claude / Gemini 原生纯净 IP 支持",
    "clientSupport": [
      "Clash",
      "Sing-box",
      "Shadowrocket",
      "v2rayN"
    ],
    "tags": [
      "极限低价",
      "灵动轻巧",
      "备用神器",
      "超省钱"
    ],
    "features": [
      "全线采用旗舰级 IEPL 物理专线，单节点峰值最高至 2.5Gbps 极致大带宽",
      "智能路由自动择优调度，全节点统一 1x 真实计费倍率，晚高峰稳定顺滑不降速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "pros": [
      "全线采用旗舰级 IEPL 物理专线，单节点峰值最高至 2.5Gbps 极致大带宽",
      "智能路由自动择优调度，全节点统一 1x 真实计费倍率，晚高峰稳定顺滑不降速",
      "支持不限制同时在线设备数，多终端/软路由协同无忧"
    ],
    "cons": [
      "单月大流量套餐较少"
    ],
    "suitableFor": "备用梯子储备、低频轻量翻墙用户",
    "peakSpeed": "2.5 Gbps 峰值",
    "latency": "50 ms",
    "stabilityRate": "99.98%",
    "couponCode": "",
    "couponDesc": "官方直通特惠 / 周期折扣",
    "buyUrl": "https://work.kuailicloud.cc/#/?code=gVGJa0Mp",
    "reviewUrl": "/reviews/kuaili",
    "plans": [
      {
        "cycle": "年付",
        "name": "森狸年付小套餐 🌲",
        "sub": "流量政策：30G/月高速流量 (全节点 x1，晚高峰不降速)。",
        "price": "¥120.00 / 年",
        "discountedPrice": "折合约 ¥10.00 /月",
        "traffic": "30GB / 月",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：30G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok"
        ]
      },
      {
        "cycle": "月付",
        "name": "月狸月付小套餐 🌙",
        "sub": "流量政策：50G/月高速流量 (全节点 x1，晚高峰不降速)。",
        "price": "¥15.00 / 月",
        "discountedPrice": "",
        "traffic": "50GB / 月",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：50G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "小狸基础版 🦊",
        "sub": "流量政策：100G/月高速流量 (全节点 x1，晚高峰不降速)。",
        "price": "¥22.00 / 月",
        "discountedPrice": "",
        "traffic": "100GB / 月",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：100G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "灵狸标准版 ⚡",
        "sub": "流量政策：250G/月高速流量 (全节点 x1，晚高峰不降速)。",
        "price": "¥35.00 / 月",
        "discountedPrice": "",
        "traffic": "250GB / 月",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：250G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "夜狸强化版 🦉",
        "sub": "流量政策：500G/月高速流量 (全节点 x1，晚高峰不降速)。",
        "price": "¥95.00 / 月",
        "discountedPrice": "",
        "traffic": "500GB / 月",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：500G/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok"
        ]
      },
      {
        "cycle": "月付 / 季付 / 半年 / 年",
        "name": "天狸顶配版 🌌",
        "sub": "流量政策：1000G (1.0TB)/月高速流量 (全节点 x1，晚高峰不降速)。",
        "price": "¥180.00 / 月",
        "discountedPrice": "",
        "traffic": "1.0TB / 月",
        "speed": "单节点峰值至 2.5Gbps",
        "devices": "不限",
        "features": [
          "流量政策：1000G (1.0TB)/月高速流量（全节点 x1，晚高峰不降速）",
          "刷新规则：每 30 天自动刷新流量",
          "网络带宽：全 IEPL 专线，低延迟；单节点峰值至 2.5Gbps",
          "解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok"
        ]
      }
    ]
  }
];

export const SEO_METRICS = {
  "keyword": "2027机场榜",
  "siteTitle": "2027机场榜 - 2027年最新高性价比翻墙节点/高速稳定科学上网机场推荐评测",
  "siteDescription": "2027机场榜（jichangbang2027.blog）是专注于2027年最新科学上网梯子与机场评测排名的专业门户。我们严格实测各大IEPL/IPLC专线机场、平价高性价比机场、4K/8K流媒体解锁、ChatGPT/AI工具原生节点稳定性，为用户提供客观公正的2027机场排行榜与客户端使用教程。",
  "siteUrl": "https://jichangbang2027.blog",
  "keywordsList": [
    "2027机场榜",
    "2027机场推荐",
    "2027年稳定机场排行榜",
    "2027高性价比机场",
    "2027 IPLC专线机场",
    "科学上网机场评测",
    "翻墙梯子节点推荐2027",
    "隐形人机场",
    "暮光加速",
    "微风网络",
    "飞猫云",
    "大佬云",
    "Clash Verge 节点配置",
    "Sing-box 订阅节点",
    "Shadowrocket 机场订阅",
    "4K 8K Netflix解锁机场",
    "ChatGPT Claude 专用低风控节点"
  ]
};
