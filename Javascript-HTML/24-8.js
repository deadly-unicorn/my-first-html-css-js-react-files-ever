function toggleBold(){
    document.getElementById("1234").classList.toggle("boldClass")
}

let button1 = document.getElementById("homer")
button1.onclick = toggleBold

let yellowDiv=document.getElementById("colorMe")
function colorYel(){
    yellowDiv.classList.toggle("yellow")
}

yellowDiv.onclick=colorYel
let textArea= document.getElementById("trippy")
textArea.onscroll=colorYel

let clickOnSpan = document.getElementById("clickOnSpan")
function spooky(){
    yellowDiv.setAttribute("class","WARNING")
    yellowDiv.innerText="YOU DID NOT CLICK ON THE RIGHT PLACE."
}

clickOnSpan.ondblclick=spooky

let counter=document.getElementById("counter")
counter.innerText="a"
function countNumber(){
    let charCount=textArea.value.length ///USER INPUT = VALUE, not InnerHTML nor InnerText
    counter.innerText=charCount
}

textArea.oninput=countNumber

let v268 = document.getElementById("26-8")
v268.classList.add("WARNING","boldClass")

let warnButV268= document.getElementById("v268b1")
let boldButV268= document.getElementById("v268b2")

function warnTog(){
    v268.classList.toggle("WARNING")
}
function boldTog(){
    v268.classList.toggle("boldClass")
}
warnButV268.onclick=warnTog
boldButV268.onclick=boldTog
///
//26-8-2022
// a more modern way to add events is with eventListener()


let v268_2 = document.getElementById("26-8-2")


let warnButV268_2= document.getElementById("v268b1-2")
let boldButV268_2= document.getElementById("v268b2-2")
let bothButV268_2= document.getElementById("v268b3-2")

function warnTog_2(){
    v268_2.classList.toggle("WARNING")
    ///warnButV268_2.removeEventListener("click",warnTog_2) ///Notice how by adding this line we only
                                            ///activate the event once. 
}
let i=0

//const toggleBoth2=()=>{
    //    v268_2.classList.toggle("boldClass");
    //    v268_2.classList.toggle("WARNING");
//} CHECK HOW WE FINALLY made it without needing to add a new function
warnButV268_2.addEventListener("click",warnTog_2) 

function boldTog_2(){
    v268_2.classList.toggle("boldClass")
    i=i+1
    if (i>3){bothButV268_2.removeEventListener("click",bothFunc)} //here} 
    document.getElementById("index").innerText=i
}
const bothFunc=()=>{warnTog_2();boldTog_2()}
boldButV268_2.addEventListener("click",boldTog_2)
bothButV268_2.addEventListener("click",bothFunc) //here
