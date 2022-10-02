// Q31-No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let usernames = ["faizan1421", "basit", "salik", "admin", "saad"];
// If the list is empty, print the message We need to find some users!
usernames.length < 1 && console.log("We need to find some users!");

// Remove all of the usernames from your array, and make sure the correct message is printed.
usernames = [];
usernames.length < 1 && console.log("We need to find some users!");
