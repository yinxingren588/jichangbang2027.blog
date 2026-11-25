/**
 * Bing IndexNow API Instant Submission Script for https://jichangbang2027.blog
 * Automatically discovers all static pages, brand review pages, blog posts, and FAQ articles.
 * Usage: node --experimental-strip-types scripts/indexnow.js
 */
import fs from 'node:fs';
import path from 'node:path';
import { AIRPORT_LIST } from '../src/data/airports.ts';

const HOST = 'jichangbang2027.blog';
const KEY = 'jichangbang2027seoindexnowkey'; // Replace with your IndexNow key if changed in Bing Webmaster Tools
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const corePages = [
  `https://${HOST}/`,
  `https://${HOST}/ranking`,
  `https://${HOST}/reviews`,
  `https://${HOST}/clients`,
  `https://${HOST}/guide`,
  `https://${HOST}/faq`,
  `https://${HOST}/posts`,
  `https://${HOST}/sitemap`,
];

const reviewUrls = AIRPORT_LIST.map((a) => `https://${HOST}/reviews/${a.id}`);

const postSlugs = fs
  .readdirSync(path.resolve('src/content/posts'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => `https://${HOST}/posts/${f.replace(/\.md$/, '')}`);

const faqSlugs = fs
  .readdirSync(path.resolve('src/content/faqs'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => `https://${HOST}/faq/${f.replace(/\.md$/, '')}`);

const URL_LIST = [...corePages, ...reviewUrls, ...postSlugs, ...faqSlugs];

async function submitToIndexNow() {
  console.log(`[IndexNow] Starting URL submission to Bing for ${HOST}...`);
  console.log(`[IndexNow] Submitting ${URL_LIST.length} URLs (Core + ${reviewUrls.length} Brand Reviews + ${postSlugs.length} Posts + ${faqSlugs.length} FAQs)...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`[IndexNow] Successfully submitted to Bing! HTTP Status: ${response.status}`);
    } else {
      console.log(`[IndexNow] Received HTTP Status: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.error(`[IndexNow] Request failed:`, err.message);
  }
}

submitToIndexNow();
