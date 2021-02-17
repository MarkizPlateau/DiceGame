function roll_a_Die(){
  return Math.floor(Math.random()* 6 + 1);
}


let playerOneDice = document.querySelector(".image-player1-dice");
let playerTwoDice = document.querySelector(".image-player2-dice");
let title = document.querySelector("h1");
let refresh = document.querySelector("h3");

function numberOfDots (player){
  let dice = roll_a_Die();
  for (let i = 1; i <= 6; i ++) {
    if (dice === i) {
      player.setAttribute("src", "images/dice" + dice + ".svg");
      if(dice > 1) {
        player.setAttribute("alt", "dice with " + dice + " dots");
      } else {
        player.setAttribute("alt", "dice with " + dice + " dot");
      }
    }
  }
  return dice;
}

let player0neScore = null;
let playerTwoScore = null;

let throwing = setInterval(function () {
  playerOneScore = numberOfDots(playerOneDice);
  playerTwoScore = numberOfDots(playerTwoDice);
}, 400);

setTimeout(function () {
  clearInterval(throwing);
  if (playerOneScore > playerTwoScore) {
    title.innerHTML = "Player One wins!";
  } else if (playerOneScore === playerTwoScore){
    title.innerHTML = "Draw ¯\_(ツ)_/¯";
  } else {
    title.innerHTML = "Player Two wins!";
  }
  refresh.style.visibility = "visible";
}, 2000);
