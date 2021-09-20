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

// Containers
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');


const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');


const btnSort = document.querySelector('.btn--sort');

// Login
// -- Login inputs
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
// -- Login button
const btnLogin = document.querySelector('.login__btn');

// Transfer money
// -- Transfer inputs
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
// -- Transfer button
const btnTransfer = document.querySelector('.form__btn--transfer');

// Request loan
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const btnLoan = document.querySelector('.form__btn--loan');

// Close account
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const btnClose = document.querySelector('.form__btn--close');







// ---- 145

// 161
const displayMovements = function (movements, sort = false) {

  containerMovements.innerHTML = ''

  // 161
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

  movs.forEach(function (mov, i) {

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


  // Step 2.1
  obj.balance = value

  labelBalance.textContent = `${obj.balance} EUR`

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
// 156
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








// 156
let currentAccount

btnLogin.addEventListener('click', function (e) {

  e.preventDefault()


  currentAccount = accounts.find(function (acc) {

    return acc.username === inputLoginUsername.value
  })


  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {

    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`

    containerApp.style.opacity = '1'

    displayMovements(currentAccount.movements)

    calcDisplayBalance(currentAccount)

    calcDisplaySummary(currentAccount)

    inputLoginUsername.value = ''

    inputLoginPin.value = ''

    inputLoginPin.blur()

  }

  // console.log(accounts);

})





// 157

btnTransfer.addEventListener('click', function (e) {

  e.preventDefault()

  const amount = Number(inputTransferAmount.value)

  const receiverAcc = accounts.find(function (acc) {
    return acc.username === inputTransferTo.value
  })

  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username) {

    currentAccount.movements.push(-amount)
    receiverAcc.movements.push(amount)

  }

  updateUI(currentAccount)

  inputTransferAmount.value = ''
  inputTransferTo.value = ''


})


// 157
const updateUI = function (acc) {
  displayMovements(acc.movements)

  calcDisplayBalance(acc)

  calcDisplaySummary(acc)
}



// 158
btnClose.addEventListener('click', function (e) {

  e.preventDefault()

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {

    const index = accounts.findIndex(function (acc) {

      return acc.username === currentAccount.username

    })

    // console.log(index);

    accounts.splice(index, 1)

    containerApp.style.opacity = '0'

    inputCloseUsername.value = ''

    inputClosePin.value = ''

  } else {

  }

})






// 159
// console.log(movements);
// console.log(movements.includes(-130));

// console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(function (mov) {
  return mov > 0
})

// console.log(anyDeposits);

// 159
const anyDeposits5000 = movements.some(function (mov) {
  return mov > 5000
})

// console.log(anyDeposits5000);

// console.log(movements.every(mov => mov >= 0));


// 159
btnLoan.addEventListener('click', function (e) {

  e.preventDefault()

  const amount = Number(inputLoanAmount.value)

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

    currentAccount.movements.push(amount)

    updateUI(currentAccount)

  }

  inputLoanAmount.value = ''

})


// 159
const deposit = function (mov) {
  return mov > 0
}

// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));



// 160
const arr = [[1, 2, 3], [4, 5, 6], 7, 8]

// console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]



const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]

// console.log(arrDeep.flat()); // [[1, 2], 3, 4, [5, 6], 7, 8]

// console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// 160
const allMov = accounts.map(function (item) {
  return item.movements
}).flat().reduce((acc, mov) => acc + mov, 0)

// console.log(allMov);

// 160
const allMov2 = accounts.flatMap(function (item) {
  return item.movements
}).reduce((acc, mov) => acc + mov, 0)

// console.log(allMov2);





// 161
const owners = ['Jonas', 'Zach', 'Adam', 'Marta']

// console.log(owners.sort());
// ['Adam', 'Jonas', 'Marta', 'Zach']

// console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// вариант сортировки чисел при помощи коллбека
// мы передаем в функцию параметр а и в, где а - это current value, а в - next value
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Сортировка по возрастанию
movements.sort(function (a, b) {
  if (a > b) {
    return 1
  } else if (b > a) {
    return -1
  }
})
// более простая запись 
movements.sort((a, b) => a - b)



// console.log(movements); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// если мы хотим сортировку в обратном порядке то делаем по другому

// Сортировка по убыванию
movements.sort(function (a, b) {
  if (a < b) {
    return 1
  } else if (b < a) {
    return -1
  }
})

// более простая запись 
movements.sort((a, b) => b - a)

// console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]



// 161
let sorted = false

btnSort.addEventListener('click', function (e) {

  e.preventDefault()

  displayMovements(currentAccount.movements, !sorted)

  sorted = !sorted

})








// 162 - так мы создавали массивы до данного момента, в данных кейсах у нас уже были данные
// console.log([1, 2, 3, 4, 5]);
// [1, 2, 3, 4, 5]
// console.log(new Array(1, 2, 3, 4, 5));
// [1, 2, 3, 4, 5]

// * Empty arr + fill

// другой вариант создания массива
const x = new Array(7)
// если мы используем в качестве аргунемнта один элемент, то получим массив с таким количеством путсых позиций

// console.log(x);
// [empty × 7] - мы получили массив с 7 пустыми элементами, он ничего не содержит

// заполнить такой массив методом map мы тоже не сможем
// console.log(x.map(() => 5)); // [empty × 7]

// но мы можем использовать метод fill
// x.fill(1)
// console.log(x); 
// [1, 1, 1, 1, 1, 1, 1] - все семь позиций заполняются 1

// мы можем определить с какой позиции мы хотим начать заполнять массив
// x.fill(1, 3)
// console.log(x); 
// [empty × 3, 1, 1, 1, 1]

// в том числе мы можем указать не только стартовую позицию но и конечную для заполнения
x.fill(1, 3, 5)
// console.log(x);
// [empty × 3, 1, 1, empty × 2]

// можем заполнить уже массив с данными
const arr2 = [1, 2, 3, 4, 5, 6, 7]
arr2.fill(23, 4, 6)
// console.log(arr2);
//[1, 2, 3, 4, 23, 23, 7]


// Более чистый вариант создания массива - Array.from - Array - в данном случае объект и мы вызываем у него метод from - длинна массива 7, и на каждой позиции ставим 1 - аналогично методу map
const y = Array.from({ length: 7 }, () => 1)
// console.log(y);
// [1, 1, 1, 1, 1, 1, 1]

// пример азполнения массива значениями от 1 до 7
const z = Array.from({ length: 7 }, (cur, i) => i + 1)
// console.log(z);
// [1, 2, 3, 4, 5, 6, 7]



// Another use case - i need to create an array with 100 random dice rolls
const diceArr = Array.from({ length: 100 }, (_, i) => i + 1)
// console.log(diceArr);

// при помощи метода from мы можем создавать массивы из масисво подобныхструктур даннх типа NodeList, который мы получаем методом querySelectAll - но а даннм случае мы не можем применить методы map или reduce - для этого нужно трансформировать NodeList в массив

// предположим что нам нужно забрать movements (движения по депозиту) из интерфейса и сформировать массив


labelBalance.addEventListener('click', function () {

  const movementsUI = Array.from(document.querySelectorAll('.movements__value'))

  const movData = movementsUI.map(function (item) {
    return Number(item.textContent)
  }).reduce((acc, int) => acc + int, 0)

  console.log(movementsUI);
  console.log(movData);

  // альтернативный способ распаковать NodeList в массив при помощи Spread
  const movementsUI2 = [...document.querySelectorAll('.movements__value')]
  console.log(movementsUI2);

})





// 164

const allDeposits = accounts.map((acc) => acc.movements).flat().filter((acc) => acc > 0).reduce((acc, cur) => acc = acc + cur)

// console.log(allDeposits);

// 164

// вариант 1
// const allDepositsMore1000 = accounts.flatMap((acc) => acc.movements).filter((acc) => acc >= 1000).length
// console.log(allDepositsMore1000);

// вариант 2
const allDepositsMore1000 = accounts.flatMap((acc) => acc.movements).reduce((count, cur) => cur >= 1000 ? count + 1 : count, 0)
// console.log(allDepositsMore1000);


// 164
const sums = accounts.flatMap((acc) => acc.movements).reduce((sums, cur) => {
  // cur > 0 ? sums.deposits = sums.deposits + cur : sums.withdrawals = sums.withdrawals + cur

  // алернативный вариант 
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur

  return sums

}, { deposits: 0, withdrawals: 0 })


// console.log(sums);

//  пример с массивом

const sumsArr = accounts.flatMap((acc) => acc.movements).reduce((sums, cur) => {

  cur > 0 ? sums[0] = sums[0] + cur : sums[1] = sums[1] + cur

  return sums

}, [0, 0])

// console.log(sumsArr);



// 164

const str = 'this is a NICE title'

const strArr = str.toLowerCase().split(' ').
  map((curWord) => curWord.length > 1 ? curWord.replace(curWord[0], curWord[0].toUpperCase()) : curWord).join(' ')



// console.log(strArr);

// алттеннативный вариант
const convertTitleCase = function (title) {

  const exeption = ['a', 'an', 'the']

  const titleCase = title.toLowerCase().split(' ').map(word => exeption.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ')

  return titleCase


}

// console.log(convertTitleCase(str));












































