const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
    difficulty: "Med",
};

console.log(game);

// Add Pikachu as an object to the pokemon array
pokemon.push({
    number: 25, 
    name: "Pikachu", 
    type: "electric", 
    hp: 35, 
    starter: true 
});

game.difficulty = "Medium"; // Add the difficulty property to the game object
console.log(game); // Check that the difficulty property has been added

// Assuming pokemon array exists and contains Pokemon data
const starterPokemon = pokemon.find(pokemon => pokemon.starter === true);
game.party.push(starterPokemon); // Add the starter Pokémon to the party array
console.log(game.party); // Verify the addition of the starter Pokémon


// Example: Picking three Pokémon based on attributes like type or hp
const pokemonToAdd = [
  pokemon.find(p => p.type === "Fire" && p.hp > 30),
  pokemon.find(p => p.type === "Water" && p.hp > 30),
  pokemon.find(p => p.type === "Electric" && p.hp > 30)
];

pokemonToAdd.forEach(p => game.party.push(p)); // Add them to the party
console.log(game.party); // Verify the party has the added Pokémon


game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});
console.log(game.gyms); // Verify that gyms with difficulty below 3 are completed


// Find the starter Pokémon
const starterIndex = game.party.findIndex(p => p.starter === true);
const starterPokemonInParty = game.party[starterIndex]; // Renamed to avoid conflict

// Define evolutions
const evolvedPokemon = pokemon.find(p => p.number === starterPokemonInParty.number + 1); // Use lowercase 'number'

// Replace the starter Pokémon with the evolved form
game.party.splice(starterIndex, 1, evolvedPokemon);
console.log(game.party); // Verify that the starter has evolved


game.party.forEach(p => console.log(p.name)); // Print each Pokémon's name


const starterPokemons = pokemon.filter(p => p.starter === true);
starterPokemons.forEach(p => console.log(p.name)); // Print each starter Pokémon's name


game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj); // Add the Pokémon to the party
};
game.catchPokemon(pokemon[0]); // Example: Catch a Pokémon and add to the party
console.log(game.party); // Verify the Pokémon was added


game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj); // Add the Pokémon to the party
  
  // Decrease the number of Pokéballs in inventory
  const pokeballItem = this.items.find(item => item.name === "pokeball");
  if (pokeballItem) {
    pokeballItem.quantity--; // Decrease the number of Pokéballs
  }
};

game.catchPokemon(pokemon[0]); // Example: Catch a Pokémon and decrement Pokéballs
console.log(game.items); // Verify the decrease in Pokéballs


game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj); // Add the Pokémon to the party
  
  // Decrease the number of Pokéballs in inventory
  const pokeballItem = this.items.find(item => item.name === "pokeball");
  if (pokeballItem) {
    pokeballItem.quantity--; // Decrease the number of Pokéballs
  }
};

game.catchPokemon(pokemon[0]); // Example: Catch a Pokémon and decrement Pokéballs
console.log(game.items); // Verify the decrease in Pokéballs


game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});
console.log(game.gyms); // Verify that gyms with difficulty below 6 are completed


game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };
  
  this.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });
  
  console.log(gymTally); // Log the tally of completed and incomplete gyms
};

game.gymStatus(); // Call the method to see the tally


game.partyCount = function() {
  return this.party.length; // Return the number of Pokémon in the party
};

console.log(game.partyCount()); // Log the number of Pokémon in the party





console.log(game);
