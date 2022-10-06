let guests = ["zain", "Basit", "Ali"];
let invitations = guests.map((item) => {
  return `${item} You are Invited To the Dinner Tonight `;
});
console.log(invitations.join("\n"));
