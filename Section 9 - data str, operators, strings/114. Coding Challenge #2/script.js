
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels',],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {

    const arguments = [...players]

    let scoredPlayer = 0

    const result = []

    const resultObj = {}


    for (let i = 0; i < arguments.length; i++) {

      for (let y = 0; y < game.scored.length; y++) {

        if (game.scored[y] === arguments[i]) {
          scoredPlayer = scoredPlayer + 1
        }

      }

      result.push([arguments[i], scoredPlayer])
      resultObj[arguments[i]] = scoredPlayer
      scoredPlayer = 0

    }

    let resultSrt = ''

    for (let u = 0; u < result.length; u++) {

      resultSrt = resultSrt + `${result[u][0]} - голов -> ${result[u][1]} \n`

    }


    // console.log(resultSrt);
    // console.log(resultObj);

  },

};


// ------- Challenge 1

// Team 1
const gk = 'Neuer'
const fieldPlayers = ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski']
const players1 = [gk, fieldPlayers]

// Team 2
const players2 = ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']

// Part 3
const allPlayers = [players1[0], ...players1[1], ...players2]

// Part 4
const players1Final = ['Thiago', 'Coutinho', 'Perisic', players1[0], ...players1[1]]

// Part 5
const team1 = game.odds.team1
const draw = game.odds.x
const team2 = game.odds.team2


// Part 6
game.printGoals('Lewandowski', 'Hummels', 'Davies', 'Kimmich', 'Goretzka')


// Part 7












// ------- Challenge 2
// 1
console.log('----- Task 1 -----');

const gameScored = game.scored

for (const [i, player] of gameScored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}




// 2
console.log('----- Task 2 -----');

const odds = Object.values(game.odds)


let sum = 0

for (const odd of odds) {
  sum = sum + odd

}

sum = sum / odds.length

console.log(sum);



// 3
console.log('----- Task 3 -----');



for (const [key, odd] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${game[key] || 'draw'}:  ${odd}`);
}




// 4
console.log('----- Task 4 -----');



const scored = {}


const scorersCompute = function (array) {


  const names = [...array]

  let scor = 0

  for (const name of names) {

    for (const nameSc of game.scored) {
      if (name === nameSc) {
        scor = scor + 1
      }
      scored[name] = scor
    }

    scor = 0

  }

  console.log(scored);

}


scorersCompute(game.scored)
