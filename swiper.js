var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  freeMode: true,
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".slide-next",
    prevEl: ".slide-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // Small screens
    },
    768: {
      // Medium screens (md)
      slidesPerView: 2,
      spaceBetween: 24, // Optional spacing
    },
    1280: {
      // Large screens
      slidesPerView: 3,
      spaceBetween: 24, // Optional spacing
    },
  },
});
