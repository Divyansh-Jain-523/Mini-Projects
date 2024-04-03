"use strict";
const userInput = document.querySelector("#user");
const pinInput = document.querySelector("#pin");
let currentUser;

const divyansh = {
  fName: "Divyansh",
  lName: "Jain",
  age: 21,
  pin: 1821,
  transactions: [1000, -200, 100, 1000, -500, 200, -100, -50],
  currency: "$",
};

const shainky = {
  fName: "Shainky",
  lName: "Jain",
  pin: 1212,
  transactions: [212, 24, 64, 78, 5, 346, 68],
  currency: "€",
};

const users = [divyansh, shainky];
users.forEach(
  (user) => (user.id = (user.fName[0] + user.lName[0]).toLowerCase())
);
users.forEach(
  (user) =>
    (user.balance = user.transactions.reduce((acc, cur) => acc + cur, 0))
);

let action;

// functions

function updateAll() {
  updateInfo.apply(currentUser);
  displayTransactions.apply(currentUser);
  for (let box of document.querySelectorAll(".inp-box")) box.value = null;
}

function login() {
  for (const user of users)
    if (user.id === userInput.value && Number(pinInput.value) === user.pin) {
      currentUser = user;
      document.querySelector("#main-box").classList.remove("hidden");
      document.querySelector("#main-left").innerHTML = null;
      updateAll();
      break;
    }
  userInput.value = null;
  pinInput.value = null;
}

function updateInfo() {
  document.querySelector("#login-text").textContent = `Welcome ${this.fName}`;
  document.querySelector("#bal-info").textContent =
    this.balance + this.currency;
}

function displayTransactions() {
  for (let amount of this.transactions) {
    const operation = amount > 0 ? "deposit" : "withdrawal";
    const code = `
    <div class="entry">
      <p class="${operation}">${operation}</p>
      <h4 class="amount">${Math.abs(amount) + this.currency}</h4>
    </div>`;

    action = "afterBegin"; // needs to change
    document.querySelector("#main-left").insertAdjacentHTML(action, code);
  }
}

function transfer() {
  const amount = Number(document.querySelector("#transfer-amount").value);
  const benificery = document.querySelector("#reciever").value;
  if (currentUser.balance >= amount) {
    for (let user of users) {
      if (user.id === benificery) {
        currentUser.transactions.push(-amount);
        currentUser.balance -= amount;
        user.balance += amount;
        user.transactions.push(amount);
        updateAll();
        break;
      }
    }
  }
}

function loan() {
  const amount = Number(document.querySelector("#loan-amount").value);
  setTimeout(() => {
    currentUser.transactions.push(amount);
    currentUser.balance += amount;
    updateAll();
  }, 5000);
}

// eventHandlers
document.querySelector("#login-btn").addEventListener("click", login);

pinInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") login();
});

document.querySelector("#transfer-btn").addEventListener("click", transfer);
document.querySelector("#loan-btn").addEventListener("click", loan);
