//number এরেকে sort করে দেখাও। 

let numbers = [25,10,54,69,87,32,14,2,56,47];

let x = numbers.sort(function x(a,b){
    return (a-b);
})
console.log(x);