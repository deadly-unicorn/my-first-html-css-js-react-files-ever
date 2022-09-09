///////////9-2-2022//////

class Unicorn{
    constructor(name){
        this.hp=200
        this.ability="flying"
        this.name=name
    }
    drink(){
        console.log("IS THIS WATER?!")
    }
}

const Rainbow = new Unicorn("Dash")
console.log (Rainbow)
class Darkling extends Unicorn{
    constructor(name,water){
        super(name) ///by uncluding this we can change the default Values of SOME properties of the SuperClass, and also add new Ones
        this.hp=400 //overwrite
        this.water=water //new one
    }
    drink(){
        super.drink()
        console.log(this.water)
    }
}

const shadow = new Darkling("Vamp","Sluuurp!~")
console.log(shadow.ability)
shadow.drink()

const dog={
    hungry:true,
    feed: function(){
        dog.hungry=false
    }
}
dog.feed()
console.log(dog.hungry)

class Beautiful extends Darkling{
    constructor(name){
    super(name)
    this.beautiful=true
}
}

const doggo= new Beautiful("Jonny")
console.log(shadow)
console.log(doggo)