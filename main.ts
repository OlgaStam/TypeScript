const nameTS: string = 'Jhon';
const ageTS: number = 25;

function getNameTS(): string {
  return nameTS;
}
function getAgeTS(): number {
  return ageTS;
}
console.log('🚀 ~ getNameJS:', getNameTS().toUpperCase());
console.log('🚀 ~ getAgeJS:', getAgeTS().toFixed(2));
