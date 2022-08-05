const random =input => input/2;

console.log(random(100))
const hundred=100
const fifty=50

///Literals make it easier to add variables and expressions inside strings

console.log("Your result is "+random(100)+". Congratulations!!")
console.log(`Your result is ${random(100)}. Congratulations!!`)

console.log(`100+50 equals ${hundred+fifty}`)

function nameDisplay(name){
    return `Hello ${name}!`
}

console.log(nameDisplay`45`) //parentheses not required if we input a string here. We can just use backticks
