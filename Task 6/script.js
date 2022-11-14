/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].

-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

/*
calculate the sum of users age by using the reduce method
then divide the sum by the amount of users in the array
*/
function getUserAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getUserAverageAge(users));


/*Create new array
filter through using foreach method
add only the user names to the newly created array */
function getUsersNames(users) {
  let usersNames = [];
  users.forEach(user => {
    usersNames.push(user.name);
  });
  return usersNames;
}

console.log(getUsersNames(users));