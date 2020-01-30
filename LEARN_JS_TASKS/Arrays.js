/* Задача 1. Операции с массивами:
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
 */
let styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
if (styles.length % 2 !== 0) {
    styles[styles.length % 2] = "Классика";
    console.log(styles);
} else if (styles.length % 2 === 0) {
    styles[styles.length / 2] = "Классика";
}
console.log("Удален элемент: " + styles.shift());
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);

/* Задача 2. Сумма введённых чисел
Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */
function sumInput() {
    var arr = [];
    while (true) {
        var userValue = prompt('Enter your value', '');
        if (userValue === '' || userValue === null || !isFinite(+userValue)) break;
        arr.push(+userValue);
    }
    var arrSum = 0;
    for (let userValue of arr) {
        arrSum += userValue;
    }
    console.log(arrSum);
}
sumInput();

/* Задача 3. Подмассив наибольшей суммы.
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
*/
function getMaxSubSum(arr) {
    var maxSum = 0;
    var counterSum = 0;
    for (let item of arr) {
        counterSum += item;
        maxSum = Math.max(maxSum, counterSum);
        if (counterSum < 0) counterSum = 0;
    }
    return maxSum;
}
console.log((getMaxSubSum([-1, 2, 3, -9])));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));

/* Задача 4. Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
 */
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
camelize('background-color');

/* Задача 5. Фильтрация по диапазону
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.
Например:

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered); // 3,1 (совпадающие значения)
alert(arr); // 5,3,8,1 (без изменений)
*/
var array = [5, 3, 8, 1];

function filterRange(array, a, b) {
    return array.filter(item => (a <= item && item <= b));
}
filterRange(array, 1, 4);

/* Задача 6. Фильтрация по диапазону "на месте"
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. 
То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
Например:

    let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert(arr); // [3, 1]
*/
let arr = [5, 3, 8, 1, 10, 121, 144];

function filterRangeInPlace(array, a, b) {
    arr = array.filter(item => (item >= a && item <= b));
}

/* Задача 7. Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
// ... ваш код для сортировки по убыванию
alert(arr); // 8, 5, 2, 1, -10
*/
let arr = [5, 2, 1, -10, 8];

function sortBy(array) {
    array.sort((a, b) => b - a);
}

/* Задача 8. Скопировать и отсортировать массив
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.
*/
let stringArray = ["JavaScript", "Java", "Python", "C#"];
//let stringArray = ["HTML", "JavaScript", "CSS"];
function copySorted(array) {
    return array.slice().sort();
}
copySorted(stringArray);

/* Задача 9. Создать расширяемый калькулятор
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
*/
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

/* Задача 10. Трансформировать в массив имён
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
*/
let vasya = {
    name: "Вася",
    age: 25
};
let petya = {
    name: "Петя",
    age: 30
};
let masha = {
    name: "Маша",
    age: 28
};

let users = [vasya, petya, masha];
let names = users.map(item => item.name);

/* Задача 11. Трансформировать в объекты
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
*/
let vasya = {
    name: "Вася",
    surname: "Пупкин",
    id: 1
};
let petya = {
    name: "Петя",
    surname: "Иванов",
    id: 2
};
let masha = {
    name: "Маша",
    surname: "Петрова",
    id: 3
};

let users = [vasya, petya, masha];
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

/* Задача 12. Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
*/
let vasya = {
    name: "Вася",
    age: 25
};
let petya = {
    name: "Петя",
    age: 30
};
let masha = {
    name: "Маша",
    age: 28
};

let arr = [vasya, petya, masha];

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя

/* Задача 13. Перемешайте массив
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
Все последовательности элементов должны иметь одинаковую вероятность.
Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д.,
с равной вероятностью каждого случая.
*/
var arr = [1, 2, 3];

function shuffle(array) {
    array.sort(array => Math.random() - 0.5);
}

/* Задача 14. Получить средний возраст
Напишите функцию getAverageAge(users),
которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
*/
let vasya = {
    name: "Вася",
    age: 25
};
let petya = {
    name: "Петя",
    age: 30
};
let masha = {
    name: "Маша",
    age: 29
};

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
    return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
}

/* Задача 15. Оставить уникальные элементы массива
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
  ваш код 
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O


*/
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
    let newArr = [];

    for (let item of arr) {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}

// Задача 16. Перебор массива с выводом в консоль кажого элемента
let testArray = [1, "Jack", 131, true];

function consoleOutput(array) {
    array.forEach(element => {
        console.log(element);
    });
    return consoleOutput();
}

// Задача 17. Перобразовать массив в строку и обрaтно в массив 
let testArray = [1, "Jack", 131, true];

function arrayToString(array) {
    return array.join(',');
}

function stringToArray(string) {
    return string.split(',');
}
stringToArray("James Hetfield, Kirk Hammet, Lars Ulrich");

// Задача 18. Добавить к каждому элементу массива словo hello 
let testArray = [1, "Jack", 131, true];

function addHello(array) {
    return array.map((item) =>
        (item + ' Hello'));
}

// Задача 19. Преобразовать числовой массив в boolean
let numberedArray = [1, -2, 3, -4];

function toBool(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "number" && array[i] > 0) {
            array[i] = true;
        } else {
            array[i] = false;
        }
    }
}
