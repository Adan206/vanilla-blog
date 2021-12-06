const createArticle = (event) => {
  event.preventDefault();
  const articleTitleElement = document.querySelector("#article-title");
  const articleContentElement = document.querySelector("#article-content");
  const articleSection = document.querySelector("#article-section");

  const nextArticle = document.createElement("ARTICLE");
  const articleHeading = document.createElement("H3");
  const articleParagraph = document.createElement("P");

  nextArticle.append(articleHeading);
  nextArticle.append(articleParagraph);
  articleSection.append(nextArticle);

  articleParagraph.innerText = articleContentElement.value;
  articleHeading.innerText = articleTitleElement.value;
};
