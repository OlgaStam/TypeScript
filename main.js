"use strict";
// function AddPrinter(constrClass: Function) {
//   console.log(constrClass);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @AddPrinter
// class Developer {
//   constructor(
//     public name: string,
//     public age: number,
//     public gender: string,
//     public location: string
//   ) {}
//   printInfo() {
//     const p = document.createElement('p');
//     p.innerHTML = `${JSON.stringify(this)}<br>
//     Имя: ${this.name}<br>
//     Возраст: ${this.age}<br>
//     Пол: ${this.gender}<br>
//     Город: ${this.location}<br>
//     `;
//     document.body.append(p);
//   }
// }
// const developer = new Developer('John', 25, 'male', 'New York');
// console.log('🚀 ~ developer:', developer);
// developer.printInfo();
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
// класс может быть маленьким, с помощбю декораторов мы можем его декомпозировать, вынеся отдельный функционал в функции, в отдельные файлы, и запрашивая эти функции-декораторы к некоемому базовому классу, мы полностью меняем его возможности
//расширяются возможности по декомпозиции и переиспользованию кода где угодно
