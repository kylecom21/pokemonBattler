class Pokeball {
    constructor() {
        this.storage = {};
    }

    throw(pokemon) {
        if (this.isEmpty() && arguments[0] === pokemon) {
            this.storage = pokemon;
            console.log(`You caught ${pokemon.name}!`);
        }

        // If the pokeball is full
        console.log("The pokeball is full");
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
