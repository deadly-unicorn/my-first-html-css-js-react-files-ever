

//var can be reassigned multiple times

//for example

var apple="apple"

var apple="train"

console.log(apple)

//let and const can't

let train="train"

train="apple" ///not writing "let", makes it kinda work like "var". If you write let train again the programm won't run

console.log(train)

const monkey="godzilla"//const is even stricter. If you write it once, you can't change it all
///monkey="birdzilla"
console.log(monkey)

///constant arrays can be updated
const furniture=["sofa"]
furniture.push("bed")
console.log(furniture)
///same with objects

const Levi={
    age:21
} 
Levi.age++ // or Levi.age=22.. This works as well
console.log(Levi)
Levi.age=42
console.log(Levi)

//one thing you can do with var that you can't do with the others (tho kinda not professional) is hoisting:
tea="hot"
var tea //global scope
console.log(tea)
/// local variables-> Can't be accessed from anywhere in the code. Example: Functions
function dogFood(num){
    const pi=3.14
    console.log(num*2)//local scope
    console.log (pi)
}
dogFood() 
//console.log (pi) won't work
//dogFood(pi) this also won't work.

const age=18
var permission=false
if (age===18){
    var permission=true///block scope can be accessed from outside. THIS WON'T WORK WITH LET/CONST
}
console.log (permission)

//////////////////
const perm=false
if (age===18){
    const perm=true
}
console.log (perm)
//////////////////


for (let index=1;index<4;index++){ //if you leave this without 'let' or put 'var' instead the console.log below wroks
    console.log(index)
}
//const index=5
//console.log(index)