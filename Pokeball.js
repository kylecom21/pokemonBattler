class Pokeball {
    constructor() {
        this.storage = {};
    }

    throw(pokemon) {
        // True if pokemon argument given
        const isCapturing = arguments[0] !== undefined;

        // If is empty and capturing a pokemon
        if (this.isEmpty() && isCapturing) {
            this.storage = pokemon;
            console.log(`You caught ${pokemon.name}!`);
        }
        // If is empty and not capturing
        else if (this.isEmpty() && !isCapturing) {
            console.log("The pokeball is empty");
        }
        // If pokeball is full and is playing a pokemon
        else if (!this.isEmpty() && !isCapturing) {
            console.log(`GO ${this.storage.name}!`);
            return this.storage;
        }
        // If pokeball is full and has no pokemon stored
        else {
            console.log("The pokeball is full");
        }
    }

    isEmpty() {
        const storageArr = Object.keys(this.storage);
        return storageArr.length === 0;
    }

    contains() {
        if (this.isEmpty()) {
            return "empty...";
        }
        return this.storage.name;
    }
}

module.exports = Pokeball;
