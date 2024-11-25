// Player 1 Random dice
var dice1 = Math.random();
dice1 *= 6;
dice1 = Math.floor(dice1) + 1;

// Player 2 Random dice
var dice2 = Math.random();
dice2 *= 6;
dice2 = Math.floor(dice2) + 1;

// Changing image for Player 1
var img1 = "dice" + dice1 + ".png";
var imgsrc1 = "images/" + img1;
var imgElement1 = document.querySelectorAll("img")[0];
imgElement1.setAttribute("src", imgsrc1);

// Changing image for Player 2
var img2 = "dice" + dice2 + ".png";
var imgsrc2 = "images/" + img2;
var imgElement2 = document.querySelectorAll("img")[1];
imgElement2.setAttribute("src", imgsrc2);

// Choosing who won
if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 wins 🎉";
} else if (dice1 < dice2) {
    document.querySelector("h1").innerHTML = "🎉 Player 2 wins 🎉";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
document.getElementById("refreshButton").addEventListener("click", () => {
    location.reload(); // Refreshes the page
});
