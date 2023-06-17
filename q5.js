// (1a) finding the largest of two numbers using while loop
function findLargestNumber(num1, num2) {
  let largestNum;
  let i = 0;
  while (i < 1) {
    if (num1 > num2) {
      largestNum = num1;
    } else {
      largestNum = num2;
    }
    i++;
  }
  return largestNum;
}

// const a = 10;
// const b = 20;
// const largestNumber = findLargestNumber(a, b);
// console.log(largestNumber); // prints 20

// // (1b)Finding the largest of three numbers using while loop
// function findLargestNumber(num1, num2, num3) {
//   let largestNum = num1;
//   let i = 0;
//   while (i < 2) {
//     if (num2 > largestNum) {
//       largestNum = num2;
//     }
//     if (num3 > largestNum) {
//       largestNum = num3;
//     }
//     i++;
//   }
//   return largestNum;
// }

// const a = 10;
// const b = 20;
// const c = 15;
// const largestNumber = findLargestNumber(a, b, c);
// console.log(largestNumber); // prints 20

// (2) checking if a year is leap using while loop
// // It doesn't make any sense but here it is
// function isLeapYear(year) {
//     let isLeap = false;
//     let i = 0;
//     while (i < 1) {
//       if (year % 4 === 0) {
//         if (year % 100 === 0) {
//           if (year % 400 === 0) {
//             isLeap = true;
//           }
//         } else {
//           isLeap = true;
//         }
//       }
//       i++;
//     }
//     return isLeap;
//   }
  
//   const year = 2024;
//   if (isLeapYear(year)) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }

// // (3) printing even numbers in an array using while loop

// function printEvenNumbers(arr) {
//     let i = 0;
//     while (i < arr.length) {
//       if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//       }
//       i++;
//     }
//   }
  
//   const numbers = [10, 45, 32, 78, 56, 91, 24];
//   printEvenNumbers(numbers); // prints 10 32 78 56 24

// (4) printing the largest number in an array using while loop
// function findLargestNumber(arr) {
//     let i = 1;
//     let largestNum = arr[0];
//     while (i < arr.length) {
//       if (arr[i] > largestNum) {
//         largestNum = arr[i];
//       }
//       i++;
//     }
//     return largestNum;
// }

// const numbers = [10, 45, 32, 78, 56, 91, 24];
// const largestNumber = findLargestNumber(numbers);
// console.log(largestNumber); // prints 91