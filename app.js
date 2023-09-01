// Progression 1: create a function and fetch the API using axios

document.addEventListener('DOMContentLoaded', function () {

  const blog = document.getElementById('blog');

  function getDate() {
    axios
      .get(
        'https://gnews.io/api/v4/top-headlines?token=d1903927956eedce258c43ae64bb345e&lang=en'
      )
      .then((res) => {
        const articleList = res.data.articles;
        articleList.forEach((el) => {
          const newArticle = document.createElement('div');
          newArticle.setAttribute('class', 'article');

          const title = document.createElement('h3');
          title.innerText = el.title;

          const img = document.createElement('img');
          img.setAttribute('src', el.image);

          const desc = document.createElement('p');
          desc.innerText = el.description;

          newArticle.appendChild(title);
          newArticle.appendChild(img);
          newArticle.appendChild(desc);

          blog.appendChild(newArticle);
        });
      });
  }

  getDate();
});
