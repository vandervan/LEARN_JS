/* Задача 1. Проверка значения из диапазона
Напишите условие If для проверки, что переменная age находится в диапазоне между 14 и 90.
"Включительно" означает, что значение переменной age может быть равно 14 или 90.
 */
let age = prompt('Введите ваш возраст', '');
if (age >= 14 && age <= 90) {
    console.log('Переменная в диапазоне от 14 до 90 и равна '+ age);
} else {
    console.log('Переменная вне диапазона от 14 до 90 и равна ' + age);
}

/* Задача 2. Проверка значения вне диапазона
Напишите условие If для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
С оператором НЕ !:
 */
let age = prompt('Введите ваш возраст', '');
if (!(age >= 14 && age <= 90)){
    console.log('Не в диапазоне ' + age);
} else {
    console.log('В диапазоне ' + age);
}

//С оператором ИЛИ || просто переворачиваем знаки сравнения:
let age = prompt('Введите ваш возраст', '');
if (age < 14 || age > 90){
    console.log('Не в диапазоне ' + age );
} else {
    console.log('В диапазоне ' + age);
}

/* Задача 3. Проверка логина.
Напишите код, который будет спрашивать логин с помощью prompt.
Если пользователь вводит "Админ", то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc -
показать "Отменено", в противном случае отобразить "Я вас не знаю".
Пароль проверять так:
Если введен пароль "Я главный", то выводить "Здравствуйте!",
Иначе - "Неверный пароль",
При отмене - "Отменено".
 */
let login = prompt('Введите ваш логин', '');
if (login === 'Админ') {
   let password = prompt('Введите пароль администратора', '');
    if (password === 'Я главный') {
        alert('Здравствуйте!')
    } else if (password == null) {
        alert('Отменено');
    } else if (password === '') {
        alert('Неверный пароль');
    }
}  
if (login == null || login === ''){
    alert("Отменено");
} else if (login !== 'Админ'){
    alert("Я вас не знаю");
}
