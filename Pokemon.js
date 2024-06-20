class Pokemon {
    constructor(name, hitPoints, attackDamage) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = "tackle";
    }

    takeDamage(num) {
        this.hitPoints -= num;
        if (this.hitPoints < 0) {
            this.hitPoints = 0;
        }
    }

    useMove() {
        console.log(`${this.name} used ${this.move}`);
        return this.attackDamage;
    }

    hasFainted() {
        if (this.hitPoints === 0) {
            return true;
        }
        return false;
    }
}

module.exports = Pokemon;
