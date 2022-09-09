const helloWorld = document.createElement("p")
helloWorld.innerHTML="hii"
parentElement.appendChild(helloWorld)

console.log(document)

function sayHello(){ 
    let smurf=document.getElementById("message")
    smurf.innerHTML="Cheese"
}