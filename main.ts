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
const con = (txt: string | number): void => console.log(txt);
// для функции, которая ничего не возвращает, нет методов (после точки)
con('str');
con(123);
