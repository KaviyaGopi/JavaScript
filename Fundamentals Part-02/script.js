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
*/

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
