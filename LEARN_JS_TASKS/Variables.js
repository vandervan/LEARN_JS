/*Переменная - хранилище информации. Разница между операторами объявления переменных
let и  var -  в области видимости. Let нельзя объявлять дважды в том же блоке.
let работает только в блоке кода {}, где непосредственно объявлена. Хорошо использовать в циклах.
*/
let a = 10; 
console.log(a);

let q, qwe, name; //в JavaScript можно объявлять переменные в одну строку. Как и комментарии. Небольшие
q = 11;
qwe = 'privet';
name = 'Valera';
console.log(q, qwe, name);


/*хорошим практисом считается CamelCase сложносоставных имен переменных
*/
var planetEarth = '123'; 
console.log(planetEarth);

/*жесткая константа, которую не будем вычислять позже
*/
const BIRTHDAY = '29.09.1994'; 
console.log(BIRTHDAY);


/*менее "константная константа", которая будет использоваться в вычислениях, 
либо других методах, как например someMethod
*/
const age = typeof BIRTHDAY;
console.log(age);

