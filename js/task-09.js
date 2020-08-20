("use strict");
import users from "./users.js";

console.group("\t TASK - 09 \t");
const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((first, next) => first.friends.length - next.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
console.groupEnd();
