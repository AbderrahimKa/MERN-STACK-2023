const Ninja = require("../Practice/Ninja");

class Sensei extends Ninja {
    constructor(wisdom = 10) {
        super("Master Splinter" , 200 , 10 , 10)
        this.wisdom = wisdom
    }
    speakWisdom() {
        console.log('It is better to fail in originality than to succeed in imitation.');
        super.showStats()
    }
}

const sensei = new Sensei()
sensei.speakWisdom()