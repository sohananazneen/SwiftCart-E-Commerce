// Trending products

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

  trendingP.slice(0, 3).forEach((tProduct) => {
    // console.log(tProduct);
    const card = document.createElement("div");
    card.innerHTML = `   
        <div class="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col">    
          <figure class="p-4 h-48 sm:h-56">
            <img 
              src="${tProduct.image}" 
              alt="product image"
              class="h-full w-full object-contain"
            />
          </figure>
          <div class="card-body flex flex-col flex-grow p-4">
            <div class="flex justify-between items-center mb-2 text-sm">
              <span class="badge badge-primary text-xs">
                ${tProduct.category}
              </span>
              <div class="flex items-center gap-1">
              <div class="text-yellow-500">
              <i class="fa-solid fa-star"></i>
              </div>
              <div>
                <span>
                ${tProduct.rating.rate}
                </span>
                <span>
                  (${tProduct.rating.count})
                </span>
                </div>
              </div>
            </div>
            <h2 class="card-title text-sm md:text-base line-clamp-2 min-h-[48px] truncate ">
              ${tProduct.title}
            </h2>
            <p class="text-lg font-bold mt-2">
              $${tProduct.price}
            </p>
            <div class="card-actions mt-auto flex gap-3">  
              <button class="btn btn-sm sm:btn-md btn-outline flex-1 w-full">
                <i class="fa-regular fa-eye"></i>
                <span class="ml-1">Details</span>
              </button>
              <button class="btn btn-sm sm:btn-md btn-primary flex-1 w-full">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="ml-1">Add</span>
              </button>
            </div>
          </div>
        </div>
    `;

    tpContainer.append(card);
  });
};
loadTrending();

// for Product page
const loadAllProducts = () => {
  const url = "https://fakestoreapi.com/products";
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => displayAllProducts(data));
};

const removeActive = () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  // console.log(categoryButtons);
  categoryButtons.forEach((btn) => btn.classList.remove("active"));
};
const loadProductByCategory = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`category-btn-'${category}'`);
      // console.log(clickBtn);
      clickBtn.classList.add("active");
      displayAllProducts(data);
    });
};
const displayAllProducts = (allProduct) => {
  // console.log(allProduct);
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";
  allProduct.forEach((allProducts) => {
    // console.log(allProducts);
    const card = document.createElement("div");
    card.innerHTML = `   
          <div class="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 h-full flex flex-col">    
            <figure class="p-4 h-48 sm:h-56">
              <img 
                src="${allProducts.image}" 
                alt="product image"
                class="h-full w-full object-contain"
              />
            </figure>
            <div class="card-body flex flex-col flex-grow p-4">
              <div class="flex justify-between items-center mb-2 text-sm">
                <span class="badge badge-primary text-xs">
                  ${allProducts.category}
                </span>
                <div class="flex items-center gap-1">
                <div class="text-yellow-500">
                <i class="fa-solid fa-star"></i>
                </div>
                <div>
                  <span>
                  ${allProducts.rating.rate}
                  </span>
                  <span>
                    (${allProducts.rating.count})
                  </span>
                  </div>
                </div>
              </div>
              <h2 class="card-title text-sm md:text-base line-clamp-2 min-h-[48px] truncate">
                ${allProducts.title}
              </h2>
              <p class="text-lg font-bold mt-2">
                $${allProducts.price}
              </p>
              <div class="card-actions mt-auto flex gap-3">  
                <button class="btn btn-sm sm:btn-md btn-outline flex-1 w-full">
                  <i class="fa-regular fa-eye"></i>
                  <span class="ml-1">Details</span>
                </button>
                <button class="btn btn-sm sm:btn-md btn-primary flex-1 w-full">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span class="ml-1">Add</span>
                </button>
              </div>
            </div>
          </div>
    `;
    productsContainer.append(card);
  });
};

const loadCategory = () => {
  const url = "https://fakestoreapi.com/products/categories";
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    // .then((data) => console.log(data));
    .then((data) => displayCategories(data));
};
const displayCategories = (category) => {
  // console.log(category);
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  const allBtnDiv = document.createElement("div");
  allBtnDiv.innerHTML = `
    <button onclick="loadAllProducts()" class="btn btn-outline btn-primary rounded-full">
      All 
    </button>
  `;
  categoryContainer.append(allBtnDiv);

  for (let categories of category) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button id="category-btn-'${categories}'" onclick="loadProductByCategory('${categories}')" class="btn btn-outline btn-primary rounded-full category-btn">${categories}</button>
    `;
    categoryContainer.append(btnDiv);
  }
};
loadAllProducts();
loadCategory();
