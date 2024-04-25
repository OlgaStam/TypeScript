"use strict";
const arr = ['html', 'css', 'js', 'ts', 'git', 'github', 'vscode'];
console.log('arr:', arr);
console.log('arr[0]:', arr[0]);
console.log('arr[2]:', arr[2]);
var Skills;
(function (Skills) {
    Skills[Skills["HTML"] = 0] = "HTML";
    Skills[Skills["CSS"] = 1] = "CSS";
    Skills[Skills["JS"] = 2] = "JS";
    Skills[Skills["TS"] = 3] = "TS";
    Skills[Skills["Git"] = 4] = "Git";
    Skills[Skills["Github"] = 5] = "Github";
    Skills[Skills["VSCode"] = 6] = "VSCode";
})(Skills || (Skills = {}));
// пробросили ошибку и дальше код не работает. если функция никогда ничего не вернет, ей можно указать специальный тип never, значение которого никогда не наступает
// never является подтипом any
// переменная с типом never может быть присвоена переменной любого другого типа
function error(msg) {
    throw new Error(msg);
    console.log('error???'); //недостижимый код
}
console.log("🚀 ~ error('!!error!!'):", error('!!error!!'));
// fail вызывая ошибку - тоже никогда ничего не вернет
function fail() {
    error('Моя ошибка');
}
// и бесконечный цикл ГЛАВНОЕ - НЕ ВЫЗВАТЬ))) а то зависнем
function infiniteLoop() {
    while (true) { }
}
//
function log(msg) {
    console.log(msg);
}
//
let num;
// нужно
num = 1;
num = NaN;
num = undefined;
num = null;
// не нужно? будет считаться ошибкой
// num = '';
// num = true;
// num = [];
// num = {};
