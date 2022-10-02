// Q35- Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
let animals = ["cats", "dogs", "rabbits"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Modify your program to print a statement about each animal, such as A dog would make a great pet.

for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i]} would make a great pet`);
}

// Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
console.log(
  `${animals[0]},${animals[1]}, and ${animals[2]} CAT,DOG and RABBIT can be considered as mammals.They have skins covered with hair.They have four legs.All the three like to be pet and share beautiful bond with owner.Any of these animals would make a great pet`
);
