const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum);

// multiplication
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplication = multiply(2, 2, 2);
console.log(multiplication);

//
const tenTimes = (num) => num * 10; // implicity return
const output = tenTimes(12);
console.log(output);
//
const fiveTimes = num => num * 5;
const value = fiveTimes(5);
console.log(value);

//

const getName = () => 'mofazzal hossain';
const name = getName();
console.log(name);

// multi-line

const doMath = (x, y) => {
    const sum = x + y;
    const sub = x - y;
   /*  const mul = x * y;
    const div = x / y; */
    const result = sum * sub;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);



