document.addEventListener('DOMContentLoaded', function () {

  const btnOpenSearch = document.querySelector('.js-btn-search-open');
  const btnCloseSearch = document.querySelector('.js-btn-search-close');
  // const searchForm = document.querySelector('.js-search-form');
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









});
