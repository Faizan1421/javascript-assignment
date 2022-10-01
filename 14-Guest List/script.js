let guests = ["zain", "Basit", "Ali"];
let invitations = guests.map((item) => {
  return `${item} You are Invited To the Dinner Tonight `;
});
console.log(invitations.join("\n"));

let text1 = document.createElement("h3");
let text2 = document.createElement("h3");
let text3 = document.createElement("h3");

text1.innerText = invitations[0];
text2.innerText = invitations[1];
text3.innerText = invitations[2];

document.body.appendChild(text1);
document.body.appendChild(text2);
document.body.appendChild(text3);
