
// splice এর কাজ কি ? 37 নাম্বার প্রশ্নকে splice দিয়ে করে দেখাও। 
// 37 no ques: ->  arr = [14, 58, 98, 58, 96, 58, 65, 202, 303, 205, 609, 58, 95 ]; এই এরের সবগুলো ৫৮ সংখ্যাকে চেঞ্জ করে ০ বা অন্য যেকোন সংখ্যায় রূপান্তর করার প্রোগ্রাম লেখো। 


let arr = [14, 58, 98, 58, 96, 58, 65, 202, 303, 205, 609, 58, 95 ];
for(let element of arr){
    if(element===58){
        arr.splice(arr.indexOf(element),1, 555);
    }
}
// console.log(arr);