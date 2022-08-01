
var friends = ["Jonathan","Dio","Polnareff" ]
//above is called an 'array', each value is called an element.
console.log(friends)

friends[1]="yeet"
console.log(friends[1] )

friends.push("Abdul", "Sion")
console.log(friends)

friends.pop()

console.log(friends)


removed_friends = friends.pop()

console.log(friends + " removed: " +removed_friends)



friends[1]="bahaha"

if (friends.indexOf("bahaha")!==-1){
    idN=friends.indexOf("bahaha");
    friends[(friends.indexOf("bahaha"))]=20;
}
console.log(friends)
friends[idN]=45
console.log(friends)

friends.push("hey world",24)
console.log(friends)

var removed_friends=""

while (!friends.length!==true){
    removed_friends=removed_friends+" "+friends.pop()
    console.log ("List of friends removed:" +removed_friends)
}///while friend.length!==0 === while !friend.length!===True

console.log("empty")

workers = ["Jonathan", "Jeffrey", "Honkey"]


today=["Monday","Wednesday","Thursday"]

for (workerfiredtoday="no one",i=0;workers.length!=0;console.log("on "+today[i] + " you fired "+(workerfiredtoday=workers.pop())),i++){
    console.log(workers.length+" workers left to fire")
}
console.log (workers.length+" workers left to fire. Great job, you can't run your business anymore!")

console.log("~~~~~~")
workers=["Jolyn","Amstel","Borris"]
for (i=0;i<workers.length;i++){
    console.log(workers[i])
}

console.log(workers)
workers.pop("Jolyn")//doesn't pop Jolyn, it pops the last element
console.log(workers)

workers=["Jolyn","Amstel","Borris"]
workers[1]=workers[2]
console.log(workers)
workers[1]=false
console.log(workers)
