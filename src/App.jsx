import { useEffect, useState } from "react";
import { FetchBeers } from "./services/beerService";

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <div>Hello</div>
      <FetchBeers />
    </div>
  );
}

export default App;
