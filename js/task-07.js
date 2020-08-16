"use strict";
import users from "./users.js";

console.group("\t TASK - 07 \t");
const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log(calculateTotalBalance(users));
console.groupEnd();
