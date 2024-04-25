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
console.log(person.getAge());

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
console.log('🚀 ~ developer:', developer);
console.log(developer.getAge());
console.log(developer.getGender());
