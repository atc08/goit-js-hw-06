("use strict");
import users from "./users.js";

console.group("\t TASK - 10 \t");
const getSortedUniqueSkills = (users) => {
  return users
    .reduce((acc, user) => {
      acc.push(...user.skills);
      return acc;
    }, [])
    .filter((user, index, arr) => arr.indexOf(user) === index)
    .sort();
};
console.log(getSortedUniqueSkills(users));

console.groupEnd();
