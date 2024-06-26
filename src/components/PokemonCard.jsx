import PropTypes from "prop-types";
const PokemonCard = ({ pokemon }) => {
  return (
    <div className="flex w-full h-auto items-center hover:border-white gap-2 hover:bg-gray-700 rounded-lg border-2 border-gray-500 p-6">
      <div className="flex w-full h-3/5 justify-center items-center">
        <img
          className="h-full object-fill"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
      <div className="flex h-2/5 flex-col w-full justify-center items-start gap-2">
        <h2 className="text-xl font-bold capitalize text-white">
          {pokemon.name}
        </h2>
        <p className="text-white">Height: {pokemon.height}</p>
        <p className="text-white">Weight: {pokemon.weight}</p>
        <p className="text-white">
          Type: {pokemon.types.map((type) => type.type.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonCard;
