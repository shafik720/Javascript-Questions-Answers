let product = document.getElementById('product');
let price = document.getElementById('price');

const operation = () => {
    if(!product.value){
        return ;
    }
    addLocalStorage(product.value, price.value);
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

let addLocalStorage = (model, price) => {
    let dummy = getCart();
    if(dummy[model]){
        dummy[model] = price;
    }else{
        dummy[model] = price;
    }
    let dummified = JSON.stringify(dummy);
    localStorage.setItem('cart', dummified);
}