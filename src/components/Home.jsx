//List with links + API call + mapping

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const apiPokemons = `https://pokeapi.co/api/v2/pokemon/`;
  const [pokemons, setPokemons] = useState(null);

  const fetchPokemons = async () => {
    fetch(apiPokemons)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setPokemons(data.results);
          console.log(data.results);
        } else {
          throw new Error("Couldn't fetch the API data");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <main>
        <ul>
          {pokemons &&
            pokemons.map((pokemon) => (
              <li key={pokemon.name}>
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
              </li>
            ))}
        </ul>
      </main>
      ;
    </>
  );
};
