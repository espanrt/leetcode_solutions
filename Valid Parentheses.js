/*validacion de parentesis
aplicar un stack para configurar
s="()0"
true
s="()[]{}"
true 

crear un stack auxiliar para crear comparar el ultimo ingreso con el valor obtenido 
crear una rutina que permita validar el ingreso del valor y revisar si hay uno igual 
si hay uno igual eliminar el archivo al final si la len !=0 entonces 
imprimir un  INVALID*/

// creamos el stack 
let s="()[]{}"
let stack=[];
let j=1
/* creamos un ciclo for para que recorra dependiendo del tamaño de la len
    cuando lo recorra decimos que si es igual a {,[( entonces que se añada 
    a el stack y si encontramos un ],),} eliminemos el valor del stack 
    si al final de recorrer el lengh del string entonces la length del 
    array es >0 entonces imprimir INVALID
*/


// revisar el codigo programado no tiene en cuenta si el ultimo valor es valido o no y por tanto siempre hace el pop sin importar 

for (let i =0 ;i<s.length;i++){
    switch(s[i]){

        case '(': stack.push(')');
            break;
        case '[': stack.push(']');
            break;
        case '{': stack.push('}');
            break;
        default:
            if (s[i]!==stack.pop()){
                console.log("false")
                console.log(1)
            }
    }
console.log(stack)

console.log(j)
}
