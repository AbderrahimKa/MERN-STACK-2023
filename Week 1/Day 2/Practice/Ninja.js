class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`${this.name} is the name of your ninja`);
    }
    showStats() {
        console.log(`${this.name} is the name of your ninja , he have : 
        ${this.health} hp and speed of ${this.speed} speed and strength of ${this.strength}`);
    }
    drinksake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinksake();
ninja1.showStats();