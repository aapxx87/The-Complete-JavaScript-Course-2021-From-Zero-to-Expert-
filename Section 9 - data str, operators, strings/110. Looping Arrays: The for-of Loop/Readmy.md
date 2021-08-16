# 110. Looping Arrays: The for-of Loop
link: https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648563#overview


[Theory]

- перебирать массив по элементу при помощи метод for-of - не нужно задавать counter и conditions

```
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
for (const item of menu) console.log(item);
```


- item - это массив содержащиц номер позиции и значение [i, value]

- получаем индекс элемента из массива
```
for (const item of menu) console.log(item);
for (const item of menu.entries()) {
  console.log(item);
}
```


- пример как выводить сразу индекс и значение элемента

```
for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}
```

более адекватный вариант
```
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}
```



[Steps]