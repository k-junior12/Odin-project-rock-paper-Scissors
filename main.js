game = ["rock","paper","scissor"]

// let the  computer choose between a random item from the game list
function getComputerChoice() {
    return game.at(Math.floor(Math.random() * 3))
}

// let the user choose between rock, paper or scissor
 function getHumanChoice() {
     let choice = prompt("choose ur pick rock, paper or scissor").toLowerCase()

     if (choice === "rock" || choice === "paper" || choice === "scissor") {
    alert("you choose " + choice.at(0).toUpperCase() + choice.slice(1))
}   else {
    alert("Invalid input, please only choose between rock, paper or scissor")
}
    return choice
    
 }

 //making the rules of the game

 function playRound (humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        alert("Its a tie!")
        alert('Your score is '+ humanScore + ' and Computer Score is ' +computerScore)

    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win!  paper beats rock")
        humanScore++
        alert('Your score is '+humanScore+ ' and Computer Score is ' + computerScore)

    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("You lose!  scissors beats paper")
        computerScore++
        alert('Your score is '+humanScore+ ' and Computer Score is ' + computerScore)

    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("You lose! paper beats rock")
        computerScore++
        alert('Your score is '+humanScore+ ' and Computer Score is ' + computerScore)

    }
    
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You win! rock beats scissors")
        humanScore++
        alert('Your score is '+humanScore+ ' and Computer Score is ' + computerScore)

    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("You win! scissors beats paper")
        humanScore++ 
        alert('Your score is '+humanScore+ ' and Computer Score is ' + computerScore)


    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        alert("You lose! rock beats scissors")
        computerScore++
        alert('Your score is '+humanScore+ ' and Computer Score is ' + computerScore)

    }
}
    
    


function playGame() {
    //making the score dashboard
    humanScore = 0
    computerScore = 0

    //looping the function for 5times
    for (let i=0; i <= 4; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection)
    }
    if (humanScore > computerScore) {
        alert("Congratulations you won!")
    } else {
        alert("The computer won, better luck next time!")
    }
}

playGame()

