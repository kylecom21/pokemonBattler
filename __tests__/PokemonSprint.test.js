const Pokemon = require("../Pokemon");
const { Fire, Water, Grass, Normal } = require("../PokemonTypes.js");
const {
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
} = require("../PokemonSpecies.js");
const Pokeball = require("../Pokeball.js");
const Trainer = require("../Trainer.js");
const Battle = require("../PokemonBattle.js");
const { default: expect } = require("expect");

describe("Pokemon", () => {
  test("should return an instance of pokemon", () => {
    const eevee = new Pokemon("Eevee", 55, 18);
    expect(eevee instanceof Pokemon).toBe(true);
  });
  test("should return a pokemon with passed arguments and default move", () => {
    const eevee = new Pokemon("Eevee", 55, 18);
    const expected = {
      name: "Eevee",
      hitPoints: 55,
      attackDamage: 18,
      move: "tackle",
    };
    expect(eevee).toEqual(expected);
  });

  describe("Pokemon Methods", () => {
    test("test takeDamage - should reduce the pokemon hitpoints by the damage value passed", () => {
      const eevee = new Pokemon("Eevee", 55, 18);
      eevee.takeDamage(5);
      expect(eevee.hitPoints).toBe(50);
    });
    test("test takeDamage - should only reduce the hitpoints of expected pokemon", () => {
      const eevee = new Pokemon("Eevee", 55, 18);
      const expected = {
        name: "Eevee",
        hitPoints: 50,
        attackDamage: 18,
        move: "tackle",
      };
      eevee.takeDamage(5);
      expect(eevee).toEqual(expected);
    });
    test("test useMove - should return the pokemons attackDamage", () => {
      const eevee = new Pokemon("Eevee", 55, 18);
      expect(eevee.useMove()).toBe(18);
    });
    test("test hasFainted - should return true when pokemons hitpoints is zero", () => {
      const eevee = new Pokemon("Eevee", 55, 18);
      eevee.takeDamage(100);
      expect(eevee.hasFainted()).toBe(true);
    });
    test("test hasFainted - should return false when pokemons hitpoints are above zero", () => {
      const eevee = new Pokemon("Eevee", 55, 18);
      eevee.takeDamage(54);
      expect(eevee.hasFainted()).toBe(false);
    });
  });
  describe("Pokemon Types", () => {
    test("Types - all classes will have the respective type value", () => {
      const charmander = new Fire("Charmander", 44, 17);
      const eevee = new Normal("Eevee", 55, 18);
      const vaporeon = new Water("Vaporeon", 70, 19);
      const leafeon = new Grass("Leafeon", 65, 17);
      expect(charmander.type).toBe("fire");
      expect(eevee.type).toBe("normal");
      expect(vaporeon.type).toBe("water");
      expect(leafeon.type).toBe("grass");
    });
    test("Method isEffectiveAgainst - return true if effective against the given pokemon", () => {
      const charmander = new Fire("Charmander", 44, 17);
      const vaporeon = new Water("Vaporeon", 70, 19);
      const leafeon = new Grass("Leafeon", 65, 17);
      expect(charmander.isEffectiveAgainst(leafeon)).toBe(true);
      expect(vaporeon.isEffectiveAgainst(charmander)).toBe(true);
      expect(leafeon.isEffectiveAgainst(vaporeon)).toBe(true);
    });
    test("Method isEffectiveAgainst - return false if not effective against the given pokemon", () => {
      const charmander = new Fire("Charmander", 44, 17);
      const eevee = new Normal("Eevee", 55, 18);
      const vaporeon = new Water("Vaporeon", 70, 19);
      const leafeon = new Grass("Leafeon", 65, 17);
      expect(charmander.isEffectiveAgainst(vaporeon)).toBe(false);
      expect(vaporeon.isEffectiveAgainst(leafeon)).toBe(false);
      expect(leafeon.isEffectiveAgainst(charmander)).toBe(false);
      expect(eevee.isEffectiveAgainst(charmander)).toBe(false);
    });
    test("Method isWeakTo - return true if weak against the given pokemon", () => {
      const charmander = new Fire("Charmander", 44, 17);
      const vaporeon = new Water("Vaporeon", 70, 19);
      const leafeon = new Grass("Leafeon", 65, 17);
      expect(charmander.isWeakTo(vaporeon)).toBe(true);
      expect(vaporeon.isWeakTo(leafeon)).toBe(true);
      expect(leafeon.isWeakTo(charmander)).toBe(true);
    });
    test("Method isWeakTo - return false if not weak against the given pokemon", () => {
      const charmander = new Fire("Charmander", 44, 17);
      const eevee = new Normal("Eevee", 55, 18);
      const vaporeon = new Water("Vaporeon", 70, 19);
      const leafeon = new Grass("Leafeon", 65, 17);
      expect(charmander.isWeakTo(eevee)).toBe(false);
      expect(vaporeon.isWeakTo(eevee)).toBe(false);
      expect(leafeon.isWeakTo(eevee)).toBe(false);
      expect(eevee.isWeakTo(charmander)).toBe(false);
    });
  });
  describe("Pokemon Species", () => {
    test("The Charmander sub-class is a instance of the Fire class", () => {
      const charmander = new Charmander("Charmander", 44, 17);
      expect(charmander instanceof Fire).toBe(true);
    });
    test("The Squirtle sub-class is a instance of the Water class", () => {
      const squirtle = new Squirtle("Squirtle", 44, 16);
      expect(squirtle instanceof Water).toBe(true);
    });
    test("The Bulbasaur sub-class is a instance of the Grass class", () => {
      const bulbasaur = new Bulbasaur("Bulbasaur", 45, 16);
      expect(bulbasaur instanceof Grass).toBe(true);
    });
    test("The Rattata sub-class is a instance of the Normal class", () => {
      const rattata = new Rattata("Rattata", 40, 15);
      expect(rattata instanceof Normal).toBe(true);
    });
    test("Charmander sub-class 'move' should be 'ember'", () => {
      const charmander = new Charmander("Charmander", 44, 17);
      expect(charmander.move).toBe("ember");
    });
    test("Squirtle sub-class 'move' should be 'water gun'", () => {
      const squirtle = new Squirtle("Squirtle", 44, 16);
      expect(squirtle.move).toBe("water gun");
    });
    test("Bulbasaur sub-class 'move' should be 'vine whip'", () => {
      const bulbasaur = new Bulbasaur("Bulbasaur", 45, 16);
      expect(bulbasaur.move).toBe("vine whip");
    });
    test("Rattata sub-class 'move' should remain 'tackle'", () => {
      const rattata = new Rattata("Rattata", 40, 15);
      expect(rattata.move).toBe("tackle");
    });
  });
});

