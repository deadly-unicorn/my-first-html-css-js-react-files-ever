

function displayName(){
    console.log("Lee Sin")
}

displayName()


function rocketLaunch(){
    console.log(3);
    console.log(2);
    console.log(1);
    console.log("launch");
}
rocketLaunch()
i=0
function greetPerson(name){
    console.log("hello " +name)
    console.log("how are you today?")
    i++
    console.log("you are our customer number "+i+" for today"    ) 
}

greetPerson("Jennifer")
greetPerson("Daimon")


function divideByThree(number){
    console.log(number/3)
}

divideByThree(36)


///return


function test1(age){
    console.log("your age is "+age)
}

function test2(age){
    console.log("your age is "+age)
    return age
}

test1(34)
console.log (test1())
console.log (test1(34))
console.log (test2())
console.log (test2(34))


