class Animal {
    constructor(name,height,weight,species){
        this.name=name
        this.height=height + "cm"
        this.mass=weight + "kg"
        this.species=species
    }
}

const bat = new Animal(200,45)
console.log (bat)

class Dog extends Animal{ ///Dog is a SUBclass to the SUPERclass 'Animal'
    bark(){
        console.log(this.name+" barks barks")
    }
    dogBreed(breed){
        this.breed=breed
    }
}

const Chiwawa = new Dog ("Chihuwahuwa",24,undefined,"dog")
console.log (Chiwawa)
Chiwawa.bark()
Chiwawa.dogBreed=("Chihuwhuwa")
console.log(Chiwawa)

////////////////////


class Human{
    constructor(role,specialSkill){
        this.role=role
        this.hp=100
        this.specialSkill=specialSkill
    }
    takeDamge(times){
        if (times===undefined){
            this.hp-=5*1}
        else if (times>0){
            this.hp-=5*times
        }
        else {console.log("Uknown Error.")}
    }
}
const Alfred= new Human("rogue","spinning attack")
console.log(Alfred)
Alfred.takeDamge(10)
console.log(Alfred)

class Mage extends Human{
    takeDamge(times){
        console.log("Spell shield, causes incoming damage to reduce")
        this.hp-=2*times
    }
}


const Oliver = new Mage("Ice Mage","Ice Spikes")
Oliver.takeDamge(10)
console.log(Oliver)

class Troll extends Human{
    
    takeDamge(times){
        super.takeDamge(times) ///we tell it to use the superclass code.
        console.log("UGA BOUGA") ///additional code to execute 
    }
}
ogre = new Troll
ogre.takeDamge(3)
console.log(ogre)

/////////////////////////

///////////////////////

