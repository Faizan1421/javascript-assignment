// Q18-Seeing the World: Think of at least five places in the world you’d like to visit.

// Store the locations in a array. Make sure the array is not in alphabetical order.

const locations = ["canada", "china", "pakistan", "india", "Austria", "Bhutan"];
// Print your array in its original order.
console.log(locations);

// Print your array in alphabetical order without modifying the actual list.
let sortedLocations = locations.slice().sort();

// Show that your array is still in its original order by printing it.
console.log(locations);

// Print your array in reverse alphabetical order without changing the order of the original list.
let reversedSortedLocations = sortedLocations.map((item, i, coll) => {
  return coll[coll.length - i - 1] + " ";
});
console.log(reversedSortedLocations);
console.log(sortedLocations);

// Show that your array is still in its original order by printing it again.
console.log(locations);

// Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse();
console.log(locations);

// Reverse the order of your list again. Print the list to show it’s back to its original order.

locations.reverse();
console.log(locations);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort();
console.log(locations);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.reverse();
console.log(locations);
