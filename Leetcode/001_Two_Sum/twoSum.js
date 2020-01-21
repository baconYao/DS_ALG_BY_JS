/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    hashMap = {};
    for(let i = 0; i < nums.length; i++) {
        let value = nums[i];
        if(hashMap[value] !== undefined) {
            return [hashMap[value], i]
        }
        hashMap[target-value] = i;
    }  
};