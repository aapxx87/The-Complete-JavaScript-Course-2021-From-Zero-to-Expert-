'use strict';

// Step 1 - Create construction function
// мы хотим иметь в объекте два аргумента
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

console.log(jonas);

// 1. New empty obj {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}


const matilda = new Person('Matilda', 1995)
console.log(matilda);
matilda.calcAge()

console.log(jonas instanceof Person);