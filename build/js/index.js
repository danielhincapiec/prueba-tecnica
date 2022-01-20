console.log("index.js");

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
});

const overlay = document.querySelector(".js-overlay");
const bookTarget = document.querySelector(".js-book-box-target");
const bookTrigger = document.querySelector(".js-book-box-trigger");

bookTrigger.addEventListener("click", () => {
  overlay.classList.toggle("js-active");
  bookTarget.classList.toggle("js-active");
});
