class Solution:
    def countBits(self, n: int) -> List[int]:
        
        
        i=0 

        array=[]

        while i<n+1:
            array.append(bin(i).count("1"))
            i+=1
        return array
