
	// Sounds for fun
	var coin = new Audio(src = "assets/sounds/coin.wav");
	var clear = new Audio(src = "assets/sounds/world_clear.wav");
	var dead = new Audio(src = "assets/sounds/mariodie.wav");

var crystalCollector = {
	
	// These are the inital variables for the crystal collector game
	logos: {
		cubs: 0,
		bulls: 0,
		bears: 0,
		hawks: 0,
	}, // closes the logos object
	userScore: 0,
	targetScore: 0,
	wins: 0,
	losses: 0,

	// This function set up the the game and is also used as the reset function
	setupGame: function() {
		// This for loop assigns a random number to each picture
		for(var p in this.logos){	
        	this.logos[p] = (Math.floor(Math.random() * 12) + 1);
        }; // This closes the for loop
		
		// This assigns a value to the target score
		this.targetScore = (Math.floor(Math.random() * (120 - 18)) + 19);
		this.userScore = 0;
		// updates HTML with scores

		$("#randomNumber").html(this.targetScore);
		$("#wins").html(this.wins);
		$("#losses").html(this.losses);
		$("#totalScore").html(this.userScore);
		this.updateWins();

	}, // This closes the setupGame function

	// This function adds points to the user's score when the cubs picture is clicked

	updateScore: function(id){
    	this.userScore = this.userScore + this.logos[id];
    	$("#totalScore").html(this.userScore);
    }, //closes the updateScore function

	// This function adds win conditions

	updateWins: function() {
		 if (this.userScore > this.targetScore) {
		 	dead.play();
			alert("My shoe maths better than you");
			this.losses ++;
			this.setupGame();
		} else if (this.userScore == this.targetScore){
			clear.play();
			alert("You're the best mather around!!!")
			this.wins ++;
			this.setupGame();
		} // closes the if statement

	}, // closes the updateWins function


}; // This closes the crystalCollector var

$(document).ready(function(){




// These add the onclick listeners
	$(document).on('click', '.logos', function(){

		crystalCollector.updateScore($(this).attr('id'));
		coin.play();


	    crystalCollector.updateWins();
	        
	    }); // Close on('click', '.logos', function()...
		crystalCollector.setupGame();
}); // closes the document ready function


