function heyThere(){
    return 'Hello';
};

//arrow way

const heyDere = () => 'Hello'; //Arrow functions are considered 'ghost' functions, as we don't type "function" 
console.log(heyDere())


const multiplyByTwo = (number) => number*2; //if it has only one statement like here, return is meant 
console.log(multiplyByTwo(10))

const discountCalc = (price,discount) => {let totalPrice=(price*(1-discount));
     console.log("You have a discount");return totalPrice}

console.log("Total Price is: "+discountCalc(100,0.2))


//////////////////// CHECK HERE, how to write parameteres the short way in an arrow function
const promotion = initialPrice => initialPrice*(1-0.2); ///you don't need to add parantheses if it's only ONE parameter
console.log(promotion(100))
///////////////////
const test = news => "Ba"+news*2+"a"; // default is undefined
console.log(test())

///to avoid undefined results we can specify a default value
const testment = (tryhard=200) => tryhard/2;
console.log(testment())
console.log(testment(100))
/////
const getRatio = (num1=2,num2=3) => num1/num2;
console.log (getRatio(9))
/////) 
