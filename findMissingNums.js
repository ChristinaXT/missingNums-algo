// Find the missing number in a given integer array of 1 to 100
// Return: integer — the missing number in the array
// My approach to this solution was to realize that the numbers are in consecutive order.
//  Since the array is sorted, we can solve this in one pass by
//  looking ahead using arr[i] + 1 and comparing that to
//  arr[i + 1]. If arr[i + 1] is not equal to arr[i] + 1, it means that arr[i] + 1 is
//  the missing number.

let arr = [1,2,3,4,5,6,7,8,10];
function findMissingNum (arr) {
  for(var i = 0; i < arr.length - 1; i++) {
    if(arr[i] + 1 != arr[i+1] ) {
      return arr[i] + 1;
    }
  }

  return false;
}
console.log(findMissingNum(arr)); // Returns 9, the missing number

//
// For the sake of simplicity, 1 or 100 will be included in the array for sure.
// If not, a simple check if arr[0] === 1 and arr[arr.length — 1] === 100 could
// return the answer without looping through the array at all.
