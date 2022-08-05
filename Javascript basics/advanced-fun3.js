var list1=[1,2,3,4,5,4324,51,23,5,654,1322,534,1,3213,32]
var list2=[10,8,6,5,3,6,12,65,11,58,4435,234,112,412,5]

if (list1.length>=list2.length){
    listLng=list1.length
}
else {listLng=list2.length}

var c=[]
var d=[]
var e=[]

for (i=0;i!==list1.length;i++){
    var j=list1[i]
    for (b=0;b!==list2.length;b++)
        if (list2[b]===list1[i]){
            c.push(list2[b])
            d.push(i+1)
            e.push(b+1)
           // console.log("we found a common number! "+list2[b])
           // console.log("position "+ (i+1)+ " in list1")
            //console.log("position "+ (b+1)+ " in list2")
        }
}

console.log(c+"common numbers")
console.log(d+"positions in first row")
console.log(e+"positions in second row")
//programm 
var c_new=[]
var d_new=[("position "+d[0]+" found number "+c[0])]
for (a=0;a<c.length;a++){
    if (c[a-1]!==c[a]){
        c_new.push(c[a])
    }
    else if(d[a]!==d[a+1]){
        d_new.push("position "+d[a]+" found number "+c[a])
    }
}

e_new=[]
for (i=0;i!==e.length;i++){
    for (b=0;b!==e.length;b++){
        if (e[i]!==e[b]){
            e_new.push(e[i])
        }
    }
}


console.log("~~~~")
console.log(c_new+" common numbers")
console.log("~~~~")
console.log("First array")
for (i=0;i!==d_new.length;i++){
    console.log(d_new[i])
}

console.log("~~~~")
console.log("Second array")
console.log(e_new)
console.log("~~~~")

