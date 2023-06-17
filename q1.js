// finding the largest of two numbers
function findLargestNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const x = 10;
const y = 20;
const largestNumber = findLargestNumber(x, y);
console.log(largestNumber); // prints 20

// Find the largest of three numbers
// function findLargestNumber(num1, num2, num3) {
//   let largestNum;
//   if (num1 > num2 && num1 > num3) {
//     largestNum = num1;
//   } else if (num2 > num1 && num2 > num3) {
//     largestNum = num2;
//   } else {
//     largestNum = num3;
//   }
//   return largestNum;
// }

// const x = 10;
// const y = 20;
// const z = 15;
// const largestNumber = findLargestNumber(x, y, z);
// console.log(largestNumber); // prints 20
