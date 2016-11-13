

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

		// My original code

		// for (var i = 0; i < this.logos.length; i++) {
		// 	this.logos[i] = (Math.floor(Math.random() * 12) + 1)
		// }; // This closes the for loop
		// Optimized code
		for(var p in this.scores){	
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

	// Original scpre codes before optimization

	// cubsScore: function() {

	// 		this.userScore = this.userScore + this.logos[0];
	// 		$("#totalScore").html(this.userScore);
	
	// }, // Closes cubsScore function

	// // This function adds points to the user's score when the bulls picture is clicked

	// bullsScore: function() {

	// 		this.userScore = this.userScore + this.logos[1];
	// 		$("#totalScore").html(this.userScore);
	
	// }, // Closes bullsScore function

	// // This function adds points to the user's score when the cubs picture is clicked

	// bearsScore: function() {

	// 		this.userScore = this.userScore + this.logos[2];
	// 		$("#totalScore").html(this.userScore);
	
	// }, // Closes bearsScore function

	// // This function adds points to the user's score when the cubs picture is clicked

	// hawksScore: function() {

	// 		this.userScore = this.userScore + this.logos[3];
	// 		$("#totalScore").html(this.userScore);
	
	// }, // Closes hawksScore function

	// This is the optimized score function
	updateScore: function(id){
    	this.userScore = this.userScore + this.logos[id];
    },

	// // This function adds win conditions

	updateWins: function() {
		 if (this.userScore > this.targetScore) {
			alert("My shoe maths better than you");
			this.losses + 1;
			this.setupGame();
		}else if (this.userScore == this.targetScore){
			alert("You're the best mather around!!!")
			this.wins + 1;
			this.setupGame();
		}
	},


}; // This closes the crystalCollector var

$(document).ready(function(){


// These add the onclick listeners

// My original code for the click events
	// $('#cubs').on('click', function(){
	// 	crystalCollector.cubsScore();
	// 	crystalCollector.updateWins();
	// }); // closes the cubs click event

	// $('#bulls').on('click', function(){
	// 	crystalCollector.bullsScore();
	// 	crystalCollector.updateWins();
	// }); // closes the bulls click event

	// $('#bears').on('click', function(){
	// 	crystalCollector.bearsScore();
	// 	crystalCollector.updateWins();
	// }); // closes the bears click event 

	// $('#hawks').on('click', function(){
	// 	crystalCollector.hawksScore();
	// 	crystalCollector.updateWins();
	// }); // closes the hawks click event

// Event listener code that Tish helped me with
	$(document).on('click', '.logos', function(){

	        switch($(this).attr('id')){
	            case "cubs":
	                crystalCollector.updateScore();	    
	            break;
	            case "bulls":
	                crystalCollector.bullsScore();
	            break;
	            case "bears":
	                crystalCollector.bearsScore();
	            break;
	            case "hawks":
	                crystalCollector.hawksScore()
	            break;
	        }

	        crystalCollector.updateWins();
	        
	    }); // Close on('click', '.logos', function()...


crystalCollector.setupGame();
}); // closes the document ready function