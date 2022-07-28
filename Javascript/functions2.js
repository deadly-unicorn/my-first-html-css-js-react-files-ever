

var jessica=0
function test2(age){
    jessica=age
    return age*2;

}

//return gives a value to our function, like f(35)=35 would be return age
// if you don't return smth, (give a value) f(age)=undefined, f(35)=undefined
console.log("function result(y)= "+test2(35)+" function inputted value(x)= "+jessica)

test2(11) //doesn't display smth in the console// btw console.logs aren't displayed in browser only in browser-console
console.log (jessica)

function test3(age){
    return age
}
JessicaAge=test3(21)
console.log(JessicaAge)
    
function displayName(firstName,lastName){
    return  lastName+" "+firstName
}
console.log(displayName("Joji","Abdul"))

function createEmail(firstName,birthAge){
    if (birthAge<200){
        return firstName+birthAge+"@hotmail.com";
    }
    else if (birthAge<1900){
        return "Sorry you are too old to use the internet.";
    }
    else if (birthAge<2000){
        return firstName+(birthAge-1900)+"@hotmail.com";
    }
    else if (birthAge<2010){
        return firstName+"0"+(birthAge-2000)+"@hotmail.com";
    }
    else if (birthAge<2100){
        return firstName+(birthAge-2000)+"@hotmail.com";
    }
    else{
        return "Sorry, you have either made a mistake or you are too young to use the internet";
    }
}

var johnssonsEmail=createEmail("JohnathannLee",2045)
    console.log (johnssonsEmail)

function getName(fullName){
    return fullName[1]
}
fullName = ["Johnathan","Joestar"]
console.log (getName(fullName)) 

function isCold(temperature){
    return temperature<15
}
temperature=3
console.log(isCold(temperature))

function calculateSum(num1,num2){
    return num1+num2}

function calculateDif(num1,num2){
    return (((num1-num2)**2)**(1/2))}

console.log(calculateSum(35,20))
console.log(calculateDif(20,35))