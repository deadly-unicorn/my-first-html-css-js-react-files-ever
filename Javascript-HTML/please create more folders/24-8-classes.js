//classes help us minimize the errors that might come out of JSObjects
//a class is basically a template for an Object

//class name's first letter need to be UpperCase


class Book{
    constructor(title, author){  //we add a constructor and we set the parameters inside it
        this.book_name=title; ///property book_name of the Book object, is the value that gets entered in the place of title
        this.poet=author;
        this.hard=true;
        this.ratings=[]
        }

    read(){
        console.log("very sadge day to read "+this.book_name)
    }
    addRating(i){
        this.ratings.push(i)
    }
}


const book1= new Book("William's sad day.","George Clooney")
const book2= new Book("Me myself and I", "only you")
console.log(book2)

book1.read()
book2.hard=false

console.log(book1)
console.log(book2)

book2.read()
book2.addRating(5)
book2.addRating(7)
book2.addRating(3)
book2.addRating(2)
book2.addRating(1)
book2.addRating(6)
book2.addRating(9)

console.log(book2.ratings[1])



function getAverageRating(input){
const index=input
for (let i=0,total=0;i!==(index.length+1);i++){
    if (i===index.length){
        let rating=total/(index.length)
        console.log("It worked!")
        return rating
        
    }
    total=total+index[i]
    ///console.log("It worked!")
}
}
let finalRes=getAverageRating(book2.ratings)+""
let outputFinalRes=""
if (finalRes.length>3){
    for (let i=0;i<4;i++){
    outputFinalRes=outputFinalRes+finalRes[i]
    }
}

console.log("This book is rated with "+outputFinalRes+" stars")
console.log("There are "+book2.ratings.length+" ratings. "+"The ratings are: "+book2.ratings)



