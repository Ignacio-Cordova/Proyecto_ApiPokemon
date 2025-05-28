import { useState, useEffect } from "react";
import Pokemon from "../components/molecules/Pokemon";
import BarraBusqueda from "../components/organisms/BarraBusqueda";
import "../styles/menuPrincipal.css";

function MenuPrincipal() {
  // Estados
  const [pokemon, setPokemon] = useState([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState("");
  const [regionSeleccionada, setRegionSeleccionada] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filtroActual, setFiltroActual] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Función para obtener atributos de los Pokémon
  async function conseguirAtributosPokemon(pokemones) {
    try {
      const promesas = pokemones.map(async (pokemon) => {
        try {
          const res = await fetch(pokemon.url);
          if (!res.ok) throw new Error(`Error al obtener los datos de ${pokemon.name}`);
          const data = await res.json();

          const res2 = await fetch(data.species.url);
          if (!res2.ok) throw new Error(`Error al obtener los datos de especie para ${pokemon.name}`);
          const data2 = await res2.json();

          const res3 = await fetch(data2.generation.url);
          if (!res3.ok) throw new Error(`Error al obtener los datos de generacion para ${pokemon.name}`);
          const data3 = await res3.json();

          await delay(1000);

          return {
            name: pokemon.name,
            url: pokemon.url,
            types: data.types.map((type) => type.type.name),
            image: data.sprites.front_default,
            region: data3.main_region.name,
          };
        } catch (error) {
          console.error(`Error con ${pokemon.name}:`, error.message);
          return null; 
        }

      });

      const resultados = await Promise.all(promesas);
      return resultados.filter((p) => p !== null);
    } catch (error) {
      console.error("Error general:", error);
      return [];
    }
  }

  // Función para obtener los Pokémon
  const obtenerPokemon = async () => {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      const data = await res.json();
      const pokemonesConAtributos = await conseguirAtributosPokemon(
        data.results
      );

      setPokemon(pokemonesConAtributos);
      setFiltroActual(pokemonesConAtributos);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Efectos
  useEffect(() => {
    if (regionSeleccionada !== "") return;
    obtenerPokemon();
  }, []);

  useEffect(() => {
    let filtrados = pokemon;

    if (search !== "") {
      filtrados =
        search === "todos"
          ? filtrados
          : filtrados.filter((p) => p.name.includes(search));
    }

    if (tipoSeleccionado !== "") {
      filtrados =
        tipoSeleccionado === "todos"
          ? filtrados
          : filtrados.filter((p) => p.types.includes(tipoSeleccionado));
    }

    if (regionSeleccionada !== "") {
      filtrados =
        regionSeleccionada === "todas"
          ? filtrados
          : filtrados.filter((p) => p.region === regionSeleccionada);
    }

    setFiltroActual(filtrados);
  }, [search, tipoSeleccionado, pokemon, regionSeleccionada]);

  // Cargando y error
  if (loading)
    return (
      <div className="cajaCargando">
      <p className="cargandoDB">Cargando... (Esto puede demorar un poco)</p>
      </div>
    );
  if (error)
    return (
      <div className="cajaCargando">
        <p className="cargandoDB">Ha ocurrido un error :c</p>
      </div>
    );

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
        {Array.isArray(filtroActual) &&
          filtroActual.map((pokemon, index) => (
            <div
              className="pokemon"
              key={index}
              onClick={() =>
                window.open(`/InformacionPokemon/${pokemon.name}`, "_blank")
              }
            >
              <Pokemon
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                type={pokemon.types}
                image={pokemon.image}
                region={pokemon.region}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default MenuPrincipal;
