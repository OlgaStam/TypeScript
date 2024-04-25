const numArrJS = [1, 2, 3];
const numArrTS: number[] = [1, 2, 3];
const numArrTS2: Array<number> = [1, 2, 3];

const strArrJS = ['1', '2', '3'];
const strArrTS: string[] = ['1', '2', '3'];
const strArrTS2: Array<string> = ['1', '2', '3'];

const boolArrJS = [true, false];
const boolArrTS: boolean[] = [true, false];
const boolArrTS2: Array<boolean> = [true, false];

const someTypesArrJS = [1, 'str', false];
const someTypesArrTS: (number | string | boolean)[] = [
  1,
  'str',
  false,
  2,
  false
];

const tupplesArrTS: [number, number, number, string, boolean] = [
  1,
  2,
  3,
  'str',
  false
];

const anyArrTS: any[] = [{}, [], 3, 'str', false];
