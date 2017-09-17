//GENERATE AND DISPLAY A RANDOM TARGET VALUE TO BEGIN THE GAME; IT HAS TO BE BETWEEN 19 AND 120.

function genRandom() {

  var random = Math.ceil(120 * Math.random());
	return random;  // This did not work until I added the
									// return statement.  Why?  I always
									// thought it was implied?
}

var randomTarget = 0;

do {
	genRandom();
  randomTarget = genRandom();
	console.log(randomTarget);
}
while (randomTarget < 19  || randomTarget > 120);
$("#targetNum").html(randomTarget);

//display four crystals each one with a hidden individual value assigned for that particular game
//accumulate points up to the random target value by clicking on the crystals
//display the current points as they accumulate by the value of the crystals clicked
//if accumulated points match random value game determines user wins; otherwise loses
//keep count of and display total wins and losses
