"use strict";

let pinFile = require('./account')
console.log(pinFile.pinNumber);



function validatePin(){
    let user1;
    while (true){
    user1 = prompt("Please enter your account pin number");
    if (pin == user1){
        break;
    }
    console.log("Incorrect pin number!");
}
console.log("Your pin number has been validated!");

}

function getBalance(){
    console.log(pinFile.balanceNumber);
}

function withDraw(){
    let withdrawMoney = prompt("How much would you like to withdraw?");
    withDrawMoney = Number(withdrawMoney);
    pinFile.balanceNumber = pinFile.balanceNumber - withdrawMoney;

    console.log(pinFile.balanceNumber);
}

function deposit(){
    let depositMoney = prompt("How much do you want to deposit?");
    depositMoney = Number(depositMoney);
    pinFile.balanceNumber = pinFile.balanceNumber = depositMoney;
  
    console.log(pinFile.balanceNumber);
}

module.exports.validatePin = validatePin;
module.exports.getBalance = getBalance;
module.exports.withDraw = withDraw;
module.exports.deposit = deposit;