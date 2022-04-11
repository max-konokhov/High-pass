document.addEventListener('DOMContentLoaded', function () {

  // ФОРМА ПОИСКА
  const btnOpenSearch = document.querySelector('.js-btn-search-open');
  const btnCloseSearch = document.querySelector('.js-btn-search-close');
  const searchInput = document.querySelector('.js-search-input');

  const searchBlockTimeLine = gsap.timeline({paused: true});

  // Анимация формы
  searchBlockTimeLine
    .to(btnOpenSearch, {visibility: 'hidden', opacity: 0, duration: 0.4})
    .to(searchInput, {display: 'block', scaleX: 1, opacity: 1, duration: 0.3}, "-=0.4")
    .to(btnCloseSearch, {display: 'block', opacity: 1, duration: 0.4}, "-=0.7");

  btnOpenSearch.addEventListener('click', function() {
    searchBlockTimeLine.play();

  });

  btnCloseSearch.addEventListener('click', function() {
    searchBlockTimeLine.reverse();
  });





  // БУРГЕР-МЕНЮ
  const btnBurger = document.querySelector('.js-burger');
  const btnCloseBurger = document.querySelector('.js-close-burger');
  const menuWrap = document.querySelector('.js-menu-wrap');

  const burgerTimeLine = gsap.timeline({paused: true});


  // Анимация Бургер-меню
  burgerTimeLine
    .to(menuWrap, {display: 'block',  scaleX: 1, duration: 0.4})
    .to(btnCloseBurger, {opacity: 1, duration: 0.7})
    .to('.menu', {opacity: 1, scaleY: 1, duration: 0.4}, "-=0.7");

  btnBurger.addEventListener('click', function() {
    burgerTimeLine.play();

  });

  btnCloseBurger.addEventListener('click', function() {
    burgerTimeLine.reverse();

  });

});
