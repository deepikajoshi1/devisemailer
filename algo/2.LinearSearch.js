// Linear Search = Sequential Search

function linearSearch(arr, target) {
  // for( initialization; condition; iteration){
  // }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// example
const array = [5,3,8,1,9,4];
const targetElement = 8;
const result = linearSearch(array, targetElement);
if (result !== -1){
  console.log(`Element${targetElement} found at index${result}.`);
}else{
  console.log(`Element${targetElement} not found in the array${result}.`)
}
