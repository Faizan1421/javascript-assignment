// Q7 and Q8- Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// You should create four lines that look like this:

// console.log(5 + 3)

// Your output should simply be four lines with the number 8 appearing once on each line.

// Solution
console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);

/////////////////////////////
let text1 = document.createElement("h4");
let text2 = document.createElement("h4");
let text3 = document.createElement("h4");
let text4 = document.createElement("h4");

text1.innerText = `console.log(5 + 3) = ${5 + 3}`;

text2.innerText = `console.log(11 - 3) = ${11 - 3}`;

text3.innerText = `console.log(2 * 4) = ${2 * 4}`;

text4.innerText = `console.log(16 / 2) = ${16 / 2}`;
document.body.appendChild(text1);
document.body.appendChild(text2);
document.body.appendChild(text3);
document.body.appendChild(text4);
