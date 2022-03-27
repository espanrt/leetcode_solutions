// Dado un array deseamos saber si se tiene un numero repetido  sin importar si hay mas de uno repetido 
nums=[1,2,3,1];
let array=[];

for (let i=0;i<nums.length;i++){
    console.log(i)
    let x=nums[i]
    console.log(x)
    if(array.indexOf(x)==-1){
        array.push(x)
        console.log(array)
        if(array.length==nums.length){
            p=1
            console.log("no hay numeros repetidos")
        }
        else{
            p=0
            console.log("hay un numero repetido ")
        }
    }
}

console.log(p)
