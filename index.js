"use strict";

let atmInfo = require('./atm')
console.log(atmInfo.getBalance);


function atmMenu(){
    if(pinAccess){
      
    }
  
    if(!pinAccess){
      alert("incorrect pin number");
      return atmAccess(pinAccess);
    }
  
    let displayAtmMenu = prompt("Found " + person.firstName + " " + person.lastName + " . What would you like to do?\n1. Get Balance\n2. Withdraw\n3. Deposit\n4. Type your selection or 'restart' or 'quit'");  
    switch(displayAtmMenu){
      case "Get Balance":
        atmInfo.getBalance();
        break;
      case "Withraw":
        atmInfo.withDraw();
        break;
      case "Deposit":
        atmInfo.deposit();
        break;
      case "restart":
        atmAccess(pinAccess); 
        break;
      case "quit":
        return; 
        default:
        return atmAccess(pinAccess);
    }
  }

  
  function atmAccess(pinAccess){
    let atmSearchType = promptFor("Do you have a pin number? Enter 'yes' or 'no'", yesNo).toLowerCase();
    let atmSearchResults;
    switch(atmSearchType){
      case 'yes':
        atmSearchResults = atmInfo.validatePin();
        break;
      case 'no':
        default:
      atmAccess(pinAccess); 
        break;
    }
    
  }
  
  return atmMenu();