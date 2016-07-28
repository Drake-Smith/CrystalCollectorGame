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
		pic1 = Math.floor((Math.random() * 13) + 1);
		pic2 = Math.floor((Math.random() * 13) + 1);
		pic3 = Math.floor((Math.random() * 13) + 1);
		pic4 = Math.floor((Math.random() * 13) + 1);

		//assigns the random value of each crystal to its corresponding element id
		$('#pic1').attr('data-num', pic1);
		$('#pic2').attr('data-num', pic2);
		$('#pic3').attr('data-num', pic3);
		$('#pic4').attr('data-num', pic4);

		//resets score to 0
		score = 0;

		//displays the values on the screen
		$("#wins").html(wins);
		$("#losses").html(losses);
		$("#randNum").html(randNum);
		$("#score").html(score);
	}

	newGame();

	$('.pics').on('click', function(){
      	score += parseInt($(this).data('num')); //this adds the crystal's random value amount to total score when crystal is clicked
      	$("#score").text(score); //updates score on screen

      	if (score > randNum) {
			alert("You lose! Play again!");
			losses++;
			newGame();
		}
		if (score == randNum) {
			alert("You win! Play again!");
			wins++;
			newGame();
		}
	});
});

