/* Задача 1.
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
 */
let name = prompt("What's the 'оффициальное название' JavaScript?", '');
if (name === 'ECMAScript') {
    alert("Правильно!");
} else {
    alert("You don't know?",'ECMAScript!');
}

/* Задача 2.
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
 */
let number = prompt('Введите число', '');
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else if (number = 0) {
    alert(0);
}

/* Задача 3.
Перепишите if с использованием условного оператора '?':
 */
let result;
if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}
// Решение:
let a = 1, b = 2;
(a + b) < 4 ? 'malo' : 'mnogo';

/* Задача 4.
Перепишите 'if..else' в '?'
Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости рекомендуется разбить код на несколько строк.
 */
let message;
let login = prompt('Enter your login', '');
if (login === 'Сотрудник') {
    message = 'Привет';
} else if (login === 'Директор') {
    message = 'Здравствуйте';
} else if (login === '') {
    message = 'Нет логина';
} else {
    message = '';
}

//Решение:
let log = prompt('Please, enter your login', '');
(log === 'Сотрудник') ? 'Привет' :
(log === 'Директор') ? 'Здравствуйте' :
(log === '') ? 'Нет логина' :
'';

/* Задача 5.
if (строка с нулём)
Выведется ли alert?
 */
if ("0") {
    alert('Привет');
}

//Решение:
/*
Alert выведется, т.к. любая непустая строка возвращает true, а "0" - не пустое значение.
Если бы был просто 0, то Alert бы не вывелся.
 */
