let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    eleccion = Math.random();
    
    if (eleccion < 1/3) {
        return "rock"
    }
    else if (1/3 <= eleccion && eleccion < 2/3){
        return "paper"
    }

    return "scissors"
}

function playRound(playerChoice, computerChoice){
   
    messegeElem = document.querySelector(".result")

    //draw
    if (playerChoice == computerChoice){
        drawMessege = "draw"
        messegeElem.textContent = drawMessege

    }
    //you win
    else if ((playerChoice === "rock" && computerChoice === "scissors") || 
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ){
        
        youWinMessege = `${playerChoice} beats ${computerChoice}`
        humanScore++
        messegeElem.textContent = "you win the round: " + youWinMessege
        
    }

    else{
        youLooseMessege = `${computerChoice} beats ${playerChoice}`
        computerScore++
        messegeElem.textContent = "you lose the round: " + youLooseMessege
    }

    
}

/*

function getHumanChoice(){ //assume the user will always enter a valid choice
    return prompt("Choose rock, paper or scissors to play").toLowerCase();
}

function playGame(){
    let maxRounds = 5
    humanScore = 0;
    computerScore = 0;
    let round = 0
    
    while (round < maxRounds){
        const playerChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        playRound(playerChoice, computerChoice)
        round++;
    }

    if (computerScore > humanScore){
        return "the computer won the match"
    }
    else{
        return "you won the match!!!"
    }
}
*/

btn = document.querySelector(".btn.rock");
btn.addEventListener("click", () => playRound("rock",getComputerChoice()));

btn = document.querySelector(".btn.paper");
btn.addEventListener("click", () => playRound("paper",getComputerChoice()));

btn = document.querySelector(".btn.scissors");
btn.addEventListener("click", () => playRound("scissors",getComputerChoice()));