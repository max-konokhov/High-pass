
// БУРГЕР-МЕНЮ
const btnBurger = document.querySelector('.js-burger');
const btnCloseBurger = document.querySelector('.js-close-burger');
const menuWrap = document.querySelector('.js-menu-wrap');
const menuList = document.querySelector('.menu');

const burgerTimeLine = gsap.timeline({
  onReverseComplete: () => {
      // очищаю анимационные стили после реверса
      menuWrap.style.display = null;
      menuWrap.style.transform = null;
      btnCloseBurger.style.opacity = null;
      menuList.style.opacity = null;
      menuList.style.transform = null;
  },
  paused: true,
});


// Анимация Бургер-меню
burgerTimeLine
  .to(menuWrap, {display: 'block',  scaleX: 1, duration: 0.4})
  .to(btnCloseBurger, {opacity: 1, duration: 0.7})
  .to(menuList, {opacity: 1, scaleY: 1, duration: 0.4}, "-=0.7");

btnBurger.addEventListener('click', function() {
  burgerTimeLine.play();
});

btnCloseBurger.addEventListener('click', function() {
  burgerTimeLine.reverse();
});


// Альтернативный вариант очистки свойств методами Greensocks

// Создаем объект с элементами формы
// const elems = {
//   btnBurger: document.querySelector('.js-burger'),
//   btnCloseBurger: document.querySelector('.js-close-burger'),
//   menuWrap: document.querySelector('.js-menu-wrap'),
//   menuList: document.querySelector('.menu'),
// }

// Перебираем циклом и очищаем стили для каждого элемента
// const burgerTimeLine = gsap.timeline({
//   onReverseComplete: () => {
//     for (let el in elems) {
//       gsap.set(elems[el], {clearProps: 'all'});
//     }
//   },
//   paused: true,
// });

// burgerTimeLine
//   .to(elems.menuWrap, {display: 'block',  scaleX: 1, duration: 0.4})
//   .to(elems.btnCloseBurger, {opacity: 1, duration: 0.7})
//   .to(elems.menuList, {opacity: 1, scaleY: 1, duration: 0.4}, "-=0.7");

// elems.btnBurger.addEventListener('click', function() {
//   burgerTimeLine.play();
// });

// elems.btnCloseBurger.addEventListener('click', function() {
//   burgerTimeLine.reverse();
// });




// Плавный переход по якорным ссылкам
const anchors = document.querySelectorAll('a.js-scroll')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    //добавил реверс бургер меню по клику
    burgerTimeLine.reverse();
  })
}
