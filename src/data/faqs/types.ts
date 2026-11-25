export type FaqCategory =
  | '专线与网络架构'
  | 'AI与流媒体解锁'
  | '客户端与故障排查'
  | '避坑与安全选购'
  | '开发与极客进阶'
  | '路由器与硬件设备';

export interface RelatedAirportRef {
  name: string;
  url: string;
  badge: string;
  reason: string;
}

export interface FaqItem {
  id: string;
  question: string;
  category: FaqCategory;
  summary: string;
  answer: string;
  detailedContent: string;
  keywords: string[];
  relatedAirports: RelatedAirportRef[];
  relatedFaqs: string[];
}
