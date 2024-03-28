/* TWO SUM PROBLEM IN ARRAYS USING JAVASCRIPT:
an array-A of n numbers
another number-X
task: sum of two elements=X
A=[2,3,4,5,6] and X=10
if X=10 then yes otherwise no.*/

//Step1: Function Declaration:
function twoSum(arr, target) {
  //Step2: Create an empty object to store visited elements:
  let visited = {};
  //Step3: Iterate through the array:
  for (let i = 0; i < arr.length; i++) {
    //Step4: Calculate the difference:
    const diff = target - arr[i];
    //Step5: Return true if the difference exists:
    if (visited[diff]) {
      return true;
    }
    //Step6: Marking the current element as visited:
    visited[arr[i]] = true;
  }
  //Step7: Return false if no pair is found:
  return false;
}

// Examples:
// Example 1:
const array1 = [3, 7, 11, 12];
const targetSum1 = 9;
if (twoSum(array1, targetSum1)) {
  console.log("Yes, there exists two elements whose sum is exactly", targetSum1);
} else {
  console.log("No, there are no two elements whose sum is exactly", targetSum1);
}
// Example 2:
const array2 = [1, 2, 3, 8];
const targetSum2 = 10;
if (twoSum(array2, targetSum2)) {
  console.log("Yes, there exists two elements whose sum is exactly", targetSum2);
} else {
  console.log("No, there are no two elements whose sum is exactly", targetSum2);
}


// step1: 
// First step is function declaration
function twoSum(arr, target) {
  // Sort the array (required for two pointers approach)
  arr.sort((a, b) => a - b);

  // Initialize two pointers: one at the beginning and one at the end of the array
  let left = 0;
  let right = arr.length - 1;

  // Iterate until the two pointers meet
  while (left < right) {
      const sum = arr[left] + arr[right];

      // If the current pair's sum equals the target, return true
      if (sum === target) {
          return true;
      }
      // If the sum is less than the target, move the left pointer to the right
      else if (sum < target) {
          left++;
      }
      // If the sum is greater than the target, move the right pointer to the left
      else {
          right--;
      }
  }

  // If no pair is found, return false
  return false;
}

// Examples:
// Example1: Should return true
const array1 = [2, 3, 4, 5, 6];
const targetSum1 = 7;
if (twoSumTwoPointers(array1, targetSum1)) {
  console.log("Yes, there exist two elements in array1 whose sum is exactly", targetSum1);
} else {
  console.log("No, there are no two elements in array1 whose sum is exactly", targetSum1);
}

// Example2: Should return false
const array2=[1,2,3,4,5];
const targetSum2=10;
if (twoSumTwoPointers(array2, targetSum2)) {
  console.log("Yes, there exist two elements in array2 whose sum is exactly", targetSum2);
} else {
  console.log("No, there are no two elements in array2 whose sum is exactly", targetSum2);
}
// (i)sort() method
// (ii)Comparison function
// (iii)Arrow function 
// (iv)Ascending order
