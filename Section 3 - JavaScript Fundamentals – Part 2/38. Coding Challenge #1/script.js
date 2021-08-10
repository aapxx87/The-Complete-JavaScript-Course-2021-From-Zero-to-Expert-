

const calcAverage = (a, b, c) => (a + b + c) / 3

const avgDolphin = calcAverage(44, 23, 71)

console.log(avgDolphin);

const avgKoalas = calcAverage(65, 54, 49)

console.log(avgKoalas);


const checkWinners = function (team1, team2) {

  if (team1 > team2 && team1 / team2 > 2) {

    console.log(`Dolphin win (${team1} vs ${team2})`);

  } else if (team2 > team1 && team2 / team1 > 2) {

    console.log(`Koalas win (${team2} vs ${team1})`);

  }

  else {
    console.log('Nobody wins');
  }

}


checkWinners(avgDolphin, avgKoalas)