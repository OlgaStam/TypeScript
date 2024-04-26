// function AddPrinter(constrClass: Function) {
//   console.log(constrClass);
// }

// @AddPrinter
// class Developer {
//   constructor(
//     public name: string,
//     public age: number,
//     public gender: string,
//     public location: string
//   ) {}
//   printInfo() {
//     const p = document.createElement('p');

//     p.innerHTML = `${JSON.stringify(this)}<br>
//     Имя: ${this.name}<br>
//     Возраст: ${this.age}<br>
//     Пол: ${this.gender}<br>
//     Город: ${this.location}<br>
//     `;

//     document.body.append(p);
//   }
// }
// const developer = new Developer('John', 25, 'male', 'New York');
// console.log('🚀 ~ developer:', developer);
// developer.printInfo();

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
// класс может быть маленьким, с помощбю декораторов мы можем его декомпозировать, вынеся отдельный функционал в функции, в отдельные файлы, и запрашивая эти функции-декораторы к некоемому базовому классу, мы полностью меняем его возможности
//расширяются возможности по декомпозиции и переиспользованию кода где угодно
