describe("Player", function() {
  it("lets you set its number", function(){
    var player = Object.create(Player);
    player.setNumber(1);
    player.number.should.equal(1);
  });
});

describe("Player", function() {
  it("sets the points to zero", function() {
    var player = Object.create(Player);
    player.totalScore.should.equal(0);
  });
});

describe("Player", function() {
  it("lets you add points to to its score", function(){
    var player = Object.create(Player);
    player.addPoints(5);
    player.totalScore.should.equal(5);
  });
});
describe("Game", function() {
  it("creates players", function() {
    var game = Object.create(Game);
    game.createPlayers(2);
    game.players.length.should.equal(2);
  });
});
describe("Game", function() {
  describe("over", function() {
    it("makes sure the game starts at 0 turns", function() {
       var player = Object.create(Player);
       player.numberOfTurns.should.equal(0);
    });
    it("Game is not over until all players complete 13 turns", function() {
      var player = Object.create(Player);
      for (var i = 0; i < 13; i++) {
        player.nextTurn(); 
      }
      player.over().should.be.false;
    });

    it("game is over after all players have completed 13 turns", function() {
      var player = Object.create(Player);
      for (var i = 0; i < 26; i++) {
       player.nextTurn(); 
      }
      player.over().should.be.true;
    });
  });
});

describe("Die", function() {
  it("puts five random numbers into an array", function() {
    var player = Object.create(Player);
    var die = Object.create(Die);
    // sinon.stub(Die, 'roll').returns(1);
    die.roll(); 
    die.hand.should.eql([1,1,1,1,1]);
  });

  describe("score", function() {
    it("returns 50 if all five dice are the same", function() {
      var die = Object.create(Die);
      die.hand = [1,1,1,1,1];
      die.score();
      die.turnScore.should.equal(50);
    });
    it("returns sum of 4 dice  if 4 are the same", function() {
      var die = Object.create(Die);
      die.hand = [1,1,1,1,6];
      die.score();
      die.turnScore.should.equal(4);
    });
   it("returns 40 if all numbers sequential", function() {
     var die = Object.create(Die);
     die.hand = [1,3,2,4,5];
     die.score();
     die.turnScore.should.equal(40);
    });

   it("returns 25 if 3 of a kind and a pair", function() {
     var die = Object.create(Die);
     die.hand = [2,3,3,3,2];
     die.score();
     die.turnScore.should.equal(25);
    });   
 

   it("returns sum of three matching dice ", function() {
     var die = Object.create(Die);
     die.hand = [1,4,4,4,5];
     die.score();
     die.turnScore.should.equal(12);
    });

      it("returns 30 when a sequential order of 4 is rolled ", function() {
     var die = Object.create(Die);
     die.hand = [2,5,4,3,5];
     die.score();
     die.turnScore.should.equal(30);
    });


   it("returns 0 if none of the above", function() {
     var die = Object.create(Die);
     die.hand = [1,3,4,4,5];
     die.score();
     die.turnScore.should.equal(0);
    });

  });
});

