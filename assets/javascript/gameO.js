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

//DISPLAY FOUR CRYSTALS EACH ONE WITH A HIDDEN INDIVIDUAL VALUE ASSIGNED FOR THAT PARTICULAR GAME.

var values = [Math.ceil(12*Math.random()), Math.ceil(12*Math.random()), Math.ceil(12*Math.random()), Math.ceil(12*Math.random())];

  //These are the file paths to the crystal images from index.html.

var crystals = ["assets/images/crystal1.png","assets/images/crystal2.png","assets/images/crystal3.png","assets/images/crystal4.png"];

//Here data-values are assigned to the crystals.

for (var i = 0; i < crystals.length; i++) {

  var img = $("<img>");
  img.addClass("crystals");
  img.attr("src", crystals[i]);
  img.attr("data-value", values[i]);
  console.log(values[i]);

  $("#display").append(img);
}

//ACCUMULATE POINTS UP TO THE RANDOM TARGET VALUE BY CLICKING ON THE CRYSTALS.

var counter = 0;

$(document).on("click", ".crystals", function() {
  var crysValue = $(this).attr("data-value");
  counter += parseInt(crysValue);
  console.log(counter);

  //display the current points as they accumulate by the value of the crystals clicked
  $("#pointAccum").text(counter);
})

//IF ACCUMULATED POINTS MATCH RANDOM VALUE, CREDIT USER WITH A WIN AND INCREMENT WIN SCORE. IF ACCUMULATED POINTS EXCEED RANDOM VALUE, USER LOSES AND LOSS SCORE IS INCREMENTED.

if (counter === randomTarget) {
  winFunction();
  resetFunction();
}
else if (counter > randomTarget) {
  lossFunction();
  resetFunction();
}

else {
    console.log(counter + " " + randomTarget + " Game continues.");
}
