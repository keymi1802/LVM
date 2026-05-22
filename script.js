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

document.addEventListener("DOMContentLoaded", function(){

const track = document.querySelector(".carousel-track");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");

// FLECHAS
next.addEventListener("click", () => {
track.scrollBy({ left: 200, behavior: "smooth" });
});

prev.addEventListener("click", () => {
track.scrollBy({ left: -200, behavior: "smooth" });
});

// APARECER CON SCROLL
window.addEventListener("scroll", () => {

if(window.scrollY > 50){
carousel.classList.add("show");
}else{
carousel.classList.remove("show");
}

// ACTIVO
items.forEach(item => {

const section = document.getElementById(item.dataset.target);

if(section){
const rect = section.getBoundingClientRect();

if(rect.top < 200 && rect.bottom > 200){
item.classList.add("active");
}else{
item.classList.remove("active");
}
}

});

});

// CLICK → IR A SECCIÓN
items.forEach(item => {

item.addEventListener("click", () => {

const section = document.getElementById(item.dataset.target);

if(section){
section.scrollIntoView({
behavior:"smooth"
});
}

});

});

});

const track = document.querySelector('.carousel-track');

let isDown = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', (e) => {
isDown = true;
startX = e.pageX - track.offsetLeft;
scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
isDown = false;
});

track.addEventListener('mouseup', () => {
isDown = false;
});

track.addEventListener('mousemove', (e) => {
if(!isDown) return;
e.preventDefault();
const x = e.pageX - track.offsetLeft;
const walk = (x - startX) * 2;
track.scrollLeft = scrollLeft - walk;
});

function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    // Show selected
    const target = document.getElementById('tab-' + tabName);
    if (target) target.classList.add('active');
    // Activate button
    event.target.classList.add('active');
}

function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}