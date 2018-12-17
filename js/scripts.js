$(document).ready(function() {

      // User Interface
      // Rolling the dice
      const btn = {
        New: document.querySelector('.btn-roll'),
        Hold: document.querySelector('.btn-hold'),
        Roll: document.querySelector('.btn.roll')
      };
      var upperDiceRoll = 6;
      var lowerDiceRoll = 1;
      var myRandom = Math.ceil(Math.random() * (upperDiceRoll - lowerDiceRoll + 1));

      return myRandom;

      var currentCount = 0;
      var compCount= 0;
      $("#roll").click(function(event) {
            event.preventDefault();
            var myRandom = rollDice();
          }
          $("#pass").click(function(event) {
              event.preventDefault();

              if (turnCount % 1 == 0) {
                var passTotal1 = player1.turnScore;

                player1.totalScore += passTotal1;
                player1.turnScore = 0;
                turnCount++;
                $("#score1").text(player1.totalScore);
              } else {
                var passTotal2 = player2.turnScore;

                player2.totalScore += passTotal2;
                player2.turnScore = 0;
                turnCount++;
                $("#score2").text(player2.totalScore);
              }

              if (user.totalScore >= 100) {
                alert("You won the game");
              } else if (comp.totalScore >= 100) {
                alert("We won the game");

                document.getElementById("output").innerHTML = randomNumber
              })

            // Computing scores of user and computer
            var userScore = new Player();
            var compScore = new Player();
            var turnCount = 0;
            var scoreUser = 0;
            var scoreComp = 0;

            function Player() {
              this.rollScore = 0;
              this.totalScore = 0;
            }


            function myRandom() {
              var randomNumber = Math.ceil(Math.random() * (6 - 1 + 1));


              if (turnCount % 1 == 0) {
                player1.play(randomNumber);

                $("#turnScore").text(player1.turnScore);

              } else {
                player2.play(randomNumber);
                score2 = player2.turnScore;
                $("#turnScore").text(player2.turnScore);
              }




            }
