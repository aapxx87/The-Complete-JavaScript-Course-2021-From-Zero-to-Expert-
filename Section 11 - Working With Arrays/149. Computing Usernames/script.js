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


// 145
const displayMovements = function (movements) {

  containerMovements.innerHTML = ''

  movements.forEach(function (mov, i) {

    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
     <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
     </div>
    `

    containerMovements.insertAdjacentHTML('afterbegin', html)

  })
}

displayMovements(account1.movements)






// Step 1
const user = 'Steven Thomas Williams'; // должны получить вот такой результат stw

// приводим все символы в строке к нижнему регистру, затем сразу разбиваем строку на отдельные слова по пробелу методом split
// мы можем вызвать метод map сразу в данной строке
// и после метода map сразу вызываем метод join
// const username = user.toLowerCase().split(' ').map(function (name) {
//   return name[0]
// }).join('')

// console.log(username);


// Step 2 - запакуем все выше в функцию, мы не будем создавать новый массив, а изменим тот который передаем в функцию, то есть оригинальный, мы добавим в каждый объект новое свойство
// в даннй функции мы не создаем новое значение, мы дизменяем имеющийся объект - добавляем новое свойство, поэтому тут нет return

const createUsernames = function (accs) {
  // мы передаем в функцию массив с названиеми объектов, которые содержат исходное имя

  accs.forEach(function (acc) {
    // на каждом цикле мы перебираем каждый объект и достаем из него имя - acc.owner
    // создаем сразу новое свойство в каждом из объектов - acc.username

    acc.username = acc.owner.toLowerCase().split(' ').map(function (name) {
      return name[0]
    }).join('')


  })


}


createUsernames(accounts)

console.log(accounts);



// Мой вариант

// const userArr = user.split(' ')
// console.log(userArr);

// const userArrShort = userArr.map(function (string) {

//   return string.slice(0, 1).toLowerCase()

// })

// console.log(userArrShort);

// const finalnameArr = userArrShort.join('')
// console.log(finalnameArr);






// 148
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1

const movementsUSD = movements.map(function (mov) {

  return mov * eurToUsd

})

// console.log(movementsUSD);

const movementsDescriptions = movements.map(function (mov, i, arr) {

  if (mov > 0) {

    return `Movement ${i + 1}: you deposited ${mov}`

  } else {

    return `Movement ${i + 1}: you withdrawed ${Math.abs(mov)}`

  }

})

console.log(movementsDescriptions);

*/


































/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



/*

// 141

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


*/








/*
// 142

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


console.log('-------- For Loop --------');

for (let i = 0; i < movements.length; i++) {

  // if (movements[i] > 0) {
  //   console.log(`Deposit ${movements[i]}`);
  // } else {
  //   console.log(`Withdrowal ${movements[i]}`);
  // }

  console.log(`${movements[i] > 0 ? 'You deposited ' + movements[i] : 'You withdrew ' + movements[i]}`)

}



console.log('-------- For of  Loop --------');

for (const [i, item] of movements.entries()) {
  console.log(`${item > 0 ? 'Mov ' + (i + 1) + ' ' + 'You deposited ' + item : 'Mov ' + (i + 1) + ' ' + 'You withdrew ' + Math.abs(item)}`)
}



console.log('-------- For Each  Loop --------');

// forEach метод требует колл бек фукнцию, это higher order function, которая вызывает фукнцию внутри
// forEach это метод который вызывает другую фукнцию, мы не вызываем его как таковой
// forEach на каждой итерации выполняет колл бек функцию, которая в нем. Но для этого она в качестве аргумента принимает текущий элемент массива, который итерируется

// continuiue and break statements don't work in forEach Loop, он всегда проходится по всему массиву и не останавливается

// первый параметр в аргументах всегда текущий элемент, второй текущий элемент, третий весь массив
movements.forEach(function (item, i, array) {

  console.log(`${item > 0 ? 'Mov ' + (i + 1) + ' ' + 'You deposited ' + item : 'Mov ' + (i + 1) + ' ' + 'You withdrew ' + Math.abs(item)}`)

})

// на каждой итерации выполняется функция с текущем элементом, пока не дойдем до конца массива

// 0: function(200)
// 1: function(450)
// 2: function(450)
// ...

*/



/*
// 143


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function (item, i) {

  const iUpd = i + ' Currencies:'

  console.log(iUpd, item);

})

*/


