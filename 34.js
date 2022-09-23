let products = [
    {product: "Mobile", price: 8500, quantity: 2, tag: "Favourite"},
    {product: "Shirt", price: 500, quantity: 8, tag: "Essential"},
    {product: "Cosmetic", price: 1500, quantity: 6, tag: "Favourite"},
    {product: "Rice", price: 120, quantity: 6, tag: "Essential"},
    {product: "Oil", price: 220, quantity: 6, tag: "Essential"},
    {product: "Headphone", price: 430, quantity: 2, tag: "Favourite"},
    {product: "Shoe", price: 970, quantity: 3, tag: "Essential"}
]

let dummy =(model, catagory) => {
    let singleProductName ;
    let singleProductPiece;
    let singleProductPricePerunit
    let singleProductTotalPrice;
    let grandTotal = 0;
    if(catagory.toLowerCase()==='essential' || catagory.toLowerCase()==='favourite'){
        console.log(`Showing Price for ${catagory} catagory`);
    for(let element of model){
        if(element.tag.toLowerCase()===catagory.toLowerCase()){
            singleProductName = element.product;
            singleProductPiece = element.quantity;
            singleProductPricePerunit = element.price;
            console.log(`Product name: ${singleProductName}, Quantity : ${singleProductPiece}, Price per unit: ${singleProductPricePerunit} `);
            singleProductTotalPrice = element.quantity * element.price;
            grandTotal = grandTotal + singleProductTotalPrice;
            console.log(`Total Price: ${singleProductTotalPrice}`);
        }
    }
    console.log(`Grand Total Price : ${grandTotal}`);
    }else{
        console.log('Wrong Catagory');
    }
    
}
dummy(products, 'EssEntial');