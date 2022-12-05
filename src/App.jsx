import { useEffect, useState } from "react";
import styled from "styled-components";
import Beer from "./components/Beer";
import { getBeers } from "./services/beerService";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 45px;
`;

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
    <ContentWrapper>
      {data.map((beer) => (
        <Beer key={beer.name} beer={beer} />
      ))}
    </ContentWrapper>
  );
}

export default App;
