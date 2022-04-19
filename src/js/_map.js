

//Яндекс-карта с кастомной меткой

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
        {
        center: [55.769535, 37.639985],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
        },
        {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition:  { top: "200px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "120px", right: "20px" }
        }
  );

  myMap.behaviors.disable('scrollZoom');

  // Создание геообъекта с типом точка (метка).
  const myPlacemark = new ymaps.Placemark(
    [55.769535, 37.639985],
    {hintContent: 'Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис № 82'},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite.svg#map',
      iconImageSize: [12, 12],
      iconImageOffset: [-6, -6],
    }
  );

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}
