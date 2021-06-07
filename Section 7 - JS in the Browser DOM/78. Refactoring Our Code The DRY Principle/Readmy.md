# 78. Refactoring Our Code: The DRY Principle
link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648427#overview

[Steps]
У нас код повторяется в дувух сценариях if (guess > secretNumber) и if (guess < secretNumber). В нем меняются только выводимые строки в результатах

1) добавляем новый else if блок для кейса _guess !== secretNumber_

2) добавляем функцию для кода и в том числе для добавлени любого контента на страницу _document.querySelector('.message').textContent_
