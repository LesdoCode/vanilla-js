const card5 = document.getElementById("card-5"); //get card 5 from html
const card6 = document.getElementById("card-6"); //get card 6 from html

let counter = 0;
let currentColor = "blue";

card5.addEventListener("click", function () {
	card6.innerHTML = ++counter;

	if (currentColor !== "blue") {
		currentColor = "blue";
	} else {
		currentColor = "green";
	}
	card5.style = `background-color: ${currentColor};`;
});

//the above can also be expressed way like like: uncomment it and check out
/*function card5_click_handler() {
	card6.innerHTML = ++counter;

	if (currentColor !== "blue") {
		currentColor = "blue";
	} else {
		currentColor = "green";
	}
	card5.style = `background-color: ${currentColor};`;
}
card5.addEventListener("click", card5_click_handler);*/

//Find all event listeners here: https://developer.mozilla.org/en-US/docs/Web/Events
