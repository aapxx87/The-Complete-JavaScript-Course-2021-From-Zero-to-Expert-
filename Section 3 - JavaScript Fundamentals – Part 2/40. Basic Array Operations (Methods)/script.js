

// ---- ADD ELEMENTS

// Push - adds elements to the end of an array
const friends = ['Michael', 'Steven', 'Peter']

// push - это функция, это видно по скобкам. Функция, которую мы вызываем push(), в которую передаем аргумент. Это метод, который представляет собой функцию, вызываемую прямо из массива

// так как это функция, то она возвращает определенное value, это есть длинна нового массива, мы можем сохранить value  в переменную
const newLength = friends.push('Jay')
console.log(newLength);
console.log(friends);


// Unshift - adds elements to the beginning of an array
friends.unshift('John')
console.log(friends);



// --- REMOVE ELEMENTS

// remove last element
friends.pop()
const popped = friends.pop()

// метод (функция) pop возвращает удаленный элемент
console.log(popped);
console.log(friends);

// remove first element
friends.shift()
console.log(friends);




// --- OTHER METHODS

// IndexOf - Показывает ан какой позиции находится элемент в массиве
console.log(friends.indexOf('Steven'));

// если элемента нет в массиве то вернет -1
console.log(friends.indexOf('Bob'));


// includes - возвращает true или false в зависимости от того, есть ли данный элемент в массиве или нет
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}



// Challenge 


const bills = [125, 555, 44]

const calcTip = function (bill) {

  const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2
  return tip
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + + bills[2]]


console.log(tips);
console.log(total);