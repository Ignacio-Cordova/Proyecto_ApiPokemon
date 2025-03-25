import React, { use, useState } from "react";
import Button from "../components/atoms/Button";
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
      <div className="cajaPokemon">
        <div className="contenedorImagenPokemon">
            <img
              className="imagenDetalle"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
            />
            <img
              className="imagenDetalle"
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
            />
        </div>
        <div className="informacionPokemon">
          <div className="contenedorDatosPokemon">
            <h1>Información del Pokémon</h1>
            <p className="infoPokemon">Nombre: {pokemon.name}</p>
            <p className="infoPokemon">Altura: {pokemon.height}</p>
            <p className="infoPokemon">Peso: {pokemon.weight}</p>
            <p className="infoPokemon">
              Tipo: {pokemon.types.map((type) => type.type.name).join(", ")}
            </p>
            <p className="infoPokemon">
              Experiencia base: {pokemon.base_experience}
            </p>
            <p className="infoPokemon">
              Habilidades:{" "}
              {pokemon.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </p>
            <div className="contenedorEstadisticas">
              <div>
                <p className="infoPokemon">Estadísticas:</p>
                <ul className="infoPokemon">
                  {pokemon.stats.map((stat) => (
                    <li key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="infoPokemon">Movimientos:</p>
                <ul className="infoPokemon">
                  {pokemon.moves.slice(0, 5).map((move) => (
                    <li key={move.move.name}>{move.move.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="shinyPokemon">
        <div className="contenedorImagenPokemon">
            <img
              className="imagenDetalle"
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
            />
            <img
              className="imagenDetalle"
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InformacionPokemon;
