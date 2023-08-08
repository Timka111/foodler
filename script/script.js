const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 800,
  effect: "slider",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
  },
});

const mainItems = document.querySelectorAll(".main__item");
const mainBtn = document.querySelector(".main__btn");

for (let item of mainItems) {
  item.addEventListener("click", function () {
    const title = document.querySelector("#" + item.dataset.goto);
    const gotoBlockValue = title.getBoundingClientRect().top + scrollY;

    window.scrollTo({
      top: gotoBlockValue,
      left: 0,
      behavior: "smooth",
    });
  });
}

document.addEventListener("scroll", function () {
  if (scrollY >= 100) {
    mainBtn.classList.remove("hidden");
  } else {
    mainBtn.classList.add("hidden");
  }
});

mainBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
