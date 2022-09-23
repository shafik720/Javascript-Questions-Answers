// indexOf  দিয়ে কোন array of string থেকে কোন প্রোডাক্ট খুজে বের করার প্রোগ্রাম লেখো।  Includes() দিয়ে কোন array of string থেকে কোন প্রোডাক্ট খুজে বের করার প্রোগ্রাম লেখো। 


let dummy = [
    'Dell idiot laptop',
    'asus gen laptop',
    'xiaomi note 8 mobile',
     'Macbook air',
    'Sunlight battery',
    'Lenovo good laptop',
    'Iphone mobile'
    ] ; 

const duplicate = (model, searchText) => {
    let arr = [];
    for(let element of model){
        if(element.toLowerCase()?.indexOf(searchText?.toLowerCase()) != -1){
            arr.push(element)
        }        
    }
    return arr;
}
// console.log(duplicate(dummy, 'good' ));

// Using include 
const ok = (model, text) => {
    let x = [];
    for(let element of model){
        if(element.toLowerCase().includes(text.toLowerCase())){
            x.push(element);
        }
    }
    return x;
}
console.log(ok(dummy, 'good'));