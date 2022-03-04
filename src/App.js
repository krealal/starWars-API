import { useState } from "react";
import { classShips, countStartShip } from "./main";

function App() {
  const [ships, setShips] = useState();
  const [shipsClasses, setShipsClasses] = useState([]);

  (async () => {
    setShipsClasses(await classShips());
    setShips(await countStartShip());
  })();

  return (
    <div id="background-container">
      <header id="header-title">Star Wars Test</header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id="total-ships">Total ships: {ships} </p>
        <h2>Starships by class:</h2>
        <ul>
          {shipsClasses.map((ship, index) => (
            <li key={index}>{ship}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
