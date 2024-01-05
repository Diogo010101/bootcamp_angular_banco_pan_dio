//Requisição HTTP da API
let listaPokemon = document.querySelector('#pokemon_ol');




function convertPokemonToHtml(pokemon){
    
    return`
        <li ${pokemon.type}>
            <div class="nome_tipo_pokemon" >
                <div class="nome_pokemon">${pokemon.pokeName}</div>
                ${pokemon.types.map((type) => `<div class="tipo_pokemon">${type}</div>`).join('')}
            </div>
            <div class="poke_id">
                <div class="number">#0${pokemon.pokeId}</div>
                <img src= "${pokemon.image}" alt="${pokemon.pokeName}">
            </div>
        </li>
    `
}


const pokemonHTML = listaPokemon;


pokeApi.getPokemons().then((pokemons = []) => {
    pokemonHTML.innerHTML += pokemons.map(convertPokemonToHtml).join("");

})
