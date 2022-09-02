function newsId(news_id){
  fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
  .then((res) => res.json())
    .then((data) => newsDetails(data));
}

function newsDetails(data){
  
}