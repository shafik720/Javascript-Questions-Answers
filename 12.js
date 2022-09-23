
const pizza = (money) => {
    let pizzaPrice = 350;
    if(pizzaPrice<=money){
        let leftAmount = parseInt(money) % pizzaPrice;
        let pizzaQuantity = (money-leftAmount) / pizzaPrice;
        console.log('You will get '+pizzaQuantity+' Pizza \nYou will have '+leftAmount+'/- left');
    }    
}

pizza(370);