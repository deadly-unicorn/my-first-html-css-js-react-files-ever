//array_x=[] if array_b[i] doesn't exist in array_x, push it in.


array_x=[5]
array_b=[4,4,7,5,1,2,3,5,7,4]
var y=0

for (i=0;i!==array_b.length;i++){
    for (b=0;b!==array_x.length;b++){
        var oh=array_b[i]
        if (array_b[i]!==array_x[b]){
        }   
        else {
            y=y+1
        }
    }
    if (y===0){
        array_x.push(oh)
    }
    y=0
}
console.log(array_x)

console.log(array_x)
new_x=[]

y=0
LNG=array_x.length ///////!!!!!!!!!!! it's good setting the array length to a stable variable so that it doesn't mess any equation... RIP 1.5 Hrs...
    


for (i=0;new_x.length!==LNG||array_x.length!==0;i++){
    if (i===array_x.length){i=0} /// i:0,1,2,3,4,5 - array.length:1,2,3,4,5,6 => if (i+1>length), or i===length=> must i=0 
    for (b=0;b!==array_x.length;b++){
        if (array_x[i]>array_x[b]){
            y=y+1
        }
    }
    if (y===0){
        new_x.push(array_x[i])
        console.log(new_x+"~~"+array_x)
        //array_x[i]=999 //on an attempt I used instead of splice
        array_x.splice(i,1)/// 1 means to remove only this ONE item
        i=0///why is this needed here?? 
        console.log(new_x+"~~"+array_x)
    }
    y=0
}

console.log(array_x)
console.log(new_x)