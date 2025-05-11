// Basics operations
let a = 25.56 + 7.2 * 9.26 / 3;
console.log("a = " + a);
console.log("a = " + Math.round(a));

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

