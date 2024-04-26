function consoleLog(param: any) {
  console.log(param);
}

consoleLog(123);
// в консоли появилось
// 123
console.log('consoleLog:', consoleLog);
// в консоли появилось
// consoleLog: ƒ consoleLog(param) {
//   console.log(param);
// }

// добавили @ - функция стала ДЕКОРАТОРОМ и получила значение функции, к которой она прикреплена (т.е. сразу на следующей строке после декоратора идет его класс)
@consoleLog
class Person {
  constructor(public name: string, public age: number) {
    console.log('Hello from Person Constructor');
  }
}
// в консоли появилось
// class Person {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       console.log('Hello from Person Constructor');
//   }
// }

const person = new Person('Jhon', 25);
// в консоли появилось
// Hello from Person Constructor
