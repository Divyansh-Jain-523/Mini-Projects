"use strict";
const userInput = document.querySelector("#user");
const pinInput = document.querySelector("#pin");

const divyansh = {
  fName: "Divyansh",
  lName: "Jain",
  age: 21,
  pin: 1821,
  transactions: [1000, -200 , 100 , 1000 , -500 , 200 , -100 , -50],
  currency: "$",
};

const shainky = {
  fName: "Shainky",
  lName: "Jain",
  pin: 1212,
  transactions: [212, 24, 64, 78, 5, 346, 68],
  currency: "R",
};

const users = [divyansh, shainky];
users.forEach(user => user.id = (user.fName[0] + user.lName[0]).toLowerCase());

let action;


// functions

function login() {
  for (const user of users)
    if (
      user.id === userInput.value &&
      Number(pinInput.value) === user.pin
    ) {
      document.querySelector("#main-box").classList.remove("hidden");
      document.querySelector("#main-left").innerHTML = null;
      updateInfo.apply(user);
      addTransactions.apply(user);
      break;
    }
  userInput.value = null;
  pinInput.value = null;
}

function updateInfo() {
  document.querySelector(
    "#login-text"
  ).textContent = `Welcome ${this.fName}`;
  let sum = this.transactions.reduce((a,b) => a+b);
  document.querySelector("#bal-info").textContent = sum + this.currency;
}

function addTransactions() {
  for(let amount of this.transactions){
    const operation = amount > 0 ? 'deposit' : 'withdrawal';
    const code = `
    <div class="entry">
      <p class="${operation}">${operation}</p>
      <h4 class="amount">${Math.abs(amount)}</h4>
    </div>`;

    action = 'afterBegin'; // needs to change
    document.querySelector('#main-left').insertAdjacentHTML(action,code);
  }
}


// eventHandlers
document.querySelector("#login-btn").addEventListener("click", login);

pinInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") login();
});