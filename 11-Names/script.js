// Q11-Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

/* Declaring a variable names and assigning it an array of strings. Then it is logging the first,
second, third and fourth element of the array. */
let names = ["Farhan", "Ali", "Hassan", "Aqeel"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

let text1 = document.createElement("h4");
let text2 = document.createElement("h4");
let text3 = document.createElement("h4");
let text4 = document.createElement("h4");

text1.innerText = `${names[0]}`;

text2.innerText = `${names[1]}`;

text3.innerText = `${names[2]}`;

text4.innerText = `${names[3]}`;
document.body.appendChild(text1);
document.body.appendChild(text2);
document.body.appendChild(text3);
document.body.appendChild(text4);
