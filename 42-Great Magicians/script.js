// Q42-Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians = ["jackson", "steve", "kali", "babar"];
function show_magicians(magiciansNames) {
  magiciansNames.map((item) => {
    console.log(item);
  });
}
show_magicians(magicians);

function make_great() {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `The Great ${magicians[i]}`;
  }
}
make_great();
show_magicians(magicians);
