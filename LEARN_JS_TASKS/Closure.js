/* Задача 1. Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
Да, именно таким образом, используя двойные круглые скобки (не опечатка).
Например:
sum(1)(2) = 3
sum(5)(-1) = 4
 */
function sum(a) {
    return function (b) {
        return a + b;
    }
}
sum(1)(3);

/* Задача 2.

 */




/* Задача 4. Армия функций
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
 */
function makeArmy() {
    let shooters = [];

    for  (let i = 0; i < 10; i++) {
        let shooter = function() { // функция shooter
            alert( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
