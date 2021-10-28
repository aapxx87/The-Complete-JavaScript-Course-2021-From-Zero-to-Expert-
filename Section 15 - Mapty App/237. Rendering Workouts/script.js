'use strict';



const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// 232
// let map, mapEvent


// 235
class Workout {

  date = new Date()
  id = (Date.now() + '').slice(-10)

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km 
    this.duration = duration; // in min
  }

  // дескрипшн, который добавляем в маркер тренировки
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
  }
}



// 235
class Running extends Workout {
  type = 'running'
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.calcPace();
    this._setDescription()
  }

  // создаем метод для рассчета Темпа для данного вида тренировок
  calcPace() {
    // min/km
    // создаем новое свойство 
    this.pace = this.duration / this.distance;
    return this.pace
  }
}

// Step 2.1
class Cycling extends Workout {
  type = 'cycling'
  constructor(coords, distance, duration, elevetionGain) {
    super(coords, distance, duration);
    this.elevetionGain = elevetionGain;
    this.calcSpeed();
    this._setDescription()
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60)
    return this.speed
  }

}










///////////////////////////
// APPLICATION ARCHITECTURE
// 234
class App {

  #map;
  #mapEvent;
  // создадим в объекте пустой массив для пуша в него тренировок
  #workouts = []


  constructor() {

    this._getPosition()

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

  _hideForm() {

    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''

    form.style.display = 'none'
    form.classList.add('hidden')

    setTimeout(function () {
      form.style.display = 'grid'
    }, 1000)

  }

  // метод переключения типа тренирровки
  _toggleElevationField() {

    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')

  }

  // метод создания новой тренировки
  _newWorkout(e) {

    e.preventDefault()

    // создадим фукнцию хелпер для валидации данных на факт их числовой принадлежности (вместо того, чтобы писать условие if)
    const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp))

    // создадим фукнцию хелпер для валидации данных на факт позитивности числа
    const allPositive = (...inputs) => inputs.every(inp => inp > 0)



    // 236
    // get data from form

    const type = inputType.value
    const distance = +inputDistance.value
    const duration = +inputDuration.value

    // создаем переменную тенировки, которую будем назначать в зависимости от типа тренировки
    let workout;

    const { lat, lng } = this.#mapEvent.latlng

    // if workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value

      // check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        // вместо того что выше вставляем созданную стрелочную функцию
        !validInputs(distance, duration, cadence) ||
        // функция проверки числа на позитивность
        !allPositive(distance, duration, cadence)
      )
        return alert('Not a Positive Number')

      // если тип тренировки running то создаем инстанс класса Running
      workout = new Running([lat, lng], distance, duration, cadence)

      // пушим созданную тренировку в массив с тренировками
      // this.#workouts.push(workout)


    }

    // if workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value

      // check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Not a Positive Number')

      workout = new Cycling([lat, lng], distance, duration, elevation)

    }

    // add new object to workout array
    this.#workouts.push(workout)
    console.log(workout);

    // Render workout on list
    // Step 1
    this._renderWorkout(workout)



    // пушим созданную тренировку в массив с тренировками



    // render workout on a map as marker
    this._renderWorkoutMarker(workout)

    // Hide form + clear input fields
    this._hideForm()

  }

  // 236
  // создадим отдельный метод для рендеринга маркера на карте
  _renderWorkoutMarker(workout) {

    L.marker(workout.coords).addTo(this.#map)
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`
      }))
      .setPopupContent(`${workout.description}`)
      .openPopup();

  }

  // Step 1
  // создаем метод для рендеринга тренировки в списке в интерфейсе
  _renderWorkout(workout) {

    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🏃‍♂️'
      }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div >
  <div class="workout__details">
    <span class="workout__icon">⏱</span>
    <span class="workout__value">${workout.duration}</span>
    <span class="workout__unit">min</span>
  </div>
  `

    if (workout.type === 'running') {
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
      `
    }

    if (workout.type === 'cycling') {
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevation}</span>
        <span class="workout__unit">m</span>
      </div>
     </li>
      `
    }


    form.insertAdjacentHTML('afterend', html)

  }


}



// 234
const app = new App()











