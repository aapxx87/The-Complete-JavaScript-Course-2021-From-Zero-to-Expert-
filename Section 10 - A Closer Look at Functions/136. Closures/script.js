

const secureBooking = function () {

  // доступ к переменной у нас есть только из скоупа даннйо функции
  let passengerCount = 0

  // возвращаем новую функцию, которая манипулирует переменной в родительской фукнции
  return function () {
    passengerCount++
    console.log(`${passengerCount} passengers`);
  }

}

// сохраняем в переменную результат родительской функции, то есть будет сохранена новая функция
const booker = secureBooking()


booker()
booker()
booker()


console.dir(booker)