describe("Pokeball", () => {
  test("A pokeball should be an instance of the Pokeball class", () => {
    const testPokeball = new Pokeball();
    expect(testPokeball instanceof Pokeball).toBe(true);
  });
  test("Pokeball instanciates with an empty object as the 'storage' property", () => {
    const testPokeball = new Pokeball();
    expect(testPokeball.storage).toEqual({});
  });
  describe("Methods", () => {
    test("Method isEmpty - Returns true if storage is empty", () => {
      const testPokeball = new Pokeball();
      expect(testPokeball.isEmpty()).toBe(true);
    });
    test("Method isEmpty - Returns false if storage is not empty", () => {
      const testPokeball = new Pokeball();
      testPokeball.storage = { 1: "a" };

      expect(testPokeball.isEmpty()).toBe(false);
    });
    test("Method contains - Returns the name of the pokemon if a pokemon stored", () => {
      const testPokeball = new Pokeball();
      testPokeball.storage = new Bulbasaur("Bulbasaur", 45, 16);
      expect(testPokeball.contains()).toBe("Bulbasaur");
    });
    test("Method contains - Returns the 'empty...' if the pokeball is empty", () => {
      const testPokeball = new Pokeball();
      expect(testPokeball.contains()).toBe("empty...");
    });
    test("Method throw - if pokeball isn't empty, does not work and informs user pokeball is full when argument passed", () => {
      const testPokeball = new Pokeball();
      const bulbasaur = new Bulbasaur("Bulbasaur", 45, 16);
      const rattata = new Rattata("Rattata", 40, 15);

      testPokeball.storage = bulbasaur;
      testPokeball.throw(rattata);

      expect(testPokeball.storage).toBe(bulbasaur);
    });
    test("Method throw - if pokeball is empty, captures the target pokemon and informs user 'You caught `pokemon's name`", () => {
      const testPokeball = new Pokeball();
      const bulbasaur = new Bulbasaur("Bulbasaur", 45, 16);

      testPokeball.throw(bulbasaur);
      expect(testPokeball.storage).toBe(bulbasaur);
    });
    test("Method throw - if invoked with no argument, returns the stored pokemon and console log `GO 'pokemon's name'!`", () => {
      const testPokeball = new Pokeball();
      const bulbasaur = new Bulbasaur("Bulbasaur", 45, 16);
      testPokeball.storage = bulbasaur;

      expect(testPokeball.throw()).toBe(bulbasaur);
    });
    test("Method throw - if invoked with no argument and an empty pokeball, storage is not updated, and the user is informed the ball is empty", () => {
      const testPokeball = new Pokeball();
      testPokeball.throw();

      expect(testPokeball.storage).toEqual({});
    });
  });
});

