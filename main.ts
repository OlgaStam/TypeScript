// интерфейс описывает конкретную функциональность, которая будет имплементирована в объекте
interface LengthInterface {
  length: number;
}
function getLength(item: LengthInterface): void {
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
// -----------------

// type PersonType = {
//   name: string;
//   age: number;
//   gender: string;
//   greet(msg: string): void;
// };
// const person: PersonType = {
//   name: 'Jhon',
//   age: 25,
//   gender: 'male',
//   greet(msg: string): void {
//     console.log(`${msg}, ${this.name}!`);
//   }
// };

interface PersonInterface {
  name: string;
  age: number;
  gender: string;
  greet(msg: string): void;
}
interface GetSkillsInterface {
  skills: string[];
  getSkills(): string[];
}
// чтобы ОБЯЗАТЬ класс реализовать определенные свойства-методы ИМПЛЕМЕНТИРУЮТ соответсвтующие интерфейсы
class Person implements PersonInterface, GetSkillsInterface {
  name: string = 'Jhon';
  age: number = 25;
  gender: string = 'male';

  // можем реализовать свойства, не указанные в интерфейсе
  city: string = 'Kharkiv';

  skills: string[] = ['html', 'css'];
  getSkills(): string[] {
    return this.skills;
  }
  greet(msg: string): void {
    console.log('Hi!');
  }
}
const person = new Person();
// console.log('person:', person);
// console.log('person.getSkills():', person.getSkills());
// ------------------
interface ShapeInterface {
  name: string;
  printArea: () => string;
}
class Rectangle implements ShapeInterface {
  name: string = 'Rectangle';
  constructor(private width: number, private height: number) {}

  printArea(): string {
    const area: number = this.width * this.height;
    return `Area of a ${this.name} is ${area}`;
  }
}

class Circle implements ShapeInterface {
  name: string = 'Circle';
  constructor(private radius: number) {}

  printArea(): string {
    const area: number = +(Math.PI * this.radius ** 2).toFixed(2);
    return `Area of a ${this.name} is ${area}`;
  }
}

const rectangle = new Rectangle(100, 200);
const circle = new Circle(30);

console.log(rectangle.printArea());
console.log(circle.printArea());
console.log('------------------');
const shapes: ShapeInterface[] = [];
shapes[0] = rectangle;
shapes[1] = circle;
shapes.forEach((shape: ShapeInterface) => console.log(shape.printArea()));
