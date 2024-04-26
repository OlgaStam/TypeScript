"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AddPrinter(constrClass) {
    console.dir(constrClass);
    constrClass.prototype.printInfo = function () {
        const p = document.createElement('p');
        p.innerHTML = `${JSON.stringify(this)}<br> 
    Имя: ${this.name}<br>
    Возраст: ${this.age}<br>
    Пол: ${this.gender}<br>
    Город: ${this.location}<br>
    `;
        document.body.append(p);
    };
}
let Developer = class Developer {
    constructor(name, age, gender, location) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.location = location;
    }
};
Developer = __decorate([
    AddPrinter
], Developer);
const developer = new Developer('John', 25, 'male', 'New York');
developer.printInfo();
// -----------------
function Override(label) {
    return function (target, key) {
        // console.log('🚀 ~ key:', key);
        // console.log('🚀 ~ target:', target);
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label,
            set: (v) => { }
        });
    };
}
function ReadOnly(target, key) {
    // console.log('🚀 ~ key:', key);
    // console.log('🚀 ~ target:', target);
    Object.defineProperty(target, key, {
        // value: 'Default value',
        get: () => 'Default value',
        // writable: false
        set: (v) => { }
    });
}
class Test {
    constructor() {
        // @Override('Hello world')
        this.castomKey = 'any string';
    }
}
__decorate([
    ReadOnly //без скобок - таргет и ключ получаем напрямую, минуя функцию - обертку
], Test.prototype, "castomKey", void 0);
const t = new Test();
// если декоратор выключить   // @Override('Hello world')
// console.log(t.castomKey); //any string
// t.castomKey = 'new string name';
// console.log(t.castomKey); //new string name
// если декоратор включить   @Override('Hello world') - свойство закрыто от записи, получило некое значение
// по сути класс запечатан с помощью замены базового значения
console.log(t.castomKey); //Hello world
t.castomKey = 'new string name';
console.log(t.castomKey); //Hello world
