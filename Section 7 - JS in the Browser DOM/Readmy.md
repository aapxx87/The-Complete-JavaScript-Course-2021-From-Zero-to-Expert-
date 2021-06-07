
__Section 7 - JS in the Browser DOM__


# 70. PROJECT #1: Guess My Number!
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648403#overview

  [Steps] - script.js

  1) выбор элемента (в HTMl) при помощи JS - _document.querySelector()_

  _querySelector()_ - это метод в объекте Document, в него мы передаем интересующий селектор - тотже самый селектор, который мы используем в css.

  Если мы используем ID вместо класса то перед id мы ставим #.

  Добавив еще метод textContent мы захватим само текстовое содержание объекта - _document.querySelector('.message').textContent_

  2) можно все это выести в консоль: _console.log(document.querySelector('.message').textContent);_
.



# 72. Selecting and Manipulating Elements
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648409#overview

  [Steps]
  1) добавляем новый текстовый контент в выбранный блок: _document.querySelector('.message').textContent = 'xxx'_

  чтобы добавить значение в input мы используем свойство value - _document.querySelector('.guess').value = 10_
.



# 73. Handling Click Events
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648411#overview

  [Theory]
  для того чтобы DOM реагировал на действия со стороны пользователя нужен EventListener. Event - это что-то что случается на страниц (mouse click, mouse moving и тд)

  [Steps]
  1) в порядке прослушивания событий мы должны сначала выбрать элемент, на котором будет происходить событие. В нашем текущем случае мы буем прослушивать событие клика по кнопке Check! И затем мы добавляем метод прослушивания событий - _addEventListener()_
  В него мы добавляем тип ивента - _addEventListener('click')_

  Затем нам нужно сказать слушателю событий, что делать. делается это путьем определения функции, которая будет содержать код, который выполнится при данном событии. Данная функция назывется event handler и мы вставляем ее в качестве аргумента после 'click'
.



# 74. Implementing the Game Logic
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648417#overview

  [Steps]
  1) для начала нам нужно определить "секретное число", с которым будет идти сравнение. Мы определяем его за пределами handler function, так как оно определяется единожды, когда мы запускаем приложение. А если определить его внутри handler function то при каждом нажатии оно будет генерироваться новое.

  2) добавляем условия если вводимое число совпадает с секретным, больше или меньше него

  3) добавляем переменную Score, которая уменьшается при каждой ошибочной попытке. Для этого есть два варианта:
  - первый: забирать значение score из HTML и уменьшать его на 1 при каждой ошибочной попытке
  - второй (лучше): через создание переменной, ее обновлении и добавлении в html

  4) добавлям условие, что игра идет пока скор больше нуля, когда он станет ноль, то выдается соответствующее уведомление
.



# 75. Manipulating CSS Styles
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648419#overview

  [Steps]
  1) меняем цвет всего фона, когда юзер выигрывает игру, размер шрифта. Когда мы определяем стиль в JS, мы всегда пишем значение в строковом формате.
  ```js
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  ```
.




# 76. Coding Challenge #1
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648423#overview

  [Steps]
  1) прикручиваем функционал ко кнопке Again
.





# 77. Implementing Highscores
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648427#overview

  [Steps]
  1) создаем переменную для highscore
  2) highscore меняется только в случае когда игрок побеждает и его текущий score больше текущего highscore
.





# 78. Refactoring Our Code: The DRY Principle
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648427#overview

  [Steps]
  У нас код повторяется в дувух сценариях if (guess > secretNumber) и if (guess < secretNumber). В нем меняются только выводимые строки в результатах

  1) добавляем новый else if блок для кейса _guess !== secretNumber_

  2) добавляем функцию для кода и в том числе для добавлени любого контента на страницу _document.querySelector('.message').textContent_
.





# 79. PROJECT #2: Modal Window
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648433#overview

  [Steps]
  1) мы создаем переменные, в которые передадим выбранные определенные элементы. Мы создадим список переменных с выбранными элементами в начале файла.
  2) пример того как циклом перебрать несколкьо элементов с одним классом
.




