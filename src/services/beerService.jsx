export const fetchBeers = async () => {
  const response = await fetch("https://api.punkapi.com/v2/beers?per_page=30")
    .then((res) => res.json())
    .catch((err) => err);

  console.log(response);
};
