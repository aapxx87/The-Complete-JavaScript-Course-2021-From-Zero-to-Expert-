const age = 16;

age >= 18 ? console.log('> 18') : console.log(' < 18');

const agest = age >= 18 ? '> 18' : ' < 18';

console.log(agest);


let drink2

if (age >= 18) {
  drink2 = 'wine'
} else {
  drink2 = 'juice'
}

console.log(drink2);




// Challenge

const bill = 40

const tip = bill > 50 && bill < 300 ? 0.15 : 0.2

console.log(`Bill is ${bill}$, and tips is ${tip * 100}%. Final value is ${bill + (bill * tip)}$, bill = ${bill}$ and tips = ${bill * tip}$.`);