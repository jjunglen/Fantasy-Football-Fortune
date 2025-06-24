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
for (let i = 0; i < playerOutcome.players.length; i++) {
    let player = playerOutcome.players[i];
    let outcomeIndex = randomNumberGen(playerOutcome.outcomes.length);
    let strengthIndex = randomNumberGen(playerOutcome.strengthOfThisOutcome.length);

    // Create a fortune for the player
    let fortune = `Player: ${player}, Outcome: ${playerOutcome.outcomes[outcomeIndex]}, Confidence: ${playerOutcome.strengthOfThisOutcome[strengthIndex]}`;
    fantasyFortune.push(fortune);
}

console.log(fantasyFortune);

