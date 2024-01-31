function sentinelLinearSearch(arr, target) {
  const n = arr.length;

  const lastValue = arr[n - 1];
  arr[n - 1] = target;

  let i = 0;
  while (arr[i] !== target) {
      i++;
  }

  arr[n - 1] = lastValue;

  // step6: if-else statement:
  if (i < n - 1 || arr[n - 1] === target) {
    return i;
  } else {
    return -1;
  }
}





function runSentinelSearch(array, targetElement) {
  const result = sentinelLinearSearch(array, targetElement);

  if (result !== -1) {
      console.log(`Element ${targetElement} found at index ${result}.`);
  } else {
      console.log(`Element ${targetElement} not found in the array.`);
  }
}

// Example1:
const arr1 = [5,8,2,10,3];
const target1 = 10;
runSentinelSearch(arr1, target1);

// Example2:
const arr2 = [5,12,6,20,15];
const target2 = 6;
runSentinelSearch(arr2, target2);
