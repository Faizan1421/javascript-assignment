// Q43-Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians = ["jackson", "steve", "kali", "babar"];
let greatMagicians = [];

function show_magicians(magiciansNames) {
  magiciansNames.map((item) => {
    console.log(item);
  });
}

function make_great(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    greatMagicians[i] = `The Great ${magicians[i]}`;
  }
}
make_great(magicians);

show_magicians(magicians);
show_magicians(greatMagicians);
