
let sliderDiv = document.getElementById('slider');

let counter = 1 ; 

let dummy = setInterval(()=>{
    let imgUrl = `for slider/img (${counter}).jpg`
    sliderDiv.innerHTML = `
    <img src=" ${imgUrl} " alt="">
    `
    counter++;
    if(counter===5){
        counter = 1;
    }
},1000)