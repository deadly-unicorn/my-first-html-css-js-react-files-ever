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

