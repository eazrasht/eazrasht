const toggler = document.querySelector("header article svg");
const navbar = document.querySelector("header article ul");

toggler.addEventListener("click", (e) => {
  if (navbar.classList.contains("nav__list")) {
    navbar.classList.remove("nav__list");
  } else {
    navbar.classList.add("nav__list");
  }

  if (toggler.classList.contains("toggler")) {
    toggler.classList.remove("toggler");
  } else {
    toggler.classList.add("toggler");
  }
});

// ===

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
  });
  slides[n].style.display = "block";
  dots[n].classList.add("active");
};
document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

document.querySelector(".next").addEventListener("click", next);

document.querySelector(".prev").addEventListener("click", prev);

setInterval(() => {
  next();
}, 6000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});

