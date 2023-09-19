/* forEach method in Arrays */
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


/* filter method in Arrays */
