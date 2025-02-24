// 15. HTTP-запросы
import { URL } from 'url';
import axios from 'axios';

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/gi;
  const results = content.matchAll(linkRx);
  return Array.from(results)
    .map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

export const getBadLinks = async (url) => {
  const response = await axios.get(url);
  const links = extractLinks(response.data);
  return links.reduce(async (acc, link) => {
    try {
      await axios.get(link);
    } catch (e) {
      (await acc).push(link);
    }
    return acc;
  }, Promise.resolve([]));
};

const url = 'https://github.com';
const links = await getBadLinks(url);
console.log(links);
// Гипотетический пример:
// [
//   'https://privet.hexlet/somepage',
//   'https://privet.hexlet/another/page',
// ]
