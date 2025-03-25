import React, { useEffect, useState } from "react";

const PokemonClick = ({  }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const nombrePokemon = "pikachu";
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data))
            .catch((error) => console.error("Error al obtener el Pokémon:", error));
    }, []);

    return (
        <>
            {pokemon ? (
                <>
                    <p>¡Rápido! Presiona a {pokemon.name} para liberarlo</p>
                    <img
                        className="imagenDetalle"
                        src={pokemon.sprites?.front_default}
                        alt={pokemon.name}
                    />
                </>
            ) : (
                <p>Cargando Pokémon...</p>
            )}
        </>
    );
};

export default PokemonClick;
