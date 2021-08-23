
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Step 1 - разобьем большую строку на несколько частей, так как логически строки разделены +
// console.log(flights.split('+'));

// Step 2 - нужно вывести каждый логичесикй массив строки на новой строке
for (const flight of flights.split('+')) {

  // отдельные логические куски разделены ; сразу разделим строки по элементам массива, чтобы потом с ними работать
  // для удобной работы с каждым из кусков строки деструктурируем массив
  // console.log(flight.split(';'));

  const [type, from, to, time] = flight.split(';')


  // конструируем итоговую строку
  const output = `${type.startsWith('_Delayed') ? 'Red' : ''} ${type.slice(1).replaceAll('_', ' ')}  from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')})`.padStart(47)


  console.log(output);
}

