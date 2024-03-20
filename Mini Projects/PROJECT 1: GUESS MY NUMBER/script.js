const msgDisplay = (message) => {document.querySelector(".message").textContent = message};
const scoreDisplay = (message) => {document.querySelector(".score").textContent = message};
const highScoreDisplay = (message) => {document.querySelector(".highscore").textContent = message};
const guessValue = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
let randomNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let userInp;

const highScoreUpdater = () => {
  highScore = Math.max(highScore, score);
  highScoreDisplay(highScore);
};
const scoreDecrement = () => {
  scoreDisplay(--score);
};
const winnerFunction = () => {
    msgDisplay("Yay! 🎉 You are Right 🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    btnCheck.textContent = "Again!";
    btnCheck.addEventListener('click',checkBtn);
    document.querySelector(".number").style.width = "30rem";
    highScoreUpdater();
}
const lostFunction = () =>{
  document.querySelector('body').style.backgroundColor = '#CC0000';
  btnCheck.textContent = 'Again!';
  msgDisplay('You Lost! 😞')
}
const checkBtn = () => {
  if (btnCheck.textContent === "Again!") {
    againBtn();
  } 
  else if(score === 0){
    document.querySelector(".number").textContent = randomNum;
    lostFunction();
  }
  else {
    userInp = Number(guessValue.value);
    if (userInp > 0 && userInp <= 20) {
      if (userInp === randomNum) {
        winnerFunction();
      } else if (userInp > randomNum && userInp <= 20) {
        msgDisplay("Guess a smaller Number");
        scoreDecrement();
      } else if (userInp < randomNum && userInp > 0) {
        msgDisplay("Guess a bigger Number");
        scoreDecrement();
      } 
    }
    else msgDisplay("Error! Range lies from 1 to 20");
  }
};
const againBtn = () => {
  score = 20;
  msgDisplay("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  scoreDisplay(score);
  document.querySelector(".number").textContent = '?';
  btnCheck.textContent = "Check!";
  randomNum = Math.trunc(Math.random() * 20 + 1);
  guessValue.value = "";
};

btnCheck.addEventListener("click", checkBtn);
document.querySelector(".again").addEventListener("click", againBtn);
