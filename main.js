const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
   for(let i = 0; i <=5; i++) {
    PlayRound();
   }
   Whowins();
    //play the game
    //play five rounds
    //console game
}

function PlayRound() {
const playerSelection = playerChoice();
const computerSelection = computerChoice();
const winner = checkWinner(playerSelection, computerSelection);
winners.push(winner);

}

function playerChoice() {
    //get input from player
    let input = prompt("Type Rock, Paper, or Scissors");
    while(input == null) {
        input = prompt("Type Rock, Paper, Scissors");
    }
    input = input.toLowerCase();
    let check = ValidateInput(input);
    while (check == false) {
        prompt("Enter only Rock, paper, or Scissors. ");
        while(input == null) {
            input = prompt("Type Rock, Paper, Scissors");
        }
        input = input.toLowerCase();
        check = ValidateInput(input);
    }
    return input;

}

function computerChoice(){
    //get random input from computer
    //floor rounds down an interger*
    return choices[Math.floor(Math.random()*choices.length)];
}

function ValidateInput(choice) {
 return choices.includes(choice);
 
 }

 function checkWinner(Choiceplayer, ChoiceComputer) {
    if(Choiceplayer === ChoiceComputer) {
        return "Its a Tie!";
    } else if (
        (Choiceplayer === "rock" && ChoiceComputer === "scissors") || 
        (Choiceplayer === "paper" && ChoiceComputer === "rock") || 
        (Choiceplayer === "scissors" && ChoiceComputer === "paper") 
    ) {
         return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
 }

 function Whowins() {
    console.log(winners);
 }

game();