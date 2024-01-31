// BINARY SEARCH ALGORITHM:
// Iterative Approach | Recursive Approach
// 1. Involves loop   |1. Involves Function Calling
// 2. Repetitive      |2. Breaks Down Problems
// 3. State/Variable  |3. Base Case

// Method1. Recursive Method:
// Step1. Function Declaration:
function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  // Step2. Base Case:
  if (start > end) {
    return -1;
  }
  // Step3. Recursive Case:
  // Calculate the middle index of the current subarray:
  // (start+end)/2;
  const mid = Math.floor((start + end) / 2);
  // Step4. Comparison with target:
  // Case1. Equal:(if statement)
  if (arr[mid] === target) {
    return mid;
    // Case2. Less:(if-else statement)
  } else if (arr[mid] < target) {
    // Recursive call:
    return binarySearchRecursive(arr, target, mid + 1, end);
    // Case 3. Greater:(else statement)
    // Recursive call:
  } else {
    return binarySearchRecursive(arr, target, start, mid - 1);
  }
}
// Example:
const sortedArray=[1,2,3,4,5,6,7,8,9,10];
const targetElement=7;
const result = binarySearchRecursive(sortedArray,targetElement);
if(result !== -1){
  console.log(`Element ${targetElement} found at index ${result}`);
}else{
  console.log(`Element ${targetElement}not found in the array`);
}
