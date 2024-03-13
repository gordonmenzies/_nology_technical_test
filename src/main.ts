import "./styles/style.scss";
import { Pokemon } from "./data/types";
import pokemonArray from "./data/pokemon";

/*
  Selectors and validators 
*/
const pokemonContainer =
  document.querySelector<HTMLDivElement>(".card-container");
const input = document.querySelector<HTMLInputElement>(".input");

if (!pokemonContainer || !input) {
  throw new Error("there is something wrong with the selectors");
}

/*
  Global values
*/

let filteredPokemon: Pokemon[] = [];

/*
  Methods
*/

const filterList = () => {
  console.log(input.value);
  filteredPokemon = pokemonArray.filter((pokemon) => {
    return (
      pokemon.name.includes(input.value) || pokemon.types.includes(input.value)
    );
  });

  pokemonContainer.innerHTML = "";

  filteredPokemon.forEach((pokemon) => {
    pokemonContainer.innerHTML += `<div class=".card">
    <image class="card__image" src=${pokemon.sprite}>
      <div class="card__content">
    <h1 class="card__heading">${pokemon.name}</h1>
      <h1 class="card__text">${pokemon.types}</h1>
    </div>
  </div>`;
  });
};

/*
  Event Listeners 
*/

input.addEventListener("input", filterList);

/*
  For each loop to access the pokemon in the array 
  and enter the respective elements in the html 
*/

pokemonArray.forEach((pokemon) => {
  pokemonContainer.innerHTML += `<div class="card">
  <image class="card__image" src=${pokemon.sprite}>
    <div class="card__content">
  <h1 class="card__heading">${pokemon.name}</h1>
    <h1 class="card__text">${pokemon.types}</h1>
  </div>
</div>`;
});
