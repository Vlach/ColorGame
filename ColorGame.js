//tracking the mode (number of squares)
var numberOfSquares = 6;
//generated colors
var colors = [];
//
var squares = document.querySelectorAll(".square");
//Picking a new random color from the array to start playing
var pickedColor = pickColor();
//
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var item1 = document.querySelector(".item1");
var modeButton = document.querySelectorAll(".mode");
// ALL THE VARIABLES ARE ABOVE

init();

function init() {
	//looping through the mode buttons and giving them functionality
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function () {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		});
	}

	//Assigning colors to the squares by iterations
	for (i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function () {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				displayMessage.textContent = "Congratulations! You are right!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				item1.textContent = "Play again?";
			} else {
				this.style.backgroundColor = "transparent";
				displayMessage.textContent = "Dont't give up! Try again :)";
			}

		});
	}
	reset();

}

//displaying a color that was randomly picked
colorDisplay.textContent = pickedColor;

//Resetting the game
function reset() {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	item1.textContent = "New Color";
	displayMessage.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "#232323";
}
item1.addEventListener("click", function () {
	reset();
});


//choosing a random color to pick
function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}

}
//generates a random number and return one color(string from th array colors)
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
//generates an array of RGB colors using randomColor fun
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;

}
//RGB color generator itself --<returns an RGB string>--
function randomColor() {
	//generates a number for r,g,b letters respectively
	function rgbNumGen() {
		return Math.floor(Math.random() * 256);
	}
	//making up our string that will be returned to pick a rendom color
	return "rgb(" + rgbNumGen() + ", " + rgbNumGen() + ", " + rgbNumGen() + ")";
}