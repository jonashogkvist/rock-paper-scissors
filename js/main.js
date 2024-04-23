function getRandomNumber(num) {
    return Math.floor(Math.random() * num) + 1;
}


function getComputerChoice() {
    randomChoice = getRandomNumber(3);
    switch (randomChoice) {
        case  1 :
            return "rock";
        case 2 :
            return "paper";
        case 3 : 
            return "scissors";
    };
}

console.log(getComputerChoice());

