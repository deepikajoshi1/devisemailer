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
