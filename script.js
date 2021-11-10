const card5 = document.getElementById("card-5");
const card6 = document.getElementById("card-6");

let counter = 0;
card5.addEventListener("click", function () {
	card6.innerHTML += ++counter;
});
