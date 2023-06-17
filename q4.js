// printing the largest number in an array
function findLargestNumber(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largestNum) {
        largestNum = arr[i];
      }
    }
    return largestNum;
  }
  
  const numbers = [10, 45, 32,35,70,25, 78, 56, 91, 24];
  const largestNumber = findLargestNumber(numbers);
  console.log(largestNumber); // prints 91