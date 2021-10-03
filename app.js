// Movement Animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items

const title = document.querySelector(".title");
const anime = document.querySelector(".anime img");
const Fight = document.querySelector(".Fight");
const description = document.querySelector(".info h3");
const skill = document.querySelector(".skill");

//Moving Animation event 

container.addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth /2 - e.pageX ) / 25;
    let yAxis = (window.innerHeight /2 - e.pageY ) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotate(${yAxis}deg)`;
});

//Animate in

container.addEventListener("mouseenter", (e)=>{
    card.style.transform = "none";
    //popout
    title.style.transform = 'translateZ(150px)';
    anime.style.transform = 'translateZ(100px) ';
    description.style.transform = "translateZ(125px)";
    skill.style.transform = "translateZ(100px)";
    Fight.style.transform = "translateZ(75px)";
});

//aminate out

container.addEventListener("mouseleave", (e)=>{
    card.style.transform = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
    anime.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    skill.style.transform = "translateZ(0px)";
    Fight.style.transform = "translateZ(0px)";


})