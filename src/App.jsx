import { fetchBeers } from "./services/beerService";

function App() {
  fetchBeers();
  return <div>Hello</div>;
}

export default App;
