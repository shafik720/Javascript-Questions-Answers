let numbers = [25,10,54,609,807,32,104,2,56,47];

let dummy = numbers;
let x = numbers[0];


function second(){
    for(let element of numbers){
        if(element>x){
            x = element;
        }    
    }    
    dummy[dummy.indexOf(x)] = 0;
    x = dummy[0];

    for(let number of dummy){
        if(number>x){
            x = number;
        }    
    }
    console.log(x);
}

second();


