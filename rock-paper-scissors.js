
let playerScore = 0;
let computerScore = 0;

for (i=0; i<5; i++){
    do{
        const computerSelection = computerPlay();
        const playerSelection = playerPlay();
    } while (computerSelection == playerSelection)
    
    
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes('win')){
        playerScore += 1;
    } else {
        computerScore += 1;
    }
    console.log(`Score:   Player = ${playerScore}  |  Computer = ${computerScore}`);
}

function computerPlay()
{
    const max = 3
    let selec = Math.floor(Math.random() * max) + 1;
    if (selec == 1) return "Rock";
    if (selec == 2) return "Paper";
    if (selec == 3) return "Scissors";
}

function playerPlay()
{
    let valid = "no pass";
    let selection;
    while(valid != "pass"){
        selection = prompt("What will you play? (Enter rock, paper or scissors)");
        if (typeof selection == 'string' && selection.toLowerCase() == 'rock' || selection.toLowerCase() == 'paper' || selection.toLowerCase() == 'scissors'){
            valid = "pass";
        } else{
            console.log('Try again and make sure you follow the instructions');
        }
    }
    return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection)
{
    for (i=0; i<5; i++){
        if (playerSelection == 'Rock'){
            if (computerSelection == 'Paper'){
                let result = `You lose. ${computerSelection} beats ${playerSelection}`;
                return result;
            }else{
                let result = `You win. ${playerSelection} beats ${computerSelection}`;
                return result;
            }
        }

        if (playerSelection == 'Paper'){
            if (computerSelection == 'Scissors'){
                let result = `You lose. ${computerSelection} beats ${playerSelection}`;
                return result;
            }else{
                let result = `You win. ${playerSelection} beats ${computerSelection}`;
                return result;
            }
        }

        if (playerSelection == 'Scissors'){
            if (computerSelection == 'Rock'){
                let result = `You lose. ${computerSelection} beats ${playerSelection}`;
                return result;
            }else{
                let result = `You win. ${playerSelection} beats ${computerSelection}`;
                return result;
            }
        }
    }
}