// Иногда нам нужны функции, которые выполняются единожды и больше никогда не вызываются

// const runOnce = function () {
//   console.log('This will never run again');
// }


// оборачиваем функцию в ( ) и потом вызываем ее немедленно - immediately Invoked Function Expression

(function () {
  console.log('This will never run again');
})()


// пример со стрелочной функцией
// (() => console.log('ALSO This will never run again'))()