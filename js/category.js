fetch("https://openapi.programming-hero.com/api/news/categories")
  .then(res => res.json())
  .then(data => displayCetagories(data));

function displayCetagories(data) {
  const categories = data.data.news_category;
  const categorySection = document.getElementById('category-list');
    for(const list of categories){
      console.log(list.category_name);
      const categoryDiv = document.createElement('div');
      categoryDiv.innerHTML=`
      <button class="text-lg p-5">${list.category_name}</button>
      `
      categorySection.appendChild(categoryDiv);
    }

}
