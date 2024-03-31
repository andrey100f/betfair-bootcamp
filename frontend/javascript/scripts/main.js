let nume = 'Paul';

// console.log(typeof nume);
// console.log(typeof 'asd');
// console.log(typeof 013);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof Symbol('dasd'));
// console.log(typeof 12n);
// Primitive Data Types
/*
number 
string
boolean
undefined
null
symbol
bigint
*/

//Numbers
let num = 2;
// num **= 2;
// console.log(num);

// never have more than one assignment operator on a single line of code
// console.log(num++ + ++num);

//Strings

//Template Literal Strings
let str = `Paul ${num > 2} Negoescu`;
// console.log(str);

//Boolean
if (2 > 3 && 3 === 3) {
  console.log('Adevarat');
} else if (6 > 5) {
  console.log('Fals');
} else {
  console.log('Altceva');
}

//shorthand conditionals
// nullish coalescing operator
const condition = num ?? 6;

// console.log(condition);

switch (num) {
  case 1:
    console.log('unu');
    break;
  case 2:
  // falthrough case (never have code here)
  case '2':
    console.log('Doi');
    break;
  default:
    console.log('altceva');
}

const arr = [1, 2, 3, 'Paul', ['doi', 'trei']];
// const ceva = arr.push('o valoare');
// const ceva = arr.shift();
// console.log(arr, ceva);

{
  let i = 0;
  while (i < arr.length) {
    const elem = arr[i];
    console.log(elem);
    i++;
  }
}

for (let i = 0; i < arr.length; i++) {
  const elem = arr[i];
  console.log(elem);
}

for (const elem of arr) {
  console.log(elem);
}

for (const index in arr) {
  console.log(index);
}

arr.forEach((elem, index) => console.log(elem));
console.log(arr.includes('Paul'));

console.clear();

function add(a = 2, b = 2, ...restul) {
  console.log(restul);
  return a + b;
}

console.log(add(...arr));

const arr2 = [6, 7, 8];
const arr3 = [...arr, 8, 9, ...arr2];
const clone = [...arr2];
const copy = arr2;
// copy[1] = 'Paul';
// console.log(arr2, clone, copy);
// console.log(arr2 === copy, clone === arr2);

//Function Declaration
function alter(obj) {
  const clone = structuredClone(obj);
  clone[4][0] = 'Paul';
}
alter(arr);
console.log(arr);

function multiply(...args) {
  // let prod = 1;
  // for (const num of args) {
  //   prod *= num;
  // }
  // return prod;
  return args.reduce((prod, num) => prod * num);
}

// Function Expression
// const add2 = function (a, b) {
//   return a + b;
// };

// Arrow Function
const add2 = (a, b) => a + b;

console.log(multiply(7, 2, 4, 5, 6, 7), add2(1, 2));
