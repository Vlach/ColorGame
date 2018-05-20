//tracking the mode (number of squares)
var numberOfSquares = 6;
//generated colors
var colors = generateRandomColors(numberOfSquares);
//
var squares = document.querySelectorAll(".square");
//Picking a new random color from the array to start playing
var pickedColor = pickColor();
//
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var item1 = document.querySelector(".item1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
// ALL THE VARIABLES ARE ABOVE

//displaying a color that was randomly picked
colorDisplay.textContent = pickedColor;
//Resetting the game
item1.addEventListener("click", function() {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	displayMessage.textContent = "";

});
//Assigning colors to the squares by iterations
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function() {
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
//Hovering functions
function hoveron() {
	this.classList.add("hover");
}

function hoverout() {
	this.classList.remove("hover");
}
//hover mode buttons
function hoverE() {
	hardBtn.addEventListener("mouseover", hoveron);
	hardBtn.addEventListener("mouseout", hoverout);
}

function hoverH() {
	easyBtn.addEventListener("mouseover", hoveron);
	easyBtn.addEventListener("mouseout", hoverout);
}
//preselected mode
hardBtn.classList.add("selected");

//Event Listener to the buttons(hovering effect)
item1.addEventListener("mouseover", hoveron);
item1.addEventListener("mouseout", hoverout);
hoverE();
hoverH();

function modeButton(number) {
	displayMessage.textContent = "";
	numberOfSquares = number;
	h1.style.backgroundColor = "#232323";
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
}
//Easy and Hard mode
easyBtn.addEventListener("click", function() {
	modeButton(3);
	hoverE();
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

});
hardBtn.addEventListener("click", function() {
	modeButton(6);
	hoverH();
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";

	}
});
