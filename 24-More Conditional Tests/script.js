// Q24-More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let myName = "faizan";
let age = 26;
let height = 182;
let nationality = "Pakistani";
let city = "rawalpindi";
let friend = ["salik", "aqeel", "zeeshan"];
let hobby = "reading";
let favFood = "biryani";
let favgame = "cricket";
let favPlayer = "asif";

// • Tests for equality and inequality with strings
let nameTest = myName == "faizan" ? true : false;
// Tests using the lower case function
let nationalityTest = nationality == "pakistani" ? true : false;
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ageTest = age === 25 ? true : false;
let ageTest1 = age === 26 ? true : false;
let ageTest2 = age > 26 ? true : false;
let ageTest3 = age < 26 ? true : false;
let ageTest4 = age >= 26 ? true : false;
let ageTest5 = age <= 26 ? true : false;

// Tests using "and" and "or" operators
let heightTest = height === 181 || 182 ? true : false;
let heightTest1 = height === 182 && age === 26 ? true : false;
// Test whether an item is in a array
let friendTest = friend.includes("zeeshan") ? true : false;
// Test whether an item is not in a array
let friendTest1 = !friend.includes("zeeshan") ? true : false;

console.log(nameTest);
console.log(ageTest);
console.log(ageTest1);
console.log(ageTest2);
console.log(ageTest3);
console.log(ageTest4);
console.log(heightTest);
console.log(heightTest1);
console.log(nationalityTest);
console.log(friendTest);
console.log(friendTest1);
