var Player = {
  setNumber: function(number) {
    this.number = number;
  },
  addPoints: function(points) {
    this.totalScore += points;
  },
  totalScore: 0,
  over: function() {
  if (this.numberOfTurns <= 13) {
    return false;
    } else {
    return true;
    }
  },
  numberOfTurns: 0, 
  nextTurn: function() {
    this.numberOfTurns++;
  }

}

var Game = {
  createPlayers: function(numberOfPlayers) {
    this.players = [];
    for (var i = 2; i > 0; i--) {
      var player = Object.create(Player);
      player.setNumber(i);
      this.players.push(player);
    }
  }
} 

var Die = {
  
  roll: function() {
    this.hand = [];
    for (var i = 0; i < 5; i++) {
      this.hand.push(Math.floor(Math.random() * 5 + 1));     
   }
  },

  score: function() {
    var sortedHand = this.hand.sort();
    var stringHand = sortedHand.join('');
    this.turnScore = [];
    if (sortedHand[0] === sortedHand[4]) {
      this.turnScore = 50;
    } else if (sortedHand[0] === sortedHand[3] || sortedHand[1] === sortedHand[4]) {
      this.turnScore = (sortedHand[2] * 4); 
    } else if (stringHand === "12345" || stringHand === "23456") {
      this.turnScore = 40;
    } else if (sortedHand[0] === sortedHand[2] && sortedHand[3] === sortedHand[4] || sortedHand[2] === sortedHand[4] && sortedHand[0] === sortedHand[1]) {
      this.turnScore = 25;  
    } else if  (sortedHand[0] === sortedHand[1] && sortedHand[1] === sortedHand[2] || sortedHand[1]  === sortedHand[2] && sortedHand[2] === sortedHand[3]){
      this.turnScore = (sortedHand[3] * 3);
    } else if (sortedHand[2] === sortedHand[3] && sortedHand[3] === sortedHand[4]) {
      this.turnScore = (sortedHand[4] * 3); 
    } else if (stringHand === "12344" || stringHand === "12346" || stringHand === "11234" || stringHand === "23455" || stringHand === "34566" || stringHand === "22345") {
        this.turnScore = 30;
    } else  {
      this.turnScore = 0; 
    }
  }
};


$(function() {
  var game = Object.create(Game);
  game.createPlayers(2);
  var player1 = Object.create(Player);

  $("button#roll").click(function() {
    var die = Object.create(Die);
    $("button#roll").hide();
    $("button#roll1").show();
    $("#player2").css( {
      "background-color" :"#ADF7E1",
      "border" : "2px solid #83F2D1"
     });
    $("#player1").css( {
      "background-color" :"#E1E3E2",
      "border" : "2px solid #BAC2BF"
     });
    die.roll();
    $("#current-roll").empty().append(die.hand);
    die.score();
    $("#turn").show();
    $("#current-roll").empty().append(die.hand);
    $("#current-turn-score").empty().append(die.turnScore);
    player1.addPoints(die.turnScore);
    $("#player1Score").empty().append(player1.totalScore);

      
    return false;
 });
  var game = Object.create(Game);
  game.createPlayers(2);
  var player2 = Object.create(Player);

  $("button#roll1").click(function() {
    var die = Object.create(Die);
    $("button#roll1").hide();
    $("button#roll").show();
    $("#player1").css( {
      "background-color" :"#ADF7E1",
      "border" : "2px solid #83F2D1"
     });
    $("#player2").css( {
      "background-color" :"#E1E3E2",
      "border" : "2px solid #BAC2BF"
     });
    die.roll();
    $("#current-roll1").empty().append(die.hand);
    die.score();
    player2.nextTurn();
    $("#turn1").show();
    $("#current-turn-score1").empty().append(die.turnScore);
    player2.addPoints(die.turnScore);
    $("#player2Score").empty().append(player2.totalScore);
    if (player2.over()) {
    $("#over").show();
    $("#newGame").show();
    $("button#roll1").hide();
    $("#player2").css( {
      "background-color" :"#E1E3E2",
      "border" : "2px solid #BAC2BF"
     });

    }
    return false;
 });
});    
 




//     for (turns = 13; turns <= 13; turns--)
//     if (turns === 0){
//     return true;
//     }
//   }
// }        
// var turns = [0,1,2,3,4,5,6,7,8,9,10,11,12];
//  turns.forEach(numberOfPlayers); 

 // over: function(turns) {
 //    for (turns = 13; turns <= 13; turns--) {
 //      return false;
 //    }
 //    for (turns = 13; turns <= 13; turns--)
 //    if (turns === 0){
 //    return true;
 //    }
 //  }

