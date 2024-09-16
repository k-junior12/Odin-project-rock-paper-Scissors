console.log('HI')

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
   const choice = options[Math.floor(Math.random() * options.length )];
   console.log(choice);
   return choice;
}

function checkWinner(playerSelection, computerSelection){
   if(playerSelection == computerSelection){
      return "Tie"
   }
   else if(
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "rock")
   ){
      return "Player";
   }
   else {
      return "computer";
   }
   }


function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection);
  if(result == "Tie"){
      return "It's a tie!"
  }
  else if(result == "player"){
   //when you  add backticks, you can incude a paramater
   return `You Win! ${playerSelection} beats ${computerSelection}`
  }
  else{
   return `You Lose! ${computerSelection} beats ${playerSelection}`
  }


}

function game(){
   for (let i = 0; i < 5; i++) {
      const playerSelection = "rock";
      const computerSelection = getComputerChoice();
   }
}