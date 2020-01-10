// 1. Сложение различных типов больше похоже на конкатенацию, т.к. не задано приведение типов, а метод консоль лог приводит к строке по дефолту
const a = 12, b = "JavaScript";
console.log (a+b);

//1.1 null + string
let emptyVariable = null;
const stringVariable = "Master of Puppets";
console.log(emptyVariable + stringVariable); // выведет nullMaster of Puppets
/* Сам по себе null имеет значение 0 и при сложении с "интовым" значением (к примеру налл + 1) выведет его значение
e.g null + 1 = 1, null + 0 = 0 и т.д */

//1.2 null + boolean
let booleanTrueVariable = true;
console.log(booleanTrueVariable + emptyVariable); //null + true = 1

//2. Умножение различных типов 
console.log(booleanTrueVariable * emptyVariable); // null * true = 0, т.к. 1 * 0 = 0, как в математике

//2.1 undefined. Любая операция с undefined возвращает undefined
const und = undefined;
console.log(und * booleanTrueVariable); // NaN
console.log(und * emptyVariable); // NaN

//3. Вычитание различных типов
const booleanFalseVariable = false;
console.log(booleanFalseVariable - booleanTrueVariable); // false - true = -1, т.к. булевы операторы имеют значения 1 и 0

console.log(emptyVariable - booleanTrueVariable); // null - true = -1

//4. Деление различных типов 
console.log(booleanTrueVariable / booleanFalseVariable); // true/false = Infinity
console.log(booleanFalseVariable / booleanTrueVariable); // false/true = 0
console.log(emptyVariable / booleanTrueVariable); // null/true = 0, т.к. null принимает значение нуля
console.log (stringVariable / "a"); // string / string = undefined
console.log(stringVariable / a); // string/number = undefined
console.log(emptyVariable / stringVariable); // null/string = undefined

//5. Явное преобразование
console.log(booleanTrueVariable); // true
console.log(+booleanTrueVariable); //1 - преобразование булевого значения к численному унарным плюсом
console.log(+"123"); // 123 - преобразование к численному типу унарным плюсом
console.log(Number("123")); // 123 - преобразование к численному типу
console.log(String(123)); // "123" - преобразование к строке

const c = true;
/*alert(c); // преобразование к строке методом алерт. Закомментировано для работоспособности из WebStorm*/

console.log(true + "true"); // при использовании унарного плюса можно конкатенировать строки и результатом будет строка truetrue
console.log("123" + undefined); //123undefined
console.log(+ "  \n 123 \n   \n  \n  "); //123, унарный плюс отрезает пробелы по краям, при наличии пустой строки возвращает 0, 
//а из непустой считывает цифры, в случае ошибки или наличии null/undefined возвращает NaN
console.log("\n123" == 123); // вернет true, т.к. знак нестрогого сравнения так же обрезает пробелы из строки и парсит из нее числа
