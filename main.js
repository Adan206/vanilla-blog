const createArticle = (event) => {
  event.preventDefault();
  const articleTitleElement = document.querySelector("#article-title"); // title input
  const articleContentElement = document.querySelector("#article-content"); // text area input
  const articleSection = document.querySelector("#article-section"); // first article element

  const nextArticle = document.createElement("ARTICLE"); // article element
  const articleHeading = document.createElement("H3"); // heading 3
  const articleParagraph = document.createElement("P"); //paragragh

  nextArticle.append(articleHeading);
  nextArticle.append(articleParagraph);
  articleSection.append(nextArticle);

  articleParagraph.innerText = articleContentElement.value;
  articleHeading.innerText = articleTitleElement.value;
};
