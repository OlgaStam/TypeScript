function getNameTS(name: string): string {
  return name;
}
function getAgeTS(age: number): number {
  return age;
}

function getNameAge(name: string = 'Guest', age: number = 18): string {
  return `${name}, ${age}`;
}
console.log("🚀 ~ getNameAge ('Bob', 30):", getNameAge('Bob', 30));
console.log("🚀 ~ getNameAge ('Bob'):", getNameAge('Bob'));
console.log("🚀 ~ getNameAge ('Bob'):", getNameAge());

//
console.log('---------------');
//
function log(msg: string): void {
  console.log(msg);
}
log('Hi! ');
//
console.log('---------------');
//
// синтаксис ES5
//
// function sum(a: number, b: number): number {
//   return a + b;
// }
// const  sum = function(a: number, b: number): number {
//   return a + b;
// }
//
// синтаксис ES6
const sum1 = (a: number, b: number): number => a + b;
console.log(sum1(1, 0));

// будут проблемы с типизацией sum3
// const sum2 = (a: string, b: number | string): number => +a + +b;
// const sum3: (num1: number, num2: number) => number = sum2;

// не будет проблем с типизацией sum3 и sum4
const sum2 = (a: number | string, b: number | string): number => +a + +b;

// тоже ошибка типизации
// const sum: (a: number | string, b: number | string) => number = sum1;
const sum3: (num1: string, num2: string) => number = sum2;
const sum4: (a: number | string, b: number | string) => number = sum2;
console.log(sum3('2', '0'));
console.log(sum4('3', '0'));
