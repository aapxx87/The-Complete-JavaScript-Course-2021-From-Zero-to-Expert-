// 272
// Importing module
// пишем импорт
// пример переименования переменной при экспорте totalPrice as price
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity
// } from './shoppingCart.js'


console.log('Importing module');

// console.log(shippingCost);

// addToCart('bread', 5)
// console.log(price, totalQuantity);


// пример экспорта сразу всего
// import * as ShoppingCart from './shoppingCart.js'

// // console.log(ShoppingCart);

// // Обращаемся как к свойствам объекта
// ShoppingCart.addToCart('bread', 5)

// console.log(ShoppingCart.totalPrice);


// при импорте дефолтных значений мы можем дать любые имена 
import add from './shoppingCart.js'

// add('pizza', 2)



// пример импортв и дефолтного значения и менованного - так делать не надо
// import add, {
//   addToCart,
//   totalPrice as price,
//   totalQuantity
// } from './shoppingCart.js'

// add('pizza', 2)
// console.log(price);


// Step 1 - пример с внешним await
// используем для примера апи с json placeholder
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')

// const data = await res.json()

// console.log(data);

// Step 2 - просимулируем длительную асинхронную операцию
const getLastPost = async function () {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  const data = await res.json()

  console.log(data);

  // вернем объект сформированный из данных последнего элемента в полученном массиве
  return { title: data.at(-1).title, text: data.at(-1).body }

}


// Not very clean 
// const lastPost = getLastPost()
// lastPost.then(last => console.log(last))




// Top level await
const lastPost2 = await getLastPost()
console.log(lastPost2);







