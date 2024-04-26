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

// -----------------

interface PersonInterface {
  name: string;
  age: number;
  gender: string;
  greet(msg: string): void;
}

const person: PersonInterface = {
  name: 'Jhon',
  age: 25,
  gender: 'male',
  greet(msg: string): void {
    console.log(`${msg}, ${this.name}!`);
  }
};
console.log('person:', person);
person.greet('Hi');
