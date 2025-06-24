function randomNumberGen(number) {
    // random number between 0 and number - 1
    return Math.floor(Math.random() * number);
}

// an object that will choose the fantasy fortune
const playerOutcome = {
    players: ['Chubba Hubbard', 'Marvin Harrison Jr.', 'Drake London'],
    outcomes: ['Draft this player', 'Do not draft this player', 'He will get injured', 'He will not meet this ADP', 'He is a league winner'],
    strengthOfThisOutcome: ['100%', '75%', '50%', '25%', '0%']
}

// Empty array
let fantasyFortune = [];

// iterate over the object to get the results
for(let random in playerOutcome) {
    let index = randomNumberGen(playerOutcome[random].length);

    // customize the outcome
    switch(random) {
        case 'players':

    }
}

randomNumberGen(10);

