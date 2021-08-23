// Selectors
const inputData = document.querySelector('.input')
const btnGo = document.querySelector('.btn')





btnGo.addEventListener('click', function () {


  const stringData = inputData.value.split('\n')
  const stringDataNew = []

  for (const item of stringData) {
    stringDataNew.push(item.trim().toLowerCase())
  }


  for (const [i, item] of stringDataNew.entries()) {
    mutateCamelCase(item, i)
  }




  const mutateCamelCase = function (string, i) {

    const [a, b] = string.split('_')


    // у второго слова заменяем первую букву на аналогичную большую
    const bNew = b.replace(b[0], b[0].toUpperCase())

    // склеиваем два слова в одно
    const result = `${(a + bNew).padEnd(20, ' ')}   ${'fly'.repeat(i + 1)}`


    console.log(result);

  }



})






