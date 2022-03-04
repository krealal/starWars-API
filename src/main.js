export const starShipsApi = async () => {
  const response = await fetch(process.env.REACT_APP_STARWARSAPI);
  const starship = await response.json();

  return starship;
};

export const countStartShip = async () => {
  const { count } = await starShipsApi();
  return count;
};

export const classShips = async () => {
  const pages = [1, 2, 3, 4];

  const shipsPromsesas = pages.map(async (page) => {
    const response = await fetch(`${process.env.REACT_APP_PAGE}${page}`);
    const { results } = await response.json();
    return results;
  });

  const ships = await Promise.all(shipsPromsesas);

  const totalShips = [];

  ships.forEach((ship) => {
    ship.forEach((item) => {
      totalShips.push(item.starship_class);
    });
  });

  return totalShips;
};
