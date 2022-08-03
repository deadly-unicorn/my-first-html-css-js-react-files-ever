list1=[5,1,1,2,5,4,2,4,1,1,5,3,5,4,2,1,2,3]
var weWant=4


function findItem(list1,weWant){
    for (i=0;i!==list1.length;i++){
        if (list1[i]===weWant){
            console.log("Congratulations, we found your number in the list!")
            console.log("Its the "+(i+1)+"th item")
            return
    }
    }
}

findItem(list1,weWant)

