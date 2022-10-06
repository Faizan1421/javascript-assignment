// Q44-Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwiches(...items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`Adding ${items[i]} to Your Sandwich`);
  }
  console.log(`Your sandwich is Ready`);
  console.log(`------------------------`);
}
makeSandwiches("roast beef");
makeSandwiches("turkey", "apple slices", "honey mustard");
makeSandwiches("peanut", "butter");
