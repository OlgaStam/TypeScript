class Person {
  readonly year: number = 1970;
  static isHuman: boolean = true;

  constructor(
    public name: string,
    // private age: number, //приватное свойство доступно только внутри класса, не наследуется
    //protected свойство доступно внутри класса наследника, снаружи не доступно
    protected age: number,
    protected gender: string
  ) {}
  public getAge(): string {
    return `Person ${this.name} is ${this.age}`;
  }
}
const person = new Person('Jhon', 25, 'male');
// console.log(person.getAge());

// наследование
class Developer extends Person {
  constructor(
    name: string,
    age: number, // Этот параметр можно использовать в конструкторе Developer, но он не будет доступен напрямую за пределами класса Developer
    gender: string,
    // поскольку конструированием будет заниматься родитель, параметры из Person я только получу, без указания можификатора доступа
    public skills: string[]
  ) {
    // super() - это вызов конструктора родительского класса с переданными аргументами.Таким образом, перемтры передается в конструктор родителя
    super(name, age, gender);
  }
  public getAge(): string {
    // Здесь возраст будет доступен через метод getAge() класса Person
    return `Developer ${this.name} is ${this.age}`;
  }

  getGender(): string {
    return `${this.gender}`;
  }
}
const developer = new Developer('Bob', 31, 'male', ['html', 'js']);
// console.log('🚀 ~ developer:', developer);
// console.log(developer.getAge());
// console.log(developer.getGender());

// ---------------

abstract class Phone {
  public year: number = 2023;
  // я хочу обязать, чтобы поле "price" было, но еще неизвестно какое оно будет, реализация будет в классе-наследнике
  public abstract price: number;
  public abstract phoneMessage(msg: string): string; //если тут поставить скобки { } тела -  будет ошибка, а так это абстрактный метод, который потребуется реализовать в каждом конкресном классе-наследнике
  constructor(public model: string) {}

  // можем реализовать метод, который будет в каждом экземпляре
  getFullYear(): number {
    return this.year;
  }
}

class Xiaomi extends Phone {
  public price: number = 1200; //добавляем свой прайс
  public phoneMessage(msg: string): string {
    return `${this.model} is the ${msg}`;
  }
}
class Samsung extends Phone {
  public price: number = 1600; //добавляем свой прайс
  public phoneMessage(msg: string): string {
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