# 80. Working With Classes
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648437#overview

  [Steps]
  1) для того, чтобы навесить одно и тоже событие на каждую из трех кнопок мы будем использовать, созданный в прошлом уроке цикл.

  2) при прмощи JS мы будем удалять класс hidden у модального окна при клике по одной из кнопок. Используем classList в котормо множество методов, мы используем метод remove, дальше в указании класса мы не используем точку (точку мы используем при выборе селекторов), можно менять сразу много классов, перечисляя их через запятую:

  ```js
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.modal').classList.remove('hidden', 'otherClass');
  ```
  Можно также добавлять стили через JS:

  ```js
  modal.style.display = 'block';
  ```

  3) добавляем функционал закрытия модального окна при клике по кнопке Закрытия в модалке и при клике по overlay

  4) сократим код и сделаем фукнцию для одинакового кодо по закрытию модалки при клике по крестику или overlay -> делаем два примера, в одном мы новую функцию засовываем прямо в addEventListener. Также можно сделать и функцию openModal
.



# 81. Handling an "Esc" Keypress Event
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648441#overview

  [Steps]
  1) создаем addEventListener на нажатие клавиши. Есть три типа событий для key: key up, key down, key press.
  2) Мы хотим чтобы закрывалось модальное окно при нажатии на определенную унопку (Esc). Информация о том, какая кнопка была нажата сохраняется в ивенте, который реализуется в момент нажатия кнопки. Когад мы нажимаем кнопку генерируется key down event. Функция хендлер ждет пока солбытие произойдет (то есть кнопка нажмется). Когда ивент происходит JS генерирует объект, который содержит всю информацию о событии. И мы можем получить затем доступ к этому объекту. До данного момоента мы никогда не смотри внутрь ивента, мы только прослушивали его и реагировали. Но теперь нам нужно посмотреть внутрь объекта и выяснить какая кнопка была нажата. Для этого мы передаем в функцию параметр.
  Из данного объекта мы узнаем какая именно кнопка была нажата.
  3) вешаем условие if на нужную клавишу, при этом важно проверить что у интересующего нас объекта был определенный класс, который мы хотим изменить.
.




# 82. PROJECT 3: Pig Game
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648445#overview

  [Steps]
  1) Создаем первые переменные в начале файла по необходимым DOM элементам, которые будет затем использовать. Вставляем стартовые значения в current-score, которые равны нулям, делаем это по ID, которые прописаны в HTML

  2) в стартовом положении скрываем отображение картинки Dice (кубика)
.



# 83. Rolling the Dice
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648447#overview

  [Steps]
  1) добавляем переменные элементов DOM
  2) имплементируем фукнциональность броска кости (roll dice), вешаем слушатель событий на клик по кнопке Roll Dice
.



# 84. Switching the Active Player
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648449#overview

  [Steps]
  1) Нам нужно понимать какой участник сейчас бросает кость, чтобы начислять именно ему score. Создаем переменную activePlayer.
  2) Мы будем сохранять final score обоих игроков в массив, который будет начинатся с нулевых значений
  3) реализуем функционал отображения текущего скора у конкретного активного игрока
  4) если выпадает 1 то мы должны сменять игрока, то есть менять занчение let activePlayer с 0 на 1 и обратно
  5) при смене активного игрока нужно менять стили css для части на которой сейчас находится активный игрок, испольуем toggle
.



# 85. Holding Current Score
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648455#overview

  Имплементируем функцинал сохранения current score в total score при клике по кноке hold. Для этого был создан массив const scores = [0, 0];. Где "0" первый элемент это глобал скор первого игрока, а "1" соответственно второго. Условия, если скор больше или равен 100, то игрок побеждает.

  [Steps]
  1) добавляем EventHandler для кнопки hold
  2) добавляем функции чтобы не дублировать код переключения активного игрока. Данная функция не принимает никаких аргументов, потому что в обоих местах, где он будет применяться код абсолютно одинаковый, мы даже ничего не возвращаем по сути, это просто два одинковых куска кода.
  3) Вставляем функцию в EventHandler для кнопки hold
  4) имплементриуем функционал присвоения победителя при  достиэении одним из игроков total score >= 100;
  5) для того, чтобы скрывать функционал roll dice, hold при победе одного из игроков введем переменную playing с boolean значением true или false.
  6) Значение этой переменной: вся логика возможности игры будет открыта только тогда, когда let playing = true; То есть весь EventHandler при клике на btnHold активен только при условии  let playing = true;
.



# 86. Resetting the Game
  link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648459#overview

  [Steps]
.

























<!-- c -->
