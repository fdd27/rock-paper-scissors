let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', () => {
    if (button.id == 'rock') playerSelection = 'Rock';
    if (button.id == 'paper') playerSelection = 'Paper';
    if (button.id == 'scissors') playerSelection = 'Scissors';
    let score = playRound(playerSelection);

    alert(score);
    if (score.includes('win'))
    {
        playerScore += 1;
        keepPlayerScore();

        console.log(playerScore, computerScore);
    } 
    else if (score.includes('lose'))
    {
        computerScore += 1;
        keepComputerScore();

        console.log(playerScore, computerScore);
    }
    if (playerScore == 5)
    {
        alert("You won the BO5");
        playerScore = 0;
        keepPlayerScore();
        computerScore = 0;
        keepComputerScore();
    }
    else if (computerScore == 5)
    {
        alert("You lost the Best to 5");
        playerScore = 0;
        keepPlayerScore();
        computerScore = 0;
        keepComputerScore();
    }
}));

/*for (i=0; i<5; i++){
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    while (computerSelection == playerSelection){
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
    }

    result = playRound(playerSelection, computerSelection);

    if (result.includes('win')){
        playerScore += 1;
    } else {
        computerScore += 1;
    }

    console.log(`Score:   Player = ${playerScore}  |  Computer = ${computerScore}   |   ${result}`);
}*/

function computerPlay()
{
    const max = 3;
    let selec = Math.floor(Math.random() * max) + 1;
    let choice;
    if (selec == 1) choice = "Rock";
    if (selec == 2) choice = "Paper";
    if (selec == 3) choice = "Scissors";
    return choice;
}

/*function playerPlay()
{
    let hold = true;
    let selection;
    while(hold){
        selection = prompt("What will you play? (Enter rock, paper or scissors)");
        if (typeof selection == 'string' && selection.toLowerCase() == 'rock' || selection.toLowerCase() == 'paper' || selection.toLowerCase() == 'scissors'){
            hold = false;
        } else{
            console.log('Try again and make sure you follow the instructions');
        }
    }
    return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
}*/

function playRound(playerSelection, computerSelection="")
{
    computerSelection = computerPlay();

    if (playerSelection == computerSelection){
        return "It's a draw.";
    }

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

function keepPlayerScore(){
    let playerScoreBox = document.querySelector("#player-score");

    playerScoreBox.animate([{ opacity: 0 }, {opacity : 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });

    playerScoreBox.textContent = playerScore;
}

function keepComputerScore(){
    let computerScoreBox = document.querySelector("#computer-score");

    computerScoreBox.animate([{ opacity:0 }, { opacity:1 }], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });

    computerScoreBox.textContent = computerScore;
}