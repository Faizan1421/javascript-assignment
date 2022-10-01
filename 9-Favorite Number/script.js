// Q9-Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favNum = 8;
console.log("My Favourite Number is " + favNum);

let text = document.createElement("h4");

text.innerText = `My Favourite Number is ${favNum}`;
document.body.appendChild(text);
