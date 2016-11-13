

var crystalCollector = {
	
	// These are the inital variables for the crystal collector game
	logos: [
		cubs= 0,
		bulls= 0,
		bears= 0,
		hawks= 0,
	],
	userScore: 0,
	targetScore: 0,
	wins: 0,
	losses: 0,

	// This function set up the the game and is also used as the reset function
	setupGame: function() {
		// This for loop assigns a random number to each picture
		for (var i = 0; i < this.logos.length; i++) {
			this.logos[i] = (Math.floor(Math.random() * 12) + 1)
		}; // This closes the for loop
		// This assigns a value to the target score
		this.targetScore = (Math.floor(Math.random() * (120 - 18)) + 19);
		this.userScore = 0;
		$("#randomNumber").html(this.targetScore);
		$("#wins").html(this.wins);
		$("#losses").html(this.losses);
		$("#totalScore").html(this.userScore);
		this.updateWins();

	}, // This closes the setupGame function

	// This function adds points to the user's score when the cubs picture is clicked

	cubsScore: function() {

			this.userScore = this.userScore + this.logos[0];
			$("#totalScore").html(this.userScore);
	
	}, // Closes cubsScore function

	// This function adds points to the user's score when the bulls picture is clicked

	bullsScore: function() {

			this.userScore = this.userScore + this.logos[1];
			$("#totalScore").html(this.userScore);
	
	}, // Closes bullsScore function

	// This function adds points to the user's score when the cubs picture is clicked

	bearsScore: function() {

			this.userScore = this.userScore + this.logos[2];
			$("#totalScore").html(this.userScore);
	
	}, // Closes bearsScore function

	// This function adds points to the user's score when the cubs picture is clicked

	hawksScore: function() {

			this.userScore = this.userScore + this.logos[3];
			$("#totalScore").html(this.userScore);
	
	}, // Closes hawksScore function

	// This function adds win conditions

	// I want this function to continually be running and check the win conditions without it being called over and over
	updateWins: function() {
		 if (this.userScore > this.targetScore) {
			alert("My shoe maths better than you");
			this.losses + 1;
			setupGame();
		}else if (this.userScore)
	},


}; // This closes the crystalCollector var

$(document).ready(function(){
// These add the onclick listeners
	$('#cubs').on('click', function(){
		crystalCollector.cubsScore();
		crystalCollector.updateWins();
	}); // closes the cubs click event

	$('#bulls').on('click', function(){
		crystalCollector.bullsScore();
	}); // closes the bulls click event

	$('#bears').on('click', function(){
		crystalCollector.bearsScore();
	}); // closes the bears click event 

	$('#hawks').on('click', function(){
		crystalCollector.hawksScore();
	}); // closes the hawks click event

crystalCollector.setupGame();
}); // closes the document ready function