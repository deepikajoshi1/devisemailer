// TWO SUM PROBLEM IN ARRAYS USING twoPointers:
//step1:function declaration
function twoSum(arr, target) {

  //step2:Second step is to sort the array:
  // (i)sort() method
  // (ii)Comparison function
  // (iii)Arrow function
  // (iv)Ascending order
  arr.sort((a, b) => a - b);

  // Step3:Initialize two pointers:
  // (i) Beginning and End
  // (ii) Left Pointer (beginning)
  let left = 0;
  // (iii)Right Pointer (end)
  let right = arr.length - 1;

  // step4:Iterate until the two pointers meet:
  // (i)While Loop
  while (left < right) {
    // (ii)Loop Body
    // (iii)Sum Calculation
    const sum = arr[left] + arr[right];
    // Step5:Return true:
    // (i) Condition Check
    if (sum === target) {
      // (ii)Comparison
      // (iii)Return Statement
      return true;
    }
    // (iv)Exiting the Function:

    // step 6:If the sum is less than the target,
    // move the left pointer to the right:
    // (i)Comparison
    else if (sum < target) {
      // (ii)Moving the Pointer
      left++;
    }
    // (iii)Continuing Iteration

    // Step7:Move the right pointer to the left,
    // if the sum is greater than the target:
    // (i)Else Statement
    else {
      // (ii)Moving the Pointer
      right--;
    }
    // (iii)Continuing Iteration

    // Step 8:Return false if  no pair is found:
  return false;
}
}

















  

  
  

  


// Examples:
// Example1: Should return true
const array1 = [2, 3, 4, 5, 6];
const targetSum1 = 7;
if (twoSum(array1, targetSum1)) {
  console.log("Yes, there exist two elements in array1 whose sum is exactly", targetSum1);
} else {
  console.log("No, there are no two elements in array1 whose sum is exactly", targetSum1);
}

// Example2: Should return false
const array2 = [1, 2, 3, 4, 5];
const targetSum2 = 10;
if (twoSum(array2, targetSum2)) {
  console.log("Yes, there exist two elements in array2 whose sum is exactly", targetSum2);
} else {
  console.log("No, there are no two elements in array2 whose sum is exactly", targetSum2);
}
