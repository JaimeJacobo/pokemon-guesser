import { useState, useEffect } from "react";

export const useGetFormattedPokemon = () => {
  const ALL_POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/?limit=905";
  const POKEMON_IMAGE_URL = "https://www.serebii.net/pokemongo/pokemon/";

  const [pokemons, setPokemons] = useState([]);

  const getGeneration = (id) => {
    if (id >= 1 && id <= 150) return 1;
    if (id >= 152 && id <= 251) return 2;
    if (id >= 252 && id <= 386) return 3;
    if (id >= 387 && id <= 493) return 4;
    if (id >= 494 && id <= 649) return 5;
    if (id >= 650 && id <= 721) return 6;
    if (id >= 722 && id <= 809) return 7;
    if (id >= 810 && id <= 905) return 8;
  };

  const formatName = (pokemonName) => {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  };

  const getFormattedImageUrl = (id) => {
    const stringId = id.toString();

    return {
      1: `${POKEMON_IMAGE_URL}00${id}.png`,
      2: `${POKEMON_IMAGE_URL}0${id}.png`,
      3: `${POKEMON_IMAGE_URL}${id}.png`,
    }[stringId.length];
  };

  useEffect(() => {
    const fetchData = async () => {
      const pokemonsFromFirstFetch = (
        await (await fetch(ALL_POKEMON_URL)).json()
      ).results;

      const formattedPokemon = await Promise.all(
        pokemonsFromFirstFetch.map(async (pokemon) => {
          const pokeInfoFromApi = await (await fetch(pokemon.url)).json();
          const { name, height, weight, types, id } = pokeInfoFromApi;
          return {
            id,
            name: formatName(name),
            height,
            weight,
            types,
            generation: getGeneration(id),
            imageUrl: getFormattedImageUrl(id),
          };
        })
      );

      setPokemons(formattedPokemon);
    };

    fetchData();
  }, []);

  return pokemons;
};
