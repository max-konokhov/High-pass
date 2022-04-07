document.addEventListener('DOMContentLoaded', function () {

  // ФОРМА ПОИСКА
  const btnOpenSearch = document.querySelector('.js-btn-search-open');
  const btnCloseSearch = document.querySelector('.js-btn-search-close');
  const searchInput = document.querySelector('.js-search-input');

  function openSearchForm() {
    btnCloseSearch.classList.add('visible');
    searchInput.classList.add('visible');
    btnOpenSearch.classList.add('hidden');
  }

  btnOpenSearch.addEventListener('click', openSearchForm);

  function closeSearchForm() {
    btnCloseSearch.classList.remove('visible');
    searchInput.classList.remove('visible');
    btnOpenSearch.classList.remove('hidden');
  }

  btnCloseSearch.addEventListener('click', closeSearchForm);


  // БУРГЕР-МЕНЮ
  const btnBurger = document.querySelector('.js-burger');
  const btnCloseBurger = document.querySelector('.js-close-burger');
  const menu = document.querySelector('.js-menu-wrap');

  function openMainMenu() {
    btnCloseBurger.classList.add('visible');
    menu.classList.add('is-open');
    btnBurger.classList.add('hidden');
  }

  btnBurger.addEventListener('click', openMainMenu);

  function closeMainMenu() {
    btnCloseBurger.classList.remove('visible');
    menu.classList.remove('is-open');
    btnBurger.classList.remove('hidden');
  }

  btnCloseBurger.addEventListener('click', closeMainMenu);



});
