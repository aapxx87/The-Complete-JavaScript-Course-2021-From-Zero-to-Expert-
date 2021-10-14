'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


// 229
if (navigator.geolocation) {

  navigator.geolocation.getCurrentPosition(function (position) {

    const { latitude } = position.coords
    const { longitude } = position.coords

    console.log(`https://www.google.fr/maps/@${latitude},${longitude}`);

    // 230
    const coords = [latitude, longitude]

    // 230
    const map = L.map('map').setView(coords, 13);

    // console.log(map);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // функционал добавления маркера (стартовая позиция маркера при загрузке карты и определения местоположения пользователя)
    // уберем функционал отсюда так как нам не нужен он в месте где мы сейчас, нам нужно в ручном режиме поставить его на карту, поэтому переносим в контур события on
    // L.marker(coords).addTo(map)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();


    // Step 1 - добавляем обратботчик событий на карту, чтобы определять координаты отмеченной нами кнопки на карте
    // map - это объект сгенерированный Leaflet, у него много разных методов используем метод on
    map.on('click', function (mapEvent) {
      console.log(mapEvent);

      // mapEvent - {originalEvent: PointerEvent, containerPoint: k, layerPoint: k, latlng: D, type: 'click', …}
      // latlng: D {lat: 59.93497846759454, lng: 30.38148880004883}

      // забираем из объекта mapEvent, который генериться при клике на карту данные по широте и долготе, деструктурируя объект в переменные
      const { lat, lng } = mapEvent.latlng

      // параметрами L.marker(coords) вставляем массивом данные по широте и долготе, которые вытянули из объекта выше
      // метод marker создает маркер
      // addTo - добавляет маркер на карту
      // bind - создает попап и привязывает его к маркеру
      // добавляем в popup мкастомные параметры
      L.marker([lat, lng]).addTo(map)
        .bindPopup(L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup'
        }))
        .setPopupContent('Workout')
        .openPopup();

    })


  }, function () {
    alert('Could not get your position')
  })

}
