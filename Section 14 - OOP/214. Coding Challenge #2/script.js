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



// Step 1 - добавим статический метод к конструктору Person
Person.hey = function () {
  console.log('Hey there');
}

// вызываем созданный метод 
// Person.hey()

// но этот метод не наследуется




// 206
// Prototypes - так мы добавляем методы
Person.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
};

// console.log(Person.prototype);

jonas.calcAge()

// посмотреть прототип объекта
// console.log(jonas.__proto__);

// // свойство прототипа функции конструирования

// console.log(jonas.__proto__ === Person.prototype);

// // можем проверить, является ли прототип прототипом других объектов
// console.log(Person.prototype.isPrototypeOf(jonas));


// Добавим свойство для прототипа - через свойство протипа оно будет доступно и для инстансов
Person.prototype.species = 'Homo Sapiens'

// console.log(jonas);


// В данном случае сойство принадлежит не самом у инстансу, а его прототипу
// console.log(jonas.species);

// // можем проверить обладает ли инстанс этим свойством сам или нет
// console.log(jonas.hasOwnProperty('firstName'));  // true
// console.log(jonas.hasOwnProperty('species'));  // false





// 208
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);  // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__.__proto__);  // null


// console.dir(Person.prototype.constructor);


// const arr = [3, 6, 5, 6, 3, 7]
// console.log(arr.__proto__.__proto__);

// // мы можем добавить новый метод в прототип массива и все массивы будут его наследовать
// // допустим мы хотим метод, который возвращает все уникальные элементы из массива
// Array.prototype.unique = function () {
//   return [...new Set(this)]
// }

// console.log(arr.unique());





// 209

const Car = function (make, speed) {

  this.make = make,
    this.speed = speed

}

const car1 = new Car('bmv', 120)
const car2 = new Car('Mercedes', 95)

// console.log(car1, car2);


Car.prototype.accelerate = function () {
  const accelerateSpeed = this.speed + 10
  return accelerateSpeed
}

Car.prototype.brake = function () {
  const brakeSpeed = this.speed - 10
  return brakeSpeed

}


// console.log(car1.accelerate());
// console.log(car2.accelerate());
// console.log(car1.brake());
// console.log(car2.brake());

// console.log(car1.__proto__.__proto__);





// 210

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {

  // add constructor method
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // add method to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  };

  get age() {
    return 2037 - this.birthYear
  }

  // set a property that already exist
  set fullName(name) {

    // console.log(name);

    if (name.includes(' ')) {
      this._fullName = name
    } else {
      alert(`${name} is not a full name`)
    }

  }

  get fullName() {
    return this._fullName
  }

  // static method
  static hey() {
    console.log('Hey there');
  }

}

// можно добавить метод манально прямо к прототипу
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
}



const jessica = new PersonCl('Jessica Devis', 1996)
// console.log(jessica);
// jessica.calcAge()

// jessica.greet()




// 211

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop()
  },

  set latest(mov) {
    this.movements.push(mov)
  }
}

// console.log(account.latest);

account.latest = 50
// console.log(account.movements);




// 213
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName,
      this.birthYear = birthYear
  }
}

// стивен будет прилинкован к прототипу PersonProto
const steven = Object.create(PersonProto)
steven.name = 'Steven'
steven.birthYear = 2002
// steven.calcAge()


const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1970)
// console.log(sarah);


// Challenge 2

class CarES6 {
  constructor(make, speed) {
    this.make = make,
      this.speed = speed
  }

  get speedUs() {
    // this.speed = this.speed / 1.6

    console.log(this.speed / 1.6);
  }
}

const car3 = new CarES6('Ford', 120)

console.log(car3);

car3.speedUs

