function getArticleGenerator(articles) {
    return () => {
      if(articles.length > 0) {
        let div = document.getElementById("content");
        let article = document.createElement("article");
        let firstItem = articles.shift();
        article.textContent = firstItem;
        div.appendChild(article);
        
      }
        
    }
  }
  