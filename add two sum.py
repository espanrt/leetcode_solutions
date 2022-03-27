l1=[9,9,9,9,9,9,9]
l2=[9,9,9,9]
solution=[]
i=0
z=0
p=0
if len(l1)>=len(l2):
    o=len(l1)-len(l2)
    while p<=o:
        l2.append(0)
        print(l2)
        p=p+1
    
        #aumentar el tamaño de l2 con 0 para hacer match a l1   
    while i<len(l1):
        if z==1:
            x=l1[i]+l2[i]+1
            z=z-1
        else:
            x=l1[i]+l2[i]
            if x>=10:
                x=x-10
                z=1
        solution.append(x)
        i=i+1
    print(solution)
