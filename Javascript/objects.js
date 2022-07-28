//when we want to group multiple 'variables'-content we use objects
//for objects we use 'const'

const doggo = { ///obect propertiers
    name: "Felis",       /// we separate multiple properties with comma
    favoriteFood: "Beach Lasagna",
    age: 14,
    mind: "blown",
    humanAge: function (dogAge){     ///Functions inside objects are created 'object methods'
        if (dogAge<0) {return "Sorry you either entered the age wrong or your dog is too old for this to work"}
        else if (dogAge<40){return ((dogAge*5) + (2*dogAge**1.4) - (dogAge**1.66))
    
        }
        else {return "Sorry you either entered the age wrong or your dog is too old for this to work"}

    }
};

ressurected="yourass"
console.log(doggo.name+" - "+doggo.favoriteFood+" "+doggo.humanAge(doggo.age))

//console.log (-2**1.5) powers of negative numbers give NaN

//console.log((-2)**3) ACTUALLY u need to put the negative number in a parenthesis and the power must be an intiger

const mafia ={
    creationDate: "24-5-2021",
    currentMembers: 42,
    currentLeader: "Johi"
};

mafia.currentLeader="Jonnathan"
mafia.currentMembers=mafia.currentMembers-1

console.log(mafia)

const company={
    name:"Samsung",
    branch:"Northern Greece",
    goodboypoints:405,
    selfDisplay: function(){
        console.log(this);//this is referring to the object this property is located into
        console.log(this.name);
        this.name="Apple";
        console.log(this.name);
    }
}

company.selfDisplay()
console.log(company.name)