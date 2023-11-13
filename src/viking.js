// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;

        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;

        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        
        // let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        // let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        // let result = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);

        // let deadSaxonIndex = this.saxonArmy.findIndex((saxon) => saxon.health <= 0);
      
        // if (deadSaxonIndex > -1) {
        //     this.saxonArmy.splice(deadSaxonIndex, 1);
        // }

        // return result;

        return this.attack(this.vikingArmy, this.saxonArmy);

    }

    saxonAttack() {
        // let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        // let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        
        // let result = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);

        // let deadVikingIndex = this.vikingArmy.findIndex((viking) => viking.health <= 0);
      
        // if (deadVikingIndex > -1) {
        //     this.vikingArmy.splice(deadVikingIndex, 1);
        // }

        // return result;
        return this.attack(this.saxonArmy, this.vikingArmy);

    }

    showStatus() {
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }

        
    }

    attack(attackerArr, defenderArr) {
        console.log(attackerArr);
        let randomDefenderIndex = Math.floor(Math.random() * defenderArr.length);
        let randomAttackerIndex = Math.floor(Math.random() * attackerArr.length);
        
        let result = defenderArr[randomDefenderIndex].receiveDamage(attackerArr[randomAttackerIndex].strength);
      
        let deadDefenderIndex = defenderArr.findIndex((defender) => defender.health <= 0);
      
        if (deadDefenderIndex > -1) {
            defenderArr.splice(deadDefenderIndex, 1);
        }

        return result;
    }
}
