//Renders details
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  const fetchPokemon = async () => {
    const apiPokemon = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(apiPokemon)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setPokemon(data.results);
          console.log(data.results);
        } else {
          throw new Error("Couldn't fetch the API data");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  //   if(name) {
  //     console.log(name);
  //   }

  return <div>Hello</div>;
};
