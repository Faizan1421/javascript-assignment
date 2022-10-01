// Q5-Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person = "Anne Frank";
let message = "Whoever is happy will make others happy too";

let text = document.createElement("h3");
text.innerText = `${famous_person} once said, "${message}"`;
document.body.appendChild(text);
console.log(text);
console.log(`${famous_person} once said, "${message}"`);
