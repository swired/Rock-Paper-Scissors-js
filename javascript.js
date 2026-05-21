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
//assume the user will always enter a valid choice
function getHumanChoice(){
    return prompt("Choose rock, paper or scissors to play").toLowerCase();
}

