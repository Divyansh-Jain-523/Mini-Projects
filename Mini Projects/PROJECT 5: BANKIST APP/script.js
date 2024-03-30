"use strict";
const userInput = document.querySelector("#user");
const pinInput = document.querySelector("#pin");

const divyansh = {
  fName: "Divyansh",
  lName: "Jain",
  age: 21,
  pin: 1821,
  transactions: [212, 24, 64, 78, 5, 346, 68],
};

const shainky = {
  fName: "Shainky",
  lName: "Jain",
  pin: 1212,
  transactions: [212, 24, 64, 78, 5, 346, 68],
};

const users = [divyansh, shainky];

let currentUser;

document.querySelector("#login-btn").addEventListener("click", login);

pinInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") login();
});

function login() {
  for (const user of users)
    if (
      user.fName[0].concat(user.lName[0]).toLowerCase() === userInput.value &&
      Number(pinInput.value) === user.pin
    ) {
      currentUser = user;
      document.querySelector("#main-box").classList.remove("hidden");
      break;
    }

  userInput.value = "";
  pinInput.value = "";
}
