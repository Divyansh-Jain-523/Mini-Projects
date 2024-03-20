'use strict'

const totalScorePlayerOne = () => document.getElementById('score--0').textContent = totalScoreP1;
const totalScorePlayerTwo = () => document.getElementById('score--1').textContent = totalScoreP2;
const currentScorePlayerOne = () => document.getElementById('current--0').textContent = currentScoreP1;
const currentScorePlayerTwo = () => document.getElementById('current--1').textContent = currentScoreP2;
const diceImg = document.querySelector('.dice');


let totalScoreP1 = 0;
let totalScoreP2 = 0;
let currentScoreP1 = 0;
let currentScoreP2 = 0;
let player = 1;


const newGame = () => {
    totalScoreP1 = 0;
    currentScoreP1 = 0;
    totalScoreP2 = 0;
    currentScoreP2 = 0;
    currentScorePlayerOne();
    currentScorePlayerTwo();
    totalScorePlayerOne();
    totalScorePlayerTwo();
    diceImg.classList.add('hidden');
}   
const randomNumber = () => Math.trunc((Math.random() * 6 )+ 1);
const rollDice = () => {
    if(diceImg.classList.contains('hidden')) diceImg.classList.remove('hidden');
    const score = randomNumber();
    diceImg.src = `dice-${score}.png`;
    addToScore(score,player);
}
const switchPlayer = () => {
    if(player === 1) player = 2;
    else player = 1;
    currentScoreP1 = 0;
    currentScoreP2 = 0;
}
const addToScore = (score,player) => {
    if(score !== 1 && player === 1){
        currentScoreP1 += score;
        currentScorePlayerOne();
    }
    else if(score !== 1 && player === 2){
        currentScoreP2 += score;
        currentScorePlayerTwo();
    }
    else {
        currentScoreP1 = 0;
        currentScoreP2 = 0;
        currentScorePlayerOne();
        currentScorePlayerTwo();
        switchPlayer();
    }
}
const holds = () => {
    if(player == 1){
        totalScoreP1 += currentScoreP1;
        currentScoreP1 = 0;
        currentScorePlayerOne();
        totalScorePlayerOne();
    }
    else{
        totalScoreP2 += currentScoreP2;
        currentScoreP2 = 0;
        currentScorePlayerTwo();
        totalScorePlayerTwo();
    }
    if(checkWinner()) switchPlayer();
}
const checkWinner = () =>{
    if(totalScoreP1 >= 100 || totalScoreP2 >= 100){
        confirm(`Player${player} Wins! 🎉 His Score is ${Math.max(totalScoreP1,totalScoreP2)}`);
        newGame();
    }
    return true;
};


newGame();


document.querySelector('.btn--roll').addEventListener('click',rollDice);
document.querySelector('.btn--new').addEventListener('click',newGame);
document.querySelector('.btn--hold').addEventListener('click',holds);
