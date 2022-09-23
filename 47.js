// destructuring কি ? কোন একটি অবজেক্ট থেকে destructure করে দেখাও। 

let car = {
    brand: "audi",
    year: [2005,2002,1994,2022],
    origin: 'england'
}

let {origin} = car;

console.log(origin);