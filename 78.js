let product = document.getElementById('product');
let price = document.getElementById('price');
let table = document.getElementById('table');

const operation = () => {
    if(!product.value){
        return ;
    }
    addLocalStorage(product.value, price.value);
    showHtml(product.value, price.value);
}

const showHtml = (product, price) => {
    let tr = document.createElement('tr');
    tr.innerHTML= `
    <td>${product}</td>
    <td>${price}</td>
    `
    table.appendChild(tr);
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
        model = model + ' ';
        dummy[model]  = price;
    }else{
        dummy[model] = price;
    }
    let dummified = JSON.stringify(dummy);
    localStorage.setItem('cart', dummified);
}

const showHtmlLocal = () => {
    let dummy = getCart();
    for(let element in dummy){
        showHtml(element, dummy[element]);
    }
}
showHtmlLocal();

const order = () => {
    table.style.display = 'none' ; 
    localStorage.clear('cart');
}