var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(){
    for(var prop of dairy){
        console.log(prop);
    }
}

//logDairy();

const animal = {

    canJump: true
    
    };
    
const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(){
    for(let prop of Object.keys(bird)){
        console.log(`${prop}: ${bird[prop]}`);
    }
}

//birdCan();

function animalCan(){
    for(let prop of Object.keys(bird)){
        console.log(`${prop}: ${bird[prop]}`);
    }
    for (let prop in animal) {
        console.log(`${prop}: ${animal[prop]}`);
    }
}

animalCan();