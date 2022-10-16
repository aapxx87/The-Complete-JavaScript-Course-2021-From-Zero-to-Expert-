Unit: 289. Listening For load and hashchange Events
Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649549#overview


Topics:


Steps:
1) index.html - при клике по определенному рецепту из блока слева система забирает id рецепта и вставляет его в адресную строку через #, то есть забирает хеш. Просимулируем это

2) сontroller.js - нам нужно слушать данное событие, то есть клик по элементам в списке рецептов, чтобы забирать их id, который добавляется в адресную строку в виде хеша

3) сontroller.js - теперь мы функцию showRecipe() запускаем не сразу а только по событию, но нам нужно забрать id рецепта из хеша

4) сontroller.js - вставляем id в запрос fetch


6:57