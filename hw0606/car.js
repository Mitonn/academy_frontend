'use strict';

//fuelConsumption - расход топлива на 100км
function Car(fuelTankCapacity, fuelConsumption)
{
    var engineStatus = false;
    var fuelAmount = 0;
    var distance = 0;
    var movementStatus = false;//движется ли машина
    var SPEED = 100; //предположим, что скорость машины - константа, 100км/с
    
    this.isGoing = function() {
        return movementStatus;
    };
    
    this.setDistance = function(dist) {
        distance = dist;
    };
    
    function getTraveledDistance() {
        var currentDistance = fuelAmount / fuelConsumption * 100;
        if (currentDistance > distance) {
            return distance;
        } else {
            return currentDistance;
        }
    };
    function getSpentTime() {
        return getTraveledDistance() / SPEED;
    };
    function getSpentFuel() {
        return getTraveledDistance() / 100 * fuelConsumption;
    };
    function getFuelBalance() {
        return fuelAmount - getSpentFuel();
    };
    
    function showCalculations() {
        console.log('Заданная дистанция: ' + distance);
        console.log('Пройденная дистанция: ' + getTraveledDistance());
        console.log('Затраченное время: ' + getSpentTime());
        console.log('Затраченное топливо: ' + getSpentFuel());
        console.log('Остаток топлива: ' + getFuelBalance());
        
        if (getTraveledDistance() < distance) {
            console.log('Машина не доехала.');
        }
    };
    
    this.setFuelAmount = function(fuel) {
        fuelAmount += fuel;
        if (fuelAmount > fuelTankCapacity) {
            fuelAmount -= fuel;
            throw new Error('fuel amount must be <= ' + fuelTankCapacity);
        }
    };
    
    this.enableEngine = function() {
        if (fuelAmount > 0) {
            engineStatus = true;
        } else {
            engineStatus = false;
        }
    };
    
    this.disableEngine = function() {
        engineStatus = false;
    };
    
    this.go = function() {
        if (engineStatus) {
            movementStatus = true;
            setTimeout(showCalculations, getSpentTime() * 1000);
            console.log('go!');
        } else {
            console.log('doesn\'t go');
        }
    };
    
    this.stop = function() {
        movementStatus = false;
    };
    
};

var car1 = new Car(60, 5);
car1.setFuelAmount(40);
car1.setFuelAmount(15);
car1.setDistance(1000);
car1.enableEngine();
//car1.disableEngine();
car1.go();
console.log(car1.isGoing());
car1.stop();
console.log(car1.isGoing());