
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas);


// получаем value определенного key - тут никаеи expression не можем вставлять
console.log(jonas.lastName);

// альтернативный вариант - тут мы можем вставить любое expression, которое мы хотим
console.log(jonas['job']);

// пример expression
const nameKey = 'Name'
console.log(jonas['first' + nameKey]);



// из prompt втсавляем 
// const interestedIn = prompt('What do you want to know about Jonas: firstname, age?')

// console.log(interestedIn);

// console.log(jonas[interestedIn]);

// проверяем существует ли такое поле в объекте

// if => true or false, если такое поле не существует то выдаст undefined и это будет false
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request!');
// }


// ---- Add new properties to object

// dot notation
jonas.location = 'Portugal'

// bracket notation
jonas['twitter'] = '@johnastw'


console.log(jonas);


// Challenge

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);