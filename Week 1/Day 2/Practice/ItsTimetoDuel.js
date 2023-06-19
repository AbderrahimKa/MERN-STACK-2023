class Unit {
    constructor(name,cost,power,resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }
    toString() {
        console.log(`name : ${this.name} \ncost : ${this.cost} \npower : ${this.power} \nresilience : ${this.resilience}`);
    }

    addAnEffect(effect) {
        this.cost -= effect['cost'];
        if (effect['stat'] == 'resilience') {
            if (effect['magnitude'].slice(0,1) == '+') {
                this.resilience += parseInt(effect['magnitude'].slice(1,effect['magnitude'].length));
            }
            if (effect['magnitude'].slice(0,1) == '-') {
                this.resilience -= parseInt(effect['magnitude'].slice(1,effect['magnitude'].length));
            }
        }
        if (effect['stat'] == 'power') {
            if (effect['magnitude'].slice(0,1) == '+') {
                this.power += parseInt(effect['magnitude'].slice(1,effect['magnitude'].length));
            }
            if (effect['magnitude'].slice(0,1) == '-') {
                this.power -= parseInt(effect['magnitude'].slice(1,effect['magnitude'].length));
            }
        }
    }
}
const Red_Belt_Ninja = new Unit("Red Belt Ninja",3,3,4)
const Black_Belt_Ninja = new Unit("Black Belt Ninja",4,5,4)


class Effect {
    constructor(name,cost,text,stat,magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    toString() {
        console.log(`name : ${this.name} \ncost : ${this.cost} \ntext : ${this.text} \nstat : ${this.stat} \nmagnitude : ${this.magnitude}`);
    }
}
const Hard_Algorithm  = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience","+3");
const Unhandled_Promise_Rejection = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience","-2");
const Pair_Programming = new Effect("Pair Programming",3,"increase target's power by 2","power","+2");

// Black_Belt_Ninja.toString();
// Black_Belt_Ninja.addAnEffect(Unhandled_Promise_Rejection);
// Black_Belt_Ninja.toString();




