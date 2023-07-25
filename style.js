var randomnumber = Math.floor(Math.random() * 6) + 1; // 1-6
var randomDiceImage = "dice" + randomnumber + ".png";//dice1.png -dice6.png
var randomSource = "images/" + randomDiceImage; //image/dice1.png- dice6.png
var images1 = document.querySelectorAll("img")[0]; // select image 1 
images1.setAttribute("src", randomSource);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomnumber2 + ".png";

var images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src", randomImage2);

if (randomnumber > randomnumber2) {
  document.querySelector("h1").innerHTML = " 🚩Play 1 win!"; // result
} else if (randomnumber2 > randomnumber) {
  document.querySelector("h1").innerHTML = " 🚩Play 2 win!";
} else {
  document.querySelector("h1").innerHTML = " Draw!";
}
document.getElementById("refreshButton").addEventListener("click", function() {
  location.reload(); // This line reloads the page
});

