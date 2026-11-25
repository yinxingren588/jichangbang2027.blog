import fs from 'node:fs';
import path from 'node:path';
import { NETWORK_FAQS } from '../src/data/faqs/network.ts';
import { AI_STREAMING_FAQS } from '../src/data/faqs/ai-streaming.ts';
import { CLIENTS_FAQS } from '../src/data/faqs/clients.ts';
import { SAFETY_FAQS } from '../src/data/faqs/safety.ts';
import { DEVELOPER_FAQS } from '../src/data/faqs/developer.ts';
import { HARDWARE_FAQS } from '../src/data/faqs/hardware.ts';

const ALL_FAQS = [
  ...NETWORK_FAQS,
  ...AI_STREAMING_FAQS,
  ...CLIENTS_FAQS,
  ...SAFETY_FAQS,
  ...DEVELOPER_FAQS,
  ...HARDWARE_FAQS,
];

const faqsDir = path.resolve('src/content/faqs');
if (fs.existsSync(faqsDir)) {
  for (const file of fs.readdirSync(faqsDir)) {
    if (file.endsWith('.md')) {
      fs.unlinkSync(path.join(faqsDir, file));
    }
  }
} else {
  fs.mkdirSync(faqsDir, { recursive: true });
}

for (const faq of ALL_FAQS) {
  const filePath = path.join(faqsDir, `${faq.id}.md`);
  const frontmatter = `---
title: "${faq.question.replace(/"/g, '\\"')}"
question: "${faq.question.replace(/"/g, '\\"')}"
summary: "${faq.summary.replace(/"/g, '\\"')}"
category: "${faq.category}"
keywords: ${JSON.stringify(faq.keywords)}
pubDate: "2026-11-20"
updatedDate: "2026-11-25"
author: "2027机场榜技术专家组"
---

${faq.detailedContent.trim()}
`;

  fs.writeFileSync(filePath, frontmatter, 'utf-8');
}

console.log(`Generated ${ALL_FAQS.length} independent FAQ markdown files successfully!`);
