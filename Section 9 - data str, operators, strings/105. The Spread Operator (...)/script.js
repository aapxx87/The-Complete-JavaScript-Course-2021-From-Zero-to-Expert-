
const arr = [7, 8, 9]
// хотим новый массив на основе массива выше, но с новыми элементами вначале

// ручной неудобный вариант
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]

// при помощи цикла
// for (let i = 0; i < arr.length; i++) {
//   badNewArr.push(arr[i])
// }


// ---- способ при помощи spread

const newArr = [1, 2, ...arr]

console.log(newArr);

// разбиваем наш массив на отдельные элементы
console.log(...newArr);





// ---- мы хотим создать меню с одним новым блюдом в mainMenu 

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  // создадим метод, который пропустит через себя объект и деструктурирует его
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} and ${time}`);

  },

  // допустим для пасты нам нужно три ингридиента
  orderPasta: function (ing1, ing2, ing3) {

    console.log(`Here is pasta with ${ing1}, ${ing2}, ${ing3}.`);

  }
};


const newMenu = ['kotleta', ...restaurant.mainMenu]

console.log(newMenu);


// --- Copy array

const mainMenyCopy = [...restaurant.mainMenu]



// --- Join 2 or more arrays together

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu);


// ---- Spread operator works on iterables. Iterables: arrays, strings, maps, sets. NOT object
const str = 'Jonas'

// unpacked string - допустим мы хотим создать массив из букв str и плюс других элементов
const letters = [...str, ' ', 'T']
console.log(letters);



// --- напишем функцию, которые принимает несколько аргументов, а потом при помощи spread разобьем массив сразу на элементы  - добавим для этого в объект новый метод orderPasta
// мы ыыодим в окне prompt несколько раз ингридиенты, что является масивом, а потом в метод передаем массив при помощи оператора спреад, который сразу разбивает его на части
// вызовем метод - ингридиенты получим из prompt
// const ingridient = [
//   prompt('Make pasts. Ing1?'),
//   prompt('Make pasts. Ing2?'),
//   prompt('Make pasts. Ing3?')]

// console.log(ingridient);

// restaurant.orderPasta(...ingridient)




// ----- Objects - spread применим также к объектам
// создадим новый объект restaurant на основе базового + доп параметры
const newRestaurant = { ...restaurant, founder: 'Ivan' }
console.log(newRestaurant);


// -- Copy objects 
const restCopy = { ...restaurant }
console.log(restCopy);