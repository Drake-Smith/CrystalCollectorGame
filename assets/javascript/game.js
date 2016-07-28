$(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var randNum;
	var score;
	var pic1;
	var pic2;
	var pic3;
	var pic4;

	function newGame() {

		//assigns random number values for the new game
		randNum = Math.floor((Math.random() * 102) + 19);
		pic1 = Math.floor((Math.random() * 13) + 1);
		pic2 = Math.floor((Math.random() * 13) + 1);
		pic3 = Math.floor((Math.random() * 13) + 1);
		pic4 = Math.floor((Math.random() * 13) + 1);

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
	//function playingGame() {
		//adds # to score when each pic is clicked on
		// $('#pic1').click(function(){
		// 	score += pic1;
		//     $("#score").text(score);
		//     if (score > randNum) {
		// 	alert("You lose bitch!");
		// 	losses++;
		// 	newGame();
		// }
		// else if (score == randNum) {
		// 	alert("You win bitch!");
		// 	wins++;
		// 	newGame();
		// }
		// });

		// $('#pic2').click(function(){
		//     score += pic2;
		//     $("#score").text(score);
		//     		    if (score > randNum) {
		// 	alert("You lose bitch!");
		// 	losses++;
		// 	newGame();
		// }
		// else if (score == randNum) {
		// 	alert("You win bitch!");
		// 	wins++;
		// 	newGame();
		// }
		// });

		// $('#pic3').click(function(){
		//     score += pic3;
		//     $("#score").text(score);
		//     		    if (score > randNum) {
		// 	alert("You lose bitch!");
		// 	losses++;
		// 	newGame();
		// }
		// else if (score == randNum) {
		// 	alert("You win bitch!");
		// 	wins++;
		// 	newGame();
		// }
		// });

		// $('#pic4').click(function(){
		//     score += pic4;
		//     $("#score").text(score);
		//     		    if (score > randNum) {
		// 	alert("You lose bitch!");
		// 	losses++;
		// 	newGame();
		// }
		// else if (score == randNum) {
		// 	alert("You win bitch!");
		// 	wins++;
		// 	newGame();
		// }
		// });

		$('.pics').on('click', function(){
      		score += parseInt($(this).data('num'));
      		$("#score").text(score);
      		
      		if (score > randNum) {
			alert("You lose bitch!");
			losses++;
			newGame();
		}
		if (score == randNum) {
			alert("You win bitch!");
			wins++;
			newGame();
		}
	});

	//}

		// $('.pics').click(function(){
		// 	 if $(this).attr("id") == "pic1" {
		// 	 	console.log(pic1);
		// 	 }
		// 	 else if $(this).attr("id") == "pic2" {
		// 	 	console.log(pic2);
		// 	 }
		// 	 else if $(this).attr("id") == "pic3" {
		// 	 	console.log(pic3);
		// 	 }
		// 	 else if $(this).attr("id") == "pic4" {
		// 	 	console.log(pic4);
		// 	 }
	 		// currentScore = score += pic1;
	 	 //    $("#score").html(score);
	 	 //    return currentScore;
	 	// });


	// function gameConditionals(currentScore) {
	// 	//if statements for reaching or surpassing the score
		// if (score > randNum) {
		// 	alert("You lose bitch!");
		// 	losses++;
		// 	newGame();
		// }
		// if (score == randNum) {
		// 	alert("You win bitch!");
		// 	wins++;
		// 	newGame();
		// }
	//}

	//newGame();
	//playingGame();
	//pic1Clicked();
	//gameConditionals();
});

