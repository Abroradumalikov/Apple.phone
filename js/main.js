const model = document.querySelector(".navmenu__left__box__right__box__link");
const phones = document.querySelector(".navmenu__left__right__phones");

model.addEventListener("click", () => {
  phones.classList.toggle("navmenu__left__right__phones__dn");
});
const bar = document.querySelector(".navmenu__bar");
const menu = document.querySelector(".navmenu__box");
bar.addEventListener("click", () => {
  menu.classList.toggle("navmenu__box1");
});
const izbElements = document.querySelectorAll(".blutooths__img__izb");

izbElements.forEach((izb1) => {
  izb1.addEventListener("click", () => {
    if (izb1.src.endsWith("izb.svg")) {
      izb1.src = "./images/icons/Vector-izb-black.svg";
    } else {
      izb1.src = "./images/icons/izb.svg";
    }
  });
});
