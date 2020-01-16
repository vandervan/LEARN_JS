/* Задача 1. Операции с массивами:
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
 */
let styles = ["Джаз", "Блюз" ];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
    if (styles.length % 2 !== 0) {
        styles[styles.length % 2] = "Классика";
        console.log(styles);
    } else if ( styles.length % 2 === 0) {
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
    const userValue = prompt('Enter value', '');
    let arr = [];
    arr.push(userValue);
    for (let value of arr) {
        var arrSum = ++value;
        console.log(arrSum);
    }
    if (userValue === '' || userValue == null || userValue === ' ') {
        alert("Canceled");
    } else {
        console.log(arrSum);
        //sumInput();
    }
}

sumInput();

