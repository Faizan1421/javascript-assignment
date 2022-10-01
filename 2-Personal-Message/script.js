// Q2- Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let myName = "Faizan";
let element = document.createElement("h1");
element.innerText = `${myName}, would you like to learn some javascript today?`;

document.getElementById("section").appendChild(element);

/* Printing the message in the console. */
console.log(`Hello ${myName}, would you like to learn some javascript today?`);
