

const flight = 'LH234'

const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23739179284
}

// создадим фунцию чекИна
const checkIn = function (flightNum, passenger) {

  // допустим нам нужно поменять номер рейса, это не самая лучшая практика менять значение аргументов, но это пример
  flightNum = 'LH999'
  passenger.name = 'Mr. ' + passenger.name

  // чекаем правильность паспорта
  if (passenger.passport === 23739179284) {
    alert('Checked in')
  } else {
    alert('Wrong passport!')
  }

}

checkIn(flight, jonas)

// ничего не поменяется в примитивном типе данных, так как в функции у нас копия этого примитива, а не оригинал
console.log(flight);

// объект поменяется, так как фукнция обращается к той же части памяти, где сохранен объект и меняет его
console.log(jonas);



// другой пример
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(jonas)
checkIn(flight, jonas)
