import { useEffect, useState } from "react";

export const FetchBeers = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://api.punkapi.com/v2/beers?per_page=30")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((beer) => (
        <li>{beer.name}</li>
      ))}
    </div>
  );
};
