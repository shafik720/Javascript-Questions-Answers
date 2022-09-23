//  arr = [14, 58, 98, 58, 96, 58, 65, 202, 303, 205, 609, 58, 95 ]; এই এরের সবগুলো ৫৮ সংখ্যাকে চেঞ্জ করে ০ বা অন্য যেকোন সংখ্যায় রূপান্তর করার প্রোগ্রাম লেখো। 

let arr = [14, 58, 98, 58, 96, 58, 65, 202, 303, 205, 609, 58, 95 ];

const dummy = (model) => {
    for(let element of model){
        if(element===58){
            let x = model.indexOf(element);
            model[x] = 0;
        }
    }
    return model;
}

console.log(dummy(arr));