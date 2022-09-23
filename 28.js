
let dummy = [25,10,54,69,87,32,14,2,56,47];

function arr (numbers) {
    let x = 0;
    for(let element of numbers){
        x = x + element;
    }
    let result = x / numbers.length;
    return result;
}

console.log(arr(dummy));