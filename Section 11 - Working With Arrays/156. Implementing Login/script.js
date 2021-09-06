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


// ---- 145
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

// displayMovements(account1.movements)



// ---- 148
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




// ---- 149
const createUsernames = function (accs) {

  accs.forEach(function (acc) {

    acc.username = acc.owner.toLowerCase().split(' ').map(function (name) {
      return name[0]
    }).join('')

  })

}

createUsernames(accounts)




// ---- 149
// Мой вариант
// const userArr = user.split(' ')
// console.log(userArr);
// const userArrShort = userArr.map(function (string) {
//   return string.slice(0, 1).toLowerCase()
// })
// console.log(userArrShort);
// const finalnameArr = userArrShort.join('')
// console.log(finalnameArr);






// ---- 151
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// фильтр то же итерирует текущий элемент массива, но может принимать также и индекс и весь массив
// создадим массив только депозитов, то есть только элементов с положительным знаком

const deposits = movements.filter(function (mov) {
  return mov > 0;
})

console.log(deposits);


const withdrowals = movements.filter(function (mov) {
  return mov < 0
})

console.log(withdrowals);
*/



// ---- 151
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, cur, i, arr) {
  // console.log(`Iteration ${i}: ${acc}`);
  return acc + cur
}, 0)

// console.log(balance);


// ---- 151
// Maximum value
const maxValue = movements.reduce(function (acc, cur) {

  if (acc > cur) {
    return acc
  } else {
    return cur
  }

}, movements[0])

// console.log(maxValue);




// ---- 151
const calcDisplayBalance = function (obj) {

  const mov = obj.movements

  const value = mov.reduce(function (acc, cur) {
    return acc + cur
  }, 0)

  labelBalance.textContent = `${value} EUR`

}

// calcDisplayBalance(account1)



/*
// ---- 152 Challenge 2
const calcAverageHumanAge = function (arr) {

  const humanAge = arr.map(function (item) {

    if (item <= 2) {
      return 2 * item
    } else {
      return 16 + item * 4
    }

  }).filter(function (item) {
    return item > 18
  })

  const humanAverAge = humanAge.reduce(function (acc, cur) {
    return acc + cur
  })

  console.log(humanAverAge);

  console.log(humanAge);

  return humanAverAge / humanAge.length

}

const dataOne = [5, 2, 4, 1, 15, 8, 3]
const dataTwo = [16, 6, 10, 5, 6, 1, 4]

console.log(calcAverageHumanAge(dataOne));
*/





// 153

const eurToUsd = 1.1

// нам нужны для начала только депозиты
// результатом метода filter будет сразу новый массив
// методом map мы конвертим eur в usd
// в конце применяем метод reduce, чтобы все посчитать единым числом
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0)

// console.log(totalDepositsUSD);




// 153
// Мой вариант
/*
const calcDisplaySummary = function (arr) {

  const arrIn = arr.filter(function (mov) {
    return mov > 0
  })

  const totalIn = arrIn.reduce(function (acc, cur) {
    return acc + cur
  }, 0)


  labelSumIn.textContent = totalIn


  const arrOut = arr.filter(function (mov) {
    return mov < 0
  })

  const totalOut = Math.abs(arrOut.reduce(function (acc, cur) {
    return acc + cur
  }, 0))


  labelSumOut.textContent = totalOut

}

calcDisplaySummary(account1.movements)
*/





// 153
// Step 4 - добавим сюда еще целый аккаунт в дополнение к movements
const calcDisplaySummary = function (acc) {

  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)

  labelSumIn.textContent = `${incomes} EUR`

  const out = Math.abs(acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0))

  labelSumOut.textContent = `${out} EUR`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1
    })
    .reduce((acc, int) => acc + int, 0)

  labelSumInterest.textContent = interest

}

// calcDisplaySummary(account1.movements)





// 155
// не возвращает целый массив, а возвращает только первый элемент, который удовлетворяет условиям 
const firstWithDrawal = movements.find(function (mov) {
  return mov < 0
})

// console.log(firstWithDrawal);

// console.log(accounts);

// const account = accounts.find(function (acc) {

//   acc.owner = 'Jessica Davis'

//   return acc.owner

// })

// console.log(account);








// 2.1
let currentAccount

// Step 1 - создаем eventHandler для кнопки логина
btnLogin.addEventListener('click', function (e) {

  // метод предотвращает сабмит формы
  e.preventDefault()

  // console.log('login');

  // Step 2 -> 2.1 (find возвращает undefind если ничего не сматчилось с условием)
  currentAccount = accounts.find(function (acc) {
    // по поводу сравнения с usrname см урок 149
    return acc.username === inputLoginUsername.value
  })

  // console.log(currentAccount);

  // Step 3
  // 3.1.
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {

    // 3.2

    // Display UI and Welcome message - забираем только имя
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    // основной контейнер у нас пока не введены правильные логин и пин стоит с параметром прозрачности 0, то есть его не видно, теперь делаем видимым
    containerApp.style.opacity = '1'

    // Display movements - вызываем ранее созданную функцию - 145

    displayMovements(currentAccount.movements)

    // Display balance - вызываем ранее созданную функцию - 151

    calcDisplayBalance(currentAccount)

    // Display summary - вызываем ранее созданную функцию - 153

    calcDisplaySummary(currentAccount)

    // console.log('True pin');

    // 3.3 - clear input fields

    inputLoginUsername.value = ''

    inputLoginPin.value = ''

    inputLoginPin.blur()


  }

})












































