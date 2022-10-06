// Q6-Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// i solved this question by using 2 methods, 2nd Method is Easiest one

// Method 1 - This is dificult one

let myName = "         Faizan \n     Tayyab    \t Hussain     ";

/* Removing the extra spaces and tabs from the string. */
let newArray = [];
let newname = myName
  .replace("\t", "")
  .replace("\n", "")
  .trim()
  .split(" ")
  .map((word) => {
    word.length > 0 ? newArray.push(word) : "";
  });

let finalName = newArray.join(" ");
console.log(myName);
console.log(finalName);

// Method 2- Easiest one

let myName1 = "         Faizan \n       \n  Tayyab    \t Hussain     ";

let finalMyName2 = myName1.replace(/\s+/g, " ");

console.log(myName1);
console.log(finalMyName2);
