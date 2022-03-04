export const starShipsApi = async () => {
  const response = await fetch(process.env.REACT_APP_STARWARSAPI);
  const starship = await response.json();

  return starship;
};

export const countStartShip = async () => {
  const { count } = await starShipsApi();
  return count;
};
