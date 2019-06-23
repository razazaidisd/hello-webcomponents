import { topHeadlinesUrl } from './api.js';
import './news-article.js';


window.addEventListener('load', () => {
  getNews();
});


async function getNews() {
  const res = await fetch(topHeadlinesUrl);
  const json = await res.json();
console.log({json, res});

  const main = document.querySelector('main');

  json.articles.forEach(article => {
    const el = document.createElement('news-article');
    el.article = article;
    main.appendChild(el);
  });
}