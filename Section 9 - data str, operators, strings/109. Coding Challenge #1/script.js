
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


    console.log(resultSrt);
    console.log(resultObj);

  },

};


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









game.printGoals('Lewandowski', 'Hummels', 'Davies', 'Kimmich', 'Goretzka')


// Part 7

