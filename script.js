const grid = document.querySelector(".grid");
const gameControls = document.querySelector(".game-controls");
let currentPlayer = "O";
let playedMoves = [];
let undoneMoves = [];
let hasConcludedGame = false;

function undoMove() {
	try {
		const lastPlayedElement = playedMoves.pop();
		undoneMoves.push({
			element: lastPlayedElement,
			player: lastPlayedElement.innerHTML,
		});
		lastPlayedElement.innerHTML = "";
		lastPlayedElement.classList.remove("played");
		getNextPlayer();
	} catch {}
}

function startNewGame() {
	for (element of grid.children) {
		element.classList.remove("played");
		element.classList.remove("winner");
		element.innerHTML = "";
	}
	playedMoves = [];
	undoneMoves = [];

	hasConcludedGame = false;
}

function redoMove() {
	try {
		const lastUndoneMove = undoneMoves.pop();
		const element = lastUndoneMove["element"];
		element.innerHTML = lastUndoneMove["player"];
		element.classList.add("played");
		playedMoves.push(lastUndoneMove["element"]);
		getNextPlayer();
	} catch {}
}

function getNextPlayer() {
	currentPlayer = currentPlayer === "X" ? "O" : "X";
	return currentPlayer;
}

function getGameGrid() {
	return grid.children;
}

function isWin(gameGrid, currentPlayer) {
	const winningCombinations = [
		//horizontal combos
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],

		//vertical combos
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],

		//diagonal combos
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let winningCombo of winningCombinations) {
		if (
			gameGrid[winningCombo[0]].innerHTML === currentPlayer &&
			gameGrid[winningCombo[1]].innerHTML === currentPlayer &&
			gameGrid[winningCombo[2]].innerHTML === currentPlayer
		) {
			gameGrid[winningCombo[0]].classList.add("winner");
			gameGrid[winningCombo[1]].classList.add("winner");
			gameGrid[winningCombo[2]].classList.add("winner");

			return true;
		}
	}
	return false;
}

function playMove(element) {
	const player = getNextPlayer();
	element.innerHTML = player;
	element.classList.add("played");

	if (isWin(getGameGrid(), player)) {
		alert(`${player} wins!!!`);
		hasConcludedGame = true;
	}
}

function gridClickHandler(event) {
	const clickedElement = event.target;
	if (
		!clickedElement.classList.contains("game-btn") ||
		clickedElement.classList.contains("played") ||
		hasConcludedGame
	)
		return;
	playMove(clickedElement);
	playedMoves.push(clickedElement);
	undoneMoves = [];
}

function gameControlsClickHandler(event) {
	const selectedElement = event.target;
	switch (selectedElement.innerHTML.toLowerCase()) {
		case "undo":
			undoMove();
			break;
		case "new game":
			startNewGame();
			break;
		case "redo":
			redoMove();
			break;
	}
}
grid.addEventListener("click", gridClickHandler);
gameControls.addEventListener("click", gameControlsClickHandler);
