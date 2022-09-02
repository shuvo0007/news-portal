const categoryId = (id) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayCards(data));
};

function displayCards(data) {
  console.log(data.data);
}
