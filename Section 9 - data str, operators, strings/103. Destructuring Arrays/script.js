

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {

    // возвращаем массив и вставляем в него определенные элементы из массивов starterMenu и mainMenu
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]

    // пока это массив без струтурирования

  }

};


// -- example - в ручном режиме деструктурирование будет выглядеть примерно так
const arr = [2, 3, 4]

const a = arr[0]
const b = arr[1]
const c = arr[2]

// --- альтернативный более простой вариант - слева обозначаем переменные, которым будут назначаться элементы массива
const [x, y, z] = arr
console.log(x, y, z);


// выберем в переменные только первое и второе меню из массива categories объекта restaurant - 'Italian', 'Pizzeria'
const [first, second] = restaurant.categories

console.log(first, second);




// --- допустим нам нужен первый элемент из массива и третий - 'Italian', 'Pizzeria', 'Vegetarian' - пропускаем второй элемент (пишем, но не заполняем)
const [first2, , second2] = restaurant.categories
console.log(first2, second2);




// --- допустим мы хотим изменить основное и дополнительное меню

// - без использования дуструктурирования ручками будет так
let [main, , secondary] = restaurant.categories
console.log(main, secondary);
// создаем временную переменную temp
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary);

// - с использованием деструктурирования

// для начала мы создаем новый массив, в котормо переменные поменяны местами
[main, secondary] = [secondary, main]
console.log(main, secondary);





// -- мы можем реализовывать деструктурирование данных прямо из функции - добавим метод order
// вызываем метод order
// нам нужен второй элемент из starterMenu и нулевой из mainMenu

// Receive 2 return values from a function - теперь деструктрируем 
const [starter, main2] = restaurant.order(2, 0)
console.log(starter, main2);



// --- nested destructuring - расмотрим пример когда у нас nested array
// вытащим первый элемент (0) и третий (второй - массив)
const nested = [2, 4, [5, 6]]
// const [i, , j] = nested
// console.log(i, j);

// допустим мы хотим деструктурировать nested массив - второй элемент мы пропускаем
const [i, , [j, k]] = nested
console.log(i, j, k);




// --- мы можем устаналивать дефолтные значения для перемнных, в которые мы извлекаем, что особенно полезно, когда мы не знаем длинны массива - default values
// те элементы которых нет будут равны единице
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r);






// ----------- моя практика
console.log('----------- моя практика');

const newArrayMy = ['one', 'two', 'tree']

const [a2, b2, c2] = newArrayMy

// console.log(a2, b2, c2);


const [, , fourth, fifth] = restaurant.starterMenu

// console.log(fourth, fifth);


const mainMenuMy = restaurant.mainMenu

console.log(mainMenuMy);

