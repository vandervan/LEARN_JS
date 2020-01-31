/* Задача 1. Создайте дату
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
Для вывода используйте alert.
*/
let firstDate = new Date(Date.parse('2012-02-20T03:12'));
console.log(firstDate);

let secondDate = new Date("2012-02-20T03:12");
console.log(secondDate);

/* Задача 2. Покажите день недели
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
 */
let date = new Date(2012, 0, 3);
function getWeekDay(date) {
 const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
 return days[date.getDay()];
}
console.log(getWeekDay(date));

/* Задача 3.  День недели в европейской нумерации
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
 */
let europeDate = new Date(2012, 0, 3);
function getLocalDay(europeDate) {
 const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
 return days[europeDate.getDay() - 1];
}
console.log(getLocalDay(europeDate));

/* Задача 4. Какой день месяца был много дней назад?
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
Функция должна надёжно работать при значении days=365 и больших значениях:
 */
function getDateAgo(date, days) {
 const result = date.getDate() - days;
 date.setDate(result);
 return date.getDate();
}
alert(getDateAgo(new Date(2015, 0, 2), 1));
alert(getDateAgo(new Date(2015, 0, 2), 2));
alert(getDateAgo(new Date(2015, 0, 2), 365));

/* Задача 5. Последнее число месяца?
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
Иногда это 30, 31 или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
 */
function getLastDayOfMonth(year, month) {
 return new Date(year, month + 1, 0).getDate();
}
alert(getLastDayOfMonth(2012, 1));

/* Задача 6. Сколько сегодня прошло секунд?
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
 */
function getSecondsToday() {
 return Math.round((new Date() - new Date().setHours(0, 0, 0, 0)) / 1000);
}
getSecondsToday();

/* Задача 7. Сколько секунд осталось до завтра?
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Например, если сейчас 23:00, то:
getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
 */
function getSecondsToTomorrow() {
 return Math.round((new Date().setHours(24, 0, 0, 0) - new Date()) / 1000);
}
getSecondsToTomorrow();

/* Задача 8. Форматирование относительной даты
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".
А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
 */
//var data = new Date(2016, 12, 16, 0, 0, 0, 0);
var data = new Date(2020, 0, 30, 23, 3, 30);
function formatDate(data) {
 if ((new Date().getTime() - data.getTime()) < 1000) {
  console.log("Right now");
 } else if ((new Date().getTime() - data.getTime()) < 60000) {
  console.log(Math.round((new Date().getTime() - data.getTime()) / 1000) + " seconds ago");
 } else if ((new Date().getTime() - data.getTime()) < 3600000) {
  console.log(Math.round((new Date().getTime() - data.getTime()) / 60000) + " minutes ago");
 } else {
  console.log(data);
 }
}
formatDate(data);

// Задача 9. Получить текущую дату, вывести в консоль
function getCurrentDate() {
 console.log(Date());
}
getCurrentDate();

// Задача 10. Получить день, месяц и год текущей даты и по отдельности вывести в консоль
function getParams() {
 date =  new Date();
 return console.log(date.getDay(), date.getMonth(), date.getFullYear());
}
getParams();
