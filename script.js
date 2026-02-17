// Trending

const loadTrending = () => {
  const url = "https://fakestoreapi.com/products";
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    // .then((data) => console.log(data));
    .then((data) => displayTrendingProducts(data));
};

const displayTrendingProducts = (trendingP) => {
  // console.log(trendingP);
  const tpContainer = document.getElementById("trending-container");
  tpContainer.innerHTML = "";

  trendingP.forEach((tProduct) => {
    // console.log(tProduct);
    const card = document.createElement("div");
    card.innerHTML = `
   
    <div class="card bg-base-100 shadow-sm ">
  <figure class="p-4 h-48 sm:h-56">
    <img class="h-full w-full object-contain"
      src=${tProduct.image} />
  </figure>
  <div class="card-body">
  <div class="flex">
      <p class="badge badge-primary text-tiny">${tProduct.category}</p>

<p>${tProduct.rating.rate}</p>
<p>${tProduct.rating.count}</p>
</div>
  </div>
    <h2 class="card-title">
      ${tProduct.title}
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Details</div>
      <div class="badge badge-outline">Add</div>
    </div>
  </div>
</div>
    `;

    tpContainer.append(card);
  });
};
loadTrending();
