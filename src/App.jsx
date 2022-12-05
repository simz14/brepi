import { useEffect, useState } from "react";
import { getBeers } from "./services/beerService";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataRetrieve = async () => {
      const beers = await getBeers();

      if (beers) {
        setData(beers);
      }
    };
    dataRetrieve();
  }, []);
  return (
    <div>
      {data.map((beer) => (
        <li>{beer.name}</li>
      ))}
    </div>
  );
}

export default App;
