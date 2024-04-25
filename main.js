"use strict";
class Person {
    constructor(name, 
    // private age: number, //приватное свойство доступно только внутри класса, не наследуется
    //protected свойство доступно внутри класса наследника, снаружи не доступно
    age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.year = 1970;
    }
    getAge() {
        return `Person ${this.name} is ${this.age}`;
    }
}
Person.isHuman = true;
const person = new Person('Jhon', 25, 'male');
// console.log(person.getAge());
// наследование
class Developer extends Person {
    constructor(name, age, // Этот параметр можно использовать в конструкторе Developer, но он не будет доступен напрямую за пределами класса Developer
    gender, 
    // поскольку конструированием будет заниматься родитель, параметры из Person я только получу, без указания можификатора доступа
    skills) {
        // super() - это вызов конструктора родительского класса с переданными аргументами.Таким образом, перемтры передается в конструктор родителя
        super(name, age, gender);
        this.skills = skills;
    }
    getAge() {
        // Здесь возраст будет доступен через метод getAge() класса Person
        return `Developer ${this.name} is ${this.age}`;
    }
    getGender() {
        return `${this.gender}`;
    }
}
const developer = new Developer('Bob', 31, 'male', ['html', 'js']);
// console.log('🚀 ~ developer:', developer);
// console.log(developer.getAge());
// console.log(developer.getGender());
// ---------------
class Phone {
    constructor(model) {
        this.model = model;
        this.year = 2023;
    }
    // можем реализовать метод, который будет в каждом экземпляре
    getFullYear() {
        return this.year;
    }
}
class Xiaomi extends Phone {
    constructor() {
        super(...arguments);
        this.price = 1200; //добавляем свой прайс
    }
    phoneMessage(msg) {
        return `${this.model} is the ${msg}`;
    }
}
class Samsung extends Phone {
    constructor() {
        super(...arguments);
        this.price = 1600; //добавляем свой прайс
    }
    phoneMessage(msg) {
        return `${this.model} is not too ${msg}`;
    }
}
// наследуемся и от супер-класса, и от классов-наследников
// но если я не хочу использовать супер-класс для построения экземпляров, я могу создать абстрактный класс, который нужен только для наследования
// const phone = new Phone('????');
// теперь создать экземпляр не могу, могу только унаследоваться
const xiaomi = new Xiaomi('Mi 14 Ultra');
console.log('🚀 ~ xiaomi.getFullYear():', xiaomi.getFullYear());
console.log(xiaomi.phoneMessage('perfect'));
const samsung = new Samsung('Note 23 Ultra');
console.log('🚀 ~ samsung.getFullYear():', samsung.getFullYear());
console.log(samsung.phoneMessage('good'));
