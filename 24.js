
let numbers = [25,10,54,69,87,-302,14,2,56,47];

let x = numbers[0];
for(let element of numbers){
    if(element>x){
        x = element;
    }
}

let y = numbers[0];
for(let element of numbers){
    if(element<y){
        y = element;
    }
}
console.log(x);
console.log(y);