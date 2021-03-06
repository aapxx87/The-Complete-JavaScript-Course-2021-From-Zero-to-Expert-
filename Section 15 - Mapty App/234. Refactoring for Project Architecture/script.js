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

// 232
// let map, mapEvent


// Step 1 - создаем класс для App (это шаблон из которого потом создадим инстанс аппа чтобы все заработало)
class App {

  // Step 3 - private instance properties
  #map;
  #mapEvent;

  // в нашем случае конструктор остается пустым
  // мы могли бы дать возможность сторонним разработчикам кастомизировать некоторые параметры, тогда эти аргументы нужны бы были
  constructor() {
    // 2.1
    this._getPosition()

    // Step 3
    // 232
    // this._newWorkout - вставляем, но не вызываем, this внутри EventListener указывает на form а не объект App, фикс - добавляем bind(this)
    form.addEventListener('submit', this._newWorkout.bind(this))


    // 232
    inputType.addEventListener('change', this._toggleElevationField.bind(this))

  }

  // метод получения текущей позиции
  _getPosition() {

    // 229
    if (navigator.geolocation) {

      // вынесли код функционала загрузки карты в отдельный метод и вставляем его сюда как колл бек - this._loadMap
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
        function () {
          alert('Could not get your position')
        })

    }

  }

  // метод загрузки карты
  _loadMap(position) {

    const { latitude } = position.coords
    const { longitude } = position.coords

    console.log(`https://www.google.fr/maps/@${latitude},${longitude}`);

    // 230
    const coords = [latitude, longitude]

    // 230
    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    // 231
    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this))

  }

  // метод показа формы
  _showForm(mapE) {

    // 232
    this.#mapEvent = mapE

    // 232
    form.classList.remove('hidden')

    // фокусируем курсор сразу на инпуте Distance
    inputDistance.focus()

  }

  // метод переключения типа тренирровки
  _toggleElevationField() {

    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')

  }

  // метод создания новой тренировки
  _newWorkout(e) {

    // 3.1

    e.preventDefault()

    // Clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = ''

    const { lat, lng } = this.#mapEvent.latlng

    L.marker([lat, lng]).addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup'
      }))
      .setPopupContent('Workout')
      .openPopup();

  }


}



// Step 2 - тут мы не передаем никаких аргументов
const app = new App()

// 2.1 - вызываем метод определения текущей позиции
// app._getPosition()
// но мы можем сделать по другому. Метод который вызывается сразу как создается инстанс - это constructor. То есть как только старница загружается, мы сразу создаем новый класс, который сразу запускает метод constructor автоматически, то есть мы можем перенести определение гео позиции прямо в него












