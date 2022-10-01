// Q16-More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guests = ["zain", "Basit", "Ali"];
let invitations = guests.map((item) => {
  return `${item} You are Invited To the Dinner Tonight `;
});
console.log(`${guests[1]} is not available for the dinner`);
guests[1] = "Salik";

// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log("We have More Space Availabe for more Guests on Our Dinner Table");
// Add one new guest to the beginning of your array.
guests.unshift("Farhan");
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
guests.splice(2, 0, "Nadir");
let newInvitations = guests.map((item) => {
  return `${item} You are Invited To the Dinner Tonight `;
});

console.log(newInvitations.join("\n"));

let text1 = document.createElement("h3");
let text2 = document.createElement("h3");
let text3 = document.createElement("h3");
let text4 = document.createElement("h3");
let text5 = document.createElement("h3");

text1.innerText = newInvitations[0];
text2.innerText = newInvitations[1];
text3.innerText = newInvitations[2];
text4.innerText = newInvitations[3];
text5.innerText = newInvitations[4];

document.body.appendChild(text1);
document.body.appendChild(text2);
document.body.appendChild(text3);
document.body.appendChild(text4);
document.body.appendChild(text5);
