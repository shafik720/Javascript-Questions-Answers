
let ul = document.getElementById('ul');

document.getElementById('add').addEventListener('click',function(){
    let input = document.getElementById('inputText');
    if(!input.value){
        return;
    }
    showHtml(input.value);
    addToCart(input.value);
    input.value = '';
})

let showHtml = (model) => {
    let li = document.createElement('li');
    li.innerText = model;
    ul.appendChild(li);
}

let showFromStorage = () => {
    let getCartItem = getCart();
    for(let element in getCartItem){
        showHtml(element);
    }
    console.log(getCartItem);
}

let getCart = () => {
    let existedCart = localStorage.getItem('cart');
    let parsedCart
    if(existedCart){
        parsedCart = JSON.parse(existedCart);
    }else{
        parsedCart = {};
    }
    return parsedCart;
}

let addToCart = (model) => {
    let dummy = getCart();
    if(dummy[model]){
        dummy[model] = dummy[model] + 1 ; 
    }else{
        dummy[model] = 1;
    }
    let dummyFied = JSON.stringify(dummy);
    localStorage.setItem('cart', dummyFied);
}

showFromStorage();

document.getElementById('delete').addEventListener('click', function(){
    localStorage.clear('cart');
    ul.style.display = 'none';
})