export const getBeers = () => {
  return fetch("https://api.punkapi.com/v2/beers?per_page=50")
    .then((response) => response.json())
    .then((data) => data);
};
