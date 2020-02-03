// Есть объект a с набором свойств, объект b должен унаследовать свойства a
let a = {
    name : "Peter",
    id: 1,
    sex : "male"
};

let b = {
    name: "Valter",
    id: 2,
};

b.__proto__ = a;
console.log(b.sex);
