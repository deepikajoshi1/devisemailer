function findMax(arr) {
  if (arr.length === 0) {
      return null; // Return null if the array is empty
  }

  let max = arr[0]; // Assume the first element as the maximum

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]; // Update the maximum if a larger element is found
      }
  }

  return max; // Return the maximum element
}

// Given array
const A = [7, 2, 9, 4, 11, 5];

// Find the maximum element in the array
const maxElement = findMax(A);

// Output the result
if (maxElement !== null) {
  console.log(`The maximum element in the array is: ${maxElement}`);
} else {
  console.log("The array is empty");
}
