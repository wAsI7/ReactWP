const wadrobe = ['TShirt', 'Jeans', 'Pants', 'Shirts', 200, 300, 120, 430];

//Spread Operator
const ready = (...wadrobe) => {
    for(var value of wadrobe){
        console.log(`${value} is of type ${typeof(value)}`);        
    }
    
}

ready(...wadrobe);

//Rest Operator
var itemsPrice = [300, 240, 80, 90];

const addTax = (taxRate, ...itemsBought) => {
    return itemsBought.map(item => item + (item * taxRate) / 100);
}

const priceWithTax = addTax(2.5, ...itemsPrice);

console.log(priceWithTax);


//ASSIGNMENT

var fruits = ['apple', 'banana', 'berries', 'kiwi'];

var veggies = ['tomato', 'potato', 'onion'];

var cart = [...fruits, ...veggies];

//console.log(cart);

for (var i=0; i < cart.length; i++){
    console.log(cart[i]);
}