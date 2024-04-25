"use strict";
function getNameTS(name) {
    return name;
}
function getAgeTS(age) {
    return age;
}
console.log("🚀 ~ getNameTS('Jhon'):", getNameTS('Jhon'));
console.log('🚀 ~ getAgeTS(25):', getAgeTS(25));
function getNameAge(name, age) {
    return `${name}, ${age}`;
}
console.log("🚀 ~ getNameAge ('Bob', 30):", getNameAge('Bob', 30));
