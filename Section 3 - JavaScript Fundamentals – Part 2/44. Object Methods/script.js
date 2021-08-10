
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  //  создаем метод внутри объекта, фетод - это функция. Так как функция - это expression которая производит value  в итоге
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear
  // }

  // используем ключевое слово this
  // calcAge: function () {
  //   return 2037 - this.birthYear
  // }

  // сохраним результат рассчета метода, чтобы потом его переиспользовать
  calcAge: function () {

    // создаем новое свойство в объекте
    this.age = 2037 - this.birthYear

    return this.age
  },

  // challenge
  getSummary: function () {

    // this.calcAge()

    return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
  }

}


// -- Вызов метода объекта

// dot notation
// console.log(jonas.calcAge(1991));

// bracket notation
// console.log(jonas['calcAge'](1991));


// console.log(jonas.calcAge());


// сначала вызываем метод, чтобы он сгенерировал значение
// jonas.calcAge()

// потом можем обращаться к новому свойству
// console.log(jonas.age);


// Challenge


console.log(jonas.getSummary());