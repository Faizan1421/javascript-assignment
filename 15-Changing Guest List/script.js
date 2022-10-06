// Q15-Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guests = ["zain", "Basit", "Ali"];
let invitations = guests.map((item) => {
  return `${item} You are Invited To the Dinner Tonight `;
});
console.log(invitations.join("\n"));
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

console.log(`${guests[1]} is not available for the dinner`);

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

guests[1] = "Salik";

// Print a second set of invitation messages, one for each person who is still in your list.

let newInvitations = guests.map((item) => {
  return `${item} You are Invited To the Dinner Tonight `;
});

console.log(newInvitations.join("\n"));
