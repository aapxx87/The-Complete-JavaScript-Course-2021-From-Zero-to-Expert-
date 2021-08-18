
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    mon: {
      open: 12,
      close: 22,
    },
    tue: {
      // open: 12,
      close: 22,
    },
    wed: {
      // open: 12,
      close: 22,
    },
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
    sun: {
      open: 11,
      close: 23,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  // новый синтаксис из es6 по добавлению методов - не нужно писать слово function
  order2(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} and ${time}`);

  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  // создадим новый метод - первый ингридиент обязательный, аостальные опциональные
  orderPizza: function (mainIngridient, ...otherIngridients) {

    console.log(mainIngridient);
    console.log(otherIngridients);

  }
};


// создадим мэп rest  - самый простой способ создания map, это начать с создания пустого мэп
const rest = new Map()

// затем для заполнения мэпа мы используем метод set. в аргументах сначала иет key  потом value
rest.set('name', 'Classico Italiano')

// мэп может иметь разные форматы значений key, допустим у нашего заведедния два адреса (две локации)
rest.set(1, 'Firence, Italy')
rest.set(2, 'Lisbon, Portugal')

// метод set возвращает обновленный мэп

console.log(rest);

// log result
// 0: { "name" => "Classico Italiano" }
// 1: { 1 => "Firence, Italy" }
// 2: {2 => "Lisbon, Portugal"}

// мы можем заносит метод set подряд
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed')



// для чтения конкретного свойства из мэп мы используем метод get, в который передаем key

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // we are open


// прмиер по фану
// допустим сейчас колько то часов
const time = 21;

// зажаем условие: если time больше времени открытия в мэп (получаем значнеие сразу) и наалогично меньше времени закрытия - мы получим значение true или false, которое сразу попадет в get первый и будет как key, что вренет результат в виде строки - либо открыты либо закрыты - прикольно но сложно читабельно

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));  // we are open


// проверяем содержит ли мэп определенный key
console.log(rest.has('open'));  // true


// удаление элемента по ключу
rest.delete(2)
console.log(rest);

// запрос размера мэпа
console.log(rest.size); // 7

// удаление всех элементов из мэпа
// rest.clear()


// ---- Пример как использовать объекты или массивы в качестве map keys

// - массивы
// реализуем через создание массив аи передачу кго в качестве аргумента - мы не можем ввести массив сразу в set и get, только через переменную
const arr = [1, 2]
rest.set(arr, 'Test')
console.log(rest);

// получение элемента по ключу в виде массива
console.log(rest.get(arr));
// log
// 7: {Array(2) => "Test"}
// key: (2) [1, 2]
// value: "Test"


// - объекты

// как пример используем элемент DOM в index.html
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);

// log
// 8: { h1 => "Heading" }
// key: h1
// value: "Heading"
