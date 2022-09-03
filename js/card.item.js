const categoryId = (id) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayCards(data));
};

const itemName = document.getElementById('categoryName');
function displayCards(data) {
  let newsCount = 0;
  const countDiv = document.getElementById("newsCount");

  const itemDetails = data.data;

  const itemSection = document.getElementById("card-item");
  itemSection.innerHTML = "";
  if (itemDetails != "") {
    for (const item of itemDetails) {
      newsCount++;
      const categoryDiv = document.createElement("div");
      categoryDiv.innerHTML = `
      <div class="flex m-5 bg-white rounded-xl p-7">
        <img class="rounded-lg " src="${item.thumbnail_url}" alt="">
        <div>
          <div class="px-10">
            <h2 class="text-3xl font-semibold py-5">${item.title}</h2>
            <p class="text-2xl">${item.details.slice(0, 350)}...</p>
            <div class="flex flex-row m-5 justify-between">
              <div class="flex">
                <img class="w-16 rounded-full " src="${item.author.img}" alt="">
                <div class="px-5">
                  <p class="text-2xl">${
                    item.author.name ? item.author.name : "Not Found"
                  }</p>
                  <p class="text-2xl">${
                    item.author.published_date
                      ? item.author.published_date.slice(0, 10)
                      : "Not Found"
                  }</p>
                </div>
              </div>
              <p class="text-2xl pt-5"><i class="fa-solid fa-eye"></i> ${
                item.total_view ? item.total_view : "Not Found"
              }</p>

              <button onclick="newsId('${
                item._id
              }')" class="block text-4xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center " type="button"><i class="fa-solid fa-arrow-right" ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      `;

      
      toggleSpinner(false);
      itemSection.appendChild(categoryDiv);
    }
  } else {
    toggleSpinner(false);
    itemSection.innerHTML = "";
  }
  
  countDiv.innerText = newsCount;
}


function categoryName(name){
  itemName.innerText = "";
  itemName.innerText = name;
}
