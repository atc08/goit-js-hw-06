"use strict";
import users from "./users.js";

console.group("\t TASK - 04 \t");
const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users));
console.table(getInactiveUsers(users));
console.groupEnd();
