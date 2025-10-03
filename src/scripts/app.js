"use strict";
let btn = document.getElementById("btn");
let vue = document.getElementById("vue");
let fermer = document.getElementById("btnFermer")

btn.addEventListener("click", function() {
  

    if (vue.style.display === "none") {
        vue.style.display = "block" 
         
    }else{
        vue.style.display = "none"
        btn.style.boxShadow = "3px 5px 0.5em #ffffff"
     
    }
});

fermer.addEventListener("click", function() {
    if (vue.style.display === "block") {
        vue.style.display = "none" 
         
    }
});
