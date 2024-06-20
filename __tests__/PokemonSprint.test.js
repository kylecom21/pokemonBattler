const { default: expect } = require("expect");
const {Pokemon,Fire,Water,Grass,Normal,} = require("../Pokemon");

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
    test ("test takeDamage - should only reduce the hitpoints of expected pokemon", () => {
        const eevee = new Pokemon("Eevee", 55, 18);
        const expected =  {
            name: "Eevee",
            hitPoints: 50,
            attackDamage: 18,
            move: "tackle",
          };
        eevee.takeDamage(5);
        expect(eevee).toEqual(expected)
    })
    test("test useMove - should return the pokemons attackDamage", () => {
        const eevee = new Pokemon("Eevee", 55, 18);
        expect(eevee.useMove()).toBe(18)
    })
    test("test hasFainted - should return true when pokemons hitpoints is zero", () => {
        const eevee = new Pokemon("Eevee", 55, 18);
        eevee.takeDamage(100)
        expect(eevee.hasFainted()).toBe(true)
    })
    test("test hasFainted - should return false when pokemons hitpoints are above zero", () => {
        const eevee = new Pokemon("Eevee", 55, 18);
        eevee.takeDamage(54)
        expect(eevee.hasFainted()).toBe(false)
    })
  });
  describe("Pokemon Types", () => {
    test("Types - all classes will have the respective type value", () => {
        const charmander = new Fire ("Charmander" , 44, 17)
        const eevee = new Normal ("Eevee", 55, 18);
        const vaporeon = new Water ("Vaporeon" , 70, 19)
        const leafeon = new Grass ("Leafeon" , 65, 17)
        expect(charmander.type).toBe("fire")
        expect(eevee.type).toBe("normal")
        expect(vaporeon.type).toBe("water")
        expect(leafeon.type).toBe("grass")
    })
    test("Method isEffectiveAgainst - return true if effective against the given pokemon", () => {
        const charmander = new Fire ("Charmander" , 44, 17)
        const vaporeon = new Water ("Vaporeon" , 70, 19)
        const leafeon = new Grass ("Leafeon" , 65, 17)
        expect(charmander.isEffectiveAgainst(leafeon)).toBe(true)
        expect(vaporeon.isEffectiveAgainst(charmander)).toBe(true)
        expect(leafeon.isEffectiveAgainst(vaporeon)).toBe(true)
    })
    test("Method isEffectiveAgainst - return false if not effective against the given pokemon", () => {
        const charmander = new Fire ("Charmander" , 44, 17)
        const eevee = new Normal ("Eevee", 55, 18);
        const vaporeon = new Water ("Vaporeon" , 70, 19)
        const leafeon = new Grass ("Leafeon" , 65, 17)
        expect(charmander.isEffectiveAgainst(vaporeon)).toBe(false)
        expect(vaporeon.isEffectiveAgainst(leafeon)).toBe(false)
        expect(leafeon.isEffectiveAgainst(charmander)).toBe(false)
        expect(eevee.isEffectiveAgainst(charmander)).toBe(false)
    })
    test("Method isWeakTo - return true if weak against the given pokemon", () => {
        const charmander = new Fire ("Charmander" , 44, 17)
        const vaporeon = new Water ("Vaporeon" , 70, 19)
        const leafeon = new Grass ("Leafeon" , 65, 17)
        expect(charmander.isWeakTo(vaporeon)).toBe(true)
        expect(vaporeon.isWeakTo(leafeon)).toBe(true)
        expect(leafeon.isWeakTo(charmander)).toBe(true)
    })
    test("Method isWeakTo - return false if not weak against the given pokemon", () => {
        const charmander = new Fire ("Charmander" , 44, 17)
        const eevee = new Normal ("Eevee", 55, 18);
        const vaporeon = new Water ("Vaporeon" , 70, 19)
        const leafeon = new Grass ("Leafeon" , 65, 17)
        expect(charmander.isWeakTo(eevee)).toBe(false)
        expect(vaporeon.isWeakTo(eevee)).toBe(false)
        expect(leafeon.isWeakTo(eevee)).toBe(false)
        expect(eevee.isWeakTo(charmander)).toBe(false)
    })
  })
});
