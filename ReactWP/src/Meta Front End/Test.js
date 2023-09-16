var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(){
    for(var prop of dairy){
        console.log(prop);
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
    for(var prop of Object.keys(bird)){
        console.log(`${prop}: ${bird[prop]}`);
    }
}

birdCan();

function animalCan(){
    for(var prop in Object.keys(bird)){
        console.log(`${prop}: ${bird[prop]}`);
    }
}