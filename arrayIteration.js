const myFruits = ["Apple", "Orange", "Mango"];

//Array.prototype.forEach();
myFruits.forEach( (fruit) => {
    console.log(fruit.toUpperCase())
})

//Array.prototype.map()

const modifiedFruits =  myFruits.map( (fruit) => {
    console.log("Fruits " + fruit);
    // return fruit;
})

console.log(modifiedFruits);// [ undefined, undefined, undefined ] if return in not there..!
 
// Array.prototype.at()

const letters = ['a', 'b', 'c', 'd'];
console.log(letters[2]); // c
console.log(letters.at(-1)); // d

// Array.prototype.copyWithin()

const myvegtables = ['Onion', 'Tomato', 'Brinjal', 'Carrot', 'Beans'];
console.log(myvegtables.copyWithin(0, 1, 2));

// Array.prototype.entries();

const myChoclates = ['Kitkat', 'Dairy Milk', '5-Star', 'Perk']
const choclatesEntries = myChoclates.entries();

console.log('Entries: ' + choclatesEntries.next().value);
console.log(choclatesEntries.next().done);

//Array.prototype.values()

const myChoclate = ['Kitkat', 'Dairy Milk', '5-Star', 'Perk']
const choclatesValues = myChoclate.values();
console.log('Values : ' + choclatesValues.next().value);