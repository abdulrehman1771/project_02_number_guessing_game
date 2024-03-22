#! /usr/bin/env node

import inquirer from 'inquirer';

const guessNumber = Math.floor(Math.random() * 10 + 1);

let tries = 0;

while(true){
    
    const userInput = await inquirer.prompt([
        {
            name: 'guessed',
            type: 'number',
            message: 'Please enter the number from 1 to 10.\n',
        }
    ]);
    
    if (userInput.guessed === guessNumber ){
        console.log("Wow, You guessed the correct number");
        tries ++;
        console.log("\nYour tries", tries);
        break;
    }

    else if(userInput.guessed > guessNumber){
        console.log("Your number is high than the guess number");
        tries ++;
        console.log("\nYour tries", tries);
    }

    else if(userInput.guessed < guessNumber){
        console.log("You number is less than the guess number.");
        tries ++;
        console.log("\nYour tries", tries);
    }
 
    else{
        console.log("Invalid Number");
    }
}