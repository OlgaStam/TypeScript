function AddPrinter(constrClass: Function) {
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

@AddPrinter
class Developer {
  constructor(
    public name: string,
    public age: number,
    public gender: string,
    public location: string
  ) {}
}
const developer: any = new Developer('John', 25, 'male', 'New York');
developer.printInfo();

// -----------------

function Override(label: string) {
  return function (target: any, key: string) {
    // console.log('🚀 ~ key:', key);
    // console.log('🚀 ~ target:', target);
    Object.defineProperty(target, key, {
      configurable: false,
      get: () => label,
      set: (v) => {}
    });
  };
}

function ReadOnly(target: any, key: string) {
  // console.log('🚀 ~ key:', key);
  // console.log('🚀 ~ target:', target);
  Object.defineProperty(target, key, {
    // value: 'Default value',
    get: () => 'Default value',
    // writable: false
    set: (v) => {}
  });
}

class Test {
  // @Override('Hello world')
  @ReadOnly //без скобок - таргет и ключ получаем напрямую, минуя функцию - обертку
  castomKey: string = 'any string';
}

const t = new Test();
// если декоратор выключить   // @Override('Hello world')
// console.log(t.castomKey); //any string
// t.castomKey = 'new string name';
// console.log(t.castomKey); //new string name

// если декоратор включить   @Override('Hello world') - свойство закрыто от записи, получило некое значение
// по сути класс запечатан с помощью замены базового значения
console.log(t.castomKey); //Hello world
t.castomKey = 'new string name';
console.log(t.castomKey); //Hello world
