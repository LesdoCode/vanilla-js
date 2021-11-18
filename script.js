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

	clickedButton.classList.add("played");
	clickedButton.innerHTML = getNextPlayer();
}

function isWin(grid, player) {}

grid.addEventListener("click", gridClickEventHandler);
