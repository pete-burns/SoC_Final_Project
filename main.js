let a = document.querySelector("#wins");
let b = document.querySelector("#draws");
let c = document.querySelector("#losses");

let displayResult = document.querySelector(".results");

let play = true; 
let gamePlays = 0;
let wins = 0;
let draws = 0;
let losses = 0;

//image id assigns it to playerMove
function gameIcon(clicked_id) {
   playerMove = clicked_id;
  //return playerMove;
  getWinner(playerMove);

  if (playerMove === "rock") {
    let clickRock = document.querySelector("#rockAudio");
    clickRock.play();
    //console.log("playRock");
  } else if (playerMove === "paper") {
    let clickPaper = document.querySelector("#paperAudio");
    clickPaper.play();
    //console.log("playPaper");
  } else {
    let clickScissors = document.querySelector("#scissorsAudio");
    clickScissors.play();
    //console.log("playScissors");
  }

}

//main game logic function
function getWinner(playerMove) {

  //random number generator for computer move
  randomNum = (Math.floor(Math.random() * 3));

  //computer move generator
    if (randomNum === 0) {
      computerMove = 'rock';
    } else if (randomNum === 1) {
      computerMove = 'paper';
    } else{
      computerMove = 'scissors';
    }
 
    //console.log(computerMove);
    //console.log(playerMove);

//draw/win/lose
  if (playerMove === computerMove) {
    draws = draws + 1;
    //console.log("It's a draw!");
    displayResult.innerText = "It's a draw!";
  } else if (playerMove === 'rock' && computerMove !== 'paper') {
    wins = wins + 1;
    //console.log("You win!");
    displayResult.innerText = "You win!";
  } else if (playerMove === 'paper' && computerMove !== 'scissors') {
    wins = wins + 1;
    //console.log("You win!");
    displayResult.innerText = "You win!";
  } else if (playerMove === 'scissors' && computerMove !== 'rock') {
    wins = wins + 1;
    //console.log("You win!");
    displayResult.innerText = "You win!";
  } else {
    losses = losses + 1;
    //console.log("You lose!");
    displayResult.innerText = "You lose!";
  }
  
  var overallWins = parseInt(scoresWins)+wins;
  var overallDraws = parseInt(scoresDraws)+draws;
  var overallLosses = parseInt(scoresLosses)+losses;

  a.innerText = "Wins: " + overallWins;
  b.innerText = "Draws: " + overallDraws;
  c.innerText = "Loses: " + overallLosses;

  //post scores to database
  let scoreSendObject = {
    username: JSON.parse(window.localStorage.getItem("username")),
    wins: overallWins,
    losses: overallLosses,
    draws: overallDraws
  };

  let scoresSent = postScores(scoreSendObject);
  console.log(JSON.stringify(scoresSent));
}

let scoresWins = window.localStorage.getItem("wins");
let scoresDraws= window.localStorage.getItem("draws");
let scoresLosses = window.localStorage.getItem("losses");

a.innerText = "Wins: " + scoresWins;
b.innerText = "Draws: " + scoresDraws;
c.innerText = "Loses: " + scoresLosses;


//post scores to database
async function postScores(scoreSendObject){

  const response = await fetch("http://127.0.0.1:8080/updateUserScoreAPI/", {
      method: "POST",
      body: JSON.stringify(scoreSendObject),
      headers: {"content-type": "application/JSON"}
  });

  let responseData = await response.json();
  return responseData;
}
