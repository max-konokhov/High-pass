
// Создаем объект с элементами
const elemsPopup = {
  map: document.querySelector('.js-map'),
  closePopup: document.querySelector('.js-close-popup'),
  wrapPopup: document.querySelector('.js-wrap-popup'),
  titlePopup: document.querySelector('.contacts__title'),
  addressPopup: document.querySelector('.contacts__address'),
  linkPopup: document.querySelector('.contacts__link'),
}

// Перебираем циклом и очищаем стили для каждого элемента
const popupTimeLine = gsap.timeline({
  onReverseComplete: () => {
    for (let el in elemsPopup) {
      gsap.set(elemsPopup[el], {clearProps: 'all'});
    }
  },
  paused: true,
});

popupTimeLine
  .to(elemsPopup.wrapPopup, {display: 'flex',  scaleX: 1, duration: 0.3})
  .to(elemsPopup.closePopup, {opacity: 1, duration: 0.3})
  .to(elemsPopup.titlePopup, {opacity: 1, duration: 0.3}, "-=0.2")
  .to(elemsPopup.addressPopup, {opacity: 1, scaleX: 1, duration: 0.4}, "-=0.1")
  .to(elemsPopup.linkPopup, {opacity: 1, scaleX: 1, duration: 0.4}, "-=0.1");

elemsPopup.map.addEventListener('click', function() {
  popupTimeLine.play();
});

elemsPopup.closePopup.addEventListener('click', function() {
  popupTimeLine.reverse();
});
