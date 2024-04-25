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
// публичные, приватные и защищенные свойства
// вариант JS
// class Person {
//   public name: string;
//   protected age: number;
//   private gender: string;
//   skills: string[];
//   constructor(name: string, age: number, gender: string, skills: string[]) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.skills = skills;
//   }
// }
// вариант TS
// можно взять модификатор доступа, подставить его в конструктор и его не нужно будет объявлять и присваивать, свойства создадутся автоматически
class Person {
    constructor(name, age, gender, skills) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.skills = skills;
        //     не нужно объявлять
        //   public name: string;
        //   protected age: number;
        //   private gender: string;
        //   skills: string[];
        //
        // если я не хочу чтобы свойство меняли - readonly
        this.year = 1970;
        //   не нужно присваивать
        // this.name = name;
        // this.age = age;
        // this.gender = gender;
        // this.skills = skills;
    }
}
const person = new Person('Jhon', 25, 'male', ['html', 'css']);
console.log('🚀 ~ person:', person);
console.log('🚀 ~ person.name:', person.name);
console.log('🚀 ~ person.skills:', person.skills);
console.log('🚀 ~ person.year:', person.year);
// при потытке переопределить свойство readonly
// person.year = 2000;
// модификаторы работают только на транспилятор, ошибка светится, но сборка не останавливается, ее остановку можно настроить в конфиге
console.log('🚀 ~ person.year:', person.year);
// Чтобы остановить сборку приложения TypeScript при наличии ошибок типов, вам нужно настроить параметр noEmitOnError в вашем файле конфигурации TypeScript (tsconfig.json). Установите этот параметр в true, чтобы TypeScript прекращал компиляцию и генерацию выходных файлов JavaScript в случае обнаружения ошибок типов.
// Пример настройки в файле tsconfig.json:
// json
// Copy code
// {
//   "compilerOptions": {
//     "noEmitOnError": true,
//     // Другие настройки компилятора TypeScript...
//   }
// }
// Это гарантирует, что TypeScript не будет создавать файлы JavaScript, если обнаружит ошибки в типах в вашем коде.
