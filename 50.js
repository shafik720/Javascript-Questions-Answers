// map দিয়ে কোন এরে অবজেক্টের(অবজেক্ট না, array object) নির্দিস্ট প্রোপার্টি ভ্যালুগুলো প্রিন্ট করে দেখাও। 

let cars = [
    {product: "Mobile", price: 8500, quantity: 2, tag: "Favourite"},
    {product: "Shirt", price: 500, quantity: 8, tag: "Essential"},
    {product: "Cosmetic", price: 1500, quantity: 6, tag: "Favourite"},
    {product: "Rice", price: 120, quantity: 6, tag: "Essential"},
    {product: "Oil", price: 220, quantity: 6, tag: "Essential"},
    {product: "Headphone", price: 430, quantity: 2, tag: "Favourite"},
    {product: "Shoe", price: 970, quantity: 3, tag: "Essential"}
]

let x = cars.map(element=>element.product);

console.log(x)
