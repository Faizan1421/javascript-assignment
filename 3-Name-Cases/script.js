// Q3- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let myName = "FAizan Tayyab";

/* Converting the string to lower case. */
let lowerCaseName = myName.toLowerCase();

/* Converting the string to upper case. */
let upperCaseName = myName.toUpperCase();

/* Taking the string myName, making it lowercase, splitting it into an array, mapping over the array
and replacing the first letter of each word with the same letter but capitalized, and then joining
the array back into a string. */
let titleCaseName = myName
  .toLowerCase()
  .split(" ")
  .map((word) => word.replace(word[0], word[0].toUpperCase()))
  .join(" ");
let items = [lowerCaseName, upperCaseName, titleCaseName];
let ul = document.createElement("ul");

items.map((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  ul.appendChild(li);
});

document.getElementById("title").appendChild(ul);

/* Printing the values of the variables lowerCaseName, upperCaseName, and titleCaseName to the console. */
console.log(lowerCaseName);
console.log(upperCaseName);
console.log(titleCaseName);
