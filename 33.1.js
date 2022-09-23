
let productss = [
    {brand: 'Iphone', price: 95000, country: "California", ram: 2},
    {brand: 'Blackberry', price: 3500, country: "England", ram: 3},
    {brand: 'Xiaomi', price: 25000, country: "China", ram: 6},
    {brand: 'Huwaei', price: 45000, country: "China", ram: 5},
    {brand: 'Samsung', price: 75000, country: "Korea", ram: 5},
    {brand: 'Realme', price: 25000, country: "India", ram: 8},
    {brand: 'Walton', price: 3500, country: "Bangladesh", ram: 16}
]

let dummy = (result) => {
    let y = result[0].price;
    for(let element of result){
        if(element.price<y){
            y = element.price;
        }
    }
    let x = result.filter(element=>element.price<=y);
    return x;
}
console.log(dummy(productss));