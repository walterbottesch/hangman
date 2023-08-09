var dictionary = ['acacia', 'air', 'aurora', 'art', 'binary', 'bar', 'beans', 'barbeque', 'belive', 'book',  'core', 'curier', 'cruel', 'cream', 'cocos', 'combat', 'compas', 'curry', 'dark', 'down', 'drop', 'drag', 'drumm', 'deal', 'decent', 'document', 'elegant', 'energy', 'elefant', 'etnographic', 'eficient', 'erosion', 'faculty', 'fosil', 'factory', 'fire', 'fir'];

var messageBox  = document.getElementById("display");

var wordToGuess = chooseWord();
var guessedChar = 0;
var wordToGuess1 = [wordToGuess.length];


console.log(wordToGuess);
console.log("w = " + wordToGuess1);

var lives = 7;
var status;

function chooseWord() {
	var indexWord = Math.floor(Math.random() * dictionary.length);
	var word = dictionary[indexWord];
	return word;
}
function createUnderscore(word) {
	var table = document.createElement('table');
	var tr = document.createElement('tr');
	for(var i = 0; i < wordToGuess.length; i++) {
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
	showChar(indexes, userGuess);
	displayStatus();
	userGuessChar.value = "";
}

function showLives() {
	var displayLives = document.getElementById("lives");
	displayLives.innerHTML = "Lives " + lives;
}

function displayStatus() {
	var displayWin = document.getElementById("display");
	if(lives === 0) {
		showLives();
		displayWin.innerHTML = "You Loose";
		
	} else {
		showLives();
	}
}


function showChar(indexes, charGuess) {
	for(var i = 0; i < indexes.length; i++) {
		var charPos = document.getElementById(indexes[i]);
		if(charPos.innerHTML !=="_") {
			lives--;
		} else {
			charPos.innerHTML = charGuess;
		}
		
	}
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
