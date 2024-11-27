let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function () {
  let ul = document.querySelector(".header1>ul");
  ul.classList.add("btn1transform");

  let search = document.querySelector("#search");
  search.style.display = "block";

  let search1 = document.querySelector(".search1");
  search1.classList.add("btntransform");
});

let navbar = document.querySelector(".nav1");
let menu = document.querySelector(".menu1");
let hbox = document.querySelector(".box1");

navbar.addEventListener("mouseenter", function () {
  menu.classList.add("hover");
  hbox.classList.add("boxtransform");
});

navbar.addEventListener("mouseleave", function () {
  menu.classList.remove("hover");
  hbox.classList.remove("boxtransform");
});

let navbar2 = document.querySelector(".nav2");
let menu2 = document.querySelector(".menu2");
let hbox2 = document.querySelector(".box2");

navbar2.addEventListener("mouseenter", function () {
  menu2.classList.add("hover");
  hbox2.classList.add("boxtransform");
});

navbar2.addEventListener("mouseleave", function () {
  menu2.classList.remove("hover");
  hbox2.classList.remove("boxtransform");
});

let navbar3 = document.querySelector(".nav3");
let menu3 = document.querySelector(".menu3");
let hbox3 = document.querySelector(".box3");

navbar3.addEventListener("mouseenter", function () {
  menu3.classList.add("hover");
  hbox3.classList.add("boxtransform");
});

navbar3.addEventListener("mouseleave", function () {
  menu3.classList.remove("hover");
  hbox3.classList.remove("boxtransform");
});

let navbar4 = document.querySelector(".nav4");
let menu4 = document.querySelector(".menu4");
let hbox4 = document.querySelector(".box4");

navbar4.addEventListener("mouseenter", function () {
  menu4.classList.add("hover");
  hbox4.classList.add("boxtransform");
});

navbar4.addEventListener("mouseleave", function () {
  menu4.classList.remove("hover");
  hbox4.classList.remove("boxtransform");
});

let navbar5 = document.querySelector(".nav5");
let menu5 = document.querySelector(".menu5");
let hbox5 = document.querySelector(".box5");

navbar5.addEventListener("mouseenter", function () {
  menu5.classList.add("hover");
  hbox5.classList.add("boxtransform");
});

navbar5.addEventListener("mouseleave", function () {
  menu5.classList.remove("hover");
  hbox5.classList.remove("boxtransform");
});

let navbar6 = document.querySelector(".nav6");
let menu6 = document.querySelector(".menu6");
let hbox6 = document.querySelector(".box6");

navbar6.addEventListener("mouseenter", function () {
  menu6.classList.add("hover");
  hbox6.classList.add("boxtransform");
});

navbar6.addEventListener("mouseleave", function () {
  menu6.classList.remove("hover");
  hbox6.classList.remove("boxtransform");
});

let navbar7 = document.querySelector(".nav7");
let menu7 = document.querySelector(".menu7");
let hbox7 = document.querySelector(".box7");

navbar7.addEventListener("mouseenter", function () {
  menu7.classList.add("hover");
  hbox7.classList.add("boxtransform");
});

navbar7.addEventListener("mouseleave", function () {
  menu7.classList.remove("hover");
  hbox7.classList.remove("boxtransform");
});

const btn = document.querySelectorAll(".sidebtn");
btn.forEach((el) => {
  const submenu = el.nextElementSibling;

  el.addEventListener("click", () => {
    submenu.classList.toggle("open");
  });
});

const menubtn = document.querySelectorAll(".menubtn");
const sidevar = document.querySelectorAll(".var");

menubtn.forEach((el) => {
  el.addEventListener("click", () => {
    sidevar.forEach((al) => {
      al.classList.toggle("open");
    });
  });
});
