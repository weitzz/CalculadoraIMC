//ARRAYS
let arr =[02,03,05,06,[22],{description:'App'}]
//arr.shift()//remove o primeiro elemento
//arr.push('08') // add no fim +utilizado
//arr.pop() //remove o elemento do final +utilizado



//OBJETOS
let obj ={
   description: 'App',
   price: 500
}




//FUNÇOES EXECUTA AÇOES
function soma(z,x){
   const result = z+x;
   return result
};
function mult(z,x){
   const result = z*x;
   return result
}
//cria um objeto
const add = (name,email)=>{ {name,email} }

//console.log(soma(2,2))
console.log(arr.push(soma(2,2)))
console.log(arr.push(mult(5,2)))
console.log(arr.push(obj))
console.log(arr)

//criar array de objetos
// add objetos nessa array
const garage = [];
const cars = (car,placa)=>{ {car,placa} }

console.log(garage.push(cars('gol','khx6895')))
console.log(garage)


//EXERCICIO ARRAY/OBJ/FUNCTION



