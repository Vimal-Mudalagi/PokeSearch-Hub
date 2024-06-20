import React from 'react';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="max-w-xs mx-auto shadow-md rounded-lg overflow-hidden border-2 border-white/40">
            <img className="w-full h-48 object-cover bg-black p-4" src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div className="p-4 bg-black ">
                <h2 className="text-xl font-bold capitalize text-white">{pokemon.name}</h2>
                <p className="text-white">Height: {pokemon.height}</p>
                <p className="text-white">Weight: {pokemon.weight}</p>
                <p className="text-white">Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
            </div>
        </div>
    );
};

export default PokemonCard;
