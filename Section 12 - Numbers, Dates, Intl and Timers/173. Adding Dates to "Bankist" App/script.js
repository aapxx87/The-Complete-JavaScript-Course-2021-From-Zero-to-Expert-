'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

// Step 3
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // Step 3 - вынимаем дату по индексу перебра самых ьovements так как они совпадают и обязательно конвертируем в формат Даты
    const date = new Date(acc.movementsDates[i])

    const day = `${date.getDate()}`.padStart(2, 0)
    const month = `${date.getMonth() + 1}`.padStart(2, '0') // так как месяц стартует с нуля, то прибалвяем единицы
    const year = date.getFullYear()
    const displayDate = `${day}/${month}/${year}`


    // 169
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // 169
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  // Step 3.2
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  // Step 3.3
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;



// Step 1
// FAke always logged in
// в обычном флоу все это делается при событии по нажатию кнопки btnLogin
currentAccount = account1
updateUI(currentAccount)
containerApp.style.opacity = 100;


// // Step 2.1
// const now = new Date()

// // форматируем вид отображения даты: day/month/year

// // если день или месяц однозначные, то добавим 0 перед ними
// const day = `${now.getDate()}`.padStart(2, 0)
// const month = `${now.getMonth() + 1}`.padStart(2, '0') // так как месяц стартует с нуля, то прибалвяем единицы

// const year = now.getFullYear()
// const hour = now.getHours()
// const min = now.getMinutes()

// // теперь конструируем строку
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`







btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;


    // Step 4 - create current date and time

    const now = new Date()
    const day = `${now.getDate()}`.padStart(2, 0)
    const month = `${now.getMonth() + 1}`.padStart(2, '0') // так как месяц стартует с нуля, то прибалвяем единицы
    const year = now.getFullYear()
    const hour = `${now.getHours()}`.padStart(2, 0)
    const min = `${now.getMinutes()}`.padStart(2, 0)

    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Step 5 - add transfer date 
    currentAccount.movementsDates.push(new Date().toISOString())
    // аналогично у получателя
    receiverAcc.movementsDates.push(new Date().toISOString())

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // 169
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Step 5 - add loan date 
    currentAccount.movementsDates.push(new Date().toISOString())


    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// 168
// console.log(23 === 23.0)

// // Conversion - Трансформация строки в число
// console.log(Number('23'))
// console.log(+'23')

// // Parsing - чтобы это работало строка должна начинаться со числа
// // Parsing - вторым аргументом функция принимает значение regex, то есть систему исчисления
// // parseInt - int = integers - целые числа
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('30px', 10));

// // прмиер с двоичной системой
// console.log(Number.parseInt('10100px', 2));

// // parseFloat - float = плавающие
// console.log(Number.parseFloat('   2.5px   '));

// // Checking if value is NaN
// console.log(Number.isNaN(+'20x'));

// // Checking if value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));

// console.log(Number.isInteger(23));


// 169

// квадратный корень
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// кубический корень
// console.log(8 ** (1 / 3));

// определение максимального числа из набора
// console.log(Math.max(5, 18, 23, 11, 2));

// сработает даже если одно из чисел в строковом формате
// console.log(Math.max(5, 18, '23', 11, 2));

// определение минимального числа из набора
// console.log(Math.min(5, 18, '23', 11, 2));

// число PI
// console.log(Math.PI);


// генерация случайного числа между 0 и 1
// console.log(Math.random());

// От 1 до 6
// console.log(Math.trunc(Math.random() * 6) + 1);

// генерация random integers between two values
const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min
// если мы хотим генерировать числа в диапазоне негативных чисел то лучше использовать floor
const randomInt2 = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min

// console.log(randomInt(10, 20));


// Rounding integers
// trunc - remove any decimal part
// console.log(Math.trunc(23.34));  // 23

// округляет либо в большую либо в меньшую сторону
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// округляет в большую сторону
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// округляет в меньшую сторону
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));


// в случае положительных чисел trunc и floor работают аналогично
// а вот в случае отрицательных чисел - нет
// console.log(Math.trunc(-23.3));  // -23
// console.log(Math.floor(-23.3));  // -24


// Rounding decimals - toFixed always returns a string, not a number. This is important to keep in mind.
// console.log((2.3456).toFixed(1)); // 2.3

// Конвертируем результат в число сразу
// console.log(+(2.3).toFixed(3)); // 2.300


// 170
// console.log(5 % 2); // 1
// console.log(5 / 2); // 5 = 2 * 2 + 1 => 1 is remainder

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2 => 2 is remainder

// Метод может использоваться для определения четного или нечетного числа, то ремайндер при делении на 2 будет 0
// console.log(6 % 2);

const isEven = function (n) {
  if (n % 2 === 0) {
    console.log('Четное')
  } else {
    console.log('Нечетное');
  }
}

// isEven(9)

const even2 = n => n % 2 === 0

// console.log(even2(5));


// 170
// labelBalance.addEventListener('click', function () {
//   const allMov = document.querySelectorAll('.movements__row')
//   console.log(allMov);
// })


// 171
// Самое большое число, которое JS может представить
// console.log(2 ** 53 - 1);  // 9007199254740991

// это число сохраненно в отдельный метод
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Все целые числа больше этого не сохраняются

// В других языках используюся 60 битные числа и у нас возникает проблема их сохранения в JS, допустим если мы получили их по API

// Для решения этой проблемы используется BigInt (добавляем n после числа) 
// console.log(900719925474099143534534543n); // 900719925474099143534534543n
// n - трансформирует число в формат BigInt


// также можно использовать функцию bIgInt()
// console.log(BigInt(9007199254740));

// Operations - операции с BigInt - все делается классически
// console.log(10000n + 200000n); // 210000n


// мы не можем миксовать BigInt и обычные числа




// 172
// Create date

// текущая дата
// const now = new Date()
// console.log(now);  // Mon Sep 27 2021 07:49:52 GMT+0300 (Moscow Standard Time)

// // парсим из date string
// console.log(new Date('Sep 27 2021 07:49:00')); // Mon Sep 27 2021 07:49:00 GMT+0300 (Moscow Standard Time)


// console.log(new Date('December 24, 2015')); // Thu Dec 24 2015 00:00:00 GMT+0300 (Moscow Standard Time)

// // спарсим дату из нашего account1
// console.log(new Date(account1.movementsDates[0])); // Tue Nov 19 2019 00:31:17 GMT+0300 (Moscow Standard Time)

// console.log(new Date('2020')); // Wed Jan 01 2020 03:00:00 GMT+0300 (Moscow Standard Time)

// Working with dates
// const future = new Date(2037, 10, 19, 15, 23)

// console.log(future); // Sun Nov 19 2017 15:23:00 GMT+0300 (Moscow Standard Time)

// console.log(future.getFullYear()); // 2037
// console.log(future.getMonth()); // 10
// console.log(future.getDate()); // 19
// console.log(future.getDay()); // 4 - день по счету в недели
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());


// console.log(future.toISOString());  // 2037-11-19T12:23:00.000Z


// console.log(future.getTime());  // 2142246180000




