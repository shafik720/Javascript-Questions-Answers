
// split এর কাজ কি ? slice এর কাজ কি ? substr এর কাজ কি ? substring কি ? join এর কাজ কি ? 

// কোন একটি এরে থেকে কোন নির্দিস্ট অংশ বা ইলেমেন্ট বাদ দিয়ে বাকী অংশগুলো দিয়ে একটি এরে তৈরি করার  জন্য split() ফাংশানটি ব্যবহার করা হয়। 

let dummy = 'Where have all the flowers gone !';
let x = dummy.split('e');
// console.log(x);


let dummyForSlice = 'where have all the flowers gone';
x = dummyForSlice.slice(5,12);
// console.log(x);

