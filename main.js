"use strict";
function getNameTS(name) {
    return name;
}
function getAgeTS(age) {
    return age;
}
function getNameAge(name = 'Guest', age = 18) {
    return `${name}, ${age}`;
}
console.log("🚀 ~ getNameAge ('Bob', 30):", getNameAge('Bob', 30));
console.log("🚀 ~ getNameAge ('Bob'):", getNameAge('Bob'));
console.log("🚀 ~ getNameAge ('Bob'):", getNameAge());
//
console.log('---------------');
//
function log(msg) {
    console.log(msg);
}
log('Hi! ');
//
console.log('---------------');
//
const con = (txt) => console.log(txt);
// для функции, которая ничего не возвращает, нет методов (после точки)
con('str');
con(123);
