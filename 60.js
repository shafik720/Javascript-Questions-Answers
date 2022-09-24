
document.getElementById('add').addEventListener('click',function(){
    console.log('Clicked');
})

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

getCart();