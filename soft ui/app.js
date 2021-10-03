const container = document.querySelector(".container")
const base = document.querySelector(".base")
const light = document.querySelector(".light")
const shadow = document.querySelector(".shadow")

container.addEventListener("mousemove", (e)=>{
    base.style.transform = "translateX(150px)";
    light.style.transform = "translateX(150px)";
    shadow.style.transform = "translateX(150px)";

});