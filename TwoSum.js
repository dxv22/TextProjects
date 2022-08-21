"use strict";
//=================================
// Compile using 'tsc' and not 'tsc TwoSum.ts' and then run using 'node TwoSum.js'
function twoSum(nums, target) {
    let sumMap = new Map();
    let twoSumArr = [];
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        if (sumMap.has(num2)) {
            //return [i, nums.indexOf(num2)]
            twoSumArr.push(i);
            twoSumArr.push(nums.indexOf(num2));
        }
        sumMap.set(nums[i], i);
    }
    return twoSumArr;
}
;
let nums = [3, 2, 4];
let target = 6;
console.log(twoSum(nums, target));
