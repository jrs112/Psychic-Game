
			var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

			var wins = 0;

			var losses = 0;

			var guess = 9;

			var asked = []



			if (guess === 9) {
				var computerGuess = options[Math.floor(Math.random()*options.length)];

				console.log(computerGuess);
			}
			

			document.onkeyup = function() {
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
				console.log(userGuess);
				asked.push(userGuess);



				if (userGuess === computerGuess) {
					wins++;
					guess = 9;
					asked = [];
					alert("You Win!");
					computerGuess = options[Math.floor(Math.random()*options.length)];
					console.log(computerGuess);

				}

				else if (guess > 1) {
					guess--;
				}

				else {
					losses++;
					guess = 9;
					asked = []
					alert("You Lost!");
					computerGuess = options[Math.floor(Math.random()*options.length)];
					console.log(computerGuess);
				}


				console.log("wins " + wins);
				console.log("losses " + losses);
				console.log("guess " + guess);
				console.log("---------")

				var html = "<h1>The Psychic Game</h1>" +
				"<h2>Guess what letter I'm thinking of:</h2>" +
				"<h3>Wins: " + wins + "</h3>" +
				"<h3>Losses: " + losses + "</h3>" +
				"<h3>Guesses Left: " + guess + "</h3>" +
				"<h3>Your Guesses so far: " + asked + "</h3>";

				document.querySelector("#game").innerHTML = html;



			}

		 
	