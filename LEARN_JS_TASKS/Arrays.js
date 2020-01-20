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
        if (userValue === '' || userValue === null || !isFinite(userValue)) break;
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

/* Задача 4.

 */