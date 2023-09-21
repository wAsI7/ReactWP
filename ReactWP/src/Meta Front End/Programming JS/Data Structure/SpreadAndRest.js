//Spread Operator
const wadrobe = ['TShirt', 'Jeans', 'Pants', 'Shirts', 200, 'Shoes'];

const ready = (...wadrobe) => {
    for(var value of wadrobe){
        console.log(`${value} is of type ${typeof(value)}`);        
    }
    
}

ready(...wadrobe);

//Rest Operator