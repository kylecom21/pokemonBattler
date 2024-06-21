const Pokemon = require("./Pokemon");
const Pokeball = require("./Pokeball");

class Trainer {
    #belt;
    constructor() {
        this.#belt = [
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
            new Pokeball(),
        ];
    }

    get belt() {
        return this.#belt;
    }

    catch(pokemon) {
        let pokemonWasCaught = false;

        for (const pokeball of this.belt) {
            if (pokeball.isEmpty()) {
                pokeball.throw(pokemon);
                pokemonWasCaught = true;
                break;
            }
        }

        if (!pokemonWasCaught) {
            return "All pokeballs full";
        }
    }

    getPokemon(pokemon) {
        for (const pokeball of this.belt) {
            if (pokeball.storage.name === pokemon) {
                return pokeball.throw();
            }
        }

        return "You do not have that pokemon";
    }
}

module.exports = Trainer;
