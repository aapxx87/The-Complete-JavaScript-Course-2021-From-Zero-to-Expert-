const dolphinAvScore = (179 + 108 + 89) / 3
const koalasAvScore = (179 + 108 + 89) / 3

console.log(dolphinAvScore, koalasAvScore);

if (dolphinAvScore > koalasAvScore && dolphinAvScore >= 100) {
  console.log('Dolphins are winner');
} else if (koalasAvScore > dolphinAvScore && koalasAvScore >= 100) {
  console.log('Koalas are winner');
} else if (dolphinAvScore === koalasAvScore && dolphinAvScore >= 100) {
  console.log('Same score');
} else {
  console.log('Nobody wins');
}