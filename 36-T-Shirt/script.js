// Q36-T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size, text) {
  console.log(
    `Your shirt size is ${size} and this message will be printed on it "${text}"  `
  );
}
make_shirt("XL", "i love javascript");
make_shirt("L", "i love python");
make_shirt("Sm", "i love solidity");
