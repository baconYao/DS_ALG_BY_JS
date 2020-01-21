# python3

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}
        for i, ele in enumerate(nums):
            if ele in hashMap:
                return [hashMap[ele], i]
            hashMap[target-ele] = i