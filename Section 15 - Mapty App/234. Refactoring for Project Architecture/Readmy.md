# 234. Refactoring for Project Architecture

link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649229#questions



[Theory]





[Steps]
1) имплементируем App Class, в который переносим функционал согласно плану. Но этот класс это лишь шаблон класса и чтобы все заработало нам нужно создать его инстанс.

2) создаем инстанс нашего Class App и вызываем необходимые методы для работы приложения

3) мы определяли глобальные переменные let map, mapEvent, чтобы к ним имели доступ различнеы функции нашего аппа, но теперь нам нужно чтобы они принадлежали классу App и поэтому мы переносим их внутрь класса App - корретируем в методах старый map на this.#map, аналогичсно с mapEvent

4) событие подтверждения формы и переключения режима тренировки должны быть доступны сразу при загрузке страницы, поэтому мы переносим их тоже сразу в метод constructor

