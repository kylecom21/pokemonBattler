const { Fire, Water, Grass, Normal } = require("./PokemonTypes");

class Charmander extends Fire {
    constructor(name = "Charmander", hitPoints = 44, attackDamage = 17) {
        super(name, hitPoints, attackDamage);
        this.move = "ember";
    }
}
class Squirtle extends Water {
    constructor(name = "Squirtle", hitPoints = 44, attackDamage = 16) {
        super(name, hitPoints, attackDamage);
        this.move = "water gun";
    }
}
class Bulbasaur extends Grass {
    constructor(name = "Bulbasaur", hitPoints = 45, attackDamage = 16) {
        super(name, hitPoints, attackDamage);
        this.move = "vine whip";
    }
}
class Rattata extends Normal {
    constructor(name = "Rattata", hitPoints = 40, attackDamage = 15) {
        super(name, hitPoints, attackDamage);
    }
}

module.exports = { Charmander, Squirtle, Bulbasaur, Rattata };
