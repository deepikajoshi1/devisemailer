// Binary search function to find if there exists an element in the sorted array that equals the target value
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
          return true;
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return false;
}

// Function to check if there exist two elements in the array whose sum is exactly x
function hasSumPair(arr, target) {
  // Sort the array in non-decreasing order
  arr.sort((a, b) => a - b);

  // Traverse the array
  for (let i = 0; i < arr.length; i++) {
      // Calculate the difference between the target and the current element
      let diff = target - arr[i];

      // Use binary search to check if the difference exists in the array
      if (binarySearch(arr, diff)) {
          return true;
      }
  }

  return false;
}

// Example usage:
const array = [2, 4, 6, 3, 7];
const targetSum = 10;

if (hasSumPair(array, targetSum)) {
  console.log("Yes, there exist two elements whose sum is exactly", targetSum);
} else {
  console.log("No, there are no two elements whose sum is exactly", targetSum);
}
// In this implementation, we first sort the array in non-decreasing order. Then, for each element in the array, we calculate the difference between the target sum and the current element. We use binary search to check if this difference exists in the sorted array. If it does, we return true, indicating that there exist two elements whose sum is exactly the target. If no such pair is found after traversing the entire array, we return false.
