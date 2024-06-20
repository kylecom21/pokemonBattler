const Pokemon = require("./Pokemon.js");

class Fire extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.type = "fire";
    }
    isEffectiveAgainst(pokemon) {
        return pokemon.type === "grass";
    }

    isWeakTo(pokemon) {
        return pokemon.type === "water";
    }
}

class Water extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.type = "water";
    }
    isEffectiveAgainst(pokemon) {
        return pokemon.type === "fire";
    }

    isWeakTo(pokemon) {
        return pokemon.type === "grass";
    }
}

class Grass extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.type = "grass";
    }
    isEffectiveAgainst(pokemon) {
        return pokemon.type === "water";
    }

    isWeakTo(pokemon) {
        return pokemon.type === "fire";
    }
}

class Normal extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.type = "normal";
    }
    isEffectiveAgainst(pokemon) {
        return false;
    }

    isWeakTo(pokemon) {
        return false;
    }
}

module.exports = { Fire, Water, Grass, Normal };
