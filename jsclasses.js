// JavaScript Class 
class Person {
    talk(){
        return "Talking";
    }
}

const me = new Person();
const you = new Person();
console.log(me.talk());
console.log(you.talk());
console.log(you);

console.log(Object.prototype.constructor === Object);

Person.prototype.greet = function() {
    return "Hi, Welcome to web Programming with pk";
}
console.log(me.greet());

// Getter & Setter
class Person1 {
    constructor(name) {
        this.setName(name);
    }
    getName() {              // -> By userdefined
        return this.name;
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw "Name can't be empty";
        }
        this.name = newName;
    }
}
let person = new Person1("Kavin Manudheeran");
console.log(person); // show's that object fully
// console.log(person.getName()); // Kavin Manudheeran
person.setName("Magil Mithra");
console.log(person.getName()); //Magil Mithra

// Get & Set by keyword
class Person2 {
    constructor(name) {
        this._name = name; // Here we made mistake while assigning
    }
    get name() {           // -> By keyword
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            return"Name can't ne empty";
        }
        this._name = newName;
    }
}
let firstPerson = new Person2("Manu Dheeran");
console.log(firstPerson.name);

//class expression

let Person3 = class {
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
 let secondPerson = new Person3("Kavin Palanisamy");

 //Singleton

 let web = new class {
    constructor(name){
        this.name = name;
    }
    load() {
        console.log(`loading the web named ${this.name}`);
    }
 }("CocoFarmer's");
web.load();

//Computated property

const nextName = 'fullName';
class Person4 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName =  lastName;
    }
    get [nextName]() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let nextPerson = new Person4("Kavin", "Kundadam");
//console.log(nextPerson.fullName()); 
/*Uncaught TypeError: nextPerson.fullName is not a "function"*/
