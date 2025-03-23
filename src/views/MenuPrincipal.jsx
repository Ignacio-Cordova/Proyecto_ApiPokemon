import Pokemon from "../components/molecules/Pokemon";
import BarraBusqueda from "../components/organisms/BarraBusqueda";
import { useState, useEffect } from "react";

import "./Movies.css";
let aux = [];

function Movies() {
  const [pokemon, setPokemon] = useState([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");
  const [regionSeleccionada, setRegionSeleccionada] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filtroActual, setFiltroActual] = useState([]);


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  
async function conseguirAtributosPokemon(pokemones) {
  const updatedPokemones = [];

  for (let i = 0; i < pokemones.length; i++) {
    try {
      const pokemon = pokemones[i];

      const res = await fetch(pokemon.url);
      if (!res.ok) throw new Error(`No encontrado: ${pokemon.name}`);
      const data = await res.json();

      const res2 = await fetch(data.species.url);
      if (!res2.ok) throw new Error(`No species encontrado: ${pokemon.name}`);
      const data2 = await res2.json();

      const res3 = await fetch(data2.generation.url);
      if (!res3.ok) throw new Error(`No generation encontrado: ${pokemon.name}`);
      const data3 = await res3.json();

      updatedPokemones.push({
        name: pokemon.name,
        url: pokemon.url,
        types: data.types.map((type) => type.type.name),
        image: data.sprites.front_default,
        region: data3.main_region.name,
      });

      await delay(0.5);

    } catch (error) {
      console.error(`Error con ${pokemones[i].name}:`, error.message);
    }
  }

  console.log(updatedPokemones);
  return updatedPokemones;
}


  const getPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      const data = await res.json();
      const pokemonesConAtributos = await conseguirAtributosPokemon(
        data.results
      );
      setPokemon(pokemonesConAtributos);
      setFiltroActual(pokemonesConAtributos);
      setLoading(false);
      console.log(pokemon);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (regionSeleccionada !== "") {
      setRegionSeleccionada(regionSeleccionada);
      return;
    }
    getPokemon();
  }, []);

  useEffect(() => {
    let filtrados = pokemon;
  
    if (search !== "") {
      if (search == "todos") {
        filtrados = filtrados;
      }
      else {
        filtrados = filtrados.filter((p) => p.name.includes(search));
      }
    }
  
    if (tipoSeleccionado !== "") {
      if (tipoSeleccionado == "todos") {
        filtrados = filtrados;
      }
      else{
      filtrados = filtrados.filter((p) => p.types.includes(tipoSeleccionado));
      }
    }

    if (regionSeleccionada !== "") {
      if (regionSeleccionada == "todas") {
        filtrados = filtrados;
      }
      else{
      filtrados = filtrados.filter((p) => p.region === regionSeleccionada);
      }
    }
    setFiltroActual(filtrados);
  }, [search, tipoSeleccionado, pokemon, regionSeleccionada]);

  if (loading) return (
    <div className="cajaCargando">
      <p className="cargandoDB">Cargando...</p>
    </div>
  )
    
  if (error) return <p>Error</p>;

  return (
    <>
      <BarraBusqueda
        search={search}
        setSearch={setSearch}
        tipoSeleccionado={tipoSeleccionado}
        setTipoSeleccionado={setTipoSeleccionado}
        regionSeleccionada={regionSeleccionada}
        setRegionSeleccionada={setRegionSeleccionada}
      />
      <div className="contenedorPokemons">
        {Array.isArray(filtroActual) && filtroActual.map((pokemon, index) => {
          return (
            <div className="pokemon" key={index} onClick={async () => {
              window.open(`/InformacionPokemon/${pokemon.name}`, '_blank');
            }}>
              <Pokemon
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                type={pokemon.types}
                image={pokemon.image}
                region={pokemon.region}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Movies;
