import type { FaqCategory, FaqItem, RelatedAirportRef } from './faqs/types';
import { NETWORK_FAQS } from './faqs/network';
import { AI_STREAMING_FAQS } from './faqs/ai-streaming';
import { CLIENTS_FAQS } from './faqs/clients';
import { SAFETY_FAQS } from './faqs/safety';
import { DEVELOPER_FAQS } from './faqs/developer';
import { HARDWARE_FAQS } from './faqs/hardware';

export type { FaqCategory, FaqItem, RelatedAirportRef };

export const FAQ_CATEGORIES: FaqCategory[] = [
  '专线与网络架构',
  'AI与流媒体解锁',
  '客户端与故障排查',
  '避坑与安全选购',
  '开发与极客进阶',
  '路由器与硬件设备',
];

export const FAQS_DATA: FaqItem[] = [
  ...NETWORK_FAQS,
  ...AI_STREAMING_FAQS,
  ...CLIENTS_FAQS,
  ...SAFETY_FAQS,
  ...DEVELOPER_FAQS,
  ...HARDWARE_FAQS,
];
