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
    protected age: number,
    private gender: string,
    public skills: string[]
  ) {}
}
// не нужно инициализировать экзкмпляр, обращаемся напрямую к свойству static
console.log(Person.isHuman);
