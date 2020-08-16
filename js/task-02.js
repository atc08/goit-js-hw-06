"use strict";
import users from "./users.js";

console.group("\t TASK - 02 \t");
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, "blue"));
console.table(getUsersWithEyeColor(users, "blue"));
console.groupEnd();
