
// 30. একটি এরের ডুপ্লিকেট এলিমেন্টগুলো সরানোর একটি প্রোগ্রাম লেখো। 


let numbers = [25,10,54,69,87,10,32,14,14,2,56,47];
let dummy = []
for(let element of numbers){
    if(dummy.indexOf(element) ===-1){
        dummy.push(element);
    }
}
console.log(dummy);