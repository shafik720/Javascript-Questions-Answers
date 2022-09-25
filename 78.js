let product = document.getElementById('product');
let price = document.getElementById('price');

const operation = () => {
        
}

let getCart = () => {
    let locateCart = localStorage.getItem('cart');
    let cartObj;
    if(locateCart){
        cartObj = JSON.parse(locateCart);
    }else{
        cartObj = {};
    }
    return cartObj;
}

let addLocalStorage = (model) => {
    let dummy = getCart();
    let x ; 
    if(x[model] === dummy){
        x[model] = x[model] + 1;
    }else{
        x[model] = 1;
    }
    let dummified = JSON.stringify(dummy);
    localStorage.setItem('cart', dummified);
}