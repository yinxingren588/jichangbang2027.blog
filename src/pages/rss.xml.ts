import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SEO_METRICS } from '../data/airports';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const faqs = await getCollection('faqs');

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  const items = [
    ...sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/posts/${post.id}`,
    })),
    ...faqs.map((faq) => ({
      title: `[技术百科] ${faq.data.question}`,
      pubDate: new Date(faq.data.updatedDate || faq.data.pubDate || '2026-11-25'),
      description: faq.data.summary,
      link: `/faq/${faq.id}`,
    })),
  ];

  return rss({
    title: '2027机场榜 - 科学上网与稳定翻墙节点评测',
    description: SEO_METRICS.siteDescription,
    site: context.site?.toString() || 'https://jichangbang2027.blog',
    items,
    customData: `<language>zh-cn</language>`,
  });
}
