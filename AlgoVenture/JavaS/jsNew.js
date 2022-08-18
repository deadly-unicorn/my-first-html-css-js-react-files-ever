///let mainEl = document.body.children[0];
//mainEl.innerHTML = "hii";
//let mainEl = document.body.children;
//mainEl[0].innerHTML = "hii";

let mainEl = document.body.firstElementChild; //header
///mainEl.nextElementSibling.innerHTML="this is MAIN"
//mainEl.firstElementChild.firstElementChild.firstElementChild.firstElementChild.innerHTML="hi"




//check how I am using both " and '. If you use " on MLGAnimation it doesn't work.
function buy(i){
    //document.body.children[1].querySelector("a").firstElementChild.innerHTML="BOUGHT" -- change span
    let price=document.body.children[1].querySelector(`#price${i}`).innerHTML
    ///const textBought="price: "+price+"<br><span class='MLGAnimation'>BOUGHT</span>"  price not needed as we managed to let it stay after the "buy now" change
    let textBought="<span class='MLGAnimation'>BOUGHT</span>"
    document.body.children[1].querySelector(`#span${i}`).innerHTML=textBought
};

let headerHomePageRemove = document.querySelector(".headerText") ///we seleceted by class
///headerHomePageRemove.innerHTML=" "  (p.headerText) would select a p element with class headerText
//p.headerText.linkA would select the p element that has both classes

/// display link headerHomePageRemove.innerHTML = document.body.querySelector("a").href