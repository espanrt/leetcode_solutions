palindrome="1221"
print(palindrome[0])
i=0
j=len(palindrome)-1
print(j)
p=0
while p<j+1:
    p=p+1
    if palindrome[i]!=palindrome[j]:
        
        z=1
    else:
        i=i+1
        j=j-1
        z=0
if z==1:
    print('no es un palindrome')
if z==0:
    print('es un palindrome')
