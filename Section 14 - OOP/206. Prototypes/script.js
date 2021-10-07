'use strict';

// 205
const Person = function (firstName, birthYear) {

  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // method
  // так не нужно делать - никогда не создавать методы внутри функции - если будет много инстансов, то код будет хреново перформить
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };

}

// Call construction
const jonas = new Person('Jonas', 1991)

// console.log(jonas);

// 1. New empty obj {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}


const matilda = new Person('Matilda', 1995)
// console.log(matilda);
// matilda.calcAge()

// console.log(jonas instanceof Person);


// Step 1
// Prototypes - так мы добавляем методы
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge()

// посмотреть прототип объекта
console.log(jonas.__proto__);

// свойство прототипа функции конструирования

console.log(jonas.__proto__ === Person.prototype);

// можем проверить, является ли прототип прототипом других объектов
console.log(Person.prototype.isPrototypeOf(jonas));


// Добавим свойство для прототипа - через свойство протипа оно будет доступно и для инстансов
Person.prototype.species = 'Homo Sapiens'

console.log(jonas);


// В данном случае сойство принадлежит не самом у инстансу, а его прототипу
console.log(jonas.species);

// можем проверить обладает ли инстанс этим свойством сам или нет
console.log(jonas.hasOwnProperty('firstName'));  // true
console.log(jonas.hasOwnProperty('species'));  // false






