// Q9 reverse the array

let arr = [10,20,30,40,50]
// let i = 0 , j= arr.length-1;

// while(i != j){
// let temp = arr[i]
// arr[i] = arr[j]
// arr[j] = temp
// i++
// j--
// }

// console.log(arr);




// Interview Tip

// To reverse an array using two pointers:

let left = 0;
let right = arr.length - 1;

while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
}
console.log(arr);

// This is the standard in-place reversal algorithm with O(n) time complexity and O(1) extra space.

