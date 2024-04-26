"use strict";
//
// class Multiplay {
//   constructor(
// чтобы решить проблему разростающихся типов придумали джейнерики
//     private a: number | string | boolean,
//     private b: number | string | boolean
//   ) {}
//   public getResult(): number {
//     return +this.a * +this.b;
//   }
// }
// const m: Multiplay = new Multiplay(4, 5);
// console.log('m.getResult():', m.getResult());
// const mNum: Multiplay = new Multiplay(4, 5);
// console.log('mNum.getResult():', mNum.getResult());
// const mStr: Multiplay = new Multiplay('4', '5');
// console.log('mStr.getResult():', mStr.getResult());
// const mBool: Multiplay = new Multiplay(true, true);
// console.log('mBool.getResult():', mBool.getResult());
// например, я хочу чтобы умножалиcь только строки или числа
// для этого дополнительно делает extends
class Multiplay {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getResult() {
        return +this.a * +this.b;
    }
}
// const mNum: Multiplay<number> = new Multiplay(4, 5);
// console.log('mNum.getResult():', mNum.getResult());
// const mStr: Multiplay<string> = new Multiplay('4', '5');
// console.log('mStr.getResult():', mStr.getResult());
// const mBool: Multiplay<boolean> = new Multiplay(true, true);
// console.log('mBool.getResult():', mBool.getResult());
// // тип можно не указывать, он подтянется автоматически
// const mArr = new Multiplay([10], [7]);
// console.log('mArr.getResult():', mArr.getResult());
// // но если типы разные, будет проблема
// const m = new Multiplay(10, '5');
// console.log('m.getResult():', m.getResult());
const mNum = new Multiplay(4, 5);
console.log('mNum.getResult():', mNum.getResult());
const mStr = new Multiplay('4', '5');
console.log('mStr.getResult():', mStr.getResult());
