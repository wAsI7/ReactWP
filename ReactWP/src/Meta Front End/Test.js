function randomAssign(){
    var dynamicKey;
    if(Math.random() > 0.5){
        dynamicKey = 'speed';
    }
    else{
        dynamicKey = 'color';
    }

    var drone = {
        speed: 100,
        color: 'Red'
        
    }
    console.log(drone[dynamicKey]);
    console.log(`Random Number is Generated: ${Math.random()} is the number generated`);
}

randomAssign();