
let content = document.getElementById('content');

let counter = 10;

let x = setInterval(()=>{
    content.innerText = counter;
    counter--;
    if(counter<=-2){
        content.innerText = 'Finished';
        content.style.color = 'red';
        clearInterval(x);
    }
},1000)