let quote=document.getElementById("quote");
let author=document.getElementById("author");
let btn=document.getElementById("btn");

const url ="http://api.quotable.io/random";
let getquote =()=>{
    fetch(url).then((data)=> data.json()).then((item)=>
    {
        quote.innerHTML =item.content;
        author.innerHTML=item.author;
    })
};
window.addEventListener("load",getquote);
btn.addEventListener("click", getquote);
 