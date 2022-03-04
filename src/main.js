export const starShipsApi = async () => {
  const response = await fetch(process.env.REACT_APP_STARWARSAPI);
  const starship = await response.json();

  return starship;
};

export const countStartShip = async () => {
  const { count } = await starShipsApi();
  return count;
};

const classShips = async () => {
  //const { results } = await starShipsApi;

  const pages = [1, 2, 3, 4];
  const shipsPromsesas = pages.map(async (page) => {
    const response = await fetch(`${process.env.REACT_APP_PAGE}${page}`);
    const { results } = await response.json();
    return results;
  });

  const ships = await Promise.all(shipsPromsesas);
  return ships;
};
