$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var randNum;
	var score;
	var pic1;
	var pic2;
	var pic3;
	var pic4;

	//reset game
	function newGame() {

		//assigns random number values for the new game
		randNum = Math.floor((Math.random() * 102) + 19);

		//resets score to 0
		score = 0;

		//displays the values on the screen
		$("#wins").html(wins);
		$("#losses").html(losses);
		$("#randNum").html(randNum);
		$("#score").html(score);

		playGame();
	}

	newGame(); 	//initial new game run

	function setValues(){

		//assigns random number value to each pic
		pic1 = Math.floor((Math.random() * 13) + 1);
		pic2 = Math.floor((Math.random() * 13) + 1);
		pic3 = Math.floor((Math.random() * 13) + 1);
		pic4 = Math.floor((Math.random() * 13) + 1);

		//attributes that random num to the picture
		$('#pic1').data("num", pic1);
		$('#pic2').data("num", pic2);
		$('#pic3').data("num", pic3);
		$('#pic4').data("num", pic4);

		console.log("pic1: " + pic1);
		console.log("pic2: " + pic2);
		console.log("pic3: " + pic3);
		console.log("pic4: " + pic4);
	}

	//checks if you've won or lost yet
	function checkScore(currentScore) {
		if (currentScore > randNum) {
			alert("You lose! Play again!");
			losses++;
			$('.pics').off('click'); //this detaches the event handler to the class pics
			newGame();
		}

		if (currentScore == randNum) {
			alert("You win! Play again!");
			wins++;
			$('.pics').off('click'); //this detaches the event handler to the class pics
			newGame();
		}
	}
	
	function playGame(){
		setValues(); //assign the values to the pics
		$('.pics').click(function(){

	      	score += $(this).data("num"); //this adds the crystal's random value amount to total score when crystal is clicked
	      	$("#score").text(score); //updates score on screen
	      	checkScore(score);
		});
	}	
});

