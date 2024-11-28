document.addEventListener("DOMContentLoaded", () => {
  setInterval(rolling, 3000);
});

function rolling() {
  document.querySelector(".prev").classList.remove("prev");

  const current = document.querySelector(".current");
  current.classList.remove("current");
  current.classList.add("prev");

  const next = document.querySelector(".next");

  if (next.nextElementSibling == null) {
    document.querySelector(".banner ul li:first-child").classList.add("next");
  } else {
    next.nextElementSibling.classList.add("next");
  }

  next.classList.remove("next");
  next.classList.add("current");
}
