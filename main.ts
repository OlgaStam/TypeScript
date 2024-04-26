function consoleLog(constrClass: Function) {
  console.log(constrClass);
}

function conditionLog(flag: boolean = false): any {
  console.log(flag);
  // замыкание получает внутрь себя декоратор при условии флаг=истина
  return flag ? consoleLog : null;
}

// conditionLog(true); // со скобками обычная функция
// @conditionLog // декоратор - без скобок и сразу перед классом
@conditionLog(true) // со скобками все еще функция, но уже является оберткой для настоящего декоратора
class Person {
  constructor(public name: string, public age: number) {
    console.log('Hello from Person Constructor');
  }
}

const person = new Person('Jhon', 25);
