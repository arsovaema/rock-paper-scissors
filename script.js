function getComputerChoice ()
{
    let string1="rock";
    let string2="scissors";
    let string3="paper";
    let randomNumber=Math.floor(Math.random()*100)+1;
    if(randomNumber>0 && randomNumber<30)
    {
        return string1;
    }
    if(randomNumber>=30 && randomNumber<65)
    {
        return string2;
    }
    if(randomNumber>=65 && randomNumber<=100)
    {
        return string3;
    }
}
let computerChoice;
console.log(computerChoice);

function getHumanChoice(){
    let sign=prompt("rock paper or scissors?");
    return sign;    

}
let humanChoice;
let humanScore=0;
let computerScore=0;
function playRound(humanChoice,computerChoice)
{

    humanChoice=humanChoice.toLowerCase();
    
    if(humanChoice==='paper'){
        if(computerChoice==='scissors')
        {
            computerScore++;
        }
        if(computerChoice==='rock')
        {
            humanScore++;
        }
    }
    if(humanChoice==='rock')
    {
        if(computerChoice==='paper')
        {
            computerScore++;
        }
        if(computerChoice==='scissors')
        {
            humanScore++;
        }
    }
    if(humanChoice==='scissors')
    {
        if(computerChoice==='rock')
        {
            computerScore++;
        }
        if(computerChoice==='paper')
        {
            humanScore++;
        }
    }
   

}
function playGame(){
    for(let i=0;i<5;i++)
    {
        humanChoice=getHumanChoice();
        computerChoice=getComputerChoice();

        playRound(humanChoice,computerChoice);
        alert(`${computerChoice}`);
        console.log(`computer ${computerScore}:${humanScore} human`);
        

    }
    if(humanScore>computerScore)
    {
        console.log("human wins!");
    }
    else if(humanScore<computerScore) {
        console.log("computer wins!");
    }
    else {
        console.log("draw");
    }
}
playGame();