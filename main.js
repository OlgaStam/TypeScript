"use strict";
// class Person {
//   prop: number;
//   prop2!: number; //не знаю что там будет, я потом сама инициализирую значение
//   prop3?: number; // не знаю, будет свойство вообще или нет ???(может undefind | null и тогда будем обрабатывать по-другому)
//   constructor() {
//     this.prop = 123;
//     // this.prop2 = ?? обязательно будет получен позже !!!!
//     // this.prop3 = ?? возможно будет получен, но может и не будет ????
//   }
// }
class Person {
    constructor(name, age, gender, skills //приватное свойство доступно только внутри класса
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.skills = skills;
        this.year = 1970;
    }
    getSkillsToUpperCase() {
        return this.skills.map((el) => el.toUpperCase()); //приватное свойство доступно только внутри класса
    }
}
Person.isHuman = true;
const person = new Person('Jhon', 25, 'male', ['html', 'css']);
console.log(person.getSkillsToUpperCase());
