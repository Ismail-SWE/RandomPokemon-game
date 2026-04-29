import "./RandomPokemon.css"

function RandomPokemon(){
  let randNumber = Math.floor((Math.random()*150)+1);
  let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNumber}.png`;

  return (
    <div className="RandomPokemon">
      <h1>Pokemon Number is: #{randNumber}</h1>
      <img src={pokemonImg} alt="an image of Pokemon"/>
    </div>
  );
}

export default RandomPokemon;