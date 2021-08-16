

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR: Lifting repetition ${rep}`);
// }


// ----- While loop

let rep = 1

// мы определяем только условие
while (rep <= 10) {
  console.log(`While: Lifting repetition ${rep}`);
  rep++
}


// Example with dice

// мы бросаем кубик пока не выпадет 6, когда выпадает 6 мы останавливаемся, в данном случае мы не заем сколько раз придетсмя бросать кубик


// задаем случайное стартовое значение кубику - Math.trunc - убираем десятичные знаки
let dice = Math.trunc(Math.random() * 6) + 1



// бросаем пока выпадает значение отличное от 6, когда 6 то останавливаемся
while (dice !== 6) {

  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1
  if (dice === 6) console.log('6');

}