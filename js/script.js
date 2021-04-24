'use strict';

/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});*/

const titleClickHandler = function(event){
  const clickedElement = this;  //czym dokladnie jest this? Jaka pelni tutaj funkcje? Czy dokladniejsze poznanie nastapi w kolejnych modulach?
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');  //skad przegladarka wie czym jest activeLink, skoro zmienna activeLink nie jest zadeklarowana?
  }

  /* add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  console.log('clickedElement:', clickedElement);

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active'); //skad przegladarka wie czym jest activeLink, skoro zmienna activeLink nie jest zadeklarowana?
  }

  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');

  console.log('articleSelector: ', articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);

  console.log('targetArticle: ', targetArticle);

  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  console.log('titleList: ', titleList);

  /* for each title */

  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for(let article of articles){

    /* get the article id */

    const articleId = article.getAttribute('id');

    console.log('articleId: ', articleId);

    /* find the title element */
    /* get the title from the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    console.log('articleTitle: ', articleTitle);

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    console.log('kod HTML: ', linkHTML);

    /* insert link into titleList */

    /*titleList.innerHTML = titleList.innerHTML + linkHTML;*/
    /*titleList.insertAdjacentHTML('afterend', linkHTML);*/
    html = html + linkHTML;

    /*console.log('zmienna html: ', html);*/

  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  console.log('links: ', links);

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

function generateTags(){
  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */

  for(let article of articles){

    /* find tags wrapper */

    const articleList = article.querySelector(optArticleTagsSelector);

    console.log('articleList: ', articleList);

    /* make html variable with empty string */

    let html = '';

    /* get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags: ', articleTags);

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */

    for(let tag of articleTagsArray){
      console.log('tag: ', tag);

      /* generate HTML of the link */

      const tagHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>'

      console.log('tagHTML: ', tagHTML);

      /* add generated code to html variable */

      html = html + tagHTML;

    /* END LOOP: for each tag */

    }

    /* insert HTML of all the links into the tags wrapper */

    articleList.innerHTML = html;

    //console.log('articleList.innerHTML: ', );

  /* END LOOP: for every article: */

  }

}

generateTags();
