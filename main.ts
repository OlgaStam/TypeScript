// объект на JS
const personJS = {
  name: 'Jhon',
  age: 25,
  gender: 'male',
  skills: ['htm, css'],
  print() {
    console.log(this.name);
  }
};
// объект на TS с типизацией
// const personTS: {
//   name: string;
//   age: number;
//   gender: string;
//   skills: string[];
//   print: () => void;
// } = {
//   name: 'Jhon',
//   age: 25,
//   gender: 'male',
//   skills: ['htm, css'],
//   print() {
//     console.log(this.name);
//   }
// };
// const personTS2: {
//   name: string;
//   age: number;
//   gender: string;
//   skills: string[];
//   print: () => void;
// } = {
//   name: 'Jhon',
//   age: 25,
//   gender: 'male',
//   skills: ['htm, css'],
//   print() {
//     console.log(this.name);
//   }
// };
//
// создадим собственный универсальный тип с необязательными полями
type Person = {
  name: string;
  age: number;
  gender?: string;
  skills: string[];
  print?: () => void;
  getSkills?: () => string[];
};
// и переиспользуем его
const personTS: Person = {
  name: 'Jhon',
  age: 25,
  gender: 'male',
  skills: ['html, css'],
  getSkills(): string[] {
    return this.skills;
  }
};
const person2TS: Person = {
  name: 'Bob',
  age: 31,
  skills: ['htm, css, js, reackt'],
  print() {
    console.log(this.name);
  }
};
type Developer = {
  level: string;
  experiens: number;
};
// присвоим intersection type
const dev1: Person & Developer = {
  level: 'junior',
  experiens: 5,
  name: 'Bob',
  age: 31,
  skills: ['htm, css, js, reackt'],
  print() {
    console.log(this.name);
  }
};

type Advanced = Person & Developer;
// вместо пересечения типов используем новый собранный тип

const dev2: Advanced = {
  level: 'junior',
  experiens: 5,
  name: 'Jhon',
  age: 25,
  skills: ['htm, css'],
  getSkills(): string[] {
    return this.skills;
  }
};

// Partial<> - сопоставление
// пометить все поля необязательными
const dev3: Partial<Advanced> = {
  level: 'junior',
  name: 'Jhon'
};

// Вот некоторые примеры расширенных типов в TypeScript:

// Union Types (Объединенные типы): Позволяют определить переменную или параметр функции, который может принимать значения из нескольких типов. Например: number | string.
// Intersection Types (Пересекающиеся типы): Позволяют комбинировать несколько типов таким образом, что результат будет содержать все члены из каждого типа. Например: TypeA & TypeB.
// Типы-псевдонимы (Type Aliases): Позволяют создавать пользовательские именованные типы для повторного использования. Например: type MyType = { prop: string }.
// Типы перечисления (Enum Types): Позволяют создавать набор именованных константных значений. Например: enum Color { Red, Green, Blue }.
// Типы сопоставления (Mapped Types): Позволяют создавать новые типы на основе существующих типов с помощью оператора keyof. Например: type Optional<T> = { [K in keyof T]?: T[K] }.
// Типы совпадения шаблона (Template Literal Types): Позволяют создавать новые типы, объединяя строки с помощью шаблонных литералов. Например: type Greeting = Hello, ${string};.
// Типы перегрузки (Function Overload Types): Позволяют определять несколько вариантов сигнатур функции для различных комбинаций типов параметров и возвращаемого значения.Например:
// typescript
// Copy code
// function process(value: string): number;
// function process(value: number): string;
// function process(value: string | number): string | number {
// Реализация функции
// }
// Abstract Classes (Абстрактные классы): Позволяют определять общую структуру для классов, но не могут быть непосредственно инстанциированы. Например:
// typescript
// Copy code
// abstract class Animal {
//     abstract makeSound(): void;
// }

// class Dog extends Animal {
//     makeSound() {
//         console.log('Woof');
//     }
// }

// const dog = new Dog();
// dog.makeSound(); // Output: Woof
// Типы невозможности (Never Type): Представляет тип значения, которое никогда не должно произойти. Этот тип обычно используется для обработки ошибок или ситуаций, которые не должны возникать в нормальном выполнении программы. Например:
// typescript
// Copy code
// function throwError(message: string): never {
//     throw new Error(message);
// }
// Собственные индексы (Index Signatures): Позволяют определять типы для динамических свойств объектов. Например:
// typescript
// Copy code
// interface MyDictionary {
//     [key: string]: number;
// }

// const dict: MyDictionary = {
//     one: 1,
//     two: 2,
//     three: 3,
// };
// Readonly Properties (Свойства только для чтения): Позволяют указать, что свойство объекта доступно только для чтения после его инициализации. Например:
// typescript
// Copy code
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// const p: Point = { x: 10, y: 20 };
// p.x = 5; // Ошибка: Невозможно присвоить новое значение свойству "x"
// Index Types (Индексные типы): Позволяют определить тип значений, которые могут быть доступны через индексацию объекта. Например:
// typescript
// Copy code
// interface StringArray {
//     [index: number]: string;
// }

// const myArray: StringArray = ['a', 'b', 'c'];
// const firstElement: string = myArray[0]; // 'a'
