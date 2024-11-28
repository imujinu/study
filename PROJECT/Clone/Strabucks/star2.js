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
menubtn.forEach((el) => {
  const submenu2 = el.nextElementSibling;
  el.addEventListener("click", () => {
    submenu2.classList.toggle("open");
    btn.forEach((cl) => {
      cl.classList.toggle("visible");
    });
  });
});

/* section3 */

document.addEventListener("DOMContentLoaded", () => {
  window.setInterval(scroll, 2000);
});

function scroll() {
  document.querySelector(".prev").classList.remove("prev");

  const current = document.querySelector(".current");
  current.classList.remove("current");
  current.classList.add("prev");

  const next = document.querySelector(".next");

  if (next.nextElementSibling == null) {
    document.querySelector(".scroll ul li:first-child").classList.add("next");
  } else {
    next.nextElementSibling.classList.add("next");
  }

  next.classList.remove("next");
  next.classList.add("current");
}

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  centeredSlides: true,
  autoplay: {
    delay: 3000, // 슬라이드 이동 시간 간격
    disableOnInteraction: false, // 버튼을 이용하여 컨트롤 한 이후에도 자동 재생 유지되도록
  },
  spaceBetween: 20,
  pagination: {
    el: ".slider1 .pagination", // 해당 html의 클래스명 넣기
    clickable: true, // 클릭하여 슬라이드 컨트롤을 가능케 함. default는 false임.
    type: "fraction", // 해당 요소 추가시 현재 위치를 숫자로 알랴쥼 ex) 2/5 (다섯개의 슬라이드 중 2번째임)
    renderBullet: function (index, className) {
      // bullet을 커스텀 할 때 사용
      return '<li class="' + className + '">' + (index + 1) + "</li>";
    },
  },
});
