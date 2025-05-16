// "use strict";
// Declaration for show cart quantity events
let cartQuantity = 0;

// Basics operations
/*
let a = 25.56 + 7.2 * 9.26 / 3;
console.log("a = " + a);
console.log("a = " + Math.round(a));
*/ /*
// string
let sentence = "Hello"
sentence += ' ' + "Programming.";
console.log(sentence);
console.log("$" + 54 + 78); // $5478
console.log('Items (' + (11 + 1) + ') : ' + '$' + 58 + '/-'); // Items (12) = $58/-

let stringAcceptable = 'I\'m a programmer!'; //I\'m a programmer!
console.log(stringAcceptable);

let alsoAcceptable = "I\'m a programmer!"; // I\'m a programmer!
console.log(alsoAcceptable);

let usingBacktick = `Items (${1 + 1}) : $${52+6}/-`; 
console.log(usingBacktick);

console.log(sentence.charCodeAt(0)); //72 -> Unicode value for Uppercase H.

let copyString = "It will have access \
to multiline and that backslash should \
not visible in output.";
console.log(copyString);
*/
/*
//variables 
let calculation = 2 + 3;
console.log(calculation + 2);


// Boolean & If-Else
let age = 22;
if (age <= 18) {
    console.log("Not eliglble to get license!");
} else if (age > 18) {
    console.log("Yoc can get..!");
}
else {
    console.log("Age Not valid");
}

//Functions

// Objects -> Multiple values together
const product = {
    productName : "Mobile",
    productBrand : "Samsung",
    productPrice : "$50"
};

console.log(product);
console.log(product.productName);

product.productName = 'Mobile Phone';
console.log(product);

console.log(JSON.stringify( product)); // DOes not return function! */

// Arrays

let myArray = [1, 'Hello', {name : "kavin"}, 98 , [1,2]];
console.log(myArray);

let bikes = ['MT-15', 'R-15', 'RX-135', 'RX-100'];
bikes.unshift('TVS-50');
console.log(bikes);
console.log("Length : " + bikes.length);

bikes[bikes.length] = 'Duke-390';
console.log(bikes);

// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead. 

// delete bikes[4]; //[ 'TVS-50', 'MT-15', 'R-15', 'RX-135', <1 empty item>, 'Duke-390' ]
// console.log(bikes);

bikes.pop(); 
console.log(bikes);

bikes.splice(2,3,'Unicorn', 'CT-100'); //[ 'TVS-50', 'MT-15', 'Unicorn', 'CT-100' ]
console.log(bikes);

bikes.splice(1,1); // Splice(Position, No.of.Elements removed)
console.log(bikes);


let myName = "Kavin";
console.log(myName);

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
console.log(txt);

function myFunction(value) {
  txt += value + '\n'; 
}
