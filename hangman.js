var dictionary = ['acacia', 'air', 'aurora', 'art', 'binary', 'bar', 'beans', 'barbeque', 'belive', 'book',  'core', 'curier', 'cruel', 'cream', 'cocos', 'combat', 'compas', 'curry', 'dark', 'down', 'drop', 'drag', 'drumm', 'deal', 'decent', 'document', 'elegant', 'energy', 'elefant', 'etnographic', 'eficient', 'erosion', 'faculty', 'fosil', 'factory', 'fire', 'fir'];

var messageBox  = document.getElementById("display");

var wordToGuess = chooseWord();
var guessedChar = 0;
var wordToGuessLength = [wordToGuess.length];


console.log(wordToGuess);
console.log("w = " + wordToGuessLength);

var lives = 7;

function chooseWord() {
	var indexWord = Math.floor(Math.random() * dictionary.length);
	var word = dictionary[indexWord];
	return word;
}
function createUnderscore(word) {
	var table = document.createElement('table');
	var tr = document.createElement('tr');
	for(var i = 0; i < wordToGuessLength; i++) {
		var td = document.createElement('td');
		td.innerHTML = "_";
		td.setAttribute("id", i );
		tr.appendChild(td);
	}
	table.appendChild(tr);
	document.body.appendChild(table);
}
function check() {
	var userGuessChar = document.getElementById("userGuess");
	var userGuess = userGuessChar.value;
	var indexes = getAllIndexes(wordToGuess, userGuess);
	if(indexes.length > 0) {
		replaceUnderscore(indexes,userGuess );
	} else {
		lives--;
	}
	showLives();
	displayStatus();
	userGuessChar.value = "";
}
function getAllIndexes(arr, val) {
    var indexes = [];
    for(var i = 0; i < arr.length; i++)
        if (arr[i] === val) {
            indexes.push(i);
			guessedChar++;
		}
    return indexes;
}
function replaceUnderscore(indexes, charGuess) {
	for(var i = 0; i < indexes.length; i++) {
		var charPos = document.getElementById(indexes[i]);
		if(charPos.innerHTML === "_") {
			charPos.innerHTML = charGuess;
		} else {
			lives--;
		}
	}
}
function showLives() {
	var displayLives = document.getElementById("lives");
	displayLives.innerHTML = "Lives " + lives;
}
function checkWin() {
	var charMissing = 1;
	for(var i = 0; i < wordToGuessLength; i++) {
		var a = document.getElementById(i)
		var charGuessed = a.innerHTML;
		if(charGuessed === "_") {
			charMissing = 0;
		} 
	}
	return charMissing;
}
function displayStatus() {
	var displayWin = document.getElementById("display");
	var checkBtn = document.getElementById("checkButton");
	var userGuess = document.getElementById("userGuess");
	if(lives > 0 && checkWin()) {
			displayWin.innerHTML = " Congratulations! You've got it !";
			checkBtn.disabled = true;
			userGuess.disabled = true;
	} else if(lives === 0) {
		displayWin.innerHTML = "You Loose";
		checkBtn.disabled = true;
		userGuess.disabled = true;
	}
}
function init() {
	console.log(wordToGuess);
	createUnderscore();
	var checkButton = document.getElementById("checkButton");
	checkButton.onclick = check;
	var charToCheck = document.getElementById("userGuess");
	charToCheck.onkeydown = handleKeyPress;
}
function handleKeyPress(event) {
	var checkButton = document.getElementById("checkButton");
	if (event.keyCode === 13) {
		checkButton.click();
		return false;
	}
}
// init - called when the page has completed loading



window.onload = init;
