function findMax(arr){
  if (arr.length === 0){
    return null;
  }
  let max = arr[0];
  // for(initialization; condition; iteration) {
// }
for(let i=1; i<arr.length; i++){
  if(arr[i]>max){
    max = arr[i];
  }
}
return max;
}

const A = [7,2,9,4,11,5];
const maxElement = findMax(A);

if (maxElement !== null){
  console.log(`The maximum element in the array is: ${maxElement}`);
}else {
  console.log("The array is empty");
}


function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
  // Base Case: If the start index is greater than the end index, the target is not in the array
  if (start > end) {
      return -1;
  }


  // Calculate the middle index of the current subarray
  const mid = Math.floor((start + end) / 2);

  // If the middle element is the target, return its index
  if (arr[mid] === target) {
      return mid;
  } else if (arr[mid] < target) {
      // If the target is greater than the middle element, search the right half
      return binarySearchRecursive(arr, target, mid + 1, end);
  } else {
      // If the target is less than the middle element, search the left half
      return binarySearchRecursive(arr, target, start, mid - 1);
  }
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 7;

const resultIndex = binarySearchRecursive(sortedArray, targetElement);

if (resultIndex !== -1) {
  console.log(`Element ${targetElement} found at index ${resultIndex}.`);
} else {
  console.log(`Element ${targetElement} not found in the array.`);
}


