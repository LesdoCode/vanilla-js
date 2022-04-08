const grid = document.getElementById("grid");
let currentPlayer = "O";
const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function getNextPlayer() {
	currentPlayer = currentPlayer === "X" ? "O" : "X";
	return currentPlayer;
}

function gridClickEventHandler(event) {
	const clickedButton = event.target;
	if (!clickedButton.classList.contains("card")) return;
	if (clickedButton.classList.contains("played")) return;

	clickedButton.innerHTML = getNextPlayer();
	clickedButton.classList.add("played");

	if (isWin(grid, currentPlayer)) {
		alert(currentPlayer + " won!");
		clearGrid(grid);
	}
}

function isWin(grid, player) {
	const currentGrid = [];
	for (let card of grid.children) {
		currentGrid.push(card.innerHTML);
	}
	for (let combo of winningCombinations) {
		if (
			currentGrid[combo[0]] === player &&
			currentGrid[combo[1]] === player &&
			currentGrid[combo[2]] === player
		)
			return true;
	}
	return false;
}

function clearGrid(grid) {
	for (let card of grid.children) {
		card.innerHTML = "";
		card.classList.remove("played");
	}
}

grid.addEventListener("click", gridClickEventHandler);
