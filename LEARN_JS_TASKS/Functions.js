/* Задача 1.Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
*/
function checkAge(age) {
   return age > 18 ? alert("Premium week is now free!"): confirm("Родители разрешили?");
}
checkAge(12);
// С оператором ИЛИ
function chkAge(ag) {
   return ag > 18 || alert("Родители разрешили?");
}
chkAge(12);

/* Задача 2. Функция min(a, b)
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
 */

function min(a, b) {
    if (a > b) {
        return(b)
    } else {
        return(a)
    }
}
min(1, -5);

/* Задача 3. Функция pow(x,n)
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n)
 */
let enterX = prompt('Enter X: ', '');
let enterN = prompt('Enter N', '');
function pow(x, n) {
    if (n % 1 === 0){
        return x**n;
    } else {
        alert('N is decimal')
    }
}
pow(enterX, enterN);

/* Задача 4. Функция сложения двух чисел

 */
function sum(a, b) {
    return a + b;
}
sum(1, 2);

/* Задача 5. Функция определения имени(если имя  ваше, то "Привет" + имя)
 */
let enterName = prompt('Enter your name', '');
function isName(enterName, yourName) {
    yourName = 'Andre';
    if (enterName == yourName){
        return `Hello ` + enterName;
    } else {
        return 'Wrong name';
    }
}
isName(enterName, 'Andre');

/* Задача 6. Функция вычисления типа аргумента и вывод в консоль
 */
function argsType(arg1, arg2) {
    console.log(typeof arg1); console.log(typeof arg2);
}
argsType(1, '123');

/* Задача 7. Функция выбора четных элементов массива(возвращает новый массив)
 */
function isEven(arr) {
    arr = [1, 2, 3, 7, 12, 24];
    var sortedArr = arr.filter(item => item % 2 === 0);
    return sortedArr;
}
isEven();

/* Задача 8. Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
 */
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Pivka hochesh?",
    () => alert("da."),
    () => alert("Toze da."),
);
