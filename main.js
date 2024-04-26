"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consoleLog(constrClass) {
    console.log(constrClass);
}
function conditionLog(flag = false) {
    console.log(flag);
    // замыкание получает внутрь себя декоратор при условии флаг=истина
    return flag ? consoleLog : null;
}
// conditionLog(true); // со скобками обычная функция
// @conditionLog // декоратор - без скобок и сразу перед классом
let Person = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Hello from Person Constructor');
    }
};
Person = __decorate([
    conditionLog(true) // со скобками все еще функция, но уже является оберткой для настоящего декоратора
], Person);
const person = new Person('Jhon', 25);
