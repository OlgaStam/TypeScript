// class Person {
//   prop: number;
//   prop2!: number; //не знаю что там будет, я потом сама инициализирую значение
//   prop3?: number; // не знаю, будет свойство вообще или нет ???(может undefind | null и тогда будем обрабатывать по-другому)
//   constructor() {
//     this.prop = 123;
//     // this.prop2 = ?? обязательно будет получен позже !!!!
//     // this.prop3 = ?? возможно будет получен, но может и не будет ????
//   }
// }

class Person {
  readonly year: number = 1970;
  static isHuman: boolean = true;

  constructor(
    public name: string,
    public age: number,
    private gender: string,
    private skills: string[] //приватное свойство доступно только внутри класса
  ) {}
  public getSkillsToUpperCase(): string[] {
    return this.skills.map((el) => el.toUpperCase()); //приватное свойство доступно только внутри класса
  }
}
const person = new Person('Jhon', 25, 'male', ['html', 'css']);
console.log(person.getSkillsToUpperCase());
