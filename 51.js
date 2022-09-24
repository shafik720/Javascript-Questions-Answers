// filter দিয়ে একটি এরের মধ্যে যতগুলো সংখ্যা আছে, ৫০ এর নিচে যে সংখ্যাগুলো আছে সেগুলো প্রিন্ট করে দেখাও। অনুরুপ ভাবে ৫০ এর উপর যতগুলো সংখ্যা আছে সেগুলো প্রিন্ট করে দেখাও। 

let numbers = [25,10,54,69,87,32,14,2,56,47];
let x = numbers.filter(element=>element>50);
let y = numbers.filter(element=>element<50);
console.log(x,y);