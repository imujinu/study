// const boxCreate = document.querySelector(".section1 .part2 > .container2");
// const hiddenBox = document.querySelector(".section1 .part3");
// boxCreate.addEventListener("mouseover", () => {
//   hiddenBox.style.height = "100px";
// });
// boxCreate.addEventListener("mouseleave", () => {
//   hiddenBox.style.height = "0px";
// });

for (let i = 1; i < 6; i++) {
  const store = document.querySelector(`.section1 .part2 .store${i}`);
  const menu = document.querySelector(`.section1 .part3 .menu${i}`);

  store.addEventListener("mouseover", () => {
    store.style.backgroundColor = "red";
    menu.style.backgroundColor = "red";
    menu.style.height = "300px";
  });
  store.addEventListener("mouseleave", () => {
    store.style.backgroundColor = "";
    menu.style.backgroundColor = "";
    menu.style.height = "0px";
  });
}

// window.addEventListener("scroll", () => {
//   const scroll = window.scrollY;
//   console.log(scroll);
// });

const detail = document.querySelector(".section2 .detail");
detail.addEventListener("click", () => {
  window.scrollTo({
    top: 600,
    behavior: "smooth",
  });
});

const swiper = new Swiper(".swiper", {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletActiveClass: "on",
  },

  slidesPerView: 2,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const swiper2 = new Swiper(".swiper2", {
  //   spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletActiveClass: "on",
  },

  slidesPerView: 5,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