describe("Trainer", () => {
  describe("Properties", () => {
    test("A trainer should be an instance of Trainer", () => {
      const kyle = new Trainer();
      expect(kyle instanceof Trainer).toBe(true);
    });
    test("Trainer should instanciate a belt property with 6 Pokeballs", () => {
      const kyle = new Trainer();
      expect(kyle.belt).toEqual([
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
      ]);
    });
  });
  describe("Methods", () => {
    test("catch - using catch on a new trainer should store a pokemon in the belt", () => {
      const kyle = new Trainer();
      const bulbasaur = new Bulbasaur();

      kyle.catch(bulbasaur);

      expect(kyle.belt).toEqual([
        {
          storage: {
            name: "Bulbasaur",
            hitPoints: 45,
            attackDamage: 16,
            move: "vine whip",
            type: "grass",
          },
        },
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
        new Pokeball(),
      ]);
    });
    test("catch - using catch multiple times stores each pokemon in different pokeballs", () => {
      const kyle = new Trainer();
      const bulbasaur1 = new Bulbasaur();
      const bulbasaur2 = new Bulbasaur();
      const bulbasaur3 = new Bulbasaur();
      const bulbasaur4 = new Bulbasaur();
      const bulbasaur5 = new Bulbasaur();
      const charmander = new Charmander();

      kyle.catch(bulbasaur1);
      kyle.catch(bulbasaur2);
      kyle.catch(bulbasaur3);
      kyle.catch(bulbasaur4);
      kyle.catch(bulbasaur5);
      kyle.catch(charmander);

      expect(kyle.belt).toEqual([
        {
          storage: {
            name: "Bulbasaur",
            hitPoints: 45,
            attackDamage: 16,
            move: "vine whip",
            type: "grass",
          },
        },
        {
          storage: {
            name: "Bulbasaur",
            hitPoints: 45,
            attackDamage: 16,
            move: "vine whip",
            type: "grass",
          },
        },
        {
          storage: {
            name: "Bulbasaur",
            hitPoints: 45,
            attackDamage: 16,
            move: "vine whip",
            type: "grass",
          },
        },
        {
          storage: {
            name: "Bulbasaur",
            hitPoints: 45,
            attackDamage: 16,
            move: "vine whip",
            type: "grass",
          },
        },
        {
          storage: {
            name: "Bulbasaur",
            hitPoints: 45,
            attackDamage: 16,
            move: "vine whip",
            type: "grass",
          },
        },
        {
          storage: {
            name: "Charmander",
            hitPoints: 44,
            attackDamage: 17,
            move: "ember",
            type: "fire",
          },
        },
      ]);
    });
    test("catch - using catch when belt is full should return 'All pokeballs full'", () => {
      const kyle = new Trainer();
      const bulbasaur1 = new Bulbasaur();
      const bulbasaur2 = new Bulbasaur();
      const bulbasaur3 = new Bulbasaur();
      const bulbasaur4 = new Bulbasaur();
      const bulbasaur5 = new Bulbasaur();
      const charmander = new Charmander();
      const squirtle = new Squirtle();

      kyle.catch(bulbasaur1);
      kyle.catch(bulbasaur2);
      kyle.catch(bulbasaur3);
      kyle.catch(bulbasaur4);
      kyle.catch(bulbasaur5);
      kyle.catch(charmander);

      expect(kyle.catch(squirtle)).toBe("All pokeballs full");
    });
    test("getPokemon - Returns the pokemon if it exists in the belt", () => {
      const kyle = new Trainer();
      const bulbasaur = new Bulbasaur();
      kyle.catch(bulbasaur);

      expect(kyle.getPokemon("Bulbasaur")).toEqual(bulbasaur);
    });
    test("getPokemon - Returns 'You do not have that pokemon' if use doesn't have that pokemon in their belt", () => {
      const kyle = new Trainer();
      const bulbasaur = new Bulbasaur();
      kyle.catch(bulbasaur);

      expect(kyle.getPokemon("Charmander")).toBe(
        "You do not have that pokemon"
      );
    });
  });
});

