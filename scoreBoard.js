// Setting up the variables 
var p1Button  = document.querySelector("#p1");
var p2Button  = document.getElementById("p2");
var numInput = document.querySelector("input");
var changeButton =document.querySelector("enter");
var resetButton  = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//Add methods for interactivity for user
//Player 1
p1Button.addEventListener("click", function() {
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
           p1Display.classList.add("colorChange");
           gameOver = true;
        }
        p1Display.textContent = p1Score;
        }
    });

// Player 2 
p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
        p2Display.classList.add("colorChange");
        gameOver = true;
        }
    p2Display.textContent = p2Score;
    }
});

// Setting up function for reset button when clicked 

resetButton.addEventListener("click", function() {
   reset();
});

// Reset button function

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("colorChange");
    p2Display.classList.remove("colorChange");
    gameOver = false;
}

// Change value for winning score  

changeButton = numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value ;
    winningScore = Number(this.value);
    reset();
});