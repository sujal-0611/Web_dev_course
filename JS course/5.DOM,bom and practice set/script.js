//game
alert(`welcome to Snake - Water - Gun game`);
let user_hand = prompt(`Enter the your choice between Snake - Water - Gun`);
let comp_hand = Math.floor(Math.random()*(3-1+1))+1;

let snake = 1;
let water = 2;
let gun = 3;

let rounds = 0;
let user_score=0;
let pc_score =0;

let tie =(user_hand,comp_hand)=> alert('You chose ' + user_hand + ', and computer chose ' + comp_hand + '. It\'s a tie!');

let win =(user_hand,comp_hand)=>  alert('You chose ' + user_hand + ', and computer chose ' + comp_hand + '. You win this round!');

let loose=(user_hand,comp_hand)=> alert('You chose ' + user_hand + ', and computer chose ' + comp_hand + '. Computer wins this round!');

do{
    alert("Round "+(rounds+1));
    if(user_hand== `snake`){
        switch(comp_hand){
            case 1 : tie(user_hand,comp_hand); break;
            case 2 : win(user_hand,comp_hand); user_score++; break;
            case 3 : loose(user_hand,comp_hand); pc_score++; break;
            default: alert("wrong choice");
        }
      
    }
    else if(user_hand == `water`){
        switch(comp_hand){
            case 1 :loose(user_hand,comp_hand); pc_score++; break;
            case 2 : tie(user_hand,comp_hand); break;
            case 3 : win(user_hand,comp_hand);  user_score++; break;
            default: alert("wrong choice");
        }
    }
    else if(user_hand == `gun`){
        switch(comp_hand){
            case 1 : win(user_hand,comp_hand);  user_score++;  break;
            case 2 : loose(user_hand,comp_hand); pc_score++; break;
            case 3 :tie(user_hand,comp_hand); break;
            default: alert("wrong choice");
        }
    }
    else
        alert("wrong choice entered");
        
        user_hand = prompt(`Enter the your choice between Snake - Water - Gun`);
        comp_hand = Math.floor(Math.random()*(3-1+1))+1;
       
    rounds++;
}while(rounds !=10);

alert(`user score is ${user_score} and PC Score is ${pc_score}`);
// let age = prompt("enter your fking age");
// if (age > 18) {
//     alert("you can drive");
// }
// else if(age < 0){
//     console.error("ERROR BC");
// }
// else{
//     alert("you are not eligible to drive");
// }

//Q. if no is greater than 4 then redirect to google.com
// let num = prompt("enter a number of your choice");

// if(num > 4){
//     location.href = "https://www.google.co.in";
// }
// else{
//     alert(`doing nothing`);
// }

//Q. change bg-color based on input
// let color = prompt("ENter the color");

// if(color == `red`){
//     document.body.style.backgroundColor = `#FF5733`;
// }
// else if(color == `blue`){
//     document.body.style.backgroundColor = `blue`;
// }
// else if(color == `green`){
//     document.body.style.backgroundColor = `green`;
// }
// else{
//     alert(`Invalid Color`);
// }
// document.body.style.backgroundColor = `${color}`;