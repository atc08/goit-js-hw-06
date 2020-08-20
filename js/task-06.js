"use strict";
import users from "./users.js";

console.group("\t TASK - 06 \t");
const getUsersWithAge = (users, min, max) => {
  return users.filter((user) => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30));
console.table(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
console.table(getUsersWithAge(users, 30, 40));
console.groupEnd();
