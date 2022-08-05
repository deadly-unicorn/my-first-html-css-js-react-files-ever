///

let Celsius=[37,35,35,37,37,38,39,41,38]
let Fahreneit=[]
for (let i=0;i!==Celsius.length;i++){
    Fahreneit.push(((Celsius[i]**1.35)-40))
}
console.log("done")
console.log(Fahreneit)

///alternative method

const Celsis=[]
const Fahren=[1,2,3,4,5]
for (const element of Fahren){ ///variable element has the value of the current Fahren element.
    let c =  element + 5
    Celsis.push(c)
}
console.log(Celsis)///
////
/// function map() allows us to take each element from an array and put it into another array

const shoppingList=["bread","potato","squid"]
const boughtList = shoppingList.map(function (element){return element})
console.log(boughtList)


const gradesSemester = [45,44,40,50]
console.log("~~~~~~")
//const gradesMaxTwenty = gradesSemester.map(function (grade,index){return (index+1)+": "+grade*0.4})      ///.map(function(element,indexOfElement))
//const gradesMaxTwenty= gradesSemester.map((grade,index)=>{return (index+1+". "+grade*0.2)})
const gradesMaxTwenty= gradesSemester.map(grade=>{return grade*0.2}) //arrow function
console.log(gradesMaxTwenty)


///FILTER//////////
const nameList=["Saron","Selin","Jonny","Mopa","Ryul","Sama"]
const selectedNames=nameList.filter(search=>{return (search[0]+search[1])=="Sa"} )///search=currentItem - element. return must be True to return.
console.log(selectedNames)
console.log(nameList[0])

const studentList={
    names:["Dima","Jonny","Illinois","Jelluses","Velchro","Ruan","Hitah"],
    avgGrades:[15,9,16,18,11,14,19]
}

console.log(studentList.names[1])
/////////////////

//// .filter works like map, tho it needs a condition to be true in order to return an element



const studentsGraduated=[]
const listLength=studentList.names.length
for (let i=0;i!==listLength;i++){
    if (studentList.avgGrades[i]>10){
        studentsGraduated.push(studentList.names[i])
    }
}
console.log(`Congratulations to ${studentsGraduated} they have graduated!!`)

console.log("does code work?")
const studentsPass=studentList.names.filter((itemNum,index)=>{return studentList.avgGrades[index]>10})              ///notice the syntax in order to search in grades
console.log(studentsPass)


///
const numbers=[41,21,41,42,16,41,24,65,64,77,47,45,37,46,21,11,23]
let total=0

console.log("~~~~~~~~~")

const numbers2=numbers.map(Value=>{return Value+" "})
const numbers3=numbers2.map((Value,index)=>{if (Value[1]<5){return Value[0]+"0"}else{let b=((numbers[index]+5)+" ");return b[0]+0}})
console.log(numbers3)

console.log("~~~~~~~~~")
for (const element of numbers){
    total += element; //+= -> total=total+element
}
//console.log(total)
///
/// .reduce() function of JavaScript takes array values into a single value

//const total2=numbers.reduce(function (prev,curr){return prev+curr}) ///0+41, 41+21, 62+41

///syntax is  array.reduce(function (previousValue,currentValue,index))
///above but in arrow function

const total2=numbers.reduce((prev,curr)=>{return prev+curr})
console.log(total2)
const whoAtePie=["somebody","sometime","ate","a","pie"]
const sentence=whoAtePie.reduce((prev,curr)=>{return (prev+" "+curr)})
console.log(sentence)
///////
