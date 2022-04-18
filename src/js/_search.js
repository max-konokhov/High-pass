

// ФОРМА ПОИСКА
const btnOpenSearch = document.querySelector('.js-btn-search-open');
const btnCloseSearch = document.querySelector('.js-btn-search-close');
const searchInput = document.querySelector('.js-search-input');

const searchBlockTimeLine = gsap.timeline({paused: true});

// Анимация формы поиска
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
