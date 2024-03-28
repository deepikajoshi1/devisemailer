// TWO SUM PROBLEM IN ARRAYS USING JAVASCRIPT:
// an array-A of n numbers
// another number-X
// task: sum of two elements=X

// Nested traversal:
// const nestedArray = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];

//step1:function declaration
function twoSum(arr, target) {
  //Step2:Nested Loop structure:
  // 2.1: Outer loop:
  for (let i = 0; i < arr.length; i++) {
    // 2.2: Inner loop:
    for (let j = i + 1; j < arr.length; j++) {
      // Step3: Pairwise Comparison:
      if (arr[i] + arr[j] === target) {
        // Step4: Returning True:
        return true;
      }
    }
    // Step5: Loop Continuation:
  }
  // Step6:Returning False:
  return false;
}

// Examples:
// Example1:
const array1 = [2, 3, 4, 5, 6];
const targetSum1 = 7;
if (twoSum(array1, targetSum1)) {
  console.log("Yes, there exist two elements in array1 whose sum is exactly", targetSum1);
} else {
  console.log("No, there are no two elements in array1 whose sum is exactly", targetSum1);
}
// Example2:
const array2=[1,2,3,4,5];
const targetSum2=10;
if(twoSum(array2, targetSum2)){
  console.log("Yes,there exist two elements in array2 whose sum is exactly", targetSum2);
}else {
  console.log("No, there are no two elements in array2 whose sum is exactly", targetSum2);
}
