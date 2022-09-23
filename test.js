
const shoppingCart = [
    {product: "Mobile", price: 8500, quantity: 2, tag: "Favourite"},
    {product: "Shirt", price: 500, quantity: 8, tag: "Essential"},
    {product: "Cosmetic", price: 1500, quantity: 6, tag: "Favourite"},
    {product: "Rice", price: 120, quantity: 6, tag: "Essential"},
    {product: "Oil", price: 220, quantity: 6, tag: "Essential"},
    {product: "Headphone", price: 430, quantity: 2, tag: "Favourite"},
    {product: "Shoe", price: 970, quantity: 3, tag: "Essential"},
]

function cart(given){
    let totalProductQuantity = 0;

    let essentialProduct = 0;
    let essentialText = 'essential';
    let essentialQuantity = 0;
    let essentialPrice = 0;
    
    let favouriteProducts = 0;
    let favouriteProductsQuantity = 0;
    let favouriteProductPrice = 0;

    for(let elements of given){
        totalProductQuantity = totalProductQuantity + elements.quantity;

        // Essential product Part
        if((elements.tag).toLowerCase() == essentialText){
            essentialProduct++;
            essentialQuantity = essentialQuantity + elements.quantity;
            essentialPrice = essentialPrice + (elements.quantity * elements.price);
        }

        // Favourite product Part
        if((elements.tag).toLowerCase()=="favourite"){
            favouriteProducts++;
            favouriteProductsQuantity = favouriteProductsQuantity + elements.quantity;
            favouriteProductPrice = favouriteProductPrice +(elements.price * elements.quantity);
        }
    }
    console.log("You have ",essentialProduct," important products which quantity is: ",essentialQuantity,"\nWhich will cost: ",essentialPrice,"/- \n");
        
    console.log("You have ",favouriteProducts,' favourite products Which Quantity is: ',favouriteProductsQuantity);
    console.log("Which will cost: ",favouriteProductPrice,'/- \n');

    let totalPrice = essentialPrice + favouriteProductPrice;
    console.log("You have added total products in quantity: ",totalProductQuantity);
    console.log("Your total Cost is: ",totalPrice,'/-')
}

cart(shoppingCart);