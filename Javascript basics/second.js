console.log(!true)
console.log(!0)

var passwordCheck= (111===111);
console.log (passwordCheck);

var myAge = 25;
var yourAge =24;
var ourAgeIsNotTheSame = myAge !== yourAge;

console.log (ourAgeIsNotTheSame)

var ourAgeIsTheSame = (myAge === yourAge);
console.log(ourAgeIsTheSame);

console.log("~~~~")
console.log(90<1)
console.log(3<=3)

var trueOrFalse = 3>=3;
console.log(trueOrFalse)

console.log("~~~~")
let batteryOn = true
let switchOn = true
console.log(batteryOn&&switchOn)

function getBulb() {
    console.log(batteryOn&&switchOn)
}
getBulb()

console.log("~~~~~")


var batteryConnected = false;
var pluggedIn = true;
var poweredOn = pluggedIn || batteryConnected; //or logical calculation//;
console.log("the lightbulb is powered on:"+ poweredOn);
console.log("the lightbulb is powered off:"+ !poweredOn);

if (false){
    console.log("hello");
}

if (true){
    console.log("hello");
}

if (poweredOn){
    console.log("The lightbulb is powered on")
}

while (false){
    console.log("wassup")
}


console.log("~~~~");

if (true){
    console.log("Hello world");
}

console.log("which is the best colour")

var purple="purple";
var answer=purple;
var colour1="Purple";
var colour2="purple";
var colour3="PURPLE";
var answer="purple";


console.log("~~~~~")
console.log(answer===(colour1&&colour2)); //if you don't add parenthesis before +"green" it adds green to the previous boolean (colour1&&colour2)
                                        //with abswer=purple it says true, with Purple it says false.

if (answer===(colour1||colour2||colour3)){
    console.log("Correct "+answer+" is the best colour");
}
else{
    console.log("FAIL") //we see that if answer!==colour1, the other conditions skip, like it doesn't go ||colour2||colour3 (colour2=true and colour3=true)
}


//actually opened a new file bcz it started making no sense here

//update || and && are used for booleans only, thus you need to kinda change the code above.


if (answer===colour1||answer===colour2||answer===colour3){
    console.log("Correct the best colour is: "+answer)
}