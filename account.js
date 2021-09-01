"use strict"

let pin = 5550429;
let balance = 150000;
let user1;


while (true){
    user1 = prompt("Please enter your account pin number");
    if (pin == user1){
        break;
    }
    alert("Incorrect pin number!");
}
alert("Your pin number has been validated!");
