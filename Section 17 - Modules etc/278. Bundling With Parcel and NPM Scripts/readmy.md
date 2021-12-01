1) для начала устанавливаем сборщик parcel через terminal прописывая зависимости: npm i parcel --save-dev

2) запускаем parcel первым вариантом командой: npx parcel index.html
в качестве опций мы передаем entry point -> index.html (так как именно он включает подклбючение скрипта   <script type="module" src="script.js"></script>) - то есть файл, который мы хотим сбилдить

3) если мы хотим поставить более раннюю версию parcel, то нам сначала нужно удалить текеущую npm uninstall parcel а потом ввести npm i parcel@1.12.4 

4) если мы не хотим, чтобы страница перезагружалась при каждом измении, к примеру в приле Банкист при каждой перезагрузке нам нужно будет заново логиниться то прописываем условную констуркцию

if(module.hot) {
  module.hot.accept()
}


5) запускаем parcel через npm scripts, так будем делать чаще всего
в package-json в поле scripts добавляем новое свойство 
"start": "parcel index.html"
затем в терминале вводим npm run start

6) приступаем к final bundle. Для этого нам нужна другая команда для parcel и добавляем соответствующий скрипт в npm
"build": "parcel build index.html"

7*) пришлось в package-json - удалить строчку "main" - иначе не билдилось