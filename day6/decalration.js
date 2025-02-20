// Primary Data Types
var number = 10;           // Integer
let text = "abc";          // String
const isTrue = true;       // Boolean

console.log(number, text, isTrue);
console.log(typeof number, typeof text, typeof isTrue);

// Arrays
let myArray = [1, [6, 93.34], "str", true];
console.log(myArray[0], myArray[1], myArray[2], myArray[3]);
console.log(myArray);
console.log(typeof myArray);

// Objects
let user1 = {
    firstName: "Lankesh",
    lastName: "Meganathan",
    training: "MERN Stack",
    companyName: "RAMPeX"
};
console.log(user1);

let user2 = {};
user2.collegeName = "SJIT";
user2.age = 12;
user2.property = "Psycho";
user2.activity = "abnormal";
console.log(user2);

let user3 = new Object();
user3.college = "St Josephs Group";
user3.departments = ["CSE", "ADS", "ECE"];
console.log(typeof user3);

// Sets
let mySet = new Set();
mySet.add("h");
console.log(mySet);
console.log(typeof mySet);

// Array vs Set comparison
let charArray = ['h'];

console.log("\nArray:", charArray);
console.log("Set:", mySet);
console.log("Type of Array:", typeof charArray);
console.log("Type of Set:", typeof mySet);
console.log("Equality (==):", mySet == charArray);
console.log("Strict Equality (===):", mySet === charArray);
