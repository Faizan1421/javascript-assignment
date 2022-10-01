// Q21-They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
let list = [];
let createList = (...a) => {
  list.push(...a);
};
createList("pakistan", "jehlum river", "islamabad", "urdu");
console.log(list);

let listObject = {};

let createObject = (list) => {
  list.map((item, i) => {
    listObject[`item-${i + 1}`] = item;
  });
};
createObject(list);
console.log(listObject);
