/*
"use strict";

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D  ");

const interface = "Audio";
const private = 534;

function logger() {
  console.log("my name is Kavya");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

------------------------------------
Function Declaration vs Expressions
------------------------------------

// Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

----------------
Arrow Functions
----------------

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Function
const calcAge3 = (birthYear) => 2027 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1990, "bob"));

----------------------------------
Functions Calling other Functions
----------------------------------

function cutFruitPieces(fruit) {
  returnfruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

-------------------
Reviewing Function
-------------------

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = 2037 - calcAge(birthYear);
  const retirement = 65 - age;
  
  if (retirement > 0) {
    return retirement;
    console.log(`${firstName} retires in ${retirement} year`);
  } else {
    return -1;
    console.log(`{firstName} has already retired`);
  }
};

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1991, "Mike"));

-------------------
Coding Challenge #1
-------------------

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

  Your tasks:

  1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
  2. Use the function to calculate the average for both teams
  3. Create a function 'checkWinner' that takes the average score of each team
  as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
  to the console, together with the victory points, according to the rule above.
  Example: "Koalas win (30 vs. 13)"
  4. Use the 'checkWinner' function to determine the winner for both Data 1 and
  Data 2
  5. Ignore draws this time

  Test data:

Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:

§To calculate average of 3 values, add them all together and divide by 3
§To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉

GOOD LUCK 😀

--------
Solution
--------


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

-----------------------
Introduction to Arrays
-----------------------

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// friends = ['Bob' , 'Alice]

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1], calcAge(years[years.length - 1])),
];
console.log(age);

--------------------------------
Basic Array Operations (Methods)
--------------------------------

const friends = ["Michael", "Steven", "Peter"];

// Add element
const newlength = friends("Jay");
console.log(friends);
console.log(newlength);

frienf.unshift("John");
console.log(friends);

// Remove element
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven"));
{
  console.log("you have a friend called steven");
}

------------------------
Introduction to Objects 
------------------------

const jonasArray = [
  'Jonas',
  'Schmedtmann'
  2037 - 1991,
  'teacher',
  ['Kavy', 'Peter' , 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: [ 'Kavy' , 'Peter' , 'Steven']
};

-------------------------
Dot vs. Bracket Notation
-------------------------


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Kavy", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName); // Dot
console.log(jonas["lastName"]); // Bracket

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const intrestedIn = prompt(
  "What do you want to know about Jonas ? choose between firstName , lastName , age , job and friends"
  );
  
  if (jonas[intrestedIn]) {
    console.log(jonas[intrestedIn]);
  } else {
    console.log(
      'weong request choose between firstName , lastName , age , job and friends" '
      );
    }
    
    jonas.location = "Portugal";
    jonas["twitter"] = "@jonasschmedtman";
    console.log(jonas);
    
    // Challenge
    // "Jonas has 3 friends , and his bestfriend is called Kavy"
    
    console.log(
      `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
      );

--------------
Object Method
--------------
      
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Kavy", "Peter", "Steven"],
  hasDriversLicense: true,
  
  //   calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    //   },
    // };
    
    calcAge: function () {
      this.console.log(this);
      return 2037 - this.birthYear;
    },
  };
  
console.log(jonas.calcAge());
console.log(jonas.calcAge());
console.log(jonas.calcAge());

// console.log(jonas["calcAge"[1991]]);

------------------------
Iteration. The for loop 
------------------------

// console.log("Lifting weight repetition 1");
// console.log("Lifting weight repetition 2");
// console.log("Lifting weight repetition 3");
// console.log("Lifting weight repetition 4");
// console.log("Lifting weight repetition 5");
// console.log("Lifting weight repetition 6");
// console.log("Lifting weight repetition 7");
// console.log("Lifting weight repetition 8");
// console.log("Lifting weight repetition 9");
// console.log("Lifting weight repetition 10");

// for loop keeps running while condition is True
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

----------------------------------------
Looping Arrays, Breaking and Continuing
----------------------------------------
*/

const types = [];

const jonas = ["Jonas", "Schmedtman", "teacher", ["Kavy", "Peter", "Steven"]];

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1959, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and break

console.log("---ONLY STRING---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] != "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("---BREAK WITH NUMBERE---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] != "string");
  break;
  console.log(jonas[i], typeof jonas[i]);
}
