
//36. ধরো একটি এরেতে একই সংখ্যা অনেকবার আছে। ফাংশান দিয়ে এমন একটি প্রোগ্রাম লেখো যেখানে দেখাবে ওই সংখ্যাটার পজিশান নাম্বারগুলো কত কত। 

let numbers = [25,10,54,69,87,32,87,14,2,69,10,56,10,47];

const arr =(model)=>{
    let x = [];
    let dummy = model;
    for(let element of dummy){
        if(element===69){
            x.push(dummy.indexOf(element));
            dummy[dummy.indexOf(element)] = 0; 
        }
    }
    return x;
}

console.log(arr(numbers));


