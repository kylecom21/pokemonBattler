class Battle {
  #isTrainer1Turn;
  constructor(trainer1, trainer2, pokemon1, pokemon2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.#isTrainer1Turn = true;
    this.pokemon1 = trainer1.getPokemon(pokemon1);
    this.pokemon2 = trainer2.getPokemon(pokemon2);
  }

  get trainer1Turn() {
    return this.#isTrainer1Turn;
  }

  turn() {
    const attackingPokemon = this.trainer1Turn ? this.pokemon1 : this.pokemon2;
    const defendingPokemon = this.trainer1Turn ? this.pokemon2 : this.pokemon1;
    let damageDealt = attackingPokemon.useMove();
    if (attackingPokemon.isWeakTo(defendingPokemon)) {
      damageDealt = Math.round((damageDealt *= 0.75));
    } else if (attackingPokemon.isEffectiveAgainst(defendingPokemon)) {
      damageDealt = Math.round((damageDealt *= 1.25));
    }
    defendingPokemon.takeDamage(damageDealt);
    console.log(
      `${attackingPokemon.name} did ${damageDealt} damage to ${defendingPokemon.name}`
    );
    this.#isTrainer1Turn = !this.#isTrainer1Turn;
  }

  fight() {
    while (true) {
      this.turn();
      const attackingPokemon = this.trainer1Turn ? this.pokemon1 : this.pokemon2;
      const defendingPokemon = this.trainer1Turn ? this.pokemon2 : this.pokemon1;
      if(attackingPokemon.hasFainted()){
        return defendingPokemon
      }
    }
  }
}

module.exports = Battle;
