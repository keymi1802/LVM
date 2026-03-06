window.addEventListener("scroll", function(){
const navbar = document.querySelector(".top-bar");
if(window.scrollY > 50){
navbar.classList.add("scrolled");
}else{
navbar.classList.remove("scrolled");
}
});

document.addEventListener("DOMContentLoaded", function(){

const slider = document.getElementById("slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", function(){
slider.scrollBy({ left: 350, behavior: "smooth" });
});

prev.addEventListener("click", function(){
slider.scrollBy({ left: -350, behavior: "smooth" });
});

});