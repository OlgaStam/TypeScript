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
// в этом коде ошибка - нет описанного св-ва
// const people = { name: 'Jhon', age: 20 };
// getLength(people);
console.log('------------------');
// чтобы ОБЯЗАТЬ класс реализовать определенные свойства-методы ИМПЛЕМЕНТИРУЮТ соответсвтующие интерфейсы
class Person {
    constructor() {
        this.name = 'Jhon';
        this.age = 25;
        this.gender = 'male';
        // можем реализовать свойства, не указанные в интерфейсе
        this.city = 'Kharkiv';
        this.skills = ['html', 'css'];
    }
    getSkills() {
        return this.skills;
    }
    greet(msg) {
        console.log('Hi!');
    }
}
const person = new Person();
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.name = 'Rectangle';
    }
    printArea() {
        const area = this.width * this.height;
        return `Area of a ${this.name} is ${area}`;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.name = 'Circle';
    }
    printArea() {
        const area = +(Math.PI * this.radius ** 2).toFixed(2);
        return `Area of a ${this.name} is ${area}`;
    }
}
const rectangle = new Rectangle(100, 200);
const circle = new Circle(30);
console.log(rectangle.printArea());
console.log(circle.printArea());
console.log('------------------');
const shapes = [];
shapes[0] = rectangle;
shapes[1] = circle;
shapes.forEach((shape) => console.log(shape.printArea()));
