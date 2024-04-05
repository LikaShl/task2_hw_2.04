// 3. Задачка на onclick
// До прикріпленого файлу додати js та 3 картинки у відповідне місце.
// При нажиманні на кнопки має переключатися зображення. Головна умова - змінити файл HTML не можна.

// Алгоритм:
// 1. Вибрати кожну кнопку
// 2. Повішати на кнопку онклік
//            button1.onclick = функція(подія) {
// }
// 3. Написати функцію, яка вибирає відповідну вкладку і додає до нього активний клас (active)
// 4. Написати функцію hideAllTabs, яка видаляє клас active зі всіх вкладок.

//  Методи для роботи:
//        getElementById
//        querySelector
//        classList
//        classList.add
//        для кожного
//        onclick
//        element.onclick = функція(подія) {
//          // робити що-небудь ...
//        }

// let button = document.getElementsByClassName('showButton');
// button.onclick = addActive(){
//     let button = document.getElementsByClassName('showButton');
//     let tab = document.getElementsByClassName('tab');
//     let x = tab.dataset.tab;
//     let y = button.dataset.tab;

// }
const buttons = document.querySelectorAll(".showButton[data-tab]");
function addActive() {
  const buttonNummer = this.dataset.tab;
  const tabNummer = document.querySelector(`.tab[data-tab="${buttonNummer}"]`);
  tabNummer.classList.add("active");
}

function hideAllTabs() {
  const activeTabs = document.querySelectorAll(".tab.active");
  activeTabs.forEach((tab) => tab.classList.remove("active"));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    hideAllTabs();
    addActive.call(button);
  });
});
