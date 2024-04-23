function getRandomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
}


function getComputerChoice() {
    let randomChoice = getRandomNumber(3);
    switch (randomChoice) {
        case  1 :
            return "rock";
        case 2 :
            return "paper";
        case 3 : 
            return "scissors";
    };
}


function getHumanChoice() {
    let input = prompt("Choose a move. rock/paper/scissors");
    if (input === null) {
        return false
    } else if (input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors") {
        return input;
    };
    return false;
}


console.log(getComputerChoice());
let humanChoice = getHumanChoice();

while (!humanChoice) {
    humanChoice = getHumanChoice();
} 

console.log(humanChoice)
