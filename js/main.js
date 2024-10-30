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
