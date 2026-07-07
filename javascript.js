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
    
    if (humanScore === computerScore && humanScore === 0){
        const container = document.querySelector("#container")
        const score = document.createElement("div")
        score.classList.toggle("score")
        container.appendChild(score)
    }

    const messegeElem = document.querySelector(".result")
    const scoreElem = document.querySelector(".score")

    //draw
    if (playerChoice == computerChoice){
        const drawMessege = "draw"
        messegeElem.textContent = drawMessege
    }
    //you win
    else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")){
        const youWinMessege = `${playerChoice} beats ${computerChoice}`
        humanScore++
        messegeElem.textContent = "you win the round: " + youWinMessege
        
    }

    else{
        const youLooseMessege = `${computerChoice} beats ${playerChoice}`
        computerScore++
        messegeElem.textContent = "you lose the round: " + youLooseMessege
    }
    
    //finish?
    if (humanScore === 5 || computerScore === 5){
        messegeElem.textContent = humanScore === 5 ? "YOU WIN":"YOU LOSE"
        const container = document.querySelector("#container")
        container.removeChild(scoreElem)
        humanScore = 0
        computerScore = 0    
    }
    else{
        scoreElem.textContent = `You: ${humanScore} | Computer: ${computerScore}`
    }
}


const result = document.createElement("div")
result.classList.toggle("result")
result.textContent = "Choose Rock, Paper or Scissors"
container.appendChild(result)

let btn = document.querySelector(".btn.rock");
btn.addEventListener("click", () => playRound("rock",getComputerChoice()));

btn = document.querySelector(".btn.paper");
btn.addEventListener("click", () => playRound("paper",getComputerChoice()));

btn = document.querySelector(".btn.scissors");
btn.addEventListener("click", () => playRound("scissors",getComputerChoice()));