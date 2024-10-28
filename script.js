const boxes = document.querySelectorAll('.box');
const header = document.querySelector(".header");
const body = document.querySelector('body');
const paragraph = document.querySelector("p");
const container = document.querySelector('.container');
container.style.backgroundColor = "#34495E";
paragraph.setAttribute("style","color: #1A1A19;");

boxes.forEach((box)=>{
    box.addEventListener("click", (e)=>{
       if(e.target.id === "color-red"){
        body.setAttribute("style","background-color: red;");
        header.setAttribute("style","background-color: red;");
       }

       if(e.target.id === "color-green"){
        body.setAttribute("style","background-color: green;");
        header.setAttribute("style","background-color: green;");
       }

       if(e.target.id === "color-blue"){
        body.setAttribute("style","background-color: blue;");
        header.setAttribute("style","background-color: blue;");
       }

       if(e.target.id === "color-yellow"){
        body.setAttribute("style","background-color: yellow");
        header.setAttribute("style","background-color: yellow;");
       }

       if(e.target.id === "color-purple"){
        body.setAttribute("style","background-color: #800080;");
        header.setAttribute("style","background-color: #800080;");
       }

       if(e.target.id === "color-orange"){
        body.setAttribute("style","background-color: #FFA500;");
        header.setAttribute("style","background-color: #FFA500;");
       }

       
       if(e.target.id === "color-pink"){
        body.setAttribute("style","background-color: #FFC0CB;");
        header.setAttribute("style","background-color: #FFC0CB;");
       }

       if(e.target.id === "color-brown"){
        body.setAttribute("style","background-color:#A52A2A;" );
        header.setAttribute("style","background-color: #A52A2A;");
       }

       if(e.target.id === "color-cyan"){
        body.setAttribute("style","background-color: cyan;" );
        header.setAttribute("style","background-color: cyan;");
       }

       if(e.target.id === "color-magneta"){
        body.setAttribute("style","background-color: #FF00FF;" );
        header.setAttribute("style","background-color: #FF00FF;");
       }

    });
});