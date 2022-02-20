//
const numbers = [12, 43, 32, 44, 65, 78];
/* 
console.log(numbers);
console.log(...numbers);
 */

//

const max = Math.max(12, 43, 32, 44, 65, 78);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);


//
/* const number2 = numbers;
numbers.push(55);
console.log(number2); */
//

const number2 = [22, ... numbers, 99];
numbers.push(55);
console.log(numbers);
console.log(number2);