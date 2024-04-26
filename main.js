"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consoleLog(param) {
    console.log(param);
}
consoleLog(123);
// в консоли выводится
// 123
console.log('consoleLog:', consoleLog);
// в консоли выводится
// consoleLog: ƒ consoleLog(param) {
//   console.log(param);
// }
// добавили @ - функция стала ДЕКОРАТОРОМ и получила значение функции, к которой она прикреплена (т.е. сразу на следующей строке после декоратора идет его класс)
let Person = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Hello from Person Constructor');
    }
};
Person = __decorate([
    consoleLog
], Person);
// в консоли выводится
// class Person {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       console.log('Hello from Person Constructor');
//   }
// }
const person = new Person('Jhon', 25);
// в консоли выводится
// Hello from Person Constructor
