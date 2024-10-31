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
let count = 0; // Hisoblagichni 0 dan boshlaymiz

document.querySelector(".navmenu__right__box__img1").textContent = count;

const clickSound = document.getElementById("clickSound");

izbElements.forEach((izb1) => {
  izb1.clicked = false;

  izb1.addEventListener("click", () => {
    clickSound.play();

    if (izb1.src.endsWith("izb.svg")) {
      izb1.src = "./images/icons/Vector-izb-black.svg";

      if (!izb1.clicked) {
        count++;
        izb1.clicked = true;
      }
    } else {
      izb1.src = "./images/icons/izb.svg";

      if (izb1.clicked) {
        count--;
        izb1.clicked = false;
      }
    }

    document.querySelector(".navmenu__right__box__img1").textContent = count;

    localStorage.setItem("izbCount", count);
  });
});
