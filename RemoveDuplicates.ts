function removeDuplicates(nums: number[]): number {
  let uniqueCounter = 0;

  if (nums.length == 0) return uniqueCounter

  // if the next array element is different then iterate the count and swap the unique counter and next element indexed values
  for (let totalCounter = 1; totalCounter < nums.length; totalCounter++) {
    if (nums[uniqueCounter] != nums[totalCounter])
      uniqueCounter++
    nums[uniqueCounter] = nums[totalCounter]
  }

  return uniqueCounter + 1;
}

let numsTest = [1, 1, 2]
let numsTest2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(numsTest))
console.log(removeDuplicates(numsTest2))