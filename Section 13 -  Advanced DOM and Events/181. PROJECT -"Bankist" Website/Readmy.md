# 181. PROJECT: "Bankist" Website

link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648935#overview

[Theory]




[Steps]
1) сейчас если мы нажимаем на кнопку Open account и кнопка open account, видна не целиком, то есть есть небольшой скролл вниз, то экране вохвращается наверх при открытии модалки. Это происходит так как у нас не button, а линк (a) на открытие модалки и в href="#", это дефолтное поведение. Нам нужно его пердотвратить. Проставляем в функции открытия модалки openModal - preventDefault