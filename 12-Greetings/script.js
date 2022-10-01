// Q12- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Method 1-Easiest one
let names = ["Farhan", "Ali", "Hassan", "Aqeel"];

console.log(`${names[0]} is my Best friend`);
console.log(`${names[1]} is my Best friend`);
console.log(`${names[2]} is my Best friend`);
console.log(`${names[3]} is my Best friend`);

// Method2 (Difficult One :) )
let newArray = names.map((friend) => `${friend} is my Best friend`);
let newStrings = newArray.join(",\n");
console.log(newStrings);

let text = document.createElement("h4");

text.innerText = newStrings;
document.body.appendChild(text);
