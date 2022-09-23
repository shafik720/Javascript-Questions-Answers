

let numbers = [3,5];
function fibo(given){
let n = given;
for(let i=2; i<10; i++){
n[i] = n[i-2] + n[i-1];
}
return n;
}
let result = fibo(numbers);
console.log(result);