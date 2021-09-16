import { useEffect, useState } from "react";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return pokemons;
};

export default usePokemons;
