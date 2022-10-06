// Q22-Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let list = ["Faizan", "Tayyab", "Zain", "Basit"];

list[8] = "Majid";

//  i created this Error by adding value in 8th index instead of 4th, this will create empty values in our array and total values/keys will be 5 in our object but it will show us total length of 9 values.and all empty spaces will be undefined

///////////Resolving this error////////////

/* A filter function that will filter out all the empty values from our array. */
newList = list.filter((l) => l.length > 0);

console.log(newList);
