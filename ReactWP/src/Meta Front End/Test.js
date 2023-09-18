//Task1
var dairy = [
    'cheese',
    'sour cream',
    'milk',
    'yogurt',
    'ice cream',
    'milkshake'
];

function logDairy(){
    for(var product of dairy){
        console.log("The list of Products are mentioned below");
        console.log(product);
    }
}

logDairy();

//Task2
const animal = {
    canJump: true    
    };
    
const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(){
    for(let key of Object.keys(bird)){
        console.log(`${key}: ${bird[key]}`);
    }
}

birdCan();

//Task3
function animalCan(){
    for(let key of Object.keys(bird)){
        console.log(`${key}: ${bird[key]}`);
    }
    for (let prop in animal) {
        console.log(`${prop}: ${animal[prop]}`);
    }
}

animalCan();