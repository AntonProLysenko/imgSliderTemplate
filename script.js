
const  slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")

function scrollRight() {
  if ((slider.scrollWidth - slider.clientWidth) <= slider.scrollLeft) {//added -20 for more stable scrolling statement(each browser measures with in own way)
    slider.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    slider.scrollBy({
      left: slider.clientWidth,//again aded 20 since browsers measures width on own secret conditions//issue appears in safari
      behavior: "smooth",
    });
  }
}

function scrollLeft() {
  slider.scrollBy({
    left: -slider.clientWidth,//sama thing, Safari
    behavior: "smooth",
  });
}

// Auto slider
// let timerId = setInterval(scrollRight, 7000);

// function resetTimer() {
//   clearInterval(timerId);
//   timerId = setInterval(scrollRight, 7000);
// }

// Scroll Events
slider.addEventListener("click", function (ev) {
  if (ev.target === leftArrow) {
    scrollLeft();
    // resetTimer();
  }
});

slider.addEventListener("click", function (ev) {
  if (ev.target === rightArrow) {
    scrollRight();
    // resetTimer();
  }
});


