let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function () {
  let ul = document.querySelector(".header1>ul");
  ul.classList.add("btn1transform");

  let search = document.querySelector("#search");
  search.style.display = "block";

  let search1 = document.querySelector(".search1");
  search1.classList.add("btntransform");
});

/* section2 */

for (let i = 1; i < 8; i++) {
  document.querySelector(`.nav${i}`).addEventListener("mouseenter", () => {
    document.querySelector(`.menu${i}`).classList.add("hover");
    document.querySelector(`.box${i}`).classList.add("boxtransform");
  });
}

for (let i = 1; i < 8; i++) {
  document.querySelector(`.nav${i}`).addEventListener("mouseleave", () => {
    document.querySelector(`.menu${i}`).classList.remove("hover");
    document.querySelector(`.box${i}`).classList.remove("boxtransform");
  });
}

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
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const wrapper = document.querySelector(".swiper-wrapper");
const slides = document.querySelectorAll(".swiper-slide");

slides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  wrapper.append(clone);
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

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
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
  const width = window.innerWidth;
  const section8banner2 = document.querySelector(".section8 .banner2");
  const section8text1 = document.querySelector(".section8 .text1");
  const section8text2 = document.querySelector(".section8 .text2");
  if (width < 960) {
    if (scrollY > 7900) {
      section8banner2.style.opacity = "1";
    } else {
      section8banner2.style.opacity = "0";
    }
    if (scrollY > 8040) {
      section8text1.style.opacity = "1";
    } else {
      section8text1.style.opacity = "0";
    }

    if (scrollY > 8200) {
      section8text2.style.opacity = "1";
    } else {
      section8text2.style.opacity = "0";
    }
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const section10text1 = document.querySelector(".section10 .text1 .m-img");
  const section10text2 = document.querySelector(".section10 .text2 .m-img");
  if (scrollY > 10550) {
    section10text1.style.top = "50%";
  } else {
    section10text1.style.top = "-10%";
  }
  if (scrollY > 10650) {
    section10text2.style.bottom = "20%";
  } else {
    section10text2.style.bottom = "-20%";
  }
});

for (let i = 1; i <= 8; i++) {
  document.querySelector(`.sidebtn${i}`).addEventListener("click", () => {
    document.querySelector(`.ul${i}`).classList.toggle("ulhidden");
    document.querySelector(`.ul${i}`).classList.toggle("ulvisible");
  });
}

const crossbtn = document.querySelector(".crossbtn");
const hpart1 = document.querySelector(".section1hpart1");
const hpart2 = document.querySelector(".section1hpart2");
const allcontainer = document.querySelector(".allcontainer");

crossbtn.addEventListener("click", () => {
  hpart1.classList.add("part1hidden");
  hpart1.classList.remove("part1visible");

  hpart2.classList.add("part2hidden");
  hpart2.classList.remove("part2visible");

  allcontainer.classList.remove("allcontainerhidden");
});

const ham = document.querySelector(".btnimg4");
ham.addEventListener("click", () => {
  hpart1.classList.remove("part1hidden");
  hpart1.classList.add("part1visible");

  hpart2.classList.remove("part2hidden");
  hpart2.classList.add("part2visible");

  allcontainer.classList.add("allcontainerhidden");
});
