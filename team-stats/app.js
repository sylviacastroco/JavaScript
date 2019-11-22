const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 36
    },
    {
      firstName: 'Tony',
      lastName: 'Lopez',
      age: 31
    },
    {
      firstName: 'Jon',
      lastName: 'Gonzalez',
      age: 33
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Lakers',
      teamPoints: 33,
      opponentPoints: 29
    },
    {
      opponent: 'Bulls',
      teamPoints: 56,
      opponentPoints: 66
    }
  ],
  //generate getter methods to retrieve property values from our objects
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame(oppName, teamPoints, oppPoints) {
    const game = {
      opponent: oppName,
      points: teamPoints,
      opponentPoints: oppPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Lesie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//invoke addPlayer() on three players and print
console.log(team.players);

team.addGame('Bulls', 100, 98);
team.addGame('Cavaliers', 88, 66);
team.addGame('Heat', 89, 100);

//invoke addGame() on three games and print
console.log(team.games);
