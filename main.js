"use strict";
function getLength(item) {
    //так интерфейс описан непосредственно в функции
    //getLength(item: { length: number }) фигурные скобки не объект, а конкретное свойство
    console.log(item.length);
}
const obj = { name: 'Object name', length: 20 };
// у них есть описанное свойство
getLength('any string'); //10
getLength([1, 2, 3]); //3
getLength(obj); //20
const person = {
    name: 'Jhon',
    age: 25,
    gender: 'male',
    greet(msg) {
        console.log(`${msg}, ${this.name}!`);
    }
};
console.log('🚀 ~ person:', person);
person.greet('Hi');
