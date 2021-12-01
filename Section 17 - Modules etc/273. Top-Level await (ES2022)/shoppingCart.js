// 272
console.log('Exporting module');

// Step 3 - пример с блокирующим кодом в экспортируемом файле
// await fetch('https://jsonplaceholder.typicode.com/posts')


const shippingCost = 10;
const cart = [];

// для экспорта добавим export
export const addToCart = function (product, quantity) {

  cart.push({ product, quantity })

  console.log(product, quantity);

}

// мульти экспорт
const totalPrice = 237
const totalQuantity = 23

export { totalPrice, totalQuantity }


// Пример дефолтного экспорта
export default function (product, quantity) {

  cart.push({ product, quantity })

  console.log(product, quantity);

}