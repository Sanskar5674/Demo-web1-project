function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

const swiperConfig = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  }
};