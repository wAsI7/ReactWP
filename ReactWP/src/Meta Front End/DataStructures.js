/*Data Structures - Arrays */

const fruits = [ 'Apple', 'Banana', 'Custard', 'Orange', 'Pineapple', 'Watermelon' ];

function appendIndex(fruit, index){
    console.log(`Fruit with Index ${index} is ${fruit}`);
}

fruits.forEach(appendIndex);

//Without Arrow Functions
const vegetables = [ 'Onion', 'Tomato', 'Potato', 'Chillies' ];

vegetables.forEach(function(veggie, index){
    console.log(`Vegetable with Index ${index} is ${veggie}`);
});

//Above Code with Arrow Functions

vegetables.forEach((veggie, index) => {
    console.log(`Vegetable with Index ${index} is ${veggie}`);    
});


/*Data Structures - Objects */

var car = {
    color: 'Red',
    speed: 120,
    mileage: 25,
    brand: 'Honda'
};

// Accessing properties
console.log(`The Color of the Car is: ${car.color}`);

// Modifying properties
car.color = 'Blue';
console.log(`The Color of the Car is: ${car.color}`);

// Adding new properties
car.modelYear = 2006;
console.log(`The Manufacturing Year of the Car is: ${car.modelYear}`);

// Iterating through an object
for(var feature in car){
    console.log(`The ${feature} of the Car is: ${car[feature]}`);
}