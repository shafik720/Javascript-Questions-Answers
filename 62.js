

document.getElementById('btn2').addEventListener('click', function(){
    dummy2();
})

let dummy2 = () => {
    let x = confirm('You want to see the website location !');
    if(x){
        console.log(location.href);
    }
}