

time=18

if (time===0){
    console.log("It's Midnight");
}
if (time===18){
    console.log("It's the right time!");
}
if (time===19){
    console.log("what a waste"); //if you used else if here it wouldn't check the other conditions// it would skip them.
}
else{
    console.log ("What's wrong?")
}

    //why to use else if:  It's for efficiency. If you have a chain of if...else if...else if clauses,
    //then evaluation stops after one evaluates to true.
    //If you simply have a list of if clauses,
    //then even after one evaluates to true,
    //you'll still check the rest of them,
    //even though they'll be false.

score = 20
if (score<20){
    console.log("u wot");
}
else if (score==20){
    console.log("congratulations");
}
else{
    console.log("impossible");
}