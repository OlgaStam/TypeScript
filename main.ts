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

// публичные, приватные и защищенные свойства
// вариант JS
// class Person {
//   public name: string;
//   protected age: number;
//   private gender: string;
//   skills: string[];

//   constructor(name: string, age: number, gender: string, skills: string[]) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.skills = skills;
//   }
// }

// вариант TS
// можно взять модификатор доступа, подставить его в конструктор и его не нужно будет объявлять и присваивать, свойства создадутся автоматически
class Person {
  //     не нужно объявлять
  //   public name: string;
  //   protected age: number;
  //   private gender: string;
  //   skills: string[];

  constructor(
    public name: string,
    protected age: number,
    private gender: string,
    public skills: string[]
  ) {
    //   не нужно присваивать
    // this.name = name;
    // this.age = age;
    // this.gender = gender;
    // this.skills = skills;
  }
}

const person = new Person('Jhon', 25, 'male', ['html', 'css']);
console.log('🚀 ~ person:', person);
console.log('🚀 ~ person.name:', person.name);
console.log('🚀 ~ person.skills:', person.skills);
