function newsId(news_id) {
  fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
    .then((res) => res.json())
    .then((data) => newsDetails(data));
}

function hideModal() {
  const modal = document.getElementById("modalDiv");
  modal.classList.add("hidden");
}

function newsDetails(data) {
  const allNews = data.data;
  allNews.forEach((allNews) => {
    const newsDetails = document.getElementById("news-details");
    newsDetails.innerHTML = `
      <!-- Main modal -->
      <div id="modalDiv" tabindex="-1" class=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center  flex" aria-modal="true" role="dialog">
          <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow ">
                  <!-- Modal header -->
                  <div class="flex justify-between items-start p-4 rounded-t border-b ">
                      <h3 class="text-xl font-semibold text-gray-900 ">
                          ${allNews.title}
                      </h3>
                      <button onclick="hideModal()" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" >
                          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          <span class="sr-only">Close modal</span>
                      </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-6 space-y-6">
                      <p class="text-base leading-relaxed text-gray-500 text-justify">
                      ${allNews.details}
                      </p>
                      <div class="flex flex-row justify-evenly">
                        <div class="flex">
                          <img class="w-16 rounded-full " src="${
                            allNews.author.img
                          }" alt="">
                          <div class="px-5">
                          <p class="">${
                            allNews.author.name
                              ? allNews.author.name
                              : "No data found"
                          }</p>
                          <p class="">${
                            allNews.author.published_date
                              ? allNews.author.published_date
                              : "No data found"
                          }</p>
                        </div>
                      </div>
                      <p class="pt-5"><i class="fa-solid fa-eye"></i> ${
                        allNews.total_view ? allNews.total_view : "No data found"
                      }</p>
                      </div>
                  </div>
                  <!-- Modal footer -->
                  <div class="flex justify-center items-center p-6 space-x-2 rounded-b border-t border-gray-200 ">
                      <button onclick="hideModal()" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">OK</button>
                  </div>
              </div>
          </div>
      </div>

    `;
  });
}