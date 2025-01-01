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

document.querySelectorAll(".platform-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Hide all content
    document.querySelectorAll(".platform-content").forEach((content) => {
      content.style.display = "none";
    });

    // Show the content for the selected platform
    const platform = button.getAttribute("data-platform");
    document.querySelector(
      `.platform-content[data-platform="${platform}"]`
    ).style.display = "grid";
  });
});

// For Dropdown
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const toggleSection = document.getElementById("toggleSection");
    const arrowIcon = document.getElementById("arrowIcon");

    toggleButton.addEventListener("click", function () {
        // Toggle the hidden class to show or hide the section
        toggleSection.classList.toggle("hidden");

        // Toggle the rotate class to rotate the arrow icon
        arrowIcon.classList.toggle("rotate");
    });
});

// For Navbar

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 300 ||
//     document.documentElement.scrollTop > 300
//   ) {
//     document.getElementById("header").style.position = "fixed";
//     document.getElementById("header").style.top = "0px";
//     document.getElementById("header").style.animationName = "nav-animation";
//   } else {
//     document.getElementById("header").style.position = "initial";
//     document.getElementById("header").style.animationName = "fad-1";
//   }
// }
