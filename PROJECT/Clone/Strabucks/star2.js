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
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletActiveClass: "on",
  },
  breakpoints: {
    960: { slidesPerView: 2, slidesPerGroup: 1, centeredSlides: true },

    0: { slidesPerView: 1.2, centeredSlides: true },
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  autoplay: {
    // delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const wrapper = document.querySelector(".swiper-wrapper");
const slides = document.querySelectorAll(".swiper-slide");

// 슬라이드를 두 번 복제하여 추가
slides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  wrapper.appendChild(clone);
});

const section3btn = document.querySelector(".section3btn");
section3btn.addEventListener("click", () => {
  const section4 = document.querySelector(".section4");
  if (section4.classList.contains("hidden")) {
    section4.classList.remove("hidden");
    section4.classList.add("visible");
    document.querySelector(".section3btn").src = "./images/section3 btn1.png";
  } else if (section4.classList.contains("visible")) {
    section4.classList.remove("visible");
    section4.classList.add("hidden");
    document.querySelector(".section3btn").src = "./images/section3 btn.png";
  }
});

const slide = document.querySelectorAll(".swiper-slide");

// slide.forEach((el) => {
//   // const running = swiper.autoplay.running;
//   el.addEventListener("mouseenter", () => {
//     if (swiper.autoplay.running) swiper.autoplay.stop();
//   });
//   el.addEventListener("mouseleave", () => {
//     if (!swiper.autoplay.running) {
//       swiper.autoplay.start();
//     }
//   });
// });

const stop = document.querySelector(".stop");
stop.addEventListener("click", () => {
  const running = swiper.autoplay.running;
  if (running) {
    swiper.autoplay.stop();
    stop.src = "./images/swiperstop.png";
  } else if (!running) {
    swiper.autoplay.start();
    stop.src = "./images/swiperstop2.png";
  }
});

swiper.on("slideChange", () => {
  const activeSlide = swiper.slides[swiper.activeIndex];
  swiper.slides.forEach((slide) => {
    slide.querySelector(".look").style.display = "none";
  });
  const activeLook = activeSlide.querySelector(".look");
  if (activeLook) {
    activeLook.style.display = "block";
  }
});

// swiper.on("slideChange", () => {
//   const activeIndex = swiper.activeIndex;

//   if (activeIndex === 2 || activeIndex === 0) {
//     swiper.pagination.bullets[1].classList.remove("on");
//     swiper.pagination.bullets[0].classList.add("on");
//   }

//   if (activeIndex === 4 || activeIndex === 1) {
//     swiper.pagination.bullets[0].classList.remove("on");
//     swiper.pagination.bullets[1].classList.add("on");
//   }
// });

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // 현재 스크롤 위치
  // console.log(scrollY);
  if (scrollY > 276) {
    document
      .querySelector(".section6 .inner1")
      .classList.add("inner1animation");
    document
      .querySelector(".section6 .inner2")
      .classList.add("inner2animation");
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  // console.log(scrollY);
  const banner = document.querySelector(".section8 .banner1");
  const text = document.querySelector(".section8 .text1");

  if (scrollY >= 1404) {
    banner.style.left = "23%";
    text.style.left = "13.5%";
  } else if (scrollY < 1404) {
    banner.style.left = "-25%";
    text.style.left = "-30%";
  }
});

/* section9 */

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > 1970) {
    document.querySelector(".section9 .banner1").classList.add("section9ani");
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > 2360) {
    document.querySelectorAll(".section10 .img").forEach((el) => {
      el.classList.add("section10ani");
    });
    document.querySelector(".section10 .text1").style.right = "20%";
    document.querySelector(".section10 .text2").style.right = "20%";
    document.querySelector(".section10 .text3").style.right = "37%";
  }
});
