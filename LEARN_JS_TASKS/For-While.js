/* Задача 1. Выведите чётные числа
При помощи цикла for выведите чётные числа от 2 до 10.
*/
for (let i = 2; i < 10; i++) {
    if (i % 2 !== 0) continue;
    alert(i);
}

/* Задача 2. Замените for на while
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}
*/
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

/* Задача 3. Повторять цикл, пока ввод неверен
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/
while (true){
    let userNumber = prompt('Enter value 100 or above', '');
    if (userNumber < 100 || userNumber == null) continue;
    alert('Please enter 100+');
}