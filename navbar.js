const ikona = document.querySelector(".icon__burger");
const menu = document.querySelector(".mobile__menu");
const iconToggle = () => {
  ikona.addEventListener("click", () => {
    ikona.classList.toggle("icon__close");
  });
};

const menuToggle = () => {
  const menu = document.querySelector(".mobile__menu");

  ikona.addEventListener("click", () => {
    menu.classList.toggle("mobile__menu--hidden");
  });
};

iconToggle();
menuToggle();
