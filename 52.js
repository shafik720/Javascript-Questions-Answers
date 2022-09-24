
// filter দিয়ে নিচের এরে অবজেক্টের country যেগুলোর america দেওয়া আছে শুধু সেগুলো প্রিন্ট করে দেখাও। 

let cars = [
    {brand: 'Apple', country: 'America', year: 1990},
    {brand: 'mi', country: 'china', year: 2012},
    {brand: 'Windows', country: 'America', year: 1990},
    {brand: 'Huwawei', country: 'Korea', year: 1995}
   ];

let x = cars.filter(element=>element.country.toLowerCase()==='america');
console.log(x);