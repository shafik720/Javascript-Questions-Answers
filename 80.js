

let img = document.getElementById('img');

let image = [
    'for slider/img (1).jpg',
    'for slider/img (2).jpg',
    'for slider/img (3).jpg',
    'for slider/img (4).jpg',
    'for slider/img (5).jpg',
]

let counter = 0 ;

let x = setInterval(()=>{
    img.setAttribute('src',image[counter]);
    counter++;
    if(counter==image.length){
        counter = 0 ;
    }
},1000)