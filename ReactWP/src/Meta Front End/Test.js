var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(){
    for(var product of dairy){
        console.log(product);
    }
}

logDairy();

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

function animalCan(){
    for(let key of Object.keys(bird)){
        console.log(`${key}: ${bird[key]}`);
    }
    for (let prop in animal) {
        console.log(`${prop}: ${animal[prop]}`);
    }
}

animalCan();