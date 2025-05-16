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

//Array.prototype.every()
// Predicate function -> returns only boolean
const myMarks = [54, 43, 76, 87, 56];
const result = myMarks.every( (mark) => {
    return mark>30; // All should be satisfied then only true otherwise false
})

console.log('Every result : ' + result);

//Array.prototype.fill()

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4];
const array3 = [1, 2, 3, 4];

console.log(array1.fill(0,2,4)); //[ 1, 2, 0, 0 ]
console.log(array2.fill(6,1)); //[ 1, 6, 6, 6 ]
console.log(array3.fill(7)); //[ 7, 7, 7, 7 ]

//Array.prototype.filter() **Important
const petNames = ['Sibi', 'Krish', 'Tommy', 'Ishuu'];
const output = petNames.filter((name) => name.length > 3);

console.log(result);

// Array.prototype.find()
// findLast is similar but checks fron right to left

const findNumber = [54, 43, 76, 87, 56];

const findOutput = findNumber.find((num) => {
    return num > 60;
})
console.log(findOutput);

//findIndex()
//findLastIndex() is similar but checks fron right to left

const findIndexOutput = findNumber.findIndex( (num) => {
    return num > 60;
})
console.log(findIndexOutput);

const matrixArray = [
    [1, 2, 3],
    [4, [22, 55], 6],
    [7, 8, 9],
];

const flatArrayAsArray = [].concat(matrixArray);
console.log(flatArrayAsArray);

const flatArray = [].concat(...matrixArray);
console.log(flatArray);

const flatArrES6 = matrixArray.flat();
const flatArrDepthES6 = matrixArray.flat(2);

console.log(flatArrES6);
console.log(flatArrDepthES6);

const flatMapArr = [1, 2, 3, 4];
const flatedMap = array1.flatMap( (num) => (num === 2 ? [22, 222] : 0));

console.log(flatedMap);

//array.from(); & Array.of() -> Both are same
// convert non-array into array
const name = "Kavin Manudheeran";
const fromResult = Array.from(name);

console.log(fromResult);

const convertedArray = Array.of("Kavin", 22 , "Software Engineer");
console.log(convertedArray);

//Array.join();
const joinArray = ["Apple", "Orange", "Mango"];
const joinedArray = joinArray.join(', ');
console.log(joinedArray);

// Array.prototype.reduce()

const spentAmount = [320, 43, 790, 650];
const totalAmt = spentAmount.reduce((prevVal, currentVal) => {
    return prevVal + currentVal;
}, 0)

console.log(totalAmt);

//array.prototype.include()
const animals = ['dogs', 'cats', 'cows'];
console.log(animals.includes("cats"));
console.log(animals.includes("cats", 2)); // check from the index also

console.log(animals.indexOf('Duck')); 

console.log(animals.reverse());
reversedAnimals = animals.toReversed();
console.log(reversedAnimals);

console.log(animals.sort());
console.log("Sorted: " + animals.sort());

const sortingArray = [2, 3, 45, 2, 64, 5];
console.log(sortingArray.sort((a,b) => a - b));// [ 2, 2, 3, 5, 45, 64 ]
console.log(sortingArray.sort()); // [ 2, 2, 3, 45, 5, 64 ]

const myDate = new Date('23 Aug 1998 15:10:00 UTC');
 
const myLocalDate = myDate.toLocaleString('hi-IN', {timeZone: 'Asia/Kolkata'});
console.log(myLocalDate);

const amt = 456218;
const amtTotal = amt.toLocaleString('hi-In', {
    style:'currency',
    currency: 'INR',
})
console.log(amtTotal);

//Array,prototype.with()

const withNumber =[1, 2, 3, 4, 5];
withNumber[4] = 'Five';
console.log(withNumber.with(2, 'Three')); //[ 1, 2, 'Three', 4, 5 ]
