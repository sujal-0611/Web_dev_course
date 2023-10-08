//Guess the number

const prompt = require("prompt-sync")({sigint:true});
//1.genreate random number
let ran_num = Math.floor(Math.random()*101);
let negative_score=0;
let user_guess=undefined;

while(ran_num != user_guess){
    user_guess = Number(prompt("Enter your guess between 0 to 100 "));
    if (user_guess == ran_num){
        console.log(`\ncongratulations!!! you guessed it correctly, the number is ${ran_num}`);
        break;
    }
    else if(user_guess >ran_num){
        console.log('\nyour guess is higher than the Number is generated');
        negative_score++;
    }
    else{
        console.log('\nyour guess is lower than the Number is generated') ;
        negative_score++;
    }
}

console.log(`\nYour Score is: ${100-negative_score}`);