// import { findEvenNumbers } from "./findEvenNumbers.js";
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = findEvenNumbers(array);
// console.log("Juft sonlar:", evenNumbers);
// alert("Juft sonlar: " + evenNumbers.join(", "));



// import { findDivisors } from './findDividors.js';
// let nums = Number(prompt("Sonni kiriting:"));
// let divisors = findDivisors(nums);
// console.log("Bo'luvchilar:"+ divisors);
// alert("Bo'luvchilar: " + divisors.join(", "));



// import { findOddNumbers } from "./findOddNumbers.js";
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12, 13, 14, 15];
// const OddNumbers = findOddNumbers(array);
// console.log("tub sonlar:", OddNumbers);
// alert("tub sonlar: " + OddNumbers.join(", "));



import { sortNumbers } from "./sortnumbers.js";
let input = prompt("Sonlarni kiriting: ");
let numberArray = input.split(',').map(Number);

let sortedNumbers = sortNumbers(numberArray);

console.log("sorted numbers: "+ sortedNumbers);
alert("Tartiblangan sonlar: " + sortedNumbers.join(", "));
