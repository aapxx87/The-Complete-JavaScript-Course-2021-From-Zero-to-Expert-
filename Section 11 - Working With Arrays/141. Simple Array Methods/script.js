'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


let arr = ['a', 'b', 'c', 'd', 'e']



// ------------ SLICE METHOD 

// первым аргументом мы указываем с какого символа начинать извлекать
console.log(arr.slice(2)); // ["c", "d", "e"]


// вторым аргументом мы вставляем до какого элемента извлекать
console.log(arr.slice(2, 4)); // ["c", "d"]


// можем указывать негативный параметры, извлекуться два последних элемента
console.log(arr.slice(-2)); // ["d", "e"]


// получим послений элемент массива
console.log(arr.slice(-1)); // ["e"]


// можно указывать в качестве второго аргумента и негативный параметр
console.log(arr.slice(1, -2)) // ["b", "c"]


// мы можем использовать метод slice для копирования массива
console.log(arr.slice()) // ["a", "b", "c", "d", "e"]




// ------------ SPLICE METHOD - аффектит на основной массив, изменяет его

// console.log(arr.splice(2));  // ["c", "d", "e"]


// пример удаления полседнего элемента из массива
// console.log(arr.splice(-1));
console.log(arr); // 

// можем определить сколько элементов после первого параметра нужно далить
// удаляем один элемент 
console.log(arr.splice(2, 1));   // ["c"]
console.log(arr);  //  ["a", "b", "d", "e"]



// ------------ REVERSE METHOD 

let arr2 = ['a', 'b', 'c', 'd', 'e']
const arr22 = ['j', 'i', 'h', 'g', 'j']
console.log(arr22.reverse())  // ["j", "g", "h", "i", "j"] - аффектит на основной массив




// ------------ CONCAT METHOD 
const letters = arr.concat(arr2)
console.log(letters) // (9) ["a", "b", "d", "e", "a", "b", "c", "d", "e"]

console.log(...arr2, ...arr22) // a b c d e j g h i j



// ------------ JOIN METHOD 
console.log(arr2.join(' - ')) // a - b - c - d - e
console.log(arr2.join('')) // abcde




