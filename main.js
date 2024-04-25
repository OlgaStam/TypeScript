"use strict";
const arr = ['html', 'css', 'js', 'ts', 'git', 'github', 'vscode'];
console.log('arr:', arr);
console.log('arr[0]:', arr[0]);
console.log('arr[2]:', arr[2]);
//  Перечисления - позволяет нам определять набор именованных числовых констант и определяется при помощи ключевого слова Enum. Являются подтипами примитивного типа Num
var Skills;
(function (Skills) {
    Skills[Skills["HTML"] = 0] = "HTML";
    Skills[Skills["CSS"] = 1] = "CSS";
    Skills[Skills["JS"] = 6] = "JS"; //демонтсрация ниже ,
    Skills[Skills["TS"] = 7] = "TS";
    Skills[Skills["Git"] = 8] = "Git";
    Skills[Skills["Github"] = 9] = "Github";
    Skills[Skills["VSCode"] = 10] = "VSCode";
})(Skills || (Skills = {}));
//  в JS мы получим объект, который указывает сам на себя
console.log('Skills:', Skills);
console.log('Skills[0]: ', Skills[0]);
console.log('Skills.HTML:', Skills.HTML);
console.log('Skills[2]:', Skills[2]); //Skills[2]: undefined* потому что JS = 6, а не 2
console.log('Skills.JS:', Skills.JS); //Skills.JS: 6 
console.log('arr[Skills.HTML]:', arr[Skills.HTML]);
console.log('arr[Skills.JS]:', arr[Skills.JS] //arr[Skills.JS]: vscode, потому что в массиве "arr" в позиции "6" находится "vscode" 
);
