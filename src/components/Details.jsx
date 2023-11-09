//Renders details
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();
  const params = useParams();
  console.log(params);
  console.log(name);

  const fetchPokemon = async () => {
    const apiPokemon = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(apiPokemon)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          setPokemon(data);
        } else {
          throw new Error("Couldn't fetch the API data");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (!pokemon) {
    return <div>No pokemon found.</div>;
  }

  return (
    <div>
      <p>Details</p>
      {pokemon.name}
    </div>
  );
};
