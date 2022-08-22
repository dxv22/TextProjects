"use strict";
//=================================
// Map is used to hold unique values - first check the remainder between target - first number value. If the remainder exists in the map then return the first number and remainder index, if the remainder value does not exist then push into the map and keep iterating.
// Compile using 'tsc' and not 'tsc TwoSum.ts' and then run using 'node TwoSum.js'
//=================================
function twoSum(nums, target) {
    // Map is used to hold unique values from the array
    let sumMap = new Map();
    let twoSumArr = [];
    // Check if the remaining target value exists in the array - no: push into map, yes: push into array and return result arr
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        if (sumMap.has(num2)) {
            twoSumArr.push(nums.indexOf(num2));
            twoSumArr.push(i);
        }
        sumMap.set(nums[i], i);
    }
    return twoSumArr;
}
;
// Testing
let nums = [3, 2, 4];
let target = 6;
console.log(twoSum(nums, target));
