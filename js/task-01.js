"use strict";

import users from "./users.js";

console.group("\t TASK - 01 \t");
const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));

/* Как показад Репета */
// const getUserNames = users.map(function (user) {
//   return user.name;
// });
// console.log(getUserNames);

/* Как показал Саша Веник */
// const getUserNames = (users) => {
//   return users.name;
// };
// const userNames = users.map(getUserNames);
// console.log(userNames);

// const getUserNames = users.map(({ name }) => name);
// console.log(getUserNames);
console.groupEnd();
