const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

console.log(dogs);


// Task 1
console.log('-------- Task 1 ----------');


dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)
})

console.log(dogs);




// Task 2
console.log('-------- Task 2 ----------');


const saraDog = dogs.find(function (item) {
  return item.owners.includes('Sarah')
})

// console.log(saraDog);

if (saraDog.curFood > saraDog.recommendedFood * 1.1) {
  console.log('Перебор с едой');
} else if (saraDog.curFood < saraDog.recommendedFood * 0.9) {
  console.log(dogs[index].recommendedFood);
}





// Task 3
console.log('-------- Task 3 ----------');


const ownersEatTooMuch = []

const ownersEatTooLittle = []


dogs.forEach(function (dog) {

  if (dog.curFood > dog.recommendedFood * 1.1) {

    ownersEatTooMuch.push(...dog.owners)

  } else if (dog.curFood < dog.recommendedFood * 0.9) {

    ownersEatTooLittle.push(...dog.owners)

  } else {

  }

})

console.log('To much:', ownersEatTooMuch);
console.log('To little:', ownersEatTooLittle);





// Task 4
console.log('-------- Task 4 ----------');

console.log(ownersEatTooMuch.join(' and ') + "'s dogs eat too much!");
console.log(ownersEatTooLittle.join(' and ') + "'s dogs eat too little!");




// Task 5
console.log('-------- Task 5 (any dog eating EXACTLY the amount of food) ----------');

const ex = dogs.some(function (item, idx) {

  return item.curFood === item.recommendedFood

})

console.log(ex);




// Task 6
console.log('-------- Task 6 (any dog eating an OKEY amount of food)----------');

const exOk = dogs.some(function (item, idx) {
  if (item.curFood > item.recommendedFood * 0.9 && item.curFood < item.recommendedFood * 1.1) {
    // console.log(dogs[idx]);
    return item
  }

})

console.log(exOk);


// Task 7
console.log('-------- Task 7 (Create an array containing the dogs that are eating an okay amount of food)----------');


const exOkArray = []

const exOkArr = dogs.some(function (item, idx) {
  if (item.curFood > item.recommendedFood * 0.9 && item.curFood < item.recommendedFood * 1.1) {
    // console.log(dogs[idx]);
    exOkArray.push(dogs[idx])
    return item
  }

})

console.log(exOkArray);


// Task 8
console.log('-------- Task 8 ()----------');

const dogsCopy = Array.from(dogs)

dogsCopy.sort(function (a, b) {
  if (a.recommendedFood > b.recommendedFood) {
    return 1
  } else if (b.recommendedFood > a.recommendedFood) {
    return -1
  }
})

console.log(dogsCopy);


