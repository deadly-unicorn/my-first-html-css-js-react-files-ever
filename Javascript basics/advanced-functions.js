
function checkNumbers(a,b){
    if (a>b){
        console.log("The first number is greater than the second")
    }
    else if (a<b){
        console.log("The first number is smaller than the second")
    }
    else if(a>b-1){ //if we use -1 the result is NaN. If we use a<b+1 we get true, as aa<aa1
        console.log("Numbers are equal!");
    }
    else{
        console.log("Uknown error.");
    }
};

checkNumbers(true,true)//we get numbers is equal!!! :[]

function checkNumbers2(a,b){
    if (!a===!b){//this didn't fix it as numbers get turned into booleans
        console.log("Not a number input")
        console.log(!a,!b) 
    }
    else if (a<b){
        console.log("The first number is smaller than the second")
    }
    else if(a>b-1){ //if we use -1 the result is NaN. If we use a<b+1 we get true, as aa<aa1
        console.log("Numbers are equal!");
    }
    else{
        console.log("Uknown error.");
    }
};

console.log(typeof(NaN))//this is the solution!! 

function checkNumbers3(a,b){
    if ((typeof(a)!=="number" || typeof(b)!=="number")){
        console.log("Not a number input")
    } 
    else if (a>b){
        console.log("The first number is greater than the second")
    }
    else if (a<b){
        console.log("The first number is smaller than the second")
    }
    else if(a===b){
        console.log("Numbers might be equal");
        if(a>b-1){
            console.log("Numbers are equal!");
        }
    }
    
    else{
        console.log("Uknown error.");
    }
};

checkNumbers3(1,1)
checkNumbers3(NaN,NaN)
console.log(NaN===NaN)

//things in a function after 'return' don't get executed

function dinosaur(){
    return console.log("Hello world")
    console.log("impossible")
    return console.log("rofl")
};

dinosaur(5)

function whyUseElse(age){
    if (age>0){
        return console.log("U exist");
    };
    return console.log("u don't exist");
}
whyUseElse("a")