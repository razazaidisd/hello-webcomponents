class NewsArticle extends HTMLElement {
	constructor() {
		super();
	}

	set article(article){
	 this.innerHTML = `
          <a href="${article.url}" class="article">
            <h2>${article.title}</h2>
            <img src="${article.urlToImage ? article.urlToImage : ''}">
            <p>${article.description}</p>
          </a>`;
	}
}

customElements.define('news-article', NewsArticle);
