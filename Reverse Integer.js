//Reverse Integer

let input=120 ;

let output=321 ; 

/*vamos a crear un metodo que recorra el array desde el elemento length-1
  despues revisaremos si el input original es >0 o <0 y dependiendo de eso multiplicamos o no 
  por -1 

*/

let x=input.toString();

let array=[];
let number=""

console.log(array)

for(let i=x.length-1;i>=0;i--){
    array.push(x[i])
    number=number+x[i]
  if (input<0){
    number=-number
  }


}
console.log(number)
console.log(array)
