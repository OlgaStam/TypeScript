const arr = ['html', 'css', 'js', 'ts', 'git', 'github', 'vscode'];
console.log('arr:', arr);
console.log('arr[0]:', arr[0]);
console.log('arr[2]:', arr[2]);

enum Skills {
  HTML,
  CSS,
  JS,
  TS,
  Git,
  Github,
  VSCode
}

// пробросили ошибку и дальше код не работает. если функция никогда ничего не вернет, ей можно указать специальный тип never, значение которого никогда не наступает
// never является подтипом any
// переменная с типом never может быть присвоена переменной любого другого типа
function error(msg: string): never {
  throw new Error(msg);
  console.log('error???'); //недостижимый код
}
console.log("🚀 ~ error('!!error!!'):", error('!!error!!'));
// fail вызывая ошибку - тоже никогда ничего не вернет
function fail(): never {
  error('Моя ошибка');
}
// и бесконечный цикл ГЛАВНОЕ - НЕ ВЫЗВАТЬ))) а то зависнем
function infiniteLoop(): never {
  while (true) {}
}

//

function log(msg: string): void {
  console.log(msg);
}

//

let num: number | null | undefined;
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
