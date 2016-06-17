var cardOne = 'Queen';
var cardTwo = 'Queen';
var cardThree = 'King';
var cardFour = 'King';

//if (cardOne === cardTwo) {
//	alert('You found a match!')
//}
//else {
//	alert('Sorry, try again.')
//}

document.getElementById('game-board');

var createBoard = function() {
	var x = 4
	for (var i=0; i<=x; i+=1) {
		var cardElement = document.createElement('div');
		carElement.setAttribute = ("card")
		document.getElementsByTagName('board')[0].appendChild(cardElement);
	}
}