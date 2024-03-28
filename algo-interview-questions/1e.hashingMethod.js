function hasSumPair(arr, target) {
  // Create an empty object to act as a hash map
  let hash = {};

  // Traverse the array
  for (let i = 0; i < arr.length; i++) {
      // Calculate the difference between the target and the current element
      let diff = target - arr[i];

      // Check if the difference exists in the hash map
      if (hash[diff]) {
          // If yes, then a pair exists whose sum is equal to the target
          return true;
      }

      // If the difference does not exist, store the current element in the hash map
      hash[arr[i]] = true;
  }

  // If no such pair is found after traversing the entire array, return false
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
// In this implementation, we use a JavaScript object hash as a hash map to store the elements of the array. We traverse the array, and for each element, we calculate the difference between the target sum and the current element. We then check if this difference exists in the hash map. If it does, it means we have found a pair whose sum is equal to the target, and we return true. If the difference does not exist, we store the current element in the hash map. If no such pair is found after traversing the entire array, we return false.
