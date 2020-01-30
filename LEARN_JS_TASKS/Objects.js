/* Задача 1. Привет, object
Напишите код, выполнив задание из каждого пункта отдельной строкой:
*/
let user = {}
user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/* Задача 2. Проверка на пустоту
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/
var schedule = {};
var ppz = {
 name : "Ppz",
 age: 30,
};
function isEmpty(object) {
 for (let prop in object) {
  return false;
 } 
 return true;
}
isEmpty(schedule);
isEmpty(ppz);

/* Задача 3. Сумма свойств объекта
У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/
function salariesCalculation(object) {
 var countArr = Object.values(object);
 if (countArr == 0) {
  return 0;
 }
 let sum = 0;
 for (let i = 0; i < countArr.length; i++) {  
  sum += +countArr[i];
 }
 console.log(sum);
}

/* Задача 4.Умножаем все числовые свойства на 2
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Например:
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

Обратите внимание, что multiplyNumeric не нужно ничего возвращать.Следует напрямую изменять объект.
P.S.Используйте typeof для проверки, что значение свойства числовое.
*/
let menu = {
 width: 200,
 height: 300,
 title: "My menu"
};

function multiplyNumeric(object) {
 for(let prop in object) {
  if (typeof (object[prop]) === "number") {
   object[prop] = object[prop] * 2;
  }
 }
}
multiplyNumeric(menu);

/* Задача 5. 
Создать объект, добавить к нему свойство
Изменить свойство объекта 
Сделать свойство объекта функцией сложения двух чисел
*/
function sumOfParams(a, b) {
 return a + b;
}

let testObject = {};
testObject.name = "Valera";
testObject.name = "Vadim";
testObject.calcFunction = sumOfParams;
testObject.calcFunction(1, 4);