describe("Battle", () => {
  test("Battle creates an instance of Battle", () => {
    const trainer1 = new Trainer();
    const trainer2 = new Trainer();
    const battle = new Battle(trainer1,trainer2);
    expect(battle instanceof Battle).toBe(true);
  });
  test("Battle should instanciate with 2 trainers instances", () => {
    const trainer1 = new Trainer();
    const trainer2 = new Trainer();
    const battle = new Battle(trainer1, trainer2);
    expect(battle.trainer1).toBe(trainer1);
    expect(battle.trainer2).toBe(trainer2);
  });
  test("Battle should instanciate trainer 1's turn boolean set to true", () => {
    const trainer1 = new Trainer();
    const trainer2 = new Trainer();
    const battle = new Battle(trainer1, trainer2);
    expect(battle.trainer1Turn).toBe(true)
  });
  test("Battle should instantiate with trainers respective pokemon", () => {
    const trainer1 = new Trainer();
    const trainer2 = new Trainer();
    const pokemon1 = "Bulbasaur"
    const pokemon2 = "Charmander"
    trainer1.catch(new Bulbasaur())
    trainer2.catch(new Charmander())
    const battle = new Battle(trainer1, trainer2,pokemon1,pokemon2);
    expect(battle.pokemon1).toBe(trainer1.belt[0].storage)
    expect(battle.pokemon2).toBe(trainer2.belt[0].storage)
  })
  describe("Methods", () => {
    test("Method Turn - turn 2 should be trainer2's turn ", () => {
    const trainer1 = new Trainer();
    const trainer2 = new Trainer();
    const pokemon1 = "Bulbasaur"
    const pokemon2 = "Rattata"
    trainer1.catch(new Bulbasaur())
    trainer2.catch(new Rattata())
    const battle = new Battle(trainer1, trainer2,pokemon1,pokemon2);
    battle.turn()
    expect(battle.trainer1Turn).toBe(false)
    });
    test("Method Turn - turn 3 should be trainer1's turn",() => {
    const trainer1 = new Trainer();
    const trainer2 = new Trainer();
    const pokemon1 = "Bulbasaur"
    const pokemon2 = "Rattata"
    trainer1.catch(new Bulbasaur())
    trainer2.catch(new Rattata())
    const battle = new Battle(trainer1, trainer2,pokemon1,pokemon2);
    battle.turn()
    battle.turn()
    expect(battle.trainer1Turn).toBe(true)
    })
    test("Method turn - attacking pokemon damages defending pokemon", () => {
        const trainer1 = new Trainer();
        const trainer2 = new Trainer();
        const pokemon1 = "Bulbasaur"
        const pokemon2 = "Rattata"
        trainer1.catch(new Bulbasaur())
        trainer2.catch(new Rattata())
        const battle = new Battle(trainer1, trainer2,pokemon1,pokemon2);
        battle.turn()
        expect(battle.pokemon2.hitPoints).toBe(24)
    })
    test("If a defender is strong against the attacking type, the attacking type's damage should be multiplied by 0.75.", () => {
        const trainer1 = new Trainer();
        const trainer2 = new Trainer();
        const pokemon1 = "Bulbasaur"
        const pokemon2 = "Charmander"
        trainer1.catch(new Bulbasaur())
        trainer2.catch(new Charmander())
        const battle = new Battle(trainer1, trainer2,pokemon1,pokemon2);
        battle.turn()
        expect(battle.pokemon2.hitPoints).toBe(32)
    })
    test("If a defender is weak against the attacking type, the attacking type's damage should be multiplied by 1.25.", () => {
        const trainer1 = new Trainer();
        const trainer2 = new Trainer();
        const pokemon1 = "Charmander"
        const pokemon2 = "Bulbasaur"
        trainer1.catch(new Charmander())
        trainer2.catch(new Bulbasaur())
        const battle = new Battle(trainer1, trainer2,pokemon1,pokemon2);
        battle.turn()
        expect(battle.pokemon2.hitPoints).toBe(24)
    })
    test("should end battle when defending pokemon hitpoints is zero and faints.", () => {
        const trainer1 = new Trainer();
        const trainer2 = new Trainer();
        const pokemon1 = "Charmander"
        const pokemon2 = "Bulbasaur"
        trainer1.catch(new Charmander())
        trainer2.catch(new Bulbasaur())
        const battle = new Battle(trainer1, trainer2,pokemon1,pokemon2);
        expect(battle.fight()).toBe(battle.pokemon1)
    })
  });
});
