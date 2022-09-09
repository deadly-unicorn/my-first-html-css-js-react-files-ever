const objectTemplate = {
    greet: function(){
        console.log("gii");
    },
    age:24 
};

const person = Object.create(objectTemplate)//this way the person BORROWS methods-FUNCTIONS and properties
//from the Template but doesn't actually inherit them (look (1) )
person.greet()

console.log(person)//(1)
 
// console.log(person.greet)

//adding more functions to the empty person
person.mad = function(){
    console.log("Eyooo, that's my car.")
}
person.mad()
console.log (objectTemplate.age)
console.log (person.age)

const person2 = Object.create(objectTemplate)
person2.age=21
console.log(person2)