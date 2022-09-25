
document.getElementById('btn').addEventListener('click', function(){
    dummy();
})


let dummy = () => {
    let x = prompt('Whats your Number !');
    if(!x){
        alert('Input field empty');
    }else if(isNaN(x)){
        alert('Only number is allowed');
    }else if(x<0){
        alert('Minus value is not accepted. Try again !');
    }else{
        let parsedValue = parseInt(x);
        let total = parsedValue + 200;
        alert (total);
    }
}