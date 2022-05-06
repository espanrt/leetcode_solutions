class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        array=[]
        
        max_1=max(nums)
        print(max_1)

        for i in range(max_1):
            if i in nums:
                array.append(i)
            else :
                return i 
               
