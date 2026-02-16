// Trending

const loadTrending = () => {
  const url = "https://fakestoreapi.com/products";
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    // .then((data) => console.log(data));
    .then((data) => displayTrendingProducts(data));
};

const displayTrendingProducts = (tendingP) => {
  console.log(tendingP);
};
loadTrending();
