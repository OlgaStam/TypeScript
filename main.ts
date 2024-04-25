const arr = ['html', 'css', 'js', 'ts', 'git', 'github', 'vscode'];
console.log('arr:', arr);
console.log('arr[0]:', arr[0]);
console.log('arr[2]:', arr[2]);

//  Перечисления - позволяет нам определять набор именованных числовых констант и определяется при помощи ключевого слова Enum. Являются подтипами примитивного типа Num

enum Skills {
  HTML,
  CSS,
  JS = 6 //демонтсрация ниже ,
  TS,
  Git,
  Github,
  VSCode
}

//  в JS мы получим объект, который указывает сам на себя
console.log('Skills:', Skills);
console.log('Skills[0]: ', Skills[0]);
console.log('Skills.HTML:', Skills.HTML);
console.log(
  'Skills[2]:',
  Skills[2]
); //Skills[2]: undefined* потому что JS = 6, а не 2
console.log('Skills.JS:', Skills.JS); //Skills.JS: 6 

console.log('arr[Skills.HTML]:', arr[Skills.HTML]);
console.log(
  'arr[Skills.JS]:',
  arr[Skills.JS]//arr[Skills.JS]: vscode, потому что в массиве "arr" в позиции "6" находится "vscode" 
); 
