function hasSumPair(arr, target) {
  // Create an empty array to store remainders
  let remainders = [];

  // Traverse the array
  for (let i = 0; i < arr.length; i++) {
      // Calculate the remainder of each element when divided by the target
      let remainder = target - arr[i];
      
      // Check if the remainder exists in the remainders array
      if (remainders.includes(remainder)) {
          // If yes, then a pair exists whose sum is equal to the target
          return true;
      }

      // Store the remainder of the current element in the remainders array
      remainders.push(arr[i] % target);
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
// In this implementation, we calculate the remainder of each element when divided by the target. We store these remainders in an array called remainders. For each element in the array, we check if its corresponding remainder exists in the remainders array. If it does, it means we have found a pair whose sum is equal to the target, and we return true. If the remainder does not exist, we store it in the remainders array. If no such pair is found after traversing the entire array, we return false.




