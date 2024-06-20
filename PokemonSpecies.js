const { Fire, Water, Grass, Normal } = require("./PokemonTypes");

class Charmander extends Fire {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.move = "ember";
    }
}
class Squirtle extends Water {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.move = "water gun";
    }
}
class Bulbasaur extends Grass {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
        this.move = "vine whip";
    }
}
class Rattata extends Normal {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage);
    }
}

module.exports = { Charmander, Squirtle, Bulbasaur, Rattata };
