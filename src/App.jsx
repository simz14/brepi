import { useEffect, useState } from "react";
import styled from "styled-components";
import Beer from "./components/Beer";
import Pagination from "./components/Pagination";
import { getBeers } from "./services/beerService";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [beersPerPage, setbeersPerPage] = useState(8);

  useEffect(() => {
    const dataRetrieve = async () => {
      const beers = await getBeers();

      if (beers) {
        setData(beers);
      }
    };
    dataRetrieve();
  }, []);

  const lastBeerIndex = currentPage * beersPerPage;
  const firstBeerIndex = lastBeerIndex - beersPerPage;
  const currentBeers = data.slice(firstBeerIndex, lastBeerIndex);

  const paginateHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ContentWrapper>
      {currentBeers.map((beer) => (
        <Beer key={beer.name} beer={beer} />
      ))}
      <Pagination
        beersPerPage={beersPerPage}
        totalBeers={data.length}
        paginate={paginateHandler}
      />
    </ContentWrapper>
  );
}

export default App;
