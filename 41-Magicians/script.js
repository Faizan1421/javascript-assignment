// Q41-Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians = ["jackson", "steve", "kali", "babar"];
function show_magicians(magiciansNames) {
  magiciansNames.map((item) => {
    console.log(item);
  });
}
show_magicians(magicians);
