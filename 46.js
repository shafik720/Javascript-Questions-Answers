
// spread operator কি ? এর কাজ দেখাও। 

//spread operator হচ্ছে কোন এরেকে কপি করার মেথড। স্প্রেড অপারেটর দিয়ে একটি এরেকে অন্য এরেতে কপি করা যায়।

let numbers = [25,10,54,69,87,32,14,2,56,47];

let x = [...numbers,500,600,700];
console.log(x);