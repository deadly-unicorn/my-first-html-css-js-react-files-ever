
var purple="purple";
var colour1="Purple";
var colour2="purple";
var colour3="PURPLE";
var answer="Purple";


console.log("~~~~~")
console.log(answer===(colour1&&colour2)); //if you don't add parenthesis before +"green" it adds green to the previous boolean (colour1&&colour2)
                                        //with abswer=purple it says true, with Purple it says false.
console.log(Boolean(answer))

console.log(answer===(true&&true));
console.log(answer===colour2);
console.log(true&&"colour2");

console.log( ""    || false)

a=true
while (a===true){
    a=false;
    console.log("yeet");
        if (a===false){
            a=true;
        }
        if (a===true){
            a=false;
        }
}