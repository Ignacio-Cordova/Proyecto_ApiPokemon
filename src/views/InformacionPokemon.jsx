import React, { use, useState } from "react";
import Button from "../components/atoms/Button";
import CajaPokemon from "../components/organisms/CajaPokemon";
import PokemonClick from "../components/organisms/PokemonClick";
import { useEffect } from "react";
import "../styles/informacionPokemon.css";

const InformacionPokemon = () => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const nombrePokemon = window.location.pathname.split("/")[2];
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  if (!pokemon.sprites) {
    return (
      <div className="cajaCargando">
        <PokemonClick pokemon={pokemon}></PokemonClick>
        <p className="cargandoDB">Cargando...</p>
      </div>
    );
  }
  const siguientePokemon = () => {
    const siguientePokemon = pokemon.id + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${siguientePokemon}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };
  const anteriorPokemon = () => {
    const anteriorPokemon = pokemon.id - 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${anteriorPokemon}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  };

  const irAlMenu = () => {
    window.close();
  };

  return (
    <>
      <div className="botones">
        <Button className="botonInfo" onClick={anteriorPokemon}>
          Anterior
        </Button>
        <Button className="botonInfo" onClick={irAlMenu}>
          Volver
        </Button>
        <Button className="botonInfo" onClick={siguientePokemon}>
          Siguiente
        </Button>
      </div>
      <CajaPokemon className="cajaPokemon" pokemon={pokemon}></CajaPokemon>
    </>
  );
};

export default InformacionPokemon;
