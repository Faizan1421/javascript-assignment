// Q4-Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let title = document.getElementById("title");
let ul = document.createElement("ul");
let li = document.createElement("li");
li.innerText =
  'Anne Frank Once said, "Whoever is happy will make others happy too"';
ul.appendChild(li);
title.appendChild(ul);
/* Printing a string to the console. */
console.log(
  'Anne Frank Once said, "Whoever is happy will make others happy too"'
);
