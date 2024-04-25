function getNameTS(name: string): string {
  return name;
}
function getAgeTS(age: number): number {
  return age;
}
console.log("🚀 ~ getNameTS('Jhon'):", getNameTS('Jhon'));
console.log('🚀 ~ getAgeTS(25):', getAgeTS(25));

function getNameAge(name: string, age: number): string {
  return `${name}, ${age}`;
}
console.log("🚀 ~ getNameAge ('Bob', 30):", getNameAge('Bob', 30));
