function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ["Black", "White"],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            } 
        },
        away: {
            'teamName': "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }; console.log(objectMatch);
};

gameObject()

// debugger


//LAB FUNCTIONS:

//function numPointsScored(){};

function numPointsScored(playerName) {
    const game = gameObject();
    // console.log('game', game);
    for (const gameKey in game){
        const teamObj = game[gameKey];
        const playerObj = teamObj.players;
        // console.log('team object', teamObj);
        // console.log('player object', playerObj);
        for (const playerKey in playerObj) {
            // console.log('player key', playerKey);
            // console.log('player name', playerName);
                if (playerKey === playerName) {
                    return playerObj[playerKey].points;
                }
            }
        }
}

numPointsScored('Ben Gordon');

//let's minimize this so we can reference it a bunch later on

function numPointsScored(playerInput) {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
    const players = Object.assign({}, homePlayers, awayPlayers);
    for (const playerName in players) {
        if (playerName === playerInput) {
            return players[playerName].points
        }
    }
}

// OR

function numPointsScored(playerInput) {
    const game = gameObject();
    Object.assign({}, game.home.players, game.away.players);
    for (const playerName in players) {
        if (playerName === playerInput) {
            return players[playerName].points
}

// OR

function numPointsScored(playerInput) {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
    const players = Object.assign({}, ...homePlayers, ...awayPlayers)
    for (const playerName in players) {
        if (playerName === playerInput) {
            return players[playerName].points
}

// Use object.assign to make a new object with just the player objects that keeps their stats

Object.assign({}, {});
const object = {};
const person = {name: 'me'};
const newObject = {...person};

//so now we can make our original function smaller

function numPointsScored(playerInput) {
    const game = gameObject();
    const players = Object.assign({}, game.home.players, game.away.players);
    for (const playerName in players) {
        if (playerName === playerInput) {
            return players[playerName].points;
        }
    }
}

numPointsScored('Ben Gordon')


//Making players available as a function

function players() {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
    return Object.assign({}, homePlayers, awayPlayers)
}

// Let's do this for the teams as well:

function homeTeam() {
    return gameObject().home;
}

function awayTeam() {
    return gameObject().away;
}


// Once we make players(), we need to change the way we reference a function in our numPointsScored function and add the ()

function numPointsScored(playerInput) {
    for (const playerName in players()) {
        if (playerName === playerInput) {
            return players()[playerName].points;
        }
    }
}


// Let's try going even smaller and include an arrow function?

function numPointsScored(playerInput) {
    Object.entries(players()).forEach(playerArray => {
        if (playerArray[0] === playerInput) {  //player name is the 0 index
            return playerArray[1].points  //player stats object (playerInfo) is the 1 index
        }
    })
}


//there is also this way of pulling up the key that you're looking for in a dot method

function numPointsScored(playerInput) {
    return players()[playerInput].points;
}

// .find works a lot like a forEach method

function numPointsScored(playerInput) {
    const playerArrays = Object.entries(players());
    const player = playerArrays.find(playerArray => playerArray[0] === playerInput);
    return player.points;
}



//function shoeSize(){};

function shoeSize(playerInput) {
    for (const playerName in players()) {
        if (playerName === playerInput) {
            return players()[playerName].shoeSize;
        }
    }
}

function shoeSize(playerInput) {
    return players()[playerInput].shoe
}

shoeSize('Ben Gordon');



//function teamColors(){};

function teamColors(){
    const game = gameObject();
    const homeTeamColors = game.home.colors;
    const awayTeamColors = game.away.colors;
    return object.assign({}, homeTeamColors, awayTeamColors);
}

teamColors()

//function teamNames(){};

function teamNames() {
    const game = gameObject();
    const homeTeamName = game.home.team;
    const awayTeamName = game.away.team;
    return object.assign({}, homeTeamName, awayTeamName);
}

teamNames()

//function playerNumbers(){};

THIS IS INCOMPLETE

function homeTeamPlayers() {
    return gameObject().home.players;
}

function awayTeamPlayers() {
    return gameObject().away.players;
}

function playerNumbers(teamName) {
    const game = gameObject();
    if (teamName === game.home.teamName) {
        return Object.assign ({}, homeTeamPlayers()[playerName].number);
    } else if (teamName === game.away.teamName) {
        return Object.assign ({}, awayTeamPlayers()[playerName].number);
    }
}

playerNumbers()

//function playerStats(){};

function playerStats(playerInput) {
    return players()[playerInput][1];
}

playerStats('Ben Gordon')

//function bigShoeRebounds(){};