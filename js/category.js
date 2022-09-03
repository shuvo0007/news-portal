fetch(`https://openapi.programming-hero.com/api/news/categories`)
  .then((res) => res.json())
  .then((data) => displayCetagories(data));

function displayCetagories(data) {

  const categories = data.data.news_category;
  const categorySection = document.getElementById("category-list");
  for (const list of categories) {
    const categoryDiv = document.createElement("div");
    onload = categoryId(list.category_id);
    categoryDiv.innerHTML = `
          <button onclick="toggleSpinner(true), categoryName('${list.category_name}') , categoryId('${list.category_id}')" class="text-lg p-5 hover:text-white hover:bg-blue-800 rounded-lg ">${list.category_name}</button>
        `;
    categorySection.appendChild(categoryDiv);
  }
}

const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("hidden");
  } else {
    loaderSection.classList.add("hidden");
  }
};
