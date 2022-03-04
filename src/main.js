const starShipsApi = async () => {
  const response = await fetch("https://swapi.dev/api/starships/");
  const starship = await response.json();

  return starship;
};

export default starShipsApi;
