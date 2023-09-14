class Person {
    constructor(name = 'Tom', age = 20, energy = 100){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    doSomethingFun(){
        this.energy = this.energy - 10;
        console.log('Name is:', this.name);
        console.log('Energy decreasing currently at: ', this.energy);
    }
    sleep(){
        this.energy = this.energy + 10;
        console.log('Name is:', this.name);
        console.log('Energy increasing currently at: ', this.energy);
    }
}

class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10){
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork(){
        this.xp = this.xp + 10;
        console.log('Name is:', this.name);
        console.log('Energy increasing currently at: ', this.energy);
    }
}

function intern(){
    var internOne = new Worker('Lokesh', 21, 110, 0, 10);
    internOne.goToWork();
    return internOne;
}
intern();

function manager(){
    var managerOne = new Worker('Wasi', 30, 120, 100, 30);
    managerOne.doSomethingFun();
    return managerOne;
}
manager();
