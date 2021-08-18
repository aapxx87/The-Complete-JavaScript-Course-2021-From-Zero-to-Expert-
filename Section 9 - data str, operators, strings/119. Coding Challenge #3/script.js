const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);




// --- TASK 1: Create an array 'events' of the different game events that happened (no duplicates)
console.log('-------- Task 1 --------');

// 1 шаг - map gameEvents преобразуем в массив только по value -> [...gameEvents.values()]
// 2 шаг - загоняем массив ([...gameEvents.values()]) в новый Set, который убирает повторные значения, но мы получаем на выходе Set, а нужен массив
// 3 шаг - при помощи spread конвертируем set в массив

const events = [...new Set([...gameEvents.values()])]

console.log(events);





// --- TASK 2: After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
console.log('-------- Task 2 --------');

//  1 шаг - удаление элемента map по ключу
gameEvents.delete(64);
console.log(gameEvents);





// --- TASK 3: Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log('-------- Task 3 --------');

//  1 шаг - общее время 90 разделил на размер map (то есть на количество событий), чтобы вывести среднее


console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);






// --- TASK 4: Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽   GOAL
console.log('-------- Task 4 --------');

// 1 шаг - проитерировал мэп, заведя пару [key, value] и потом добавил условие меньше 45 или больше и что выводить в зависисомтси от этого -  key <= 45 ? 'First half' : 'Second half'

for (const [key, value] of gameEvents) {
  console.log(`${key <= 45 ? 'First half' : 'Second half'} ${key}: ${value}`);
}




