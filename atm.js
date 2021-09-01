"use strict";

let pinFile = require('./account')
console.log(pinFile.pinNumber);

module.exports.validatePin = validatePin;
module.exports.getBalance = getBalance;
module.exports.withDraw = withDraw;
module.exports.deposit = deposit;

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
    let balancePrompt;
    while(true){
        balancePrompt = prompt("Please enter your account pin number");
    if(balancePrompt == pin){
        break;
    }
    console.log("Incorrect pin number. Please enter correct pin number.");
}
console.log(pinFile.balanceNumber);
}

function withDraw(){
    let withdrawMoney = prompt("How much would you like to withdraw?");
    withDrawMoney = Number(withdrawMoney);
    withdrawBalance = withdrawMoney - pinFile.balanceNumber;

    console.log(withdrawBalance);
}

function deposit(){
    let depositMoney = prompt("How much do you want to deposit?");
    depositMoney = Number(depositMoney);
    balance = depositMoney + pinFile.balanceNumber;
  
    console.log(balance);
}

