Unit: 287. Loading a Recipe from API
Link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649535#overview


Topics:


Steps:

1) инициализируем новый проект terminal - npm init
2) package.json - меняем entry point в   "main": "index.js", на "main": "index.html", но типа это не очень важно
3) package.json - в scripts добавляем новый скрипт для запуска parcel - "start": "parcel index.html", и скрипт для бирдинга проекта "build": "parcel build index.html"
4) устанавливаем пакет parcel - terminal - npm i parcel -D
5) запускаем Parcel - сервер для разработки - npm run start
6) 