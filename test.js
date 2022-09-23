

let dummy = [
    'Dell idiot laptop',
    'asus gen laptop',
    'xiaomi note 8 mobile',
     'Macbook air',
    'Sunlight battery',
    'Lenovo good laptop',
    'Iphone mobile'
    ] ; 


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