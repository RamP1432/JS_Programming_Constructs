
const readline=require('readline-sync');
let a=parseInt(readline.question("Enter first number : "));
let b=parseInt(readline.question("Enter first number : "));
let c=parseInt(readline.question("Enter first number : "));

let val1=a + b * c;
let val2=a % b + c;
let val3=c + a / b;
let val4=a * b + c;
let maxVal=Math.max(val1,Math.max(val2,Math.max(val3,val4)));
let minVal=Math.min(val1,Math.min(val2,Math.min(val3,val4)));
console.log(`Maximum Value ${maxVal}`);
console.log(`Minimum value ${minVal}`);