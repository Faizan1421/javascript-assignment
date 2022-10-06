// Q13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favArray = ["motorcycle", "car", "bicycle", "airplane"];

/* The Bellow code is using the map function to iterate through the favArray and return a new array with
the values of the favArray added with the strings in the switch statement. */
let result = favArray.map((item) => {
  switch (item) {
    case "motorcycle":
      return "I go to University on a motocycle";
      break;
    case "car":
      return "My dream is to buy a new Honda City Car ";
      break;
    case "bicycle":
      return "I left my bicycle out in the rain";
      break;
    case "airplane":
      return "The airplane took off ten minutes ago";
      break;
    default:
  }
});

/* The join() method creates and returns a new string by concatenating all of the elements in an array
, separated by commas or a specified separator string. If the array has
only one item, then that item will be returned without using the separator. */
let finalStrings = result.join(".\n");
console.log(finalStrings);
