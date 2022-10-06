// Q11-Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

/* Declaring a variable names and assigning it an array of strings. Then it is logging the first,
second, third and fourth element of the array. */
let names = ["Farhan", "Ali", "Hassan", "Aqeel"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
/////////////////////////////////////////////////
///////////////////////////////
// method 2(Advanced)
names.forEach((item) => {
  console.log(item);
});
