
// function declaration

function add (num1, num2){
    return num1 + num2;
}
const sum1 = add(12, 13);
console.log(sum1);
// function expression
const add2 = function add2 (num1, num2){
    return num1 + num2;
}
const sum2 = add2(12, 13);
console.log(sum2);

// function expression anonymous
const add3 = function (num1, num2){
    return num1 + num2;
}
const sum3 = add3(12, 13);
console.log(sum3);

// arrow function

const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(12, 13);
console.log(sum4); 




