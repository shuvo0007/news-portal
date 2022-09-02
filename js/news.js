const categoryId = (id) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayCards(data));
};

function displayCards(data) {
  const itemDetails = data.data;
  const itemSection = document.getElementById("card-item");
  itemSection.innerHTML = "";
  for (const item of itemDetails) {
    const categoryDiv = document.createElement("div");
    // categoryDiv.classList.add('m-5');
    categoryDiv.innerHTML = `
    <div class="flex m-5 bg-white rounded-xl p-7">
      <div class="">
        <img class="w-auto h-96 rounded-lg " src="${item.image_url}" alt="">
      </div>
      <div>
        <div class="px-10">
          <h2 class="text-3xl font-semibold py-5">${item.title}</h2>
          <p class="text-2xl">${item.details.slice(0,350)}...</p>
          <div class="flex flex-row m-5 justify-between">
            <div class="flex">
              <img class="w-16 rounded-full " src="${item.author.img}" alt="">
              <div class="px-5">
                <p class="text-2xl">${item.author.name}</p>
                <p class="text-2xl">${item.author.published_date.slice(0,10)}</p>
              </div>
            </div>
            <p class="text-2xl pt-5"><i class="fa-solid fa-eye"></i> ${item.total_view}</p>
            <button class="text-4xl "><i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
    `;
    itemSection.appendChild(categoryDiv);
  }
}